import { Api } from "./Api.js"
import { pozoriste} from "./pozoriste.js"
import {predstava} from "./predstava.js"
import {glumac} from "./glumac.js"
import {Uloge} from "./Uloge.js"
import {PredstaveUPozoristu} from "./PredstaveUPozoristu.js"

let formeDiv;
let tabeleDiv;
var drugiPrazan=true;
var tabelaPrazna=true;
let api=new Api();
let tabela;
let thead;
let tbody;
var ulogailiglumac=true;

Zapocni();
    
function Zapocni()
{

    let osnovniKontejner=document.createElement("div");
    osnovniKontejner.className="osnovniKontejner";     
    let nazivniDiv=document.createElement("div");
    nazivniDiv.innerHTML="Dramsko drustvo";
    nazivniDiv.className="nazivniDiv";
    let gornjiDiv=document.createElement("div");
    gornjiDiv.className="gornjiDiv";
    let donjiDiv=document.createElement("div");
    donjiDiv.className="donjiDiv";
    osnovniKontejner.appendChild(nazivniDiv);
    osnovniKontejner.appendChild(gornjiDiv);
    osnovniKontejner.appendChild(donjiDiv);
    document.body.appendChild(osnovniKontejner);
    crtajPoGornjemDivu(gornjiDiv,donjiDiv);
}

