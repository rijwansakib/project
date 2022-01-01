import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Pagination} from '../interfaces/pagination';
import {Tag} from "../interfaces/tag";


const API_TAG = environment.apiBaseLink + '/api/tag/';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(
    private httpClient: HttpClient
  ) {
  }


  addTag(data: Tag) {
    return this.httpClient.post<{ message: string }>(API_TAG + 'add-tag', data);
  }


  getAllTags(paginate: Pagination, sort: any, filter?: any, select?: string) {
    return this.httpClient.post<{ data: Tag[], count: number }>(API_TAG + 'get-all-tags', {
      paginate,
      sort,
      filter,
      select
    });
  }

  getTagByTagID(id: string) {
    return this.httpClient.get<{ data: Tag, message?: string }>(API_TAG + 'get-tag-by-tag-id/' + id);
  }

  getSingleTagBySlug(slug: string) {
    return this.httpClient.get<{ data: Tag, message: string }>(API_TAG + 'get-single-tag-by-slug/' + slug);
  }

  editTagData(data: Tag) {
    return this.httpClient.put<{ message?: string }>(API_TAG + 'edit-tag-by-tag', data);
  }

  editMultipleTagById(ids: string[], data: any) {
    return this.httpClient.put<{ message?: string }>(API_TAG + 'edit-multiple-tag-by-id', {
      ids,
      data
    });
  }

  deleteTag(id: string) {
    return this.httpClient.delete<{ message?: string }>(API_TAG + 'delete-tag-by-id/' + id);
  }

  deleteMultipleTagById(ids: string[]) {
    return this.httpClient.post<{ message: string }>(API_TAG + 'delete-multiple-tags-by-id', {ids});
  }


  // router.put('/edit-multiple-tag-by-id', checkUserAuth, controller.editMultipleTagById);


  getSearchProduct(searchTerm: string, pagination?: Pagination, filter?: any) {

    let params = new HttpParams();
    params = params.append('q', searchTerm);
    if (pagination) {
      params = params.append('pageSize', pagination.pageSize);
      params = params.append('currentPage', pagination.currentPage);
    }
    return this.httpClient.post<{ data: Tag[], count: number }>(API_TAG + 'get-tags-by-search', {filter}, {params});
  }


}
