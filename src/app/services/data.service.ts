import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Admin} from '../interfaces/admin';
import {Chat} from "../portfolio/chat/chat.component";
import {Subject} from "rxjs";

const API_URL_ADMIN = environment.apiBaseLink + '/api/admin/';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public chats: Chat[] = [
    {
      message: 'Are you Available?',
      user: '61aa77d3e3a35a24e55f2be5'
    },
    {
      message: 'Yes. Please tell me',
      user: '61aa77d3e3a35a24e55f2be6'
    }
  ];

  private reloadChat = new Subject<void>();


  get reloadChat$() {
    return this.reloadChat;
  }
  needReloadChat$() {
    this.reloadChat.next();
  }

  constructor(
    private http: HttpClient
  ) {
  }

  /**
   * ADMINS
   */
  adminSignUp(data: Admin) {
    return this.http.post<{ message: string }>(API_URL_ADMIN + 'registration', data);
  }

  getAdminLists() {
    return this.http.get<{ data: Admin[], message: string }>(API_URL_ADMIN + 'get-all-admin-list');
  }

  getSingleAdminById(id: string) {
    return this.http.get<{ data: Admin, message?: string }>(API_URL_ADMIN + 'get-single-admin-by-id/' + id);
  }


  deleteAdminById(id: string) {
    return this.http.delete<{ message: string }>(API_URL_ADMIN + 'delete-admin-by-id/' + id);
  }

  editAdmin(data: Admin) {
    return this.http.post<{ message: string }>(API_URL_ADMIN + 'edit-admin-data', data);
  }

  updateAdminImageField(id: string, query: object) {
    return this.http.post<{ message: string }>(API_URL_ADMIN + 'update-admin-images', {id, query});
  }

  /**
   * CHAT
   */

  getChats() {
    return [...this.chats]
  }

  addChat(chat: Chat) {
    this.chats.push(chat);
    this.needReloadChat$();
  }


}
