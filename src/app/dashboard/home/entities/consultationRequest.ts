import {RendezVousdto} from "./rendezVousdto";
import {Prescriptiondto} from "./prescriptiondto";
import {Patientdto} from "./patientdto";

export class ConsultationRequest {
  idConsultation:number;
  dateConsultation:Date;
  synthese:string;
  medecinId: number;
  idTypeConsultation:number;
  rendezVouses: RendezVousdto = new RendezVousdto();
  prescription:Prescriptiondto = new Prescriptiondto();
  patient:Patientdto = new Patientdto();
}
