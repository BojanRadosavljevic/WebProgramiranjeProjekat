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
    public class GlumacController : ControllerBase
    {
        public DramskoDrustvoContext Context{ get; set;}

        public GlumacController(DramskoDrustvoContext ddc)
        {
            Context=ddc;
        }
        [Route("VratiGlumca/{idglumca}")]
        [HttpGet]
        public async Task<ActionResult> vratiGlumca(int idglumca)
        {
            try
            {
                var glumci =Context.Uloge
                    .Include(p=>p.ImeGlumca)
                    .Include(p=>p.ImePredstave)
                    .Where(p=>(p.ImeGlumca.ID==idglumca));
            
              
                var glumac = await glumci.ToListAsync();
                if(glumac!=null)
                {
                    return Ok (glumac.Select(p=>new
                    {   
                        ID=p.ID,
                        ImeGlumca=p.ImeGlumca.Ime,
                        PrezimeGlumca=p.ImeGlumca.Prezime,
                        GodineGlumca=p.ImeGlumca.Godine,
                        ImePredstave=p.ImePredstave.Ime,
                        ImeUloge=p.ImeUloge
                    }).ToList());
                }
                else return BadRequest("ne postojeci glumac");
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        [Route("VratiGlumce")]
        [HttpGet]
        public async Task<ActionResult> vratiGlumce()
        {
            
            try
            {

              
                var glumac = await Context.Glumci.ToListAsync();
                if(glumac!=null)
                {
                    return Ok(glumac.Select(p=>
                    new
                    {
                        ID=p.ID,
                        ImeGlumca=p.Ime,
                        PrezimeGlumca=p.Prezime,
                        GodineGlumca=p.Godine,
                    }).ToList());
                }
                else return BadRequest("ne postojeci glumac");
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }
       [Route("DodajGlumca")]
       [HttpPost]
       public async Task<ActionResult> dodajGlumca([FromBody] Glumac glumac)
       {
            if(glumac.Godine < 16 || glumac.Godine>100)
            return BadRequest("nevalidan broj godina glumca");
            if(string.IsNullOrWhiteSpace(glumac.Ime)&&glumac.Ime.Length<=50)
            return BadRequest("nevalidno ime glumca");
            if(string.IsNullOrWhiteSpace(glumac.Prezime)&&glumac.Prezime.Length<=50)
            return BadRequest("nevalidno prezime glumca");
            try
            {
                Context.Glumci.Add(glumac);     //dodajemo ga u nas model
                await Context.SaveChangesAsync();  //cuva podatke u bazi u pozadinskoj niti
                
                return Ok($"Uspesno dodat glumac! ID je: {glumac.ID}");
            }
            catch(Exception e)
            {
                
                return BadRequest(e.Message);
            }  
       }
        [Route("IzbrisiGlumca/{idglumca}")]
       [HttpDelete]
        public async Task<ActionResult> IzbrisiGlumca(int idglumca)
        {
           try
            {
                var glumac = Context.Glumci.Where(g=>(g.ID==idglumca)).FirstOrDefault();
                
                if(glumac != null)
                {
                    var uloge = await Context.Uloge.Where(p=>p.ImeGlumca==glumac).ToListAsync();
                    if(uloge!=null)
                    {
                    uloge.ForEach(p=>{
                        Context.Remove(p);
                    });
                    }
                    Context.Remove(glumac);

                    await Context.SaveChangesAsync();
                    return Ok("Uspesno brisanje glumca");
                }
                else {return BadRequest("Glumac sa imenom nije pronadjen");}
            }
            catch(Exception e)
            {
                return BadRequest(e.Message+ e.StackTrace);
            }
        }
     }
}