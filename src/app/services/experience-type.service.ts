import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ExperienceType} from '../interfaces/experience-type';
import {Pagination} from "../interfaces/pagination";

const API_EXPERIENCE_TYPE = environment.apiBaseLink + '/api/experience-type/';


@Injectable({
  providedIn: 'root'
})
export class ExperienceTypeService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  /**
   * BRAND
   */
  addExperienceType(data: ExperienceType) {
    return this.httpClient.post<{ message: string }>(API_EXPERIENCE_TYPE + 'add-experience-type', data);
  }


  getAllExperienceTypes(paginate: Pagination, sort: any, filter?: any, select?: string) {
    return this.httpClient.post<{ data: ExperienceType[], count: number }>(API_EXPERIENCE_TYPE + 'get-all-experience-types', {
      paginate,
      sort,
      filter,
      select
    });
  }

  getExperienceTypeByExperienceTypeID(id: string) {
    return this.httpClient.get<{ data: ExperienceType, message?: string }>(API_EXPERIENCE_TYPE + 'get-experience-type-by-experience-type-id/' + id);
  }

  getSingleExperienceTypeBySlug(slug: string) {
    return this.httpClient.get<{ data: ExperienceType, message: string }>(API_EXPERIENCE_TYPE + 'get-single-experience-type-by-slug/' + slug);
  }

  editExperienceTypeData(data: ExperienceType) {
    return this.httpClient.put<{ message?: string }>(API_EXPERIENCE_TYPE + 'edit-experience-type-by-experience-type', data);
  }

  editMultipleExperienceTypeById(ids: string[], data: any) {
    return this.httpClient.put<{ message?: string }>(API_EXPERIENCE_TYPE + 'edit-multiple-experience-type-by-id', {
      ids,
      data
    });
  }

  deleteExperienceType(id: string) {
    return this.httpClient.delete<{ message?: string }>(API_EXPERIENCE_TYPE + 'delete-experience-type-by-id/' + id);
  }

  deleteMultipleExperienceTypeById(ids: string[]) {
    return this.httpClient.post<{ message: string }>(API_EXPERIENCE_TYPE + 'delete-multiple-experience-types-by-id', {ids});
  }


  // router.put('/edit-multiple-experience-type-by-id', checkUserAuth, controller.editMultipleExperienceTypeById);


  getSearchProduct(searchTerm: string, pagination?: Pagination, filter?: any) {

    let params = new HttpParams();
    params = params.append('q', searchTerm);
    if (pagination) {
      params = params.append('pageSize', pagination.pageSize);
      params = params.append('currentPage', pagination.currentPage);
    }
    return this.httpClient.post<{ data: ExperienceType[], count: number }>(API_EXPERIENCE_TYPE + 'get-experience-types-by-search', {filter}, {params});
  }

}
