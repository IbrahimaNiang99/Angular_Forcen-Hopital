import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ConsultationService} from "../../../../services/consultation/consultation.service";

@Component({
  selector: 'app-detailsconsultation',
  templateUrl: './detailsconsultation.component.html',
  styleUrls: ['./detailsconsultation.component.css']
})
export class DetailsconsultationComponent implements OnInit {
  id:any;
  consultation:any;
  constructor(private route:ActivatedRoute, private consService:ConsultationService) { }

  ngOnInit(): void {
    this.getConsultationById();
  }

  getConsultationById(){
    this.id = this.route.snapshot.paramMap.get('id');
    return this.consService.getById(this.id).subscribe(res=>{
      this.consultation = res
      console.log(res)
    })
  }
}
