import {  Api} from "./Api.js"

export class pozoriste{
    constructor(id,ime,kapacitet)
    {
        this.id=id;
        this.ime=ime;
        this.kapacitet=kapacitet;
    }
    async dodajPozoristeKl(host)
    {
        this.kont=document.createElement("div");
        this.kont.className=("divZaKontejnerPozorista");
        let dodajPozoristeKlDiv=document.createElement("div");
        dodajPozoristeKlDiv.innerHTML="Dodavanje novog pozorista";
        dodajPozoristeKlDiv.className="dodajPozoristeKlDiv";
        host.appendChild(dodajPozoristeKlDiv);

        let divZaImePozorista=document.createElement("div");
        divZaImePozorista.className="divZaImePozorista";
        let labelaZaUnosImenaPozorista = document.createElement("label");
        labelaZaUnosImenaPozorista.innerHTML = "Ime:";
        let textareaZaUnosImenaPozorista=document.createElement("input");
        textareaZaUnosImenaPozorista.className="textareaZaUnosImenaPozorista";
        divZaImePozorista.appendChild(labelaZaUnosImenaPozorista);
        divZaImePozorista.appendChild(textareaZaUnosImenaPozorista);
        host.appendChild(divZaImePozorista);

        let divZaKapacitetPozorista=document.createElement("div");
        divZaKapacitetPozorista.className="divZaKapacitetPozorista";
        let labelaZaUnosKapacitetaPozorista = document.createElement("label");
        labelaZaUnosKapacitetaPozorista.innerHTML = "Kapacitet:";
        let textareaZaUnosKapacitetaPozorista=document.createElement("input");
        textareaZaUnosKapacitetaPozorista.type="number";
        textareaZaUnosKapacitetaPozorista.className="textareaZaUnosKapacitetaPozorista";
        divZaKapacitetPozorista.appendChild(labelaZaUnosKapacitetaPozorista);
        divZaKapacitetPozorista.appendChild(textareaZaUnosKapacitetaPozorista);
        host.appendChild(divZaKapacitetPozorista);

        let divZaButtonZaIzvrsavanje=document.createElement("div");
        divZaButtonZaIzvrsavanje.className="divZaButtonZaIzvrsavanje";
        let buttonZaButtonZaIzvrsavanjePozorista=document.createElement("button");
        buttonZaButtonZaIzvrsavanjePozorista.innerHTML="Izvrši";
        divZaButtonZaIzvrsavanje.appendChild(buttonZaButtonZaIzvrsavanjePozorista);
        host.appendChild(divZaButtonZaIzvrsavanje);
        buttonZaButtonZaIzvrsavanjePozorista.onclick=(async(ev)=>
        {
            this.ime=host.querySelector(".textareaZaUnosImenaPozorista").value;
            this.kapacitet=host.querySelector(".textareaZaUnosKapacitetaPozorista").value;
            if(this.ime===null||this.ime===undefined||this.ime==="")
            alert(`lose uneseni podaci za ime`);
            else if(this.kapacitet===null||this.kapacitet===undefined||this.kapacitet===""||this.kapacitet>100)
            alert(`lose uneseni podaci za kapacitet`);
            else{ var api=new Api();
            await api.dodajPozoriste(this);}
        }) 
    }
    
}