import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouteComponent } from './ajoute/ajoute.component';
import { ListeDemandeComponent } from './liste-demande/liste-demande.component';
import { ResponsableComponent } from './responsable/responsable.component';
import { SimpleSalarieComponent } from './simple-salarie/simple-salarie.component';
import{ConnexionComponent} from'./connexion/connexion.component';
import { CongeComponent } from './conge/conge.component';

const routes: Routes = [

{path:'ajoute',component:AjouteComponent},
{path:'liste-demande',component:ListeDemandeComponent},
{path:'responsable',component:ResponsableComponent},
{path:'simple-salarie',component:SimpleSalarieComponent},
{path : 'conge',component:CongeComponent},
{path :'connexion',component:ConnexionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
