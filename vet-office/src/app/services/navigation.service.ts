import { Injectable } from "@angular/core";
import { AppConfig } from "../core/app-config";

@Injectable({ providedIn: 'root' })
export class NavigationService {

    apiKey='apikey'
    private loaded = false;

    openNavigation(): void {
        const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(AppConfig.adress)}`;
        window.open(mapsUrl, '_blank');
    }

    load(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.loaded) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${this.apiKey}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        this.loaded = true;
        resolve();
      };
      script.onerror = (err) => reject(err);
      document.body.appendChild(script);
    });
  }
}
