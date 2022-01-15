import {    Api } from "./Api.js";

export class predstava{
    
    constructor(id,ime,trajanje)
    {
        this.id=id;
        this.ime=ime;
        this.trajanje=trajanje;
        
    }

    async dodajPredstavuKl(host)
    {
        this.kont=document.createElement("div");
        this.kont.className=("divZaKontejnerPredstava");
        let dodajPredstavuKlDiv=document.createElement("div");
        dodajPredstavuKlDiv.innerHTML="Dodavanje nove predstave";
        dodajPredstavuKlDiv.className="dodajPredstavuKlDiv";
        host.appendChild(dodajPredstavuKlDiv);

        let divZaImePredstave=document.createElement("div");
        divZaImePredstave.className="divZaImePredstave";
        let labelaZaUnosImenaPredstave = document.createElement("label");
        labelaZaUnosImenaPredstave.innerHTML = "Ime:";
        let textareaZaUnosImenaPredstave=document.createElement("input");
        textareaZaUnosImenaPredstave.className="textareaZaUnosImenaPredstave";
        divZaImePredstave.appendChild(labelaZaUnosImenaPredstave);
        divZaImePredstave.appendChild(textareaZaUnosImenaPredstave);
        host.appendChild(divZaImePredstave);

        let divZaTrajanjePredstave=document.createElement("div");
        divZaTrajanjePredstave.className="divZaTrajanjePredstave";
        let labelaZaUnosTrajanjaPredstave = document.createElement("label");
        labelaZaUnosTrajanjaPredstave.innerHTML = "Trajanje:";
        let textareaZaUnosTrajanjePredstave=document.createElement("input");
        textareaZaUnosTrajanjePredstave.type="number";
        textareaZaUnosTrajanjePredstave.className="textareaZaUnosTrajanjePredstave";
        divZaTrajanjePredstave.appendChild(labelaZaUnosTrajanjaPredstave);
        divZaTrajanjePredstave.appendChild(textareaZaUnosTrajanjePredstave);
        host.appendChild(divZaTrajanjePredstave);

        let divZaButtonZaIzvrsavanje=document.createElement("div");
        divZaButtonZaIzvrsavanje.className="divZaButtonZaIzvrsavanje";
        let buttonZaButtonZaIzvrsavanjePredstave=document.createElement("button");
        buttonZaButtonZaIzvrsavanjePredstave.innerHTML="Izvrši";
        divZaButtonZaIzvrsavanje.appendChild(buttonZaButtonZaIzvrsavanjePredstave);
        host.appendChild(divZaButtonZaIzvrsavanje);
        buttonZaButtonZaIzvrsavanjePredstave.onclick=(async(ev)=>
        {
            this.ime=host.querySelector(".textareaZaUnosImenaPredstave").value;
            this.trajanje=host.querySelector(".textareaZaUnosTrajanjePredstave").value;    
            if(this.ime===null||this.ime===undefined||this.ime==="")
            alert(`lose uneseni podaci za ime`);
            else if(this.trajanje===null||this.trajanje===undefined||this.trajanje===""||this.trajanje>500||this.trajanje<5)
            alert(`lose uneseni podaci trajanje`);
           else{ 
                var api=new Api();
                await api.dodajPredstavu(this);
           }
        }) 
    }
}