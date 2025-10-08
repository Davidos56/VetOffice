import { Injectable } from "@angular/core";
import { AppConfig } from "../core/app-config";
import { ReviewItem } from "../core/reviewitem.model";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, map, Observable, tap, throwError } from "rxjs";

@Injectable({ providedIn: 'root' })
export class ReviewService {

    private cache: ReviewItem[] | null = null;

    constructor(private http: HttpClient) { }

    getReviews(): Observable<ReviewItem[]> {
        return this.http.get<any>(AppConfig.defaultGoogleAPI).pipe(
            map(response => {
                // Dostosuj do struktury swojego API WordPressa
                const reviews = response?.result?.reviews || response || [];
                return reviews.map((r: any) => ({
                    author_name: r.author_name,
                    profile_photo_url: r.profile_photo_url,
                    rating: r.rating,
                    text: r.text,
                    relative_time_description: r.relative_time_description
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