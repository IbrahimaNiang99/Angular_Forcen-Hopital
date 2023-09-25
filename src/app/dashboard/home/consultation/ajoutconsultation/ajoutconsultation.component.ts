import { Component, OnInit } from '@angular/core';
import {DatePipe} from "@angular/common";
import {Consultationdto} from "../../entities/consultationdto";
import {MedecinService} from "../../../../services/medecin/medecin.service";
import {ConsultationService} from "../../../../services/consultation/consultation.service";
import {ProvenanceService} from "../../../../services/provenance/provenance.service";
import {TypeconsultationService} from "../../../../services/typeconsultation/typeconsultation.service";
import {ServicehospiService} from "../../../../services/parametre/servicehospi.service";
import {ConsultationRequest} from "../../entities/consultationRequest";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ajoutconsultation',
  templateUrl: './ajoutconsultation.component.html',
  styleUrls: ['./ajoutconsultation.component.css']
})
export class AjoutconsultationComponent implements OnInit {
  medecins:any;
  services:any;
  provenances:any;
  typeConsultations:any;
  newConsultation = new ConsultationRequest();
  constructor(private datePipe: DatePipe,
              private medecinService:MedecinService,
              private consultationService:ConsultationService,
              private provenanceService:ProvenanceService,
              private typeConsService:TypeconsultationService,
              private servicehospi: ServicehospiService,
              private route:Router
  ) {}

  ngOnInit(): void {
    this.listeMedecins();
    this.listeProvenance();
    this.listeTypeConsultation();
    this.listeServices();
  }

  listeMedecins(){
    return this.medecinService.liste().subscribe(res=>{
      this.medecins = res
    })
  }

  listeServices(){
    return this.servicehospi.liste().subscribe(res=>{
      this.services = res
    })
  }

  listeProvenance(){
    return this.provenanceService.liste().subscribe(res=>{
      this.provenances = res;
    })
  }

  listeTypeConsultation(){
    return this.typeConsService.liste().subscribe(res=>{
      this.typeConsultations = res;
    })
  }

  // fonction pour calculer directement l'age du patient
  calculerAge(): number {
    const aujourdHui = new Date();
    const dateNaissance= new Date(this.newConsultation.patient.dateNaissance);

    // Soustraire la date de naissance de la date actuelle
    const differenceEnMilliseconds = aujourdHui.getTime() - dateNaissance.getTime();
    const differenceEnAnnees = differenceEnMilliseconds / (1000 * 3600 * 24 * 365.25);

    // Utiliser Math.floor pour obtenir l'âge en entier
    return Math.floor(differenceEnAnnees);
  }


  ajoutConsultation(){
    this.newConsultation.patient.age = this.calculerAge();

    let medecinId = parseInt(String(this.newConsultation.medecinId));
    this.newConsultation.medecinId = medecinId;
    this.newConsultation.rendezVouses.patient = this.newConsultation.patient;
    this.newConsultation.prescription.datePrescription = this.newConsultation.dateConsultation;
    this.newConsultation.prescription.prenomPatient = this.newConsultation.patient.prenom;
    this.newConsultation.prescription.nomPatient = this.newConsultation.patient.nom;
    //this.newConsultation.rendezVouses.patient.idPatient = this.newConsultation.patient.idPatient;
    console.log(this.newConsultation);
    console.log(typeof this.newConsultation.medecinId);
    this.consultationService.ajoutConsultation(this.newConsultation, this.newConsultation.idTypeConsultation, this.newConsultation.medecinId);
    return this.route.navigate(['/home/consultation/liste']);
  }

}

