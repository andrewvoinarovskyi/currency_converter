import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CurrencyApiService {
  private apiUrl = '/p24api/pubinfo?exchange&coursid=5';

  constructor(private http: HttpClient) { }

  getCurrencyData(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error fetching JSON data:', error);
        return throwError(()=> new Error('Something went wrong; please try again later.'));
      })
    );
  }
}