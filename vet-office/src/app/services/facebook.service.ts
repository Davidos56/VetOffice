import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FacebookPost } from '../core/facebookpost.model';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';
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
                const reviews = Array.isArray(res) ? res : res.data || [];
                return reviews.map((r: any) => ({
                    id:r.id,
                    message: r.message,
                    created_time: r.created_time,
                    full_picture: r.full_picture,
                }));
            }),
            catchError(this.handleError)
        );
    }

    private handleError(error: HttpErrorResponse) {
        console.error('❌ Błąd pobierania postów:', error);
        return throwError(() => new Error('Nie udało się pobrać opinii.'));
    }
}
