import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmDialogComponent} from '../../../../shared/components/ui/confirm-dialog/confirm-dialog.component';
import {UiService} from '../../../../services/ui.service';
import {ReloadService} from '../../../../services/reload.service';
import {EMPTY, Subscription} from 'rxjs';
import {NgxSpinnerService} from 'ngx-spinner';
import {UtilsService} from '../../../../services/utils.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Pagination} from '../../../../interfaces/pagination';
import {NgForm} from '@angular/forms';
import {debounceTime, distinctUntilChanged, pluck, switchMap} from 'rxjs/operators';
import {MatCheckbox, MatCheckboxChange} from "@angular/material/checkbox";
import {ProductSubCategory} from "../../../../interfaces/product-sub-category";
import {SubCategoryService} from "../../../../services/sub-category.service";

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.scss']
})
export class SubCategoriesComponent implements OnInit, AfterViewInit, OnDestroy {
  // DOWNLOADABLE
  dataTypeFormat = 'json';
  subCategories: ProductSubCategory[] = [];
  holdPrevData: ProductSubCategory[] = [];
  // Pagination
  currentPage = 1;
  totalProducts = 0;
  productsPerPage = 10;
  totalProductsStore = 0;
  // SEARCH AREA
  searchProducts: ProductSubCategory[] = [];
  searchQuery = null;
  @ViewChild('searchForm') searchForm: NgForm;
  @ViewChild('searchInput') searchInput: ElementRef;
  // Selected Data
  selectedIds: string[] = [];
  @ViewChild('matCheckbox') matCheckbox: MatCheckbox;

  // Sort
  sortQuery = {createdAt: -1};
  activeSort: number = null;
  // Filter
  filter: any[] = [];

// Subscriptions
  private subAcRoute: Subscription;
  private subForm: Subscription;
  private subDataOne: Subscription;
  private refreshData: Subscription;

