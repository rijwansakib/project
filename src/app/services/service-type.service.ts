import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ServiceType} from '../interfaces/service-type';
import {Pagination} from "../interfaces/pagination";

const API_SERVICE_TYPE = environment.apiBaseLink + '/api/service-type/';


@Injectable({
  providedIn: 'root'
})
export class ServiceTypeService {

  constructor(
    private httpClient: HttpClient
  ) {
  }


  addServiceType(data: ServiceType) {
    return this.httpClient.post<{ message: string }>(API_SERVICE_TYPE + 'add-service-type', data);
  }


  getAllServiceTypes(paginate: Pagination, sort: any, filter?: any, select?: string) {
    return this.httpClient.post<{ data: ServiceType[], count: number }>(API_SERVICE_TYPE + 'get-all-service-types', {
      paginate,
      sort,
      filter,
      select
    });
  }

  getServiceTypeByServiceTypeID(id: string) {
    return this.httpClient.get<{ data: ServiceType, message?: string }>(API_SERVICE_TYPE + 'get-service-type-by-service-type-id/' + id);
  }

  getSingleServiceTypeBySlug(slug: string) {
    return this.httpClient.get<{ data: ServiceType, message: string }>(API_SERVICE_TYPE + 'get-single-service-type-by-slug/' + slug);
  }

  editServiceTypeData(data: ServiceType) {
    return this.httpClient.put<{ message?: string }>(API_SERVICE_TYPE + 'edit-service-type-by-service-type', data);
  }

  editMultipleServiceTypeById(ids: string[], data: any) {
    return this.httpClient.put<{ message?: string }>(API_SERVICE_TYPE + 'edit-multiple-service-type-by-id', {
      ids,
      data
    });
  }

  deleteServiceType(id: string) {
    return this.httpClient.delete<{ message?: string }>(API_SERVICE_TYPE + 'delete-service-type-by-id/' + id);
  }

  deleteMultipleServiceTypeById(ids: string[]) {
    return this.httpClient.post<{ message: string }>(API_SERVICE_TYPE + 'delete-multiple-service-types-by-id', {ids});
  }


  // router.put('/edit-multiple-service-type-by-id', checkUserAuth, controller.editMultipleServiceTypeById);


  getSearchProduct(searchTerm: string, pagination?: Pagination, filter?: any) {

    let params = new HttpParams();
    params = params.append('q', searchTerm);
    if (pagination) {
      params = params.append('pageSize', pagination.pageSize);
      params = params.append('currentPage', pagination.currentPage);
    }
    return this.httpClient.post<{ data: ServiceType[], count: number }>(API_SERVICE_TYPE + 'get-service-types-by-search', {filter}, {params});
  }

}
