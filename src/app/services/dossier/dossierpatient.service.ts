import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Dossier} from "../../dashboard/home/entities/dossier";

@Injectable({
  providedIn: 'root'
})
export class DossierpatientService {
  baseUrl = "http://localhost:9990/api/dossier/";
  constructor(private http:HttpClient) { }

  getDossierPatientById(id:number):Observable<Dossier>{
    return this.http.get<Dossier>(this.baseUrl+"getById/"+id);
  }
}
