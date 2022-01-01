import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Pagination} from '../interfaces/pagination';
import {ProductSubCategory} from "../interfaces/product-sub-category";

const API_SUB_CATEGORY = environment.apiBaseLink + '/api/product-sub-category/';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  addSubCategory(data: ProductSubCategory) {
    return this.httpClient.post<{ message: string }>(API_SUB_CATEGORY + 'add-sub-category', data);
  }


  getAllSubCategories(paginate: Pagination, sort: any, filter?: any, select?: string) {
    return this.httpClient.post<{ data: ProductSubCategory[], count: number }>(API_SUB_CATEGORY + 'get-all-sub-categories', {
      paginate,
      sort,
      filter,
      select
    });
  }

  getSubCategoryBySubCategoryID(id: string) {
    return this.httpClient.get<{ data: ProductSubCategory, message?: string }>(API_SUB_CATEGORY + 'get-sub-category-by-sub-category-id/' + id);
  }

  getSingleSubCategoryBySlug(slug: string) {
    return this.httpClient.get<{ data: ProductSubCategory, message: string }>(API_SUB_CATEGORY + 'get-single-sub-category-by-slug/' + slug);
  }

  editSubCategoryData(data: ProductSubCategory) {
    return this.httpClient.put<{ message?: string }>(API_SUB_CATEGORY + 'edit-sub-category-by-sub-category', data);
  }

  editMultipleSubCategoryById(ids: string[], data: any) {
    return this.httpClient.put<{ message?: string }>(API_SUB_CATEGORY + 'edit-multiple-sub-category-by-id', {
      ids,
      data
    });
  }

  deleteSubCategory(id: string) {
    return this.httpClient.delete<{ message?: string }>(API_SUB_CATEGORY + 'delete-sub-category-by-id/' + id);
  }

  deleteMultipleSubCategoryById(ids: string[]) {
    return this.httpClient.post<{ message: string }>(API_SUB_CATEGORY + 'delete-multiple-sub-categories-by-id', {ids});
  }

  getSubCategoryByCategoryId(id: string) {
    return this.httpClient.get<{ data: ProductSubCategory[], message?: string }>(API_SUB_CATEGORY + 'get-sub-category-by-category-id/' + id);
  }


  // router.put('/edit-multiple-sub-category-by-id', checkUserAuth, controller.editMultipleSubCategoryById);


  getSearchProduct(searchTerm: string, pagination?: Pagination, filter?: any) {

    let params = new HttpParams();
    params = params.append('q', searchTerm);
    if (pagination) {
      params = params.append('pageSize', pagination.pageSize);
      params = params.append('currentPage', pagination.currentPage);
    }
    return this.httpClient.post<{ data: ProductSubCategory[], count: number }>(API_SUB_CATEGORY + 'get-sub-categories-by-search', {filter}, {params});
  }



}