function crtajPoGornjemDivu(host,pomhost){
 
    //pozoriste

    let pozoristeDiv=document.createElement("div");
    pozoristeDiv.className="pozoristeDiv";
    let pozoristeLabela=document.createElement("div");
    pozoristeLabela.innerHTML="POZORIŠTE";
    pozoristeLabela.className="labele";
    let buttonPozoristeDiv=document.createElement("div");
    buttonPozoristeDiv.className="buttonPozoristeDiv";
    let obrisiPozoristeButton=document.createElement("button");
    obrisiPozoristeButton.innerHTML="Obrisi";

    let DodajPozoristeButton=document.createElement("button");
    DodajPozoristeButton.innerHTML="Dodaj";

    let izmeniPozoristeButton=document.createElement("button");
    izmeniPozoristeButton.innerHTML="Izmeni";

    pozoristeDiv.appendChild(pozoristeLabela);
    pozoristeDiv.appendChild(obrisiPozoristeButton);
    pozoristeDiv.appendChild(DodajPozoristeButton);
    pozoristeDiv.appendChild(izmeniPozoristeButton);
    host.appendChild(pozoristeDiv);
    //funkcionalnosti buttona za pozorista
    DodajPozoristeButton.onclick=(async(ev)=>
    {   
        crtajPoDonjemDivu(pomhost);
        let poz=new pozoriste(0,"",0);
        await poz.dodajPozoristeKl(formeDiv);
        
    })
    obrisiPozoristeButton.onclick=(async(ev)=>
    {
        crtajPoDonjemDivu(pomhost);
        izbrisiPozoristekl(formeDiv,pomhost);
    })
    izmeniPozoristeButton.onclick=(async(ev)=>
    {
        crtajPoDonjemDivu(pomhost);
        izmeniPozoristekl(formeDiv,pomhost);
    })

     //predstava

     let predstavaDiv=document.createElement("div");
     predstavaDiv.className="predstavaDiv";
     let predstavaLabela=document.createElement("div");
     predstavaLabela.innerHTML="PREDSTAVA";
     predstavaLabela.className="labele";
     let buttonPredstavaDiv=document.createElement("div");
     buttonPredstavaDiv.className="buttonPredstavaDiv";
     let obrisiPredstavuButton=document.createElement("button");
     obrisiPredstavuButton.innerHTML="Obrisi";

     let DodajPredstavuButton=document.createElement("button");
     DodajPredstavuButton.innerHTML="Dodaj";

     let dodajPredstavuUPozoristeButton=document.createElement("button");
     dodajPredstavuUPozoristeButton.innerHTML="Dodaj predstavu u pozoriste";

     let prikaziPredstavuButton=document.createElement("button");
     prikaziPredstavuButton.innerHTML="Prikazi";

     let izmeniPredstavuButton=document.createElement("button");
     izmeniPredstavuButton.innerHTML="Izmeni";

     predstavaDiv.appendChild(predstavaLabela)
     predstavaDiv.appendChild(prikaziPredstavuButton);
     predstavaDiv.appendChild(obrisiPredstavuButton);
     predstavaDiv.appendChild(dodajPredstavuUPozoristeButton);
     predstavaDiv.appendChild(DodajPredstavuButton);
     predstavaDiv.appendChild(izmeniPredstavuButton);
     host.appendChild(predstavaDiv);
     //funkcionalnosti button-a predstava  
     DodajPredstavuButton.onclick=(async(ev)=>
     {   
         crtajPoDonjemDivu(pomhost);
         let pre=new predstava(0,"",0);
         await pre.dodajPredstavuKl(formeDiv);   
     })
     obrisiPredstavuButton.onclick=(async(ev)=>
    {
        crtajPoDonjemDivu(pomhost);
        izbrisiPredstavukl(formeDiv,pomhost);
    })
    dodajPredstavuUPozoristeButton.onclick=(async(ev)=>
    {
        crtajPoDonjemDivu(pomhost);
        dupkl(formeDiv,pomhost);
    })
    prikaziPredstavuButton.onclick=(async(ev)=>
    {
        tabelaPrazna=true;
        crtajPoDonjemDivu(pomhost);
        prikaziPozoristekl(formeDiv,tabeleDiv,pomhost);
    })
    izmeniPredstavuButton.onclick=(async(ev)=>
    {
        crtajPoDonjemDivu(pomhost);
        izmeniPredstavukl(formeDiv,pomhost);
    })
     //glumac

     let glumacDiv=document.createElement("div");
     glumacDiv.className="glumacDiv";
     let glumacLabela=document.createElement("div");
     glumacLabela.innerHTML="GLUMAC";
     glumacLabela.className="labele";
     let buttonGlumacDiv=document.createElement("div");
     buttonGlumacDiv.className="buttonGlumacDiv";
     let obrisiGlumcaButton=document.createElement("button");
     obrisiGlumcaButton.innerHTML="Obrisi";

     let DodajGlumcaButton=document.createElement("button");
     DodajGlumcaButton.innerHTML="Dodaj";

     let prikaziGlumcaButton=document.createElement("button");
     prikaziGlumcaButton.innerHTML="Prikazi";

     let izmeniGlumcaButton=document.createElement("button");
     izmeniGlumcaButton.innerHTML="Izmeni";     

     glumacDiv.appendChild(glumacLabela)
     glumacDiv.appendChild(prikaziGlumcaButton);
     glumacDiv.appendChild(obrisiGlumcaButton);
     glumacDiv.appendChild(DodajGlumcaButton);
     glumacDiv.appendChild(izmeniGlumcaButton);
     host.appendChild(glumacDiv);
     //funkcionalnosti button-a glumac  
     DodajGlumcaButton.onclick=(async(ev)=>
     {
        crtajPoDonjemDivu(pomhost);
        let pre=new glumac(0,"","",0);
         await pre.dodajGlumcaKl(formeDiv);
     })
     obrisiGlumcaButton.onclick=(async(ev)=>
     {
        crtajPoDonjemDivu(pomhost);
        izbrisiGlumcakl(formeDiv,pomhost);
     })
     prikaziGlumcaButton.onclick=(async(ev)=>
     {
        tabelaPrazna=true;
        ulogailiglumac=true;
        crtajPoDonjemDivu(pomhost);
        glumciUPredstavamaKl(formeDiv,tabeleDiv,pomhost);
     })
     izmeniGlumcaButton.onclick=(async(ev)=>
     {
        crtajPoDonjemDivu(pomhost);
        izmeniGlumcakl(formeDiv,pomhost);
     })
     //uloga

     let ulogaDiv=document.createElement("div");
     ulogaDiv.className="ulogaDiv";
     let ulogaLabela=document.createElement("div");
     ulogaLabela.innerHTML="ULOGA";
     ulogaLabela.className="labele";
     let buttonUlogaDiv=document.createElement("div");
     buttonUlogaDiv.className="buttonUlogaDiv";
     let DodajUloguButton=document.createElement("button");
     DodajUloguButton.innerHTML="Dodaj";
     let prikaziUlogeButton=document.createElement("button");
     prikaziUlogeButton.innerHTML="Prikazi";
     //funkcionalnosti button-a prikazi
     ulogaDiv.appendChild(ulogaLabela)
     ulogaDiv.appendChild(prikaziUlogeButton);
     ulogaDiv.appendChild(DodajUloguButton)
     host.appendChild(ulogaDiv);
     //funkcionalnosti button-a uloga
     DodajUloguButton.onclick=(async(ev)=>
     {
        crtajPoDonjemDivu(pomhost);
        let pre=new Uloge("","",0,"","");
        await pre.dodajUloguKl(formeDiv);
     })
     prikaziUlogeButton.onclick=(async(ev)=>
     {
        tabelaPrazna=true;
        ulogailiglumac=false;
        crtajPoDonjemDivu(pomhost);
        UlogeGlumacaKl(formeDiv,tabeleDiv,pomhost);
     })
}

function  crtajPoDonjemDivu(host)
{  
        if(drugiPrazan==false)
        {
            host.removeChild(formeDiv)
            host.removeChild(tabeleDiv);
        }
        formeDiv=document.createElement("div");
        formeDiv.className="formeDiv";
        tabeleDiv=document.createElement("div");
        tabeleDiv.className="tabeleDiv";
        host.appendChild(formeDiv);
        host.appendChild(tabeleDiv);
        drugiPrazan=false;
}


//funkcije button-a

