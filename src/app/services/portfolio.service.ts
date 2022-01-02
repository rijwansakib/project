import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Portfolio} from '../interfaces/portfolio';
import {Pagination} from "../interfaces/pagination";

const API_PORTFOLIO = environment.apiBaseLink + '/api/portfolio/';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  /**
   * BRAND
   */
  addPortfolioBasic(data: Portfolio) {
    return this.httpClient.post<{ message: string }>(API_PORTFOLIO + 'add-portfolio-basic-data', data);
  }

  addPortfolioArray(data: Portfolio) {
    return this.httpClient.post<{ message: string, success: boolean }>(API_PORTFOLIO + 'add-portfolio-array-data', data);
  }


  getAllPortfolios(paginate: Pagination, sort: any, filter?: any, select?: string) {
    return this.httpClient.post<{ data: Portfolio[], count: number }>(API_PORTFOLIO + 'get-all-portfolios', {
      paginate,
      sort,
      filter,
      select
    });
  }

  getPortfolioByPortfolioID(id: string) {
    return this.httpClient.get<{ data: Portfolio, message?: string }>(API_PORTFOLIO + 'get-portfolio-by-portfolio-id/' + id);
  }

  getPortfolioByUser(select?: string) {
    let params = new HttpParams();
    if (select) {
      params = params.append('select', select);
    }
    return this.httpClient.get<{ data: Portfolio, success: boolean }>(API_PORTFOLIO + 'get-portfolio-by-user',{params});
  }

  getPortfolioByUserId(userId: string, select?: string) {
    let params = new HttpParams();
    if (select) {
      params = params.append('select', select);
    }
    return this.httpClient.get<{ data: Portfolio, success: boolean }>(API_PORTFOLIO + 'get-portfolio-by-user-id/' + userId,{params});
  }

  // router.get('/get-portfolio-by-user-id/:userId', checkUserAuth, controller.getPortfolioByUserId);

  getSinglePortfolioBySlug(slug: string) {
    return this.httpClient.get<{ data: Portfolio, message: string }>(API_PORTFOLIO + 'get-single-portfolio-by-slug/' + slug);
  }

  editPortfolioData(data: Portfolio) {
    return this.httpClient.put<{ message?: string }>(API_PORTFOLIO + 'edit-portfolio-by-portfolio', data);
  }

  editMultiplePortfolioById(ids: string[], data: any) {
    return this.httpClient.put<{ message?: string }>(API_PORTFOLIO + 'edit-multiple-portfolio-by-id', {ids, data});
  }

  deletePortfolio(id: string) {
    return this.httpClient.delete<{ message?: string }>(API_PORTFOLIO + 'delete-portfolio-by-id/' + id);
  }

  deleteMultiplePortfolioById(ids: string[]) {
    return this.httpClient.post<{ message: string }>(API_PORTFOLIO + 'delete-multiple-portfolios-by-id', {ids});
  }


  getSearchProduct(searchTerm: string, pagination?: Pagination, filter?: any) {

    let params = new HttpParams();
    params = params.append('q', searchTerm);
    if (pagination) {
      params = params.append('pageSize', pagination.pageSize);
      params = params.append('currentPage', pagination.currentPage);
    }
    return this.httpClient.post<{ data: Portfolio[], count: number }>(API_PORTFOLIO + 'get-portfolios-by-search', {filter}, {params});
  }

}
