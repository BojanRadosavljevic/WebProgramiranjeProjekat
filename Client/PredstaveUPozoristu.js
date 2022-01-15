import { Api } from "./Api.js";


export class PredstaveUPozoristu{
    constructor(id,imePozorista,kapacitet,imePredstave,trajanje){
        this.id=id;
        this.imePozorista=imePozorista;
        this.kapacitet=kapacitet;
        this.imePredstave=imePredstave;
        this.trajanje=trajanje;
        this.kont=null;
    }
}