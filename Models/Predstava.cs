using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Models
{
    public class Predstava
    {
        [Key]
        public int ID { get; set; }
        [Required]
        [MaxLength(50)]
        public string Ime { get; set; }
        [Required]
        [Range(5,500)]
        public int Trajanje { get; set; }
        
        public List<Uloga> ListaUloga { get; set; }
        public List<PredstaveUPozoristima> Pozorista{ get; set; }
    }
}