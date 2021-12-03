import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from '../interfaces/user';
import {Pagination} from '../interfaces/pagination';

const API_USER = environment.apiBaseLink + '/api/user/';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {


  constructor(
    private httpClient: HttpClient,
  ) {
  }

  /**
   * USER BASIC DATA
   */

  getLoggedInUserInfo(select?: string) {
    if (select) {
      let params = new HttpParams();
      params = params.append('select', select);
      return this.httpClient.get<{ data: User, message?: string }>(API_USER + 'logged-in-user-data', {params});
    } else {
      return this.httpClient.get<{ data: User, message?: string }>(API_USER + 'logged-in-user-data');
    }
  }

  getLoginUserPopulateData(select?: string) {
    let params = new HttpParams();
    if (select) {
      params = params.append('select', select);
    }
    return this.httpClient.get<{ data: User, message?: string }>(API_USER + 'logged-in-user-populate-data', {params});
  }


  editLoginUserInfo(data: any) {
    return this.httpClient.put<{ message?: string }>(API_USER + 'edit-logged-in-user-data', data);
  }


  // router.get('/edit-logged-in-user-data', checkAuth, controller.editLoginUserInfo);


  /**
   * ADMIN ACCESS
   * CUSTOMER
   */

  getCustomerLists(paginate?: Pagination, filter?: object, select?: string) {
    let params = new HttpParams();
    if (select) {
      params = params.append('select', select);
    }
    return this.httpClient.post<{ data: User[], count: number }>(API_USER + 'get-all-user-lists', {
      paginate,
      filter
    }, {params});
  }

  getUserByUserID(id: string) {
    return this.httpClient.get<{ data: User, message?: string }>(API_USER + 'get-user-by-user-id/' + id);
  }

  editUserAccess(userId: string, data: any) {
    return this.httpClient.put<{ message: string }>(API_USER + 'edit-user-data/' + userId, data);
  }

  /**
   * SEARCH USER
   */
  getSearchUsers(searchTerm: string, pagination?: Pagination, filter?: any) {
    const paginate = pagination;
    let params = new HttpParams();
    params = params.append('q', searchTerm);
    params = params.append('pageSize', pagination.pageSize);
    params = params.append('currentPage', pagination.currentPage);
    return this.httpClient.post<{ data: User[], count: number }>(API_USER + 'get-users-by-search', {filter}, {params});
  }


}
