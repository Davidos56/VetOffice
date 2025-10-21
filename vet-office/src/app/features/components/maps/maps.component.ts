import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps'
import { MapMarker } from '@angular/google-maps';
import { isPlatformBrowser } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { GoogleService } from '../../../services/google.service';

@Component({
  selector: 'app-maps',
  imports: [GoogleMapsModule, MapMarker, TranslatePipe],
  templateUrl: './maps.component.html',
  styleUrl: './maps.component.css'
})
export class MapsComponent implements OnInit {
  mapLeaded: boolean = false
  isBrowser: boolean = false;

  zoom = 16;
  center: google.maps.LatLngLiteral = { lat: 53.427, lng: 14.4774952 };
  markerPosition: google.maps.LatLngLiteral = { lat: 53.42824, lng: 14.4774952 };


  constructor(private googleService: GoogleService , @Inject(PLATFORM_ID) private platformId: Object) { }

  onOpenNavigate(): void {
    this.googleService.openNavigation();
  }

  ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if(this.isBrowser){
      this.loadMap();
    }
  }

  loadMap(): void {
    this.googleService.load().then(() => {
      this.mapLeaded = true;
    }).catch(err => {
      console.error('Error loading Google Maps', err);
    });
  }
}
