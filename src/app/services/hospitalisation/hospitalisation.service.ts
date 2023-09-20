import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Hospitalisationdto} from "../../dashboard/home/entities/hospitalisationdto";

@Injectable({
  providedIn: 'root'
})
export class HospitalisationService {
  baseUrl = "http://localhost:9990/api/hospitalisation/";
  constructor(private http:HttpClient) { }

  liste(){
    return this.http.get(this.baseUrl+"liste");
  }

  getById(id:number):Observable<Hospitalisationdto>{
    return this.http.get<Hospitalisationdto>(this.baseUrl+"getById/"+id);
  }
}
