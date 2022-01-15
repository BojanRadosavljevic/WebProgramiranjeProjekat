using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models;

namespace WEBProjekat.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PozoristeController : ControllerBase
    {
        public DramskoDrustvoContext Context{ get; set;}

        public PozoristeController(DramskoDrustvoContext ddc)
        {
            Context=ddc;
        }
        [Route("Dodaj_pozoriste")]
        [HttpPost]
        public async Task<ActionResult> dodajPozoriste([FromBody] Pozoriste pozoriste)
        {
            if(pozoriste.Ime.Length>50||(pozoriste.Kapacitet<5||pozoriste.Kapacitet>100))
                return BadRequest("losi podaci");
            try
            {
                Context.Pozorista.Add(pozoriste);
                await Context.SaveChangesAsync();
                return Ok("Uspesno dodato pozoriste");
            }
            catch(Exception e)
            {return BadRequest(e.Message);}    
        }
        [Route("DodajPredstavuUPozoriste/{idpredstave}/{idpozorista}")]
        [HttpPost]
        public async Task<ActionResult> dodajPozoriste(int idpredstave,int idpozorista)
        {
            try
            {
                var predstava=await Context.Predstave.Where(p=>p.ID==idpredstave).FirstOrDefaultAsync();
                var pozoriste=await Context.Pozorista.Where(p=>p.ID==idpozorista).FirstOrDefaultAsync();
                if(predstava!=null&&pozoriste!=null)
                {
                  PredstaveUPozoristima pup=new PredstaveUPozoristima
                {
                    imePredstave=predstava,
                    ImePozorista=pozoriste                
                };  
                Context.PredstaveUPozoristima.Add(pup);
                await Context.SaveChangesAsync();
                return Ok("uspesno ubaceno pozoriste");
                }
                return BadRequest("ne postojeca informacija sa tim imenom");
            }
            catch(Exception e)
            {return BadRequest(e.Message+e.StackTrace);}    
        }
        [Route("VratiSvaPozorista")]
        [HttpGet]
        public async Task<ActionResult> vratiSvaPozorista()
        {
            try
            {
                var pozorista = await Context.Pozorista.ToListAsync();
                if(pozorista!=null)
                {
                    return Ok(pozorista.Select(p=>
                    new{
                        ID=p.ID,
                        ImePozorista=p.Ime,
                        Kapacitet=p.Kapacitet
                    }));
                }
                else return BadRequest("ne postojece pozoriste");
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        [Route("VratiSvePredstaveIzPozorista/{idpozorista}")]
        [HttpGet]
        public async Task<ActionResult> vratiSvePredstaveIzPozorista(int idpozorista)
        {
            try
            {
                 var pozorista =Context.PredstaveUPozoristima
                    .Include(p=>p.ImePozorista)
                    .Include(p=>p.imePredstave)
                    .Where(p=>p.ImePozorista.ID==idpozorista);

              
              
                var pozoriste = await pozorista.ToListAsync();
                if(pozoriste!=null)
                {
                    return Ok(pozoriste.Select(p=>
                    new
                    {   
                        ID=p.ID,
                        ImePozorista=p.ImePozorista.Ime,
                        Kapacitet=p.ImePozorista.Kapacitet,
                        ImePredstave=p.imePredstave.Ime,
                        Trajanje=p.imePredstave.Trajanje
                    }).ToList());
                }
                else return BadRequest("ne postojeci glumac");
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        [Route("Izbrisi_pozoriste/{idpozorista}")]
        [HttpDelete]
        public async Task<ActionResult> izbrisiPozoriste(int idpozorista)
        {
            try
            {
                var pozoriste = await Context.Pozorista.Where(p=>p.ID==idpozorista).FirstOrDefaultAsync();
                if(pozoriste!=null)
                {
                    var predstave=await Context.PredstaveUPozoristima.Where(p=>p.ImePozorista==pozoriste).ToListAsync();
                    if(predstave!=null)
                    {
                        predstave.ForEach(p=>{
                            Context.Remove(p);
                        });
                    }
                    Context.Remove(pozoriste);
                    await Context.SaveChangesAsync();
                    return Ok("Uspesno obrisano pozoriste");
                }
                else return BadRequest("ne postojece pozoriste");
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}