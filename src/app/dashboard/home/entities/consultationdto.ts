import {Medecindto} from "./medecindto";
import {TypeConsultationdto} from "./typeConsultationdto";
import {RendezVousdto} from "./rendezVousdto";
import {Prescriptiondto} from "./prescriptiondto";
import {Patientdto} from "./patientdto";
import {Provenancedto} from "./provenancedto";

export class Consultationdto {
    idConsultation:number;
    dateConsultation:Date;
    synthese:string;
    medecin: Medecindto = new Medecindto();
    typeConsultation:TypeConsultationdto = new TypeConsultationdto();
    rendezVouses: RendezVousdto = new RendezVousdto();
    prescription:Prescriptiondto = new Prescriptiondto();
    patient:Patientdto = new Patientdto();
}
