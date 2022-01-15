import {    Api } from "./Api.js";

export class Uloge{
    constructor(imeGlumca,PrezimeGlumca,GodineGlumca,ImePredstave,ImeUloge)
    {
        this.imeGlumca=imeGlumca;
        this.PrezimeGlumca=PrezimeGlumca;
        this.GodineGlumca=GodineGlumca;
        this.ImePredstave=ImePredstave;
        this.ImeUloge=ImeUloge;     
    }
    async dodajUloguKl(host)
    {
        var api=new Api();
        this.kont=document.createElement("div");
        this.kont.className=("divZaKontejnerUloge");
        let dodajUloguKlDiv=document.createElement("div");
        dodajUloguKlDiv.innerHTML="Dodavanje nove uloge glumcu";
        dodajUloguKlDiv.className="dodajUloguKlDiv";
        host.appendChild(dodajUloguKlDiv);

        let divZaImeGlumca=document.createElement("div");
        divZaImeGlumca.className="divZaImeGlumca";
        let labelaZaUnosImenaGlumca = document.createElement("label");
        labelaZaUnosImenaGlumca.innerHTML = "Ime glumca:";

        var lista=[];
        lista=await api.vratiSveGlumce();
        let selectImenaGlumacaZaDodavanjeUloge=document.createElement("select");
        let op;
        lista.forEach(p=>
            {
                op=document.createElement("option");
                op.innerHTML=p.ime+" "+p.prezime;
                op.value=p.id;
                selectImenaGlumacaZaDodavanjeUloge.appendChild(op);
            })
            divZaImeGlumca.appendChild(labelaZaUnosImenaGlumca);
            divZaImeGlumca.appendChild(selectImenaGlumacaZaDodavanjeUloge);
            host.appendChild(divZaImeGlumca);

            let divZaImePredstaveZaUloge=document.createElement("div");
            divZaImePredstaveZaUloge.className="divZaImePredstaveZaUloge";
            let labelaZaUnosImenaPredstave = document.createElement("label");
            labelaZaUnosImenaPredstave.innerHTML = "Ime predstave:";
            var lista=[];
            lista=await api.vratiSvePredstave();
            let selectImenaPredstavaZaUloge=document.createElement("select");
            let op1;
            lista.forEach(p=>
                {
                    op1=document.createElement("option");
                    op1.innerHTML=p.ime;
                    op1.value=p.id;
                    selectImenaPredstavaZaUloge.appendChild(op1);
                })
            divZaImePredstaveZaUloge.appendChild(labelaZaUnosImenaPredstave);
            divZaImePredstaveZaUloge.appendChild(selectImenaPredstavaZaUloge);
            host.appendChild(divZaImePredstaveZaUloge);

            let divZaImeUloge=document.createElement("div");
            divZaImeUloge.className="divZaImeUloge";
            let labelaZaUnosImenaUloge = document.createElement("label");
            labelaZaUnosImenaUloge.innerHTML = "Ime uloge:";
            let textareaZaUnosImenaUloge=document.createElement("input");
            textareaZaUnosImenaUloge.className="textareaZaUnosImenaUloge";
            divZaImeUloge.appendChild(labelaZaUnosImenaUloge);
            divZaImeUloge.appendChild(textareaZaUnosImenaUloge);
            host.appendChild(divZaImeUloge);

            let divZaButtonZaIzvrsavanje=document.createElement("div");
            divZaButtonZaIzvrsavanje.className="divZaButtonZaIzvrsavanje";
            let buttonZaButtonZaIzvrsavanjeUloge=document.createElement("button");
            buttonZaButtonZaIzvrsavanjeUloge.innerHTML="Izvrši";
            divZaButtonZaIzvrsavanje.appendChild(buttonZaButtonZaIzvrsavanjeUloge);
            host.appendChild(divZaButtonZaIzvrsavanje);
            buttonZaButtonZaIzvrsavanjeUloge.onclick=(async(ev)=>
            {
                this.ime=host.querySelector(".textareaZaUnosImenaUloge").value;
               
                let opcija = divZaImeGlumca.querySelector("select");
                var vrednost = opcija.options[opcija.selectedIndex];
                
                let opcija1 = divZaImePredstaveZaUloge.querySelector("select");
                var vrednost1 = opcija1.options[opcija1.selectedIndex];
                if(this.imeUloge===null||this.imeUloge===undefined||this.imeUloge==="")
                alert(`lose uneseni podaci za ime uloge`);
                else await api.dodajUlogu(vrednost.value,vrednost1.value,this.ime)
            }) 
        }
    
}