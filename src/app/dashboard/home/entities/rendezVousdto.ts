import {Medecindto} from "./medecindto";
import {Servicedto} from "./servicedto";
import {Patientdto} from "./patientdto";

export class RendezVousdto {
    codeRDV:number;
    dateRDV:Date;
    service:string;
    medecin:string;
    patient:Patientdto = new Patientdto();
}

