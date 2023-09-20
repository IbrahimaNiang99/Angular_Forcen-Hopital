import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Patientdto} from "../../dashboard/home/entities/patientdto";

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  baseUrl = "http://localhost:9990/api/hospitalisation/";
  constructor(private http:HttpClient) { }

  liste(){
    return this.http.get(this.baseUrl+"liste");
  }
}
