import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRecord } from '../IRecord.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  API_URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getRecords(): Observable<[IRecord]> {
    return this.http.get<[IRecord]>(`${this.API_URL}/records`);
  }
}
