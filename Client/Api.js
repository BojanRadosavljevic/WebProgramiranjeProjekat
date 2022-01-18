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
            alert(`Uspesno dodato pozoriste`);
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
async izmeniPozoriste(idpozorista,pozoriste)
{
    var idpozoristaa=parseInt(idpozorista);
    try
    {
        let response=await fetch(`https://localhost:5001/Pozoriste/IzmeniPozoriste/${idpozoristaa}`,
        {
            headers:
            {
                Accept:"application/json",
                "Content-type":"application/json",
            },
            method:"PUT",
            body: JSON.stringify(pozoriste)
        });
        switch(response.status)
        {
            case 200:
                {
                    alert(`Uspesno promenjeno pozoriste`);
                    return true;
                }
            case 200:
                {
                    alert(`Client error: ${await response.text()}`);
                    return false;
                }
            default: 
                {
                    alert(`Server error: ${await response.text()}`);
                    return false;
                }
        }
    }
    catch(error)
    {
        console.error(error);
        return null;
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
switch(response.status){
case 200 : {
    if(response.ok)
    alert(`uspesno izbrisano pozoriste`)
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
        alert(`uspesno dodata predstava`);
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
    alert(`uspesno izbriasana predstava`)
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
async izmeniPredstavu(idpredstava,predstava)
{
    var idpredstavaa=parseInt(idpredstava);
    try
    {
        let response=await fetch(`https://localhost:5001/Predstava/IzmeniPredstavu/${idpredstavaa}`,
        {
            headers:
            {
                Accept:"application/json",
                "Content-type":"application/json",
            },
            method:"PUT",
            body: JSON.stringify(predstava)
        });
        switch(response.status)
        {
            case 200:
                {
                    alert(`Uspesno promenjena predstava`);
                    return true;
                }
            case 200:
                {
                    alert(`Client error: ${await response.text()}`);
                    return false;
                }
            default: 
                {
                    alert(`Server error: ${await response.text()}`);
                    return false;
                }
        }
    }
    catch(error)
    {
        console.error(error);
        return null;
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
        alert(`uspesno dodat glumac`);
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
            alert(`uspesno izbrisan glumac`)
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
async izmeniGlumca(idglumca,glumac)
{
    var idglumcaa=parseInt(idglumca);
    try
    {
        let response=await fetch(`https://localhost:5001/Glumac/IzmeniGlumca/${idglumcaa}`,
        {
            headers:
            {
                Accept:"application/json",
                "Content-type":"application/json",
            },
            method:"PUT",
            body: JSON.stringify(glumac)
        });
        switch(response.status)
        {
            case 200:
                {
                    alert(`Uspesno promenjen glumac`);
                    return true;
                }
            case 200:
                {
                    alert(`Client error: ${await response.text()}`);
                    return false;
                }
            default: 
                {
                    alert(`Server error: ${await response.text()}`);
                    return false;
                }
        }
    }
    catch(error)
    {
        console.error(error);
        return null;
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
            alert(`uspesno dodata uloga glumcu`);
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
        alert(`uspesno dodata predstava u pozoriste`);
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