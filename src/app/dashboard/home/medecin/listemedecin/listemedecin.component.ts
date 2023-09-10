import { Component, OnInit } from '@angular/core';
import {MedecinService} from "../../../../services/medecin/medecin.service";

@Component({
  selector: 'app-listemedecin',
  templateUrl: './listemedecin.component.html',
  styleUrls: ['./listemedecin.component.css']
})
export class ListemedecinComponent implements OnInit {
  listeMedecin:any;
  constructor(private medecinService:MedecinService) { }

  ngOnInit(): void {
    this.liste();
  }

  liste(){
    return this.medecinService.liste().subscribe(res=>{
      this.listeMedecin = res
    } )
  }

}
