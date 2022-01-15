import {Api} from "./Api.js" ;
export class glumac{
    constructor(id,ime,prezime,godine)
    {
        this.id=id;
        this.ime=ime;
        this.prezime=prezime;
        this.godine=godine;

    }
    async dodajGlumcaKl(host)
    {
        let dodajGlumcaKlDiv=document.createElement("div");
        dodajGlumcaKlDiv.innerHTML="Dodavanje novog glumca";
        dodajGlumcaKlDiv.className="dodajGlumcaKlDiv";
        host.appendChild(dodajGlumcaKlDiv);

        let divZaImeGlumca=document.createElement("div");
        divZaImeGlumca.className="divZaImeGlumca";
        let labelaZaUnosImenaGlumca = document.createElement("label");
        labelaZaUnosImenaGlumca.innerHTML = "Ime:";
        let textareaZaUnosImenaGlumca=document.createElement("input");
        textareaZaUnosImenaGlumca.className="textareaZaUnosImenaGlumca";
        divZaImeGlumca.appendChild(labelaZaUnosImenaGlumca);
        divZaImeGlumca.appendChild(textareaZaUnosImenaGlumca);
        host.appendChild(divZaImeGlumca);

        let divZaPrezimeGlumca=document.createElement("div");
        divZaPrezimeGlumca.className="divZaImeGlumca";
        let labelaZaUnosPrezimenaGlumca = document.createElement("label");
        labelaZaUnosPrezimenaGlumca.innerHTML = "Prezime:";
        let textareaZaUnosPrezimenaGlumca=document.createElement("input");
        textareaZaUnosPrezimenaGlumca.className="textareaZaUnosPrezimenaGlumca";
        divZaPrezimeGlumca.appendChild(labelaZaUnosPrezimenaGlumca);
        divZaPrezimeGlumca.appendChild(textareaZaUnosPrezimenaGlumca);
        host.appendChild(divZaPrezimeGlumca);

        let divZaGodineGlumca=document.createElement("div");
        divZaGodineGlumca.className="divZaGodineGlumca";
        let labelaZaUnosGodinaGlumca = document.createElement("label");
        labelaZaUnosGodinaGlumca.innerHTML = "Godine:";
        let textareaZaUnosGodinaGlumca=document.createElement("input");
        textareaZaUnosGodinaGlumca.type="number";
        textareaZaUnosGodinaGlumca.className="textareaZaUnosGodinaGlumca";
        divZaGodineGlumca.appendChild(labelaZaUnosGodinaGlumca);
        divZaGodineGlumca.appendChild(textareaZaUnosGodinaGlumca);
        host.appendChild(divZaGodineGlumca);

        let divZaButtonZaIzvrsavanje=document.createElement("div");
        divZaButtonZaIzvrsavanje.className="divZaButtonZaIzvrsavanje";
        let buttonZaButtonZaIzvrsavanjeGlumca=document.createElement("button");
        buttonZaButtonZaIzvrsavanjeGlumca.innerHTML="Izvrši";
        divZaButtonZaIzvrsavanje.appendChild(buttonZaButtonZaIzvrsavanjeGlumca);
        host.appendChild(divZaButtonZaIzvrsavanje);
        buttonZaButtonZaIzvrsavanjeGlumca.onclick=(async(ev)=>
        {
            this.ime=host.querySelector(".textareaZaUnosImenaGlumca").value;
            this.prezime=host.querySelector(".textareaZaUnosPrezimenaGlumca").value;
            this.godine=host.querySelector(".textareaZaUnosGodinaGlumca").value;
            if(this.ime===null||this.ime===undefined||this.ime==="")
            alert(`lose uneseni podaci za ime`);
            else if(this.godine===null||this.godine===undefined||this.godine===""||this.godine>100)
            alert(`lose uneseni podaci godine`);
            else if(this.prezime===null||this.prezime===undefined||this.prezime==="")
            alert(`lose uneseni podaci za prezime`);
            else{var api=new Api();
            await api.dodajGlumca(this);}
        })  
    }
}