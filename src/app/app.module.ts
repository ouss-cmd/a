import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {environment  }from 'src/environments/environment';
import{FormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { AjouteComponent } from './ajoute/ajoute.component';
import { ListeDemandeComponent } from './liste-demande/liste-demande.component';
import { ResponsableComponent } from './responsable/responsable.component';
import { SimpleSalarieComponent } from './simple-salarie/simple-salarie.component';
import { CongeComponent } from './conge/conge.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    NavbarComponent,
    AjouteComponent,
    ListeDemandeComponent,
    ResponsableComponent,
    SimpleSalarieComponent,
    CongeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
