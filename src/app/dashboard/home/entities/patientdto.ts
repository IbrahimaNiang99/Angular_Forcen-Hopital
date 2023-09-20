import {Provenancedto} from "./provenancedto";
export class Patientdto {
    idPatient:number;
    prenom:string;
    nom:string;
    age:number;
    adresse:string;
    situationMatrimaniale:string;
    dateNaissance:Date;
    telephone:number;
    sexe:string;
    prenomPere:string;
    nomPere:string;
    prenomMere:string;
    nomMere:string;
    telPersonneAPrevenir:number;
    nomPersonneAPrevenir:string;
    provenance: Provenancedto;
}
