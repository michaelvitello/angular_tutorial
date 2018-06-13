import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Security } from './security';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  private securitiesURL = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol={{ .. }}&interval={{ .. }}&apikey=UWHM1X2V3VXVFWR9';  // URL to Alphavantage API
  // Define items to get from API:
  // &symbol=[MSFT] &interval=[1min] [5min]

  constructor(
    private http: HttpClient) { }


                    /** GET securities from the API */
                    getSecurities(): Observable<Security[]> {
                      return this.http.get<Security[]>(this.securitiesUrl)
                        .pipe(
                          tap(securities => this.log(`fetched securities`)),
                          catchError(this.handleError('getSecurities', []))
                        );
                    }
                  }


/**
 * Handle Http operation that failed.
 * Let the app continue.
 * param operation - name of the operation that failed
 * param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

