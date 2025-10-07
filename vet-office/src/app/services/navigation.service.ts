import { Injectable } from "@angular/core";
import { AppConfig } from "../core/app-config";

@Injectable({ providedIn: 'root' })
export class NavigationService {

    openNavigation(): void {
        const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(AppConfig.adress)}`;
        window.open(mapsUrl, '_blank');
    }
}