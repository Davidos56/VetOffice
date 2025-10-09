import { Component, OnInit } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps'
import { NavigationService } from '../../../services/navigation.service';
import { MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-success',
  imports: [GoogleMapsModule, MapMarker],
  templateUrl: './success.component.html',
  styleUrl: './success.component.css'
})
export class SuccessComponent implements OnInit {
  mapLeaded: boolean = false
  constructor(private navService: NavigationService) {}

   onOpenNavigate(): void{
    this.navService.openNavigation();
  }

  ngOnInit(): void {
    this.navService.load().then(()=>{
      this.mapLeaded = true;
       console.log('mapLoaded',this.mapLeaded);
    }).catch(err=> {
      console.error('Error loading Google Maps',err);
    });
  }

  zoom = 16;
  center: google.maps.LatLngLiteral = { lat: 53.427, lng: 14.4774952 };
  markerPosition: google.maps.LatLngLiteral = { lat: 53.42824, lng: 14.4774952};
}
