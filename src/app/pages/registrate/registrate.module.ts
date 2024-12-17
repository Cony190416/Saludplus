import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegistratePageRoutingModule } from './registrate-routing.module'; // Importa el archivo de rutas de la página
import { RegistratePage } from './registrate.page'; // Asegúrate de que el componente esté correctamente importado

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistratePageRoutingModule // Asegúrate de que este módulo de rutas esté bien configurado
  ],
  declarations: [RegistratePage] // Declara el componente RegistratePage
})
export class RegistratePageModule {}
