import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Comment} from '../interfaces/comment';
import {Pagination} from '../interfaces/pagination';

const API_COMMENT = environment.apiBaseLink + '/api/comment/';


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  /**
   * comment
   */

  addComment(data: Comment) {
    return this.httpClient.post<{ message: string }>(API_COMMENT + 'add-comment', data);
  }


  getAllComments() {
    return this.httpClient.get<{data: Comment[], message?: string}>(API_COMMENT + 'get-all-comment');
  }

  getCommentByCommentId(id: string) {
    return this.httpClient.get<{data: Comment, message?: string}>(API_COMMENT + 'get-comment-by-comment-id/' + id);
  }

  editComment(data: Comment) {
    return this.httpClient.put<{ message: string }>(API_COMMENT + 'edit-comment', data);
  }

  deleteCommentByCommentId(id: string) {
    return this.httpClient.delete<{message?: string}>(API_COMMENT + 'delete-comment-by-id/' + id);
  }

  getAllCommentsByQuery(pagination?: Pagination, select?: string, query?: any) {
    let params = new HttpParams();

    if (pagination) {
      params = params.append('pageSize', pagination.pageSize);
      params = params.append('page', pagination.currentPage);
      if (select) {
        params = params.append('select', select);
      }
      return this.httpClient.post<{ data: Comment[], count: number, message?: string }>
      (API_COMMENT + 'get-all-comment-by-query', {query}, {params});
    } else {
      if (select) {
        params = params.append('select', select);
      }
      return this.httpClient.post<{ data: Comment[], count: number, message?: string }>
      (API_COMMENT + 'get-all-comment-by-query', {query}, {params});
    }
  }

}
