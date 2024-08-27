import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SaveResponse } from '../../Shared/SaveResponse';
import { Registration } from '../Models/Registration';

@Injectable({
  providedIn: 'root'
})
export class ProductRegistrationService {
  private apiUrl = 'http://localhost:3001';
  
  constructor(private http :HttpClient) { }

  
  // Method to post data to the API
  SaveRegistration( data: Registration): Observable<SaveResponse> {
    const url = `${this.apiUrl}/saveRegistration`;
    return this.http.post<SaveResponse>(url, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }) 
    });
  }
}
