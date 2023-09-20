import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HospitalisationService} from "../../../../services/hospitalisation/hospitalisation.service";
import {Hospitalisationdto} from "../../entities/hospitalisationdto";

@Component({
  selector: 'app-detailshospitalisation',
  templateUrl: './detailshospitalisation.component.html',
  styleUrls: ['./detailshospitalisation.component.css']
})
export class DetailshospitalisationComponent implements OnInit {
  id:any;
  hospitalisation:Hospitalisationdto;
  constructor(private route:ActivatedRoute, private hospiService:HospitalisationService) { }
  ngOnInit(): void {
    this.getHospitalisationById()
  }

  getHospitalisationById(){
    this.hospitalisation = new Hospitalisationdto();
    this.id = this.route.snapshot.paramMap.get('id');
    return this.hospiService.getById(this.id).subscribe( res=>{
      this.hospitalisation = res
      console.log(res)
    })
  }
}
