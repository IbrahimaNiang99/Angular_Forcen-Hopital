import { Component, OnInit } from '@angular/core';
import {PatientService} from "../../../../services/patient/patient.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-listepatient',
  templateUrl: './listepatient.component.html',
  styleUrls: ['./listepatient.component.css']
})
export class ListepatientComponent implements OnInit {
  listePatient:any;
  constructor(private patientService:PatientService, private router:Router) { }
  ngOnInit(): void {
    this.liste();
  }
  liste(){
    return this.patientService.liste().subscribe(res=>{
      this.listePatient = res
      console.log(this.listePatient)
    })
  }

  details(id:number){
    return this.router.navigate(["/home/patient/dossier/",id]);
  }

}