  constructor(
    private dialog: MatDialog,
    private subCategoryService: SubCategoryService,
    private uiService: UiService,
    private reloadService: ReloadService,
    private spinner: NgxSpinnerService,
    private utilsService: UtilsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {

    this.refreshData = this.reloadService.refreshData$
      .subscribe(() => {
        this.getAllSubCategories();
      });

    // GET PAGE FROM QUERY PARAM
    this.subAcRoute = this.activatedRoute.queryParams.subscribe(qParam => {
      if (qParam && qParam.page) {
        this.currentPage = qParam.page;
      } else {
        this.currentPage = 1;
      }
      if (!this.searchProducts.length) {
        this.getAllSubCategories();
      }
    });
  }

  ngAfterViewInit(): void {
    const formValue = this.searchForm.valueChanges;

    this.subForm = formValue.pipe(
      // map(t => t.searchTerm)
      // filter(() => this.searchForm.valid),
      pluck('searchTerm'),
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(data => {
        this.searchQuery = data;
        if (this.searchQuery === '' || this.searchQuery === null) {
          this.searchProducts = [];
          this.subCategories = this.holdPrevData;
          this.totalProducts = this.totalProductsStore;
          this.searchProducts = [];
          this.searchQuery = null;
          return EMPTY;
        }
        const pagination: Pagination = {
          pageSize: this.productsPerPage.toString(),
          currentPage: this.currentPage.toString()
        };
        // const filter = {marketer: {$in: [null]}};
        return this.subCategoryService.getSearchProduct(data, pagination, null);
      })
    )
      .subscribe(res => {
        this.searchProducts = res.data;
        this.subCategories = this.searchProducts;
        this.totalProducts = res.count;
        this.currentPage = 1;
        this.router.navigate([], {queryParams: {page: this.currentPage}});
      }, error => {
        console.log(error)
      });
  }


  /**
   * COMPONENT DIALOG VIEW
   */
  public openConfirmDialog(type: string, data?: any) {
    if (type === 'delete') {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        maxWidth: '400px',
        data: {
          title: 'Confirm Delete',
          message: 'Are you sure you want delete this data?'
        }
      });
      dialogRef.afterClosed().subscribe(dialogResult => {
        if (dialogResult) {
          this.deleteMultipleSubCategoryById();
        }
      });
    } else if (type === 'edit') {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        maxWidth: '400px',
        data: {
          title: 'Confirm Edit',
          message: 'Are you sure you want edit this data?'
        }
      });
      dialogRef.afterClosed().subscribe(dialogResult => {
        if (dialogResult) {
          this.editMultipleSubCategoryById(data);
        }
      });

    }

  }

  /**
   * ON Select Check
   */

  onCheckChange(event: any, index: number, id: string) {
    if (event) {
      this.selectedIds.push(id);
    } else {
      const i = this.selectedIds.findIndex(f => f === id);
      this.selectedIds.splice(i, 1);
    }
  }

  onAllSelectChange(event: MatCheckboxChange) {
    const currentPageIds = this.subCategories.map(m => m._id);
    if (event.checked) {
      this.selectedIds = this.utilsService.mergeArrayString(this.selectedIds, currentPageIds)
      this.subCategories.forEach(m => {
        m.select = true;
      })
    } else {
      currentPageIds.forEach(m => {
        this.subCategories.find(f => f._id === m).select = false;
        const i = this.selectedIds.findIndex(f => f === m);
        this.selectedIds.splice(i, 1);
      })
    }
  }

  /**
   * PAGINATION CHANGE
   */
  public onPageChanged(event: any) {
    this.router.navigate([], {queryParams: {page: event}});
  }


  /**
   * SORTING
   */
  sortData(query: any, type: number) {
    this.sortQuery = query;
    this.activeSort = type;
    this.getAllSubCategories();
  }

  /**
   * ON REMOVE ALL QUERY
   */

  onRemoveAllQuery() {
    this.activeSort = null;
    this.sortQuery = {createdAt: -1};
    this.filter = [];
    this.router.navigate([], {queryParams: {page: 1}});
  }

  /**
   * ON DESTROY
   */

  ngOnDestroy() {
    if (this.subAcRoute) {
      this.subAcRoute.unsubscribe();
    }

    if (this.subDataOne) {
      this.subDataOne.unsubscribe();
    }

    if (this.subForm) {
      this.subForm.unsubscribe();
    }
    if (this.refreshData) {
      this.refreshData.unsubscribe();
    }
  }

  /**
   * HTTP REQ HANDLE
   */

  private getAllSubCategories() {
    this.spinner.show();
    const pagination: Pagination = {
      pageSize: this.productsPerPage.toString(),
      currentPage: this.currentPage.toString()
    };

    // Filter
    const mQuery = this.filter.length > 0 ? {$and: this.filter} : null

    this.subDataOne = this.subCategoryService.getAllSubCategories(pagination, this.sortQuery, mQuery, null)
      .subscribe(res => {
        this.spinner.hide();
        this.subCategories = res.data;
        if (this.subCategories && this.subCategories.length) {
          this.subCategories.forEach((m, i) => {
            const index = this.selectedIds.findIndex(f => f === m._id);
            this.subCategories[i].select = index !== -1;
          });
          this.holdPrevData = res.data;
          this.totalProducts = res.count;
          this.totalProductsStore = res.count;
          this.checkSelectionData();
        }
      }, error => {
        this.spinner.hide();
        console.log(error);
      });
  }

  /**
   * DELETE METHOD HERE
   */
  private deleteSubCategory(id: string) {
    this.subCategoryService.deleteSubCategory(id)
      .subscribe(res => {
        this.uiService.success(res.message);
        this.reloadService.needRefreshBlog$();
      }, error => {
        console.log(error);
      });
  }

  private deleteMultipleSubCategoryById() {
    this.spinner.show();
    this.subCategoryService.deleteMultipleSubCategoryById(this.selectedIds)
      .subscribe(res => {
        this.spinner.hide();
        this.selectedIds = [];
        this.uiService.success(res.message);

        // Reload Data Logic
        if (Number(this.currentPage) === 1) {
          this.reloadService.needRefreshData$();
        } else {
          this.currentPage = 1;
          this.router.navigate([], {queryParams: {page: null}, queryParamsHandling: 'merge'});
        }
      }, error => {
        this.spinner.hide()
        console.log(error);
      });
  }

  private editMultipleSubCategoryById(data: any) {
    this.spinner.show();
    this.subCategoryService.editMultipleSubCategoryById(this.selectedIds, data)
      .subscribe(res => {
        this.spinner.hide();
        this.selectedIds = [];
        this.uiService.success(res.message);
        this.reloadService.needRefreshBlog$();
      }, error => {
        this.spinner.hide()
        console.log(error);
      });
  }

  private checkSelectionData() {
    let isAllSelect = true;
    this.subCategories.forEach(m => {
      if (!m.select) {
        isAllSelect = false;
      }
    });

    this.matCheckbox.checked = isAllSelect;
  }

}
