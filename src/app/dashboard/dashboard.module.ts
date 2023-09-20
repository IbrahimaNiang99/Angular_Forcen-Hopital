import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import {AccueilComponent} from "./home/accueil/accueil.component";
import {RouterModule, Routes} from "@angular/router";
import { HeadComponent } from './pages/head/head.component';
import { LinkComponent } from './pages/link/link.component';
import { MainComponent } from './pages/main/main.component';
import { FooterComponent } from './pages/footer/footer.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { AjoutmedecinComponent } from './home/medecin/ajoutmedecin/ajoutmedecin.component';
import { ListepatientComponent } from './home/patient/listepatient/listepatient.component';
import { AjoutpatientComponent } from './home/patient/ajoutpatient/ajoutpatient.component';
import { AjoutconsultationComponent } from './home/consultation/ajoutconsultation/ajoutconsultation.component';
import { ListeconsultationComponent } from './home/consultation/listeconsultation/listeconsultation.component';
import {ListemedecinComponent} from "./home/medecin/listemedecin/listemedecin.component";
import { ListehospitalisationComponent } from './home/hospitalisation/listehospitalisation/listehospitalisation.component';
import { ListerendezvousComponent } from './home/rendezvous/listerendezvous/listerendezvous.component';
import { DetailsconsultationComponent } from './home/consultation/detailsconsultation/detailsconsultation.component';
import { DetailshospitalisationComponent } from './home/hospitalisation/detailshospitalisation/detailshospitalisation.component';
import { DossierComponent } from './home/patient/dossier/dossier.component';

const routes: Routes = [
  { path: "home", component: HomeComponent,
    children: [
      {path: "", component: AccueilComponent},
      {path: "accueil", component: AccueilComponent},
      {path: "consultation/liste", component: ListeconsultationComponent},
      {path: "consultation/details/:id", component: DetailsconsultationComponent},
      {path: "hospitalisation/liste", component: ListehospitalisationComponent},
      {path: "hospitalisation/details/:id", component: DetailshospitalisationComponent},
      {path: "patient/dossier/:id", component: DossierComponent},
      {path: "medecin/liste", component: ListemedecinComponent},
      {path: "patient/liste", component: ListepatientComponent},
      {path: "rendezvous/liste", component: ListerendezvousComponent},
    ]
  }
];

@NgModule({
  declarations: [

    AccueilComponent,
    HomeComponent,
    HeadComponent,
    LinkComponent,
    MainComponent,
    FooterComponent,
    NavbarComponent,
    ListemedecinComponent,
    AjoutmedecinComponent,
    ListepatientComponent,
    AjoutpatientComponent,
    AjoutconsultationComponent,
    ListeconsultationComponent,
    ListehospitalisationComponent,
    ListerendezvousComponent,
    DetailsconsultationComponent,
    DetailshospitalisationComponent,
    DossierComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class DashboardModule { }
