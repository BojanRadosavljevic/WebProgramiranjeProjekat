import { pozoriste} from "./pozoriste.js";
import { predstava  } from "./predstava.js";
import { glumac     } from "./glumac.js";
import { Uloge      } from "./Uloge.js";
import { PredstaveUPozoristu} from "./PredstaveUPozoristu.js";

export class Api{
    constructor(){}

    //pozoriste

async dodajPozoriste(pozoriste)
{
var response=await fetch(`https://localhost:5001/Pozoriste/Dodaj_pozoriste`,
    {
        headers :
        {
            Accept:"application/json",
            "Content-type":"application/json",
        },
        method:"POST",
        body:JSON.stringify(pozoriste)
    });
    switch(response.status){
        case 200: {
            alert(`${await response.text}`);
            return true;
        }
        case 400:{
            alert(`Client error: ${await response.text()}`);
            return false;
        }
        default:{
            alert(`Server error: ${await response.text()}`);
            return false;
        }
    }

}
async vratiSvaPozorista()
{

let response=await fetch(`https://localhost:5001/Pozoriste/VratiSvaPozorista`);
switch(response.status)
{
    case 200:{
        if(response.ok)
        {
            let data=await response.json();
            
                var lista=[];
                data.forEach(element =>
                {
                   const r=new pozoriste(element.id,element.imePozorista,element.kapacitet); 
                    lista.push(r);               
                });
                return lista;
            }
        }
    }
    
}


async izbrisiPozoriste(idpozorista)
{ 
    var idpozoristaa=parseInt(idpozorista);
var response = await fetch(`https://localhost:5001/Pozoriste/Izbrisi_pozoriste/${idpozoristaa}`,{
    headers :
    {
        Accept:"application/json",
        "Content-type":"application/json",
    },
    method:"DELETE"
});
console.log(response);
switch(response.status){
case 200 : {
    if(response.ok)
    alert(`${response.text}`)
    return true;
}
case 400 : {
    alert(`Client error: ${await response.text()}`);
    return false;
}
default : {

    alert(`Server error: ${await response.text()}`);
    return false;
}
}
}

//predstava

async dodajPredstavu(predstava)
{
var response=await fetch(`https://localhost:5001/Predstava/DodajPredstavu`,
{
    headers :
    {
        Accept:"application/json",
        "Content-type":"application/json",
    },
    method:"POST",
    body:JSON.stringify(predstava)
});
switch(response.status){
    case 200: {
        alert(`${ response.text}`);
        return true;
    }
    case 400:{
        alert(`Client error: ${await response.text()}`);
        return false;
    }
    default:{
        alert(`Server error: ${await response.text()}`);
        return false;
    }
}
}

async vratiSvePredstave()
{

let response=await fetch(`https://localhost:5001/Predstava/VratiSvePredstave`);
switch(response.status)
{
    case 200:{
        if(response.ok)
        {
            let data=await response.json();
            
                var lista=[];
                data.forEach(element =>
                {
                   const r=new predstava(element.id,element.imePredstave,element.trajanje); 
                    lista.push(r);               
                });
                return lista;
            }
        }
    }
}

async izbrisiPredstavu(idpredstave)
{
    var idpredstavee=parseInt(idpredstave);
var response = await fetch(`https://localhost:5001/Predstava/ObrisiPredstavu/${idpredstavee}`,
{
    headers :
    {
        Accept:"application/json",
        "Content-type":"application/json",
    },
    method:"DELETE"
});
switch(response.status){
case 200 : {
    alert(`${response.text}`)
    return true;
}
case 400 : {
    alert(`Client error: ${await response.text()}`);
    return false;
}
default : {
    alert(`Server error: ${await response.text()}`);
    return false;
}
}
}

//glumac

async dodajGlumca(glumac)
{
var response=await fetch(`https://localhost:5001/Glumac/DodajGlumca`,
{
    headers :
    {
        Accept:"application/json",
        "Content-type":"application/json",
    },
    method : "POST",
    body:JSON.stringify(glumac)
});
switch(response.status){
    case 200: {
        alert(`${response.text}`);
        return true;
    }
    case 400:{
        alert(`Client error: ${await response.text()}`);
        return false;
    }
    default:{
        alert(`Server error: ${await response.text()}`);
        return false;
    }
}
}

async vratiSveGlumce()
{
    let response=await fetch(`https://localhost:5001/Glumac/VratiGlumce`);
    switch(response.status)
        {
            case 200:
            {
                if(response.ok)
                {
                    let data=await response.json();
                    
                        var lista=[];
                        data.forEach(element =>
                        {
                           const r=new glumac(element.id,element.imeGlumca,element.prezimeGlumca,element.godineGlumca); 
                            lista.push(r);             
                        });
                        return lista;
                }
            }
        }
}
async vratiGlumca(idglumca)
{
        var idglumcaa=parseInt(idglumca);
    var response=await fetch(`https://localhost:5001/Glumac/VratiGlumca/${idglumcaa}`,
    {
        headers :
        {
            Accept:"application/json",
            "Content-type":"application/json",
        },
        method:"GET"
    });
    switch(response.status)
    {
        case 200 : 
        {      
            if(response.ok)
                {
                    let data=await response.json();
                    
                        var lista=[];
                        data.forEach(element =>
                        {
                           const r=new Uloge(element.imeGlumca,element.prezimeGlumca,element.godineGlumca,element.imePredstave,element.imeUloge);
                            lista.push(r);             
                        });
                        return lista;
                }
        }
        case 400 : 
        {
            alert(`Client error: ${await response.text()}`);
            return false;
        }
        default : 
        {
            alert(`Server error: ${await response.text()}`);
            return false;
        }
    }
}

async izbrisiGlumca(idglumca)
{
    var idglumcaa=parseInt(idglumca);
    var response = await fetch(`https://localhost:5001/Glumac/izbrisiGlumca/${idglumcaa}`,
    {
        headers :
        {
            Accept:"application/json",
            "Content-type":"application/json",
        },
        method:"DELETE"
    });
    switch(response.status)
    {
        case 200 : 
        {
            alert(`${response.text}`)
            return true;
        }
        case 400 : 
        {
            alert(`Client error: ${await response.text()}`);
            return false;
        }
        default : 
        {
            alert(`Server error: ${await response.text()}`);
            return false;
        }
    }
}

//uloge

async dodajUlogu(idglumce,idpredstave,imeuloge)
{
    var idglumcee=parseInt(idglumce);
    var idpredstavee=parseInt(idpredstave);
    var response=await fetch(`https://localhost:5001/Predstava/DodajUlogu/${idglumcee}/${idpredstavee}/${imeuloge}`,
    {
        headers :
        {
            Accept:"application/json",
            "Content-type":"application/json",
        },
        method:"POST",
    });
    switch(response.status){
        case 200: {
            alert(`${response.text}`);
            return true;
        }
        case 400:{
            alert(`Client error: ${await response.text()}`);
            return false;
        }
        default:{
            alert(`Server error: ${await response.text()}`);
            return false;
        }
    }
}

async vratiGlumceIzPredstave(idpredstave)
{
var idpredstavee=parseInt(idpredstave);
var response = await fetch(`https://localhost:5001/Predstava/VratiGlumceIzPredstave/${idpredstavee}`,
    {
        headers :
        {
            Accept:"application/json",
            "Content-type":"application/json",
        },
        method:"GET"
    });
    
    switch(response.status)
    {
        case 200 : 
        {      
            if(response.ok)
                {
                    let data=await response.json();
                    
                        var lista=[];
                        data.forEach(element =>
                        {
                           const r=new Uloge(element.imeGlumca,element.prezime,element.godine,element.imePredstave,element.imeUloge);
                            lista.push(r);  
                                    
                        });
                        return lista;
                }
        }
        case 400 : 
        {
            alert(`Client error: ${await response.text()}`);
            return false;
        }
        default : 
        {
            alert(`Server error: ${await response.text()}`);
            return false;
        }
    }
   
}

//predstave u pozoristima

async dodajPredstavuUPozoriste(idpredstave,idpozorista)
{
    var idpredstavee=parseInt(idpredstave);
    var idpozoristaa=parseInt(idpozorista);

var response=await fetch(`https://localhost:5001/Pozoriste/DodajPredstavuUPozoriste/${idpredstavee}/${idpozoristaa}`,
{
    headers:
    {
        Accept:"application/json",
        "Content-type":"application/json",
    },
    method:"POST",
});
switch(response.status){
    case 200: {
        alert(`${response.text}`);
        return true;
    }
    case 400:{
        alert(`Client error: ${await response.text()}`);
        return false;
    }
    default:{
        alert(`Server error: ${await response.text()}`);
        return false;
    }
}
}

async vratiSvePredstaveIzPozorista(idpozorista)
{
        var idpozoristaa=parseInt(idpozorista);
    var response=await fetch(`https://localhost:5001/Pozoriste/VratiSvePredstaveIzPozorista/${idpozoristaa}`,
    {
        headers :
        {
            Accept:"application/json",
            "Content-type":"application/json",
        },
        method:"GET"
    });
    switch(response.status)
    {
        case 200 : 
        {      
            if(response.ok)
                {
                    let data=await response.json();
                    
                        var lista=[];
                        data.forEach(element =>
                        {
                        const r=new PredstaveUPozoristu(element.id,element.imePozorista,element.kapacitet,element.imePredstave,element.trajanje);
                            lista.push(r);      
                        });
                        return lista;
                }
        }
        case 400 : 
        {
            alert(`Client error: ${await response.text()}`);
            return false;
        }
        default : 
        {
            alert(`Server error: ${await response.text()}`);
            return false;
        }
        }
    }

}