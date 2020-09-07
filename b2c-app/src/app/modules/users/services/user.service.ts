import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG } from '../../../services/app-config/app-config.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

  listUsers(limit: number, offset: number)
  {
    return this.http.get(APP_CONFIG.baseUrl + `/api/v1/users?limit=${limit}&offset=${offset}`);
  }

  insertUser(body: any)
  {
    return this.http.post(APP_CONFIG.baseUrl + "/api/v1/users", body);
  }
}
