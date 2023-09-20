import { Component, OnInit } from '@angular/core';
import {DossierpatientService} from "../../../../services/dossier/dossierpatient.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Dossier} from "../../entities/dossier";

@Component({
  selector: 'app-dossier',
  templateUrl: './dossier.component.html',
  styleUrls: ['./dossier.component.css']
})
export class DossierComponent implements OnInit {
  id: any;
  dossierpatient:Dossier;
  constructor(private dossierPatientService:DossierpatientService,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getDossierPatient();
  }

getDossierPatient(){
    this.dossierpatient = new Dossier();
    this.id = this.route.snapshot.paramMap.get('id');
    return this.dossierPatientService.getDossierPatientById(this.id).subscribe( res=>{
      this.dossierpatient = res
      console.log(res)
    })
  }

}
