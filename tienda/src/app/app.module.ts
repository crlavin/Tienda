import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

@NgModule({
  declarations: [AppComponent,],
  imports: [BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
     IonicModule.forRoot(), 
     AppRoutingModule, 
     ReactiveFormsModule,
     AngularFireAuthModule,
     AngularFireStorageModule,
     AngularFireDatabaseModule,
     AngularFirestoreModule],
     
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
     
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  
}

