import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProvenanceService {
  baseUrl = "http://localhost:9990/api/provenance/";
  constructor(private http:HttpClient) { }

  liste(){
    return this.http.get(this.baseUrl+"liste");
  }
}
