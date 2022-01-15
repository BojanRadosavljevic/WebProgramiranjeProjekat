using Microsoft.EntityFrameworkCore;

namespace Models
{
    public class DramskoDrustvoContext:DbContext
    {
        public DbSet<Glumac> Glumci { get; set; }
        public DbSet<Pozoriste> Pozorista{get;set;}
        public DbSet<Predstava> Predstave{get;set;}
        public DbSet<Uloga> Uloge { get; set; }
        public DbSet<PredstaveUPozoristima> PredstaveUPozoristima{get; set;}
         public DramskoDrustvoContext(DbContextOptions option):base(option){}

    }
   
}