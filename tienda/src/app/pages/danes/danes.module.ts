import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DanesPageRoutingModule } from './danes-routing.module';

import { DanesPage } from './danes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DanesPageRoutingModule
  ],
  declarations: [DanesPage]
})
export class DanesPageModule {}
