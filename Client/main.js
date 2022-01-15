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

    pozoristeDiv.appendChild(pozoristeLabela);
    buttonPozoristeDiv.appendChild(obrisiPozoristeButton);
    buttonPozoristeDiv.appendChild(DodajPozoristeButton);
    pozoristeDiv.appendChild(buttonPozoristeDiv);
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

     predstavaDiv.appendChild(predstavaLabela)
     buttonPredstavaDiv.appendChild(prikaziPredstavuButton);
     buttonPredstavaDiv.appendChild(obrisiPredstavuButton);
     buttonPredstavaDiv.appendChild(dodajPredstavuUPozoristeButton);
     buttonPredstavaDiv.appendChild(DodajPredstavuButton);
     predstavaDiv.appendChild(buttonPredstavaDiv);
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

     glumacDiv.appendChild(glumacLabela)
     buttonGlumacDiv.appendChild(prikaziGlumcaButton);
     buttonGlumacDiv.appendChild(obrisiGlumcaButton);
     buttonGlumacDiv.appendChild(DodajGlumcaButton);
     glumacDiv.appendChild(buttonGlumacDiv);
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
     buttonUlogaDiv.appendChild(prikaziUlogeButton);
     buttonUlogaDiv.appendChild(DodajUloguButton);
     ulogaDiv.appendChild(buttonUlogaDiv);
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
                      console.log(vrednost.value);
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