async function  izbrisiPozoristekl (host,ghost)
{


        let izbrisiPozoristeKlDiv=document.createElement("div");
        izbrisiPozoristeKlDiv.innerHTML="Brisanje pozorista";
        izbrisiPozoristeKlDiv.className="izbrisiPozoristeKlDiv";
        host.appendChild(izbrisiPozoristeKlDiv);

        let divZaImePozoristaZaBrisanje=document.createElement("div");
        divZaImePozoristaZaBrisanje.className="divZaImePozoristaZaBrisanje";
        let labelaZaUnosImenaPozoristaZaBrisanje = document.createElement("label");
        labelaZaUnosImenaPozoristaZaBrisanje.innerHTML = "Ime:";
        
        var lista=[];
        lista=await api.vratiSvaPozorista();
        let selectImenaPozoristaZaBrisanje=document.createElement("select");
        let op;
        lista.forEach(p=>
            {
                op=document.createElement("option");
                op.innerHTML=p.ime;
                op.value=p.id;
                selectImenaPozoristaZaBrisanje.appendChild(op);
            })
        
        divZaImePozoristaZaBrisanje.appendChild(labelaZaUnosImenaPozoristaZaBrisanje);
        divZaImePozoristaZaBrisanje.appendChild(selectImenaPozoristaZaBrisanje);
        host.appendChild(divZaImePozoristaZaBrisanje);

        let divZaButtonZaIzvrsavanje=document.createElement("div");
        divZaButtonZaIzvrsavanje.className="divZaButtonZaIzvrsavanje";
        let buttonZaButtonZaIzvrsavanjePozorista=document.createElement("button");
        buttonZaButtonZaIzvrsavanjePozorista.innerHTML="Izvrši";
        divZaButtonZaIzvrsavanje.appendChild(buttonZaButtonZaIzvrsavanjePozorista);
        host.appendChild(divZaButtonZaIzvrsavanje);
        buttonZaButtonZaIzvrsavanjePozorista.onclick=(async(ev)=>
        {
                      let opcija = divZaImePozoristaZaBrisanje.querySelector("select");
                      var vrednost = opcija.options[opcija.selectedIndex];
                      await api.izbrisiPozoriste(vrednost.value);
                      crtajPoDonjemDivu(ghost);  
        }) 
}

