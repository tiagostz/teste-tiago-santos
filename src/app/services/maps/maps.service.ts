import { Injectable } from '@angular/core';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  private map!: L.Map;

  initializeMap(mapContainerId: string) {
    this.map = L.map(mapContainerId).setView([-19.126536, -45.947756], 5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(this.map);
  }

  addEquipmentMarker(lat: number, lon: number, name: string, color: string) {
    L.circleMarker([lat, lon], {
      color,
      radius: 10,
      fillOpacity: 0.8,
    })
      .bindPopup(`<b>${name}</b>`)
      .addTo(this.map);
  }
}
