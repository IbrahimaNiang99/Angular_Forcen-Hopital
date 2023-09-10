import { Component, OnInit } from '@angular/core';
import {ConsultationService} from "../../../../services/consultation/consultation.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-listeconsultation',
  templateUrl: './listeconsultation.component.html',
  styleUrls: ['./listeconsultation.component.css']
})
export class ListeconsultationComponent implements OnInit {
  listeConsultation: any;
  constructor(private consService:ConsultationService, private router:Router) { }

  ngOnInit(): void {
    this.liste();

  }

  liste(){
    return this.consService.listeConsultation()
                .subscribe(res =>{ this.listeConsultation = res
                console.log(res)})
  }

  details(id: number){
    return this.router.navigate(["/home/consultation/details/",id]);
  }

}
