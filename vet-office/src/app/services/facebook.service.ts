import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FacebookPost } from '../core/facebookpost.model';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { AppConfig } from '../core/app-config';

@Injectable({
  providedIn: 'root'
})
export class FacebookService {

   private cache: FacebookPost[] | null = null;
  
  constructor(private http: HttpClient) { }

  getPosts(): Observable<FacebookPost[]> {
        return this.http.get<any>(AppConfig.defaulAPIEndpoint + AppConfig.defaultApiEndpointConfig.facebookPostsEndpoint).pipe(
            map(res => {
                // Dostosuj do struktury swojego API WordPressa
                const reviews = Array.isArray(res) ? res : res.data || [];
                return reviews.map((r: any) => ({
                    message: r.message,
                    created_time: r.created_time,
                    full_picture: r.full_picture,
                }));
            }),
            tap(reviews => (this.cache = reviews)), // cache w pamięci
            catchError(this.handleError)
        );
    }

    private handleError(error: HttpErrorResponse) {
        console.error('❌ Błąd pobierania opinii:', error);
        return throwError(() => new Error('Nie udało się pobrać opinii.'));
    }
}
