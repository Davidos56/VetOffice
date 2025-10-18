import { Injectable } from "@angular/core";
import { AppConfig } from "../core/app-config";
import { GoogleInfo, WeekDay } from "../core/googleinfo.model";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, map, Observable, of, tap, throwError } from "rxjs";
import { TranslateService } from '@ngx-translate/core';


@Injectable({ providedIn: 'root' })
export class GoogleService {

    private cache: GoogleInfo | null = null;

    constructor(private http: HttpClient, private translate: TranslateService) { }

    getBasicInfo(): Observable<GoogleInfo> {
        if (this.cache) {
            return of(this.cache);
        }
        return this.http.get<any>(AppConfig.defaulAPIEndpoint + AppConfig.defaultApiEndpointConfig.googleReviewEndpoint).pipe(
            map(response => {
                // Dostosuj do struktury swojego API WordPressa
                const info = response?.result || response || {};
                return {
                    name: info.name,
                    formatted_address: info.formatted_address,
                    weekday_text: this.groupOpeningHours(info.opening_hours.weekday_text),
                    formatted_phone_number: info.formatted_phone_number
                } as GoogleInfo
            }),
            tap(info => (this.cache = info)), // cache w pamięci
            catchError(this.handleError)
        );
    }

    getPhoneNumber(): Observable<string> {
        if (this.cache?.formatted_phone_number) {
            return of(this.cache.formatted_phone_number);
        } else {
            return this.getBasicInfo().pipe(
                tap(x => this.cache = x), // zapis do cache
                map(x => x.formatted_phone_number) // zwracamy tylko numer telefonu
            );
        }
    }

    private handleError(error: HttpErrorResponse) {
        console.error('❌ Błąd pobierania opinii:', error);
        return throwError(() => new Error('Nie udało się pobrać opinii.'));
    }

    groupOpeningHours(data: string[]): WeekDay[] {
        const parsed = data.map(item => {
            const [day, hours] = item.split(": ");
            return { day, hours };
        });
        const groups: { startDay: string; endDay: string; hours: string }[] = [];
        let current = { startDay: parsed[0].day, endDay: parsed[0].day, hours: parsed[0].hours };

        for (let i = 1; i < parsed.length; i++) {
            const { day, hours } = parsed[i];
            if (hours === current.hours) {
                current.endDay = day;
            } else {
                groups.push({ ...current });
                current = { startDay: day, endDay: day, hours };
            }
        }
        groups.push(current);

        const short = (d: string) => {
            const dayKey = d.toUpperCase();
            const translated = this.getTranslationKey(d);
            console.log(`DAYS.SHORT.${translated}`);
            return this.translate.instant(`DAYS.SHORT.${translated}`) || d;
        };

        return groups.map(g => ({
            day: g.startDay === g.endDay ? short(g.startDay) : `${short(g.startDay)}–${short(g.endDay)}`,
            hours: g.hours
        }));
    }

    getTranslationKey(value: string): string | undefined {
        const translations = this.translate.instant('DAYS.LONG');
        const key = Object.keys(translations).find(
            k => translations[k].toLowerCase() === value.toLowerCase()
        );
        return key;
    }
}