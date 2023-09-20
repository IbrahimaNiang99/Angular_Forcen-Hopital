import {Medecindto} from "./medecindto";
import {TypeConsultationdto} from "./typeConsultationdto";
import {RendezVousdto} from "./rendezVousdto";
import {Prescriptiondto} from "./prescriptiondto";
import {Patientdto} from "./patientdto";

export class Consultationdto {
    idConsultation:number;
    dateConsultation:Date;
    synthese:string;
    medecin: Medecindto;
    typeConsultation:TypeConsultationdto;
    rendezVouses: RendezVousdto;
    prescription:Prescriptiondto;
    patient:Patientdto;
}
