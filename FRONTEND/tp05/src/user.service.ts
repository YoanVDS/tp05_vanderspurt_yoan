import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  public postUser(login: String, password: String){
    return this.httpClient.post<String>(environment.apiUrl+"/user",{
      login: login,
      password: password      
    });
  }
}
