import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { Clipboard } from '@capacitor/clipboard'; 

@Component({
  selector: 'app-geolocalizacion',
  templateUrl: './geolocalizacion.page.html',
  styleUrls: ['./geolocalizacion.page.scss'],
})
export class GeolocalizacionPage implements OnInit {
  latitude: number | undefined;
  longitude: number | undefined;

  constructor() {}

  ngOnInit() {}

  async getCurrentPosition() {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      this.latitude = coordinates.coords.latitude;
      this.longitude = coordinates.coords.longitude;
      console.log('Posición actual:', coordinates);
    } catch (error) {
      console.error('Error al obtener la ubicación:', error);
    }
  }

  // Método para copiar las coordenadas al portapapeles
  async copyToClipboard() {
    const coordinatesText = `Latitud: ${this.latitude}, Longitud: ${this.longitude}`;
    await Clipboard.write({
      string: coordinatesText,
    });
    console.log('Coordenadas copiadas al portapapeles:', coordinatesText);
  }
}
