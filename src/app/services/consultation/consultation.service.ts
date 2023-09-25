import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Consultationdto} from "../../dashboard/home/entities/consultationdto";
import {ConsultationRequest} from "../../dashboard/home/entities/consultationRequest";

@Injectable({
  providedIn: 'root'
})

export class ConsultationService {

  baseUrl = "http://localhost:9990/api/consultation/";
  constructor(private http:HttpClient) { }

  listeConsultation(){
    return this.http.get(this.baseUrl+"liste");
  }
  getById(id: number):Observable<Consultationdto>{
    return this.http.get<Consultationdto>(this.baseUrl+"getById/"+id);
  }
  ajoutConsultation(consultationRequest:ConsultationRequest, idTypeCons:number ,idMedecin:number){
    const url = `${this.baseUrl}ajout/typeCons/${idTypeCons}/medecin/${idMedecin}`;
    return this.http.post(url, consultationRequest).subscribe(res=>{});
  }
}
