import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import {Blog} from '../interfaces/blog';
import {Pagination} from "../interfaces/pagination";

const API_BLOG = environment.apiBaseLink + '/api/blog/';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(
    private httpClient: HttpClient,
    private router: Router,
  ) {
  }

  /**
   * BRAND
   */
  addBlog(data: Blog) {
    return this.httpClient.post<{ message: string }>(API_BLOG + 'add-blog', data);
  }


  getAllBlogs(paginate: Pagination, sort: any, filter?: any, select?: string) {
    return this.httpClient.post<{ data: Blog[],count: number}>(API_BLOG + 'get-all-blogs', {paginate, sort, filter, select});
  }

  getBlogByBlogID(id: string) {
    return this.httpClient.get<{ data: Blog, message?: string }>(API_BLOG + 'get-blog-by-blog-id/' + id);
  }

  getSingleBlogBySlug(slug: string) {
    return this.httpClient.get<{ data: Blog, message: string }>(API_BLOG + 'get-single-blog-by-slug/' + slug);
  }

  editBlogData(data: Blog) {
    return this.httpClient.put<{ message?: string }>(API_BLOG + 'edit-blog-by-blog', data);
  }

  editMultipleBlogById(ids: string[], data: any) {
    return this.httpClient.put<{ message?: string }>(API_BLOG + 'edit-multiple-blog-by-id', {ids, data});
  }

  deleteBlog(id: string) {
    return this.httpClient.delete<{ message?: string }>(API_BLOG + 'delete-blog-by-id/' + id);
  }

  deleteMultipleBlogById(ids: string[]) {
    return this.httpClient.post<{ message: string }>(API_BLOG + 'delete-multiple-blogs-by-id', {ids});
  }


  // router.put('/edit-multiple-blog-by-id', checkUserAuth, controller.editMultipleBlogById);


  getSearchProduct(searchTerm: string, pagination?: Pagination, filter?: any) {

    let params = new HttpParams();
    params = params.append('q', searchTerm);
    if (pagination) {
      params = params.append('pageSize', pagination.pageSize);
      params = params.append('currentPage', pagination.currentPage);
    }
    return this.httpClient.post<{ data: Blog[], count: number }>(API_BLOG + 'get-blogs-by-search', {filter}, {params});
  }

}
