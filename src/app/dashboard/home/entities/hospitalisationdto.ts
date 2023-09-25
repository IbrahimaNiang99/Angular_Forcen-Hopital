import {Chambredto} from "./chambredto";
import {Facturedto} from "./facturedto";
import {Patientdto} from "./patientdto";
import {Traitementdto} from "./traitementdto";

export class Hospitalisationdto {
    idAdmission:number;
    dateAdmission: Date;
    typeAdmission: string;
    motifAdmission : string;
    medecinTraitant:string;
    accompagnant:string;
    lienParental:string;
    dateEntree:Date;
    dateSortie:Date;
    motifSortie:string;
    resultatSortie:string;
    dateDeces:Date;
    motifDeces: string;
    patient: Patientdto;
    facture: Facturedto;
    chambre: Chambredto;
    traitements: Traitementdto[];

}
