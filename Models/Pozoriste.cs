using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
namespace Models
{
    public class Pozoriste
    {
        [Key]
        public int ID { get; set; }
        [Required]
        [MaxLength(50)]
        public string Ime { get; set; }
        [Required]
        [Range(5,100)]
        public int Kapacitet { get; set; }
        public List<PredstaveUPozoristima> ListaPredtava { get; set; }

        public Pozoriste()
        {
            ListaPredtava=new List<PredstaveUPozoristima>();
        }
    }
}