import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  post(url:string)
  {
    return this.http.post<any>(`http://localhost:4800/check${url}`,{})
  }
}
