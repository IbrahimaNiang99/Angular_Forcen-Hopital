import {Hospitalisationdto} from "./hospitalisationdto";
import {Consultationdto} from "./consultationdto";

export class Dossier {
  listCons:Consultationdto[];
  listHospi:Hospitalisationdto[];


  constructor() {
    this.listCons = [];
    this.listHospi = [];
  }
}
