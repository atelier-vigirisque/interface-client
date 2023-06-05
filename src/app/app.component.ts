import {AfterViewInit, Component} from '@angular/core';
import {BackendService} from "./backend.service";
declare const L: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  private map: any;

  constructor(
    private backendservice: BackendService
  ) {
    this.loadStations();
  }

  async loadStations() {
    const {stations} = await this.backendservice.getStations();
    console.log('stations loaded from api', stations);
    stations.forEach(station => {
      L.marker([station.lng, station.lat]).addTo(this.map)
        .bindPopup(station.name);
    });
  }

  ngAfterViewInit(): void {
    this.map = L.map('map').setView([33.93045764, -6], 7);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);
  }

}