async function izbrisiPredstavukl(host,ghost)
{
    let izbrisiPredstaveKlDiv=document.createElement("div");
    izbrisiPredstaveKlDiv.innerHTML="Brisanje predstave";
    izbrisiPredstaveKlDiv.className="izbrisiPredstaveKlDiv";
    host.appendChild(izbrisiPredstaveKlDiv);

    let divZaImePredstaveZaBrisanje=document.createElement("div");
    divZaImePredstaveZaBrisanje.className="divZaImePredstaveZaBrisanje";
    let labelaZaUnosImenaPredstaveZaBrisanje = document.createElement("label");
    labelaZaUnosImenaPredstaveZaBrisanje.innerHTML = "Ime:";
        
    var lista=[];
    lista=await api.vratiSvePredstave();
    let selectImenaPredstavaZaBrisanje=document.createElement("select");
    let op;
    lista.forEach(p=>
        {
            op=document.createElement("option");
            op.innerHTML=p.ime;
            op.value=p.id;
            selectImenaPredstavaZaBrisanje.appendChild(op);
        })
        
    divZaImePredstaveZaBrisanje.appendChild(labelaZaUnosImenaPredstaveZaBrisanje);
    divZaImePredstaveZaBrisanje.appendChild(selectImenaPredstavaZaBrisanje);
    host.appendChild(divZaImePredstaveZaBrisanje);

    let divZaButtonZaIzvrsavanje=document.createElement("div");
    divZaButtonZaIzvrsavanje.className="divZaButtonZaIzvrsavanje";
    let buttonZaButtonZaIzvrsavanjePredstave=document.createElement("button");
    buttonZaButtonZaIzvrsavanjePredstave.innerHTML="Izvrši";
    divZaButtonZaIzvrsavanje.appendChild(buttonZaButtonZaIzvrsavanjePredstave);
    host.appendChild(divZaButtonZaIzvrsavanje);
    buttonZaButtonZaIzvrsavanjePredstave.onclick=(async(ev)=>
        {
            let opcija = divZaImePredstaveZaBrisanje.querySelector("select");
            var vrednost = opcija.options[opcija.selectedIndex];
            console.log(vrednost.value);
            await api.izbrisiPredstavu(vrednost.value);
            crtajPoDonjemDivu(ghost);  
        }) 
}
async function dupkl(host,ghost)
{
    let dupKlDiv=document.createElement("div");
    dupKlDiv.innerHTML="Dodavanje predstave u pozoristu";
    dupKlDiv.className="dupKlDiv";
    host.appendChild(dupKlDiv);

    let divZaImePozoristaZadup=document.createElement("div");
    divZaImePozoristaZadup.className="divZaImePozoristaZadup";
        let labelaZaUnosImenaPozoristaZadup = document.createElement("label");
        labelaZaUnosImenaPozoristaZadup.innerHTML = "Ime pozorista:";

    var lista1=[];
        lista1=await api.vratiSvaPozorista();
        let selectImenaPozoristaudup=document.createElement("select");
        let op1;
        lista1.forEach(p=>
            {
                op1=document.createElement("option");
                op1.innerHTML=p.ime;
                op1.value=p.id;
                selectImenaPozoristaudup.appendChild(op1);
            })
        divZaImePozoristaZadup.appendChild(labelaZaUnosImenaPozoristaZadup);
        divZaImePozoristaZadup.appendChild(selectImenaPozoristaudup);
    
        let divZaImePredstaveZadup=document.createElement("div");
        divZaImePredstaveZadup.className="divZaImePredstaveZadup";
        let labelaZaUnosImenaPredstaveZadup = document.createElement("label");
        labelaZaUnosImenaPredstaveZadup.innerHTML = "Ime predstave:";

    var lista2=[];
    lista2=await api.vratiSvePredstave();
    let selectImenaPredstavaZadup=document.createElement("select");
    let op2;
    lista2.forEach(p=>
        {
            op2=document.createElement("option");
            op2.innerHTML=p.ime;
            op2.value=p.id;
            selectImenaPredstavaZadup.appendChild(op2);
        })
        divZaImePredstaveZadup.appendChild(labelaZaUnosImenaPredstaveZadup);
        divZaImePredstaveZadup.appendChild(selectImenaPredstavaZadup);
        host.appendChild(divZaImePozoristaZadup);
        host.appendChild(divZaImePredstaveZadup);

        let divZaButtonZaIzvrsavanje=document.createElement("div");
        divZaButtonZaIzvrsavanje.className="divZaButtonZaIzvrsavanje";
        let buttonZaButtonZaIzvrsavanjeDup=document.createElement("button");
        buttonZaButtonZaIzvrsavanjeDup.innerHTML="Izvrši";
        divZaButtonZaIzvrsavanje.appendChild(buttonZaButtonZaIzvrsavanjeDup);
        host.appendChild(divZaButtonZaIzvrsavanje);
        
    
    buttonZaButtonZaIzvrsavanjeDup.onclick=(async(ev)=>
        {
            let opcija1 = divZaImePozoristaZadup.querySelector("select");
            var vrednost1 = opcija1.options[opcija1.selectedIndex];
            console.log(vrednost1.value);

            let opcija2 = divZaImePredstaveZadup.querySelector("select");
            var vrednost2 = opcija2.options[opcija2.selectedIndex];
            console.log(vrednost2.value);

            await api.dodajPredstavuUPozoriste(vrednost2.value,vrednost1.value);
            crtajPoDonjemDivu(ghost);  
        }) 
        
}
async function izbrisiGlumcakl(host,ghost)
{
    let izbrisiGlumcaKlDiv=document.createElement("div");
    izbrisiGlumcaKlDiv.innerHTML="Brisanje predstave";
    izbrisiGlumcaKlDiv.className="izbrisiGlumcaKlDiv";
    host.appendChild(izbrisiGlumcaKlDiv);

    let divZaImeGlumcaZaBrisanje=document.createElement("div");
    divZaImeGlumcaZaBrisanje.className="divZaImeGlumcaZaBrisanje";
    let labelaZaUnosImenaGlumcaZaBrisanje = document.createElement("label");
    labelaZaUnosImenaGlumcaZaBrisanje.innerHTML = "Ime:";
        
    var lista=[];
    lista=await api.vratiSveGlumce();
    let selectImenaGlumacaZaBrisanje=document.createElement("select");
    let op;
    lista.forEach(p=>
        {
            op=document.createElement("option");
            op.innerHTML=p.ime+" "+p.prezime;
            op.value=p.id;
            selectImenaGlumacaZaBrisanje.appendChild(op);
        })
        
    divZaImeGlumcaZaBrisanje.appendChild(labelaZaUnosImenaGlumcaZaBrisanje);
    divZaImeGlumcaZaBrisanje.appendChild(selectImenaGlumacaZaBrisanje);
    host.appendChild(divZaImeGlumcaZaBrisanje);

    let divZaButtonZaIzvrsavanje=document.createElement("div");
    divZaButtonZaIzvrsavanje.className="divZaButtonZaIzvrsavanje";
    let buttonZaButtonZaIzvrsavanjeGlumca=document.createElement("button");
    buttonZaButtonZaIzvrsavanjeGlumca.innerHTML="Izvrši";
    divZaButtonZaIzvrsavanje.appendChild(buttonZaButtonZaIzvrsavanjeGlumca);
    host.appendChild(divZaButtonZaIzvrsavanje);
    buttonZaButtonZaIzvrsavanjeGlumca.onclick=(async(ev)=>
        {
            let opcija = divZaImeGlumcaZaBrisanje.querySelector("select");
            var vrednost = opcija.options[opcija.selectedIndex];
            console.log(vrednost.value);
            await api.izbrisiGlumca(vrednost.value);
            crtajPoDonjemDivu(ghost);  
        }) 
}
async function glumciUPredstavamaKl(hostl,hostd,ghost)
{
    let vratiGlumceUPredstavamaKlDiv=document.createElement("div");
    vratiGlumceUPredstavamaKlDiv.innerHTML="Prikaz glumaca iz predstave";
    vratiGlumceUPredstavamaKlDiv.className="vratiGlumceUPredstavamaKlDiv";
    hostl.appendChild(vratiGlumceUPredstavamaKlDiv);

    let divZaImePredstaviZaVracanje=document.createElement("div");
    divZaImePredstaviZaVracanje.className="divZaImePredstaviZaVracanje";
    let labelaZaUnosImenaPredstaveGlumaca = document.createElement("label");
    labelaZaUnosImenaPredstaveGlumaca.innerHTML = "Ime:";
          
    var lista=[];
    lista=await api.vratiSvePredstave();
    let selectImenaPredstavaZaVracanje=document.createElement("select");
    let op;
    lista.forEach(p=>
        {
            op=document.createElement("option");
            op.innerHTML=p.ime;
            op.value=p.id;
            selectImenaPredstavaZaVracanje.appendChild(op);
        })
        
    divZaImePredstaviZaVracanje.appendChild(labelaZaUnosImenaPredstaveGlumaca);
    divZaImePredstaviZaVracanje.appendChild(selectImenaPredstavaZaVracanje);
    hostl.appendChild(divZaImePredstaviZaVracanje);

    let divZaButtonZaIzvrsavanje=document.createElement("div");
    divZaButtonZaIzvrsavanje.className="divZaButtonZaIzvrsavanje";
    let buttonZaButtonZaIzvrsavanjeVracanjeGlumaca=document.createElement("button");
    buttonZaButtonZaIzvrsavanjeVracanjeGlumaca.innerHTML="Izvrši";
    divZaButtonZaIzvrsavanje.appendChild(buttonZaButtonZaIzvrsavanjeVracanjeGlumaca);
    hostl.appendChild(divZaButtonZaIzvrsavanje);
    buttonZaButtonZaIzvrsavanjeVracanjeGlumaca.onclick=(async(ev)=>
        {
            let opcija = divZaImePredstaviZaVracanje.querySelector("select");
            var vrednost = opcija.options[opcija.selectedIndex].value;
            napraviTabeluZaVracanjeGlumaca(vrednost,hostd,ghost);
            
        }) 
    
}
async function napraviTabeluZaVracanjeGlumaca(vrednost,host,ghost)
{
    if(tabelaPrazna==false)
    {
    host.removeChild(tabela);
    }
     tabela=document.createElement("table");
    tabela.className="tabela";
     thead=document.createElement("thead");
    thead.className="headtabele";
     tbody=document.createElement("tbody");
    tbody.className="bodytabele";

    tabela.appendChild(thead);
    tabela.appendChild(tbody);
    host.appendChild(tabela);

    var tr=document.createElement("tr");
    thead.appendChild(tr);

    let th;
    var zag=["ime","prezime","godine","predstava","uloga"];
    zag.forEach(el=>
        {
            th=document.createElement("th");
            th.innerHTML=el;
            tr.appendChild(th);
        })

    var lista=[];
    if(ulogailiglumac==true){ lista=await api.vratiGlumceIzPredstave(vrednost);}
    else{lista=await api.vratiGlumca(vrednost);}
    
    
    let tb;
    lista.forEach(element=>
        {
                var tr1=document.createElement("tr");
                tb=document.createElement("td");
                tb.innerHTML=element.imeGlumca;
                tr1.appendChild(tb);
                tb=document.createElement("td");
                tb.innerHTML=element.PrezimeGlumca;
                tr1.appendChild(tb);
                tb=document.createElement("td");
                tb.innerHTML=element.GodineGlumca;
                tr1.appendChild(tb);
                tb=document.createElement("td");
                tb.innerHTML=element.ImePredstave;
                tr1.appendChild(tb);
                tb=document.createElement("td");
                tb.innerHTML=element.ImeUloge;
                tr1.appendChild(tb);
                tbody.appendChild(tr1);
                tr1=null;
        });
        tabelaPrazna=false;
        ghost.appendChild(host);
}

