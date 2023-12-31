import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { ClimaHoraWidgetComponent } from '../clima-hora-widget/clima-hora-widget.component'; // Importa el componente
import { HomePageRoutingModule } from './home-routing.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MatButtonModule
    
  ],
  declarations: [HomePage,ClimaHoraWidgetComponent,],
})
export class HomePageModule {}
