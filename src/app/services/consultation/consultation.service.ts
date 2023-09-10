import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {
  baseUrl = "http://localhost:9990/api/consultation/";
  constructor(private http:HttpClient) { }

  listeConsultation(){
    return this.http.get(this.baseUrl+"liste");
  }

  getById(id:number){
    return this.http.get(this.baseUrl+"getById/"+id);
  }
}
