import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {EducationType} from '../interfaces/education-type';
import {Pagination} from "../interfaces/pagination";

const API_EDUCATION_TYPE = environment.apiBaseLink + '/api/education-type/';


@Injectable({
  providedIn: 'root'
})
export class EducationTypeService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  /**
   * BRAND
   */
  addEducationType(data: EducationType) {
    return this.httpClient.post<{ message: string }>(API_EDUCATION_TYPE + 'add-education-type', data);
  }


  getAllEducationTypes(paginate: Pagination, sort: any, filter?: any, select?: string) {
    return this.httpClient.post<{ data: EducationType[], count: number }>(API_EDUCATION_TYPE + 'get-all-education-types', {
      paginate,
      sort,
      filter,
      select
    });
  }

  getEducationTypeByEducationTypeID(id: string) {
    return this.httpClient.get<{ data: EducationType, message?: string }>(API_EDUCATION_TYPE + 'get-education-type-by-education-type-id/' + id);
  }

  getSingleEducationTypeBySlug(slug: string) {
    return this.httpClient.get<{ data: EducationType, message: string }>(API_EDUCATION_TYPE + 'get-single-education-type-by-slug/' + slug);
  }

  editEducationTypeData(data: EducationType) {
    return this.httpClient.put<{ message?: string }>(API_EDUCATION_TYPE + 'edit-education-type-by-education-type', data);
  }

  editMultipleEducationTypeById(ids: string[], data: any) {
    return this.httpClient.put<{ message?: string }>(API_EDUCATION_TYPE + 'edit-multiple-education-type-by-id', {
      ids,
      data
    });
  }

  deleteEducationType(id: string) {
    return this.httpClient.delete<{ message?: string }>(API_EDUCATION_TYPE + 'delete-education-type-by-id/' + id);
  }

  deleteMultipleEducationTypeById(ids: string[]) {
    return this.httpClient.post<{ message: string }>(API_EDUCATION_TYPE + 'delete-multiple-education-types-by-id', {ids});
  }


  // router.put('/edit-multiple-education-type-by-id', checkUserAuth, controller.editMultipleEducationTypeById);


  getSearchProduct(searchTerm: string, pagination?: Pagination, filter?: any) {

    let params = new HttpParams();
    params = params.append('q', searchTerm);
    if (pagination) {
      params = params.append('pageSize', pagination.pageSize);
      params = params.append('currentPage', pagination.currentPage);
    }
    return this.httpClient.post<{ data: EducationType[], count: number }>(API_EDUCATION_TYPE + 'get-education-types-by-search', {filter}, {params});
  }

}
