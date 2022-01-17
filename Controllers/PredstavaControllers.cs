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
    public class PredstavaController : ControllerBase
    {
        public DramskoDrustvoContext Context{ get; set;}

        public PredstavaController(DramskoDrustvoContext ddc)
        {
            Context=ddc;
        }
        [Route("DodajPredstavu")]
        [HttpPost]
        public async Task<ActionResult> dodajPredstavu([FromBody]Predstava p)
        {
            if ((p.Ime.Length>50)||(p.Trajanje<5||p.Trajanje>500)||string.IsNullOrWhiteSpace(p.Ime))
            return BadRequest("losi podaci");
            try
            {
                Context.Predstave.Add(p);
                await Context.SaveChangesAsync();
                return Ok("Uspesno dodata predstava");
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        [Route("IzmeniPredstavu/{idpredstave}")]
        [HttpPut]
        public async Task<ActionResult> izmeniPredstavu(int idpredstave,[FromBody]Predstava p)
        {
            try
            {
                var predstava=await Context.Predstave.Where(p=>p.ID==idpredstave).FirstOrDefaultAsync();
                if(predstava!=null)
                {
                    predstava.Ime=p.Ime;
                    predstava.Trajanje=p.Trajanje;
                    await Context.SaveChangesAsync();
                    return Ok(predstava);
                }
            else return BadRequest("ne postojeci predstava");
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        [Route("ObrisiPredstavu/{id}")]
        [HttpDelete]
        public async Task<ActionResult> obrisiPredstavu(int id)
        {
            try
            {
                var predstava=Context.Predstave.Where(p=>p.ID==id).FirstOrDefault();
                if(predstava!=null)
                {
                    var predstaveupozoristime= await Context.PredstaveUPozoristima.Where(p=>p.imePredstave==predstava).ToListAsync();
                    if(predstaveupozoristime!=null)
                    {
                        predstaveupozoristime.ForEach(p=>{
                            Context.Remove(p);
                        });
                    }
                    var uloge= await Context.Uloge.Where(p=>p.ImePredstave==predstava).ToListAsync();
                    if(uloge!=null)
                    {
                        uloge.ForEach(p=>{
                            Context.Remove(p);
                        });
                    }
                    Context.Remove(predstava);
                    await Context.SaveChangesAsync();
                    return Ok("Uspesno obrisana predstava");
                }
                else return BadRequest("ne postoji predstava sa tim imenom");
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        [Route("VratiSvePredstave")]
        [HttpGet]
        public async Task<ActionResult> vratiSvePredstave()
        {
             try
            {

              
                var predstava = await Context.Predstave.ToListAsync();
                if(predstava!=null)
                {
                    return Ok(predstava.Select(p=>
                    new
                    {
                        ID=p.ID,
                        ImePredstave=p.Ime,
                        Trajanje=p.Trajanje
                    }));
                }
                else return BadRequest("ne postojeci glumac");
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        [Route("VratiGlumceIzPredstave/{idpredstave}")]
        [HttpGet]
        public async Task<ActionResult> vratiGlumca(int idpredstave)
        {
            try
            {
                var predstave =Context.Uloge
                    .Include(p=>p.ImePredstave)
                    .Include(p=>p.ImeGlumca)
                    .Where(p=>(p.ImePredstave.ID==idpredstave));

              
              
                var predstava = await predstave.ToListAsync();
                if(predstava!=null)
                {
                    return Ok(predstava.Select(p=>
                        new{
                            ID=p.ID,
                            ImeGlumca=p.ImeGlumca.Ime,
                            Prezime=p.ImeGlumca.Prezime,
                            Godine=p.ImeGlumca.Godine,
                            ImePredstave=p.ImePredstave.Ime,
                            ImeUloge=p.ImeUloge
                        }
                    ).ToList());
                }
                else return BadRequest("ne postojeci glumac");
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        [Route("DodajUlogu/{idglumca}/{idpredstave}/{imeuloge}")]
        [HttpPost]
        public async Task<ActionResult> dodajUloge(int idglumca,int idpredstave,string imeuloge)
        {
            try
            {
                var glumac = await Context.Glumci.Where(p=>p.ID==idglumca).FirstOrDefaultAsync();
                var predstava = await Context.Predstave.Where(p=>(p.ID==idpredstave)).FirstOrDefaultAsync();
                if(glumac!=null || predstava!=null)
                {
                Uloga u=new Uloga
                {
                    ImeGlumca=glumac,
                    ImePredstave=predstava,
                    ImeUloge=imeuloge                    
                };
                
                Context.Uloge.Add(u);
                await Context.SaveChangesAsync();
                return Ok("Uspesno dodata uloga");
                }
                else return BadRequest("nije pronasao podatkke");
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}