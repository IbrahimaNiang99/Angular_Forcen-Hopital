import { Component, OnInit } from '@angular/core';
import {HospitalisationService} from "../../../../services/hospitalisation/hospitalisation.service";
import {of} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-listehospitalisation',
  templateUrl: './listehospitalisation.component.html',
  styleUrls: ['./listehospitalisation.component.css']
})
export class ListehospitalisationComponent implements OnInit {
  listeHospi:any;
  constructor(private hospiService:HospitalisationService, private router:Router) { }

  ngOnInit(): void {
    this.liste();
  }

  liste(){
    return this.hospiService.liste().subscribe(res=>{
      this.listeHospi = res
      console.log(this.listeHospi)
    })
  }
  details(id:number){
    return this.router.navigate(["/home/hospitalisation/details/",id]);
  }
}
