import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Pagination} from '../interfaces/pagination';
import {ProductCategory} from "../interfaces/product-category";


const API_CATEGORY = environment.apiBaseLink + '/api/product-category/';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  category: ProductCategory[] = [];

  constructor(
    private httpClient: HttpClient
  ) {
  }

  addProductCategory(data: ProductCategory) {
    return this.httpClient.post<{ message: string }>(API_CATEGORY + 'add-category', data);
  }


  getAllCategories(paginate?: Pagination, sort?: any, filter?: any, select?: string) {
    return this.httpClient.post<{ data: ProductCategory[], count: number }>(API_CATEGORY + 'get-all-categories', {
      paginate,
      sort,
      filter,
      select
    });
  }

  getProductCategoryByProductCategoryID(id: string) {
    return this.httpClient.get<{ data: ProductCategory, message?: string }>(API_CATEGORY + 'get-category-by-category-id/' + id);
  }

  getSingleProductCategoryBySlug(slug: string) {
    return this.httpClient.get<{ data: ProductCategory, message: string }>(API_CATEGORY + 'get-single-category-by-slug/' + slug);
  }

  editProductCategoryData(data: ProductCategory) {
    return this.httpClient.put<{ message?: string }>(API_CATEGORY + 'edit-category-by-category', data);
  }

  editMultipleProductCategoryById(ids: string[], data: any) {
    return this.httpClient.put<{ message?: string }>(API_CATEGORY + 'edit-multiple-category-by-id', {
      ids,
      data
    });
  }

  deleteProductCategory(id: string) {
    return this.httpClient.delete<{ message?: string }>(API_CATEGORY + 'delete-category-by-id/' + id);
  }

  deleteMultipleProductCategoryById(ids: string[]) {
    return this.httpClient.post<{ message: string }>(API_CATEGORY + 'delete-multiple-categories-by-id', {ids});
  }


  // router.put('/edit-multiple-category-by-id', checkUserAuth, controller.editMultipleProductCategoryById);


  getSearchProduct(searchTerm: string, pagination?: Pagination, filter?: any) {

    let params = new HttpParams();
    params = params.append('q', searchTerm);
    if (pagination) {
      params = params.append('pageSize', pagination.pageSize);
      params = params.append('currentPage', pagination.currentPage);
    }
    return this.httpClient.post<{ data: ProductCategory[], count: number }>(API_CATEGORY + 'get-categories-by-search', {filter}, {params});
  }



}