async function prikaziPozoristekl(hostl,hostd,ghost)
{
    let vratiPredstaveKlDiv=document.createElement("div");
    vratiPredstaveKlDiv.innerHTML="Prikaz predstava iz pozorista";
    vratiPredstaveKlDiv.className="vratiPredstaveKlDiv";
    hostl.appendChild(vratiPredstaveKlDiv);

    let divZaImePozoristaZaVracanje=document.createElement("div");
    divZaImePozoristaZaVracanje.className="divZaImePozoristaZaVracanje";
    let labelaZaUnosImenaPozorista = document.createElement("label");
    labelaZaUnosImenaPozorista.innerHTML = "Ime:";

    var lista=[];
    lista=await api.vratiSvaPozorista();
    let selectImenaPozoristaZaVracanje=document.createElement("select");
    let op;
    lista.forEach(p=>
        {
            op=document.createElement("option");
            op.innerHTML=p.ime;
            op.value=p.id;
            selectImenaPozoristaZaVracanje.appendChild(op);
        })
    divZaImePozoristaZaVracanje.appendChild(labelaZaUnosImenaPozorista);
    divZaImePozoristaZaVracanje.appendChild(selectImenaPozoristaZaVracanje);
    hostl.appendChild(divZaImePozoristaZaVracanje);
    let divZaButtonZaIzvrsavanje=document.createElement("div");
    divZaButtonZaIzvrsavanje.className="divZaButtonZaIzvrsavanje";
    let buttonZaButtonZaIzvrsavanjeVracanjePredstaveIzPozorista=document.createElement("button");
    buttonZaButtonZaIzvrsavanjeVracanjePredstaveIzPozorista.innerHTML="Izvrši";
    divZaButtonZaIzvrsavanje.appendChild(buttonZaButtonZaIzvrsavanjeVracanjePredstaveIzPozorista);
    hostl.appendChild(divZaButtonZaIzvrsavanje);

    buttonZaButtonZaIzvrsavanjeVracanjePredstaveIzPozorista.onclick=(async(ev)=>
        {
            let opcija = divZaImePozoristaZaVracanje.querySelector("select");
            var vrednost = opcija.options[opcija.selectedIndex].value;
            napraviTabeluZaVracanjePredstava(vrednost,hostd,ghost);
            
        }) 
}
async function napraviTabeluZaVracanjePredstava(vrednost,host,ghost)
{
    if(tabelaPrazna==false)
    {
    host.removeChild(tabela);
    }
     tabela=document.createElement("table");
    tabela.className="tabela";
     thead=document.createElement("thead");
    thead.className="headtabele";
     tbody=document.createElement("tbody");
    tbody.className="bodytabele";

    tabela.appendChild(thead);
    tabela.appendChild(tbody);
    host.appendChild(tabela);

    var tr=document.createElement("tr");
    thead.appendChild(tr);

    let th;
    var zag=["pozoriste","kapacitet","predstava","trajanje"];
    zag.forEach(el=>
        {
            th=document.createElement("th");
            th.innerHTML=el;
            tr.appendChild(th);
        })

    var lista=[];
    lista=await api.vratiSvePredstaveIzPozorista(vrednost);
    
    
    let tb;
    lista.forEach(element=>
        {
                var tr1=document.createElement("tr");
                tb=document.createElement("td");
                tb.innerHTML=element.imePozorista;
                tr1.appendChild(tb);
                tb=document.createElement("td");
                tb.innerHTML=element.kapacitet;
                tr1.appendChild(tb);
                tb=document.createElement("td");
                tb.innerHTML=element.imePredstave;
                tr1.appendChild(tb);
                tb=document.createElement("td");
                tb.innerHTML=element.trajanje;
                tr1.appendChild(tb);
                tb=document.createElement("td");
                tbody.appendChild(tr1);
                tr1=null;
        });
        tabelaPrazna=false;
        ghost.appendChild(host);
}
async function UlogeGlumacaKl(hostl,hostd,ghost)
{
    let vratiUlogeGlumacaKlDiv=document.createElement("div");
    vratiUlogeGlumacaKlDiv.innerHTML="Prikaz glumaca iz predstave";
    vratiUlogeGlumacaKlDiv.className="vratiUlogeGlumacaKlDiv";
    hostl.appendChild(vratiUlogeGlumacaKlDiv);

    let divZaImeGlumcaZaVracanjeUloge=document.createElement("div");
    divZaImeGlumcaZaVracanjeUloge.className="divZaImeGlumcaZaVracanjeUloge";
    let labelaZaUnosImenaUlogeGlumaca = document.createElement("label");
    labelaZaUnosImenaUlogeGlumaca.innerHTML = "Ime glumca:";

    var lista=[];
    lista=await api.vratiSveGlumce();
    let selectImenaGlumacaZaVracanjeUloge=document.createElement("select");
    let op;
    lista.forEach(p=>
        {
            op=document.createElement("option");
            op.innerHTML=p.ime+" "+p.prezime;
            op.value=p.id;
            selectImenaGlumacaZaVracanjeUloge.appendChild(op);
        })

    divZaImeGlumcaZaVracanjeUloge.appendChild(labelaZaUnosImenaUlogeGlumaca);
    divZaImeGlumcaZaVracanjeUloge.appendChild(selectImenaGlumacaZaVracanjeUloge);
    hostl.appendChild(divZaImeGlumcaZaVracanjeUloge);
    
    let divZaButtonZaIzvrsavanje=document.createElement("div");
    divZaButtonZaIzvrsavanje.className="divZaButtonZaIzvrsavanje";
    let buttonZaButtonZaIzvrsavanjeVracanjeUlogaGlumaca=document.createElement("button");
    buttonZaButtonZaIzvrsavanjeVracanjeUlogaGlumaca.innerHTML="Izvrši";
    divZaButtonZaIzvrsavanje.appendChild(buttonZaButtonZaIzvrsavanjeVracanjeUlogaGlumaca);
    hostl.appendChild(divZaButtonZaIzvrsavanje);
    buttonZaButtonZaIzvrsavanjeVracanjeUlogaGlumaca.onclick=(async(ev)=>
        {
            let opcija = divZaImeGlumcaZaVracanjeUloge.querySelector("select");
            var vrednost = opcija.options[opcija.selectedIndex].value;
            napraviTabeluZaVracanjeGlumaca(vrednost,hostd,ghost);
            
        })
}
async function izmeniPozoristekl(host,ghost)
{
    let izmeniPozoristeKlDiv=document.createElement("div");
    izmeniPozoristeKlDiv.innerHTML="Izmeni Pozoriste";
    izmeniPozoristeKlDiv.className="izmeniPozoristeKlDiv";
    host.appendChild(izmeniPozoristeKlDiv);
    
    let divZaImePozoristaZaVracanje=document.createElement("div");
    divZaImePozoristaZaVracanje.className="divZaImePozoristaZaVracanje";
    let labelaZaUnosImenaPozoristaZa = document.createElement("label");
    labelaZaUnosImenaPozoristaZa.innerHTML = "Ime pozorista: ";

    var lista=[];
    lista=await api.vratiSvaPozorista();
    let selectImenaPozoristaZaVracanje=document.createElement("select");
    let op;
    lista.forEach(p=>
        {
            op=document.createElement("option");
            op.innerHTML=p.ime;
            op.value=p.id;
            selectImenaPozoristaZaVracanje.appendChild(op);
        })
    divZaImePozoristaZaVracanje.appendChild(labelaZaUnosImenaPozoristaZa);
    divZaImePozoristaZaVracanje.appendChild(selectImenaPozoristaZaVracanje);
    host.appendChild(divZaImePozoristaZaVracanje);

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
            let opcija = divZaImePozoristaZaVracanje.querySelector("select");
            var vrednost = opcija.options[opcija.selectedIndex].value;
            var ime=host.querySelector(".textareaZaUnosImenaPozorista").value;
            var kapacitet=host.querySelector(".textareaZaUnosKapacitetaPozorista").value;
            if(ime===null||ime===undefined||ime==="")
            alert(`lose uneseni podaci za ime`);
            else if(kapacitet===null||kapacitet===undefined||kapacitet===""||kapacitet>100)
            alert(`lose uneseni podaci za kapacitet`);
            else
            {   
                var poz=new pozoriste(0,ime,kapacitet);
                var api=new Api();
                await api.izmeniPozoriste(vrednost,poz);
                crtajPoDonjemDivu(ghost);  
            }
        }) 
}
async function izmeniPredstavukl(host,ghost)
{
    let izmeniPredstavuKlDiv=document.createElement("div");
    izmeniPredstavuKlDiv.innerHTML="Izmeni Predstavu";
    izmeniPredstavuKlDiv.className="izmeniPredstavuKlDiv";
    host.appendChild(izmeniPredstavuKlDiv);
    
    let divZaImePredstaveZaVracanje=document.createElement("div");
    divZaImePredstaveZaVracanje.className="divZaImePredstaveZaVracanje";
    let labelaZaUnosImenaPredstaveZa = document.createElement("label");
    labelaZaUnosImenaPredstaveZa.innerHTML = "Ime predstave: ";

    var lista=[];
    lista=await api.vratiSvePredstave();
    let selectImenaPredstaveZaVracanje=document.createElement("select");
    let op;
    lista.forEach(p=>
        {
            op=document.createElement("option");
            op.innerHTML=p.ime;
            op.value=p.id;
            selectImenaPredstaveZaVracanje.appendChild(op);
        })
        divZaImePredstaveZaVracanje.appendChild(labelaZaUnosImenaPredstaveZa);
        divZaImePredstaveZaVracanje.appendChild(selectImenaPredstaveZaVracanje);
    host.appendChild(divZaImePredstaveZaVracanje);

    let divZaImePredstave=document.createElement("div");
    divZaImePredstave.className="divZaImePredstave";
        let labelaZaUnosImenaPredstave = document.createElement("label");
        labelaZaUnosImenaPredstave.innerHTML = "Ime:";
        let textareaZaUnosImenaPredstave=document.createElement("input");
        textareaZaUnosImenaPredstave.className="textareaZaUnosImenaPredstave";
        divZaImePredstave.appendChild(labelaZaUnosImenaPredstave);
        divZaImePredstave.appendChild(textareaZaUnosImenaPredstave);
        host.appendChild(divZaImePredstave);

        let divZaTrajanjePozorista=document.createElement("div");
        divZaTrajanjePozorista.className="divZaTrajanjePozorista";
        let labelaZaUnosTrajanjePozorista = document.createElement("label");
        labelaZaUnosTrajanjePozorista.innerHTML = "Trajanje:";
        let textareaZaUnosTrajanjaPozorista=document.createElement("input");
        textareaZaUnosTrajanjaPozorista.type="number";
        textareaZaUnosTrajanjaPozorista.className="textareaZaUnosTrajanjaPozorista";
        divZaTrajanjePozorista.appendChild(labelaZaUnosTrajanjePozorista);
        divZaTrajanjePozorista.appendChild(textareaZaUnosTrajanjaPozorista);
        host.appendChild(divZaTrajanjePozorista);

        let divZaButtonZaIzvrsavanje=document.createElement("div");
        divZaButtonZaIzvrsavanje.className="divZaButtonZaIzvrsavanje";
        let buttonZaButtonZaIzvrsavanjePredstave=document.createElement("button");
        buttonZaButtonZaIzvrsavanjePredstave.innerHTML="Izvrši";
        divZaButtonZaIzvrsavanje.appendChild(buttonZaButtonZaIzvrsavanjePredstave);
        host.appendChild(divZaButtonZaIzvrsavanje);
        buttonZaButtonZaIzvrsavanjePredstave.onclick=(async(ev)=>
        {
            let opcija = divZaImePredstaveZaVracanje.querySelector("select");
            var vrednost = opcija.options[opcija.selectedIndex].value;
            var ime=host.querySelector(".textareaZaUnosImenaPredstave").value;
            var trajanje=host.querySelector(".textareaZaUnosTrajanjaPozorista").value;
            if(ime===null||ime===undefined||ime==="")
            alert(`lose uneseni podaci za ime`);
            else if(trajanje===null||trajanje===undefined||trajanje===""||trajanje>500)
            alert(`lose uneseni podaci za kapacitet`);
            else
            {   
                var poz=new predstava(0,ime,trajanje);
                var api=new Api();
                await api.izmeniPredstavu(vrednost,poz);
                crtajPoDonjemDivu(ghost);  
            }
        }) 
}
async function izmeniGlumcakl(host,ghost)
{
    let izmeniGlumcaKlDiv=document.createElement("div");
    izmeniGlumcaKlDiv.innerHTML="Izmeni Predstavu";
    izmeniGlumcaKlDiv.className="izmeniGlumcaKlDiv";
    host.appendChild(izmeniGlumcaKlDiv);
    
    let divZaImeGlumcaZaVracanje=document.createElement("div");
    divZaImeGlumcaZaVracanje.className="divZaImeGlumcaZaVracanje";
    let labelaZaUnosImenaGlumcaZa = document.createElement("label");
    labelaZaUnosImenaGlumcaZa.innerHTML = "Ime glumca: ";

    var lista=[];
    lista=await api.vratiSveGlumce();
    let selectImenaGlumcaZaVracanje=document.createElement("select");
    let op;
    lista.forEach(p=>
        {
            op=document.createElement("option");
            op.innerHTML=p.ime+" "+p.prezime;
            op.value=p.id;
            selectImenaGlumcaZaVracanje.appendChild(op);
        })
        divZaImeGlumcaZaVracanje.appendChild(labelaZaUnosImenaGlumcaZa);
        divZaImeGlumcaZaVracanje.appendChild(selectImenaGlumcaZaVracanje);
    host.appendChild(divZaImeGlumcaZaVracanje);

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
        divZaPrezimeGlumca.className="divZaPrezimeGlumca";
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
        divZaButtonZaIzvrsavanje.onclick=(async(ev)=>
        {
            let opcija = divZaImeGlumcaZaVracanje.querySelector("select");
            var vrednost = opcija.options[opcija.selectedIndex].value;
            var ime=host.querySelector(".textareaZaUnosImenaGlumca").value;
            var prezime=host.querySelector(".textareaZaUnosPrezimenaGlumca").value;
            var trajanje=host.querySelector(".textareaZaUnosGodinaGlumca").value;
            if(ime===null||ime===undefined||ime==="")
            alert(`lose uneseni podaci za ime`);
            else if (prezime===null||prezime===undefined||prezime==="")
            alert(`lose uneseni podaci za prezime`);
            else if(trajanje===null||trajanje===undefined||trajanje===""||trajanje>500)
            alert(`lose uneseni podaci za kapacitet`);
            else
            {   
                var poz=new glumac(0,ime,prezime,trajanje);
                var api=new Api();
                await api.izmeniGlumca(vrednost,poz);
                crtajPoDonjemDivu(ghost);  
            }
        }) 
}
