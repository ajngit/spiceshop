import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Users } from '../Models/users';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http :HttpClient) { }

  getData(): Observable<Users[]> {
    return this.http.get<Users[]>('http://localhost:3001/user').pipe(
      catchError((error) => {
        console.error('An error occurred:', error); // Log the error to the console
        return []; // Re-throw the error to propagate it to the subscriber
      })
    );
  }
}
