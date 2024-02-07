import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginInformation } from './login-information';

@Injectable({
  providedIn: 'any'
  // providedIn: 'root'
})

export class LoginService {

  private baseURL = "http://localhost:8081/api/v1/loginInformation";
  private custId = "custId";

  constructor(private httpClient: HttpClient) { }

  getLoginInformationList(): Observable<LoginInformation[]>{
    return this.httpClient.get<LoginInformation[]>(`${this.baseURL}`);
  }

  createLoginInformation(logininfo: LoginInformation): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, logininfo);
  }

  getLoginInformationByCustId(cust_id: number): Observable<LoginInformation>{
    console.log(cust_id);
    return this.httpClient.get<LoginInformation>(`${this.baseURL}/${cust_id}`);
  }

  updateLoginInformationByCustId(cust_id: number, logininfo: LoginInformation): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${cust_id}`, logininfo);
  }

  deleteLoginInformationByCustId(cust_id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${cust_id}`);
  }
  

}
