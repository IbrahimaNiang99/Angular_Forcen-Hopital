import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ConsultationService} from "../../../../services/consultation/consultation.service";
import {Consultationdto} from "../../entities/consultationdto";

@Component({
  selector: 'app-detailsconsultation',
  templateUrl: './detailsconsultation.component.html',
  styleUrls: ['./detailsconsultation.component.css']
})
export class DetailsconsultationComponent implements OnInit {
  id: any;
  consultation:Consultationdto

  constructor(private route:ActivatedRoute, private consService:ConsultationService) { }

  ngOnInit(): void {
    this.getConsultationById();
  }
  getConsultationById(){
        this.consultation = new Consultationdto();
        this.id = this.route.snapshot.paramMap.get('id');
        return this.consService.getById(this.id).subscribe(res=>{
            this.consultation = res
            console.log(res)
        })
    }


}
