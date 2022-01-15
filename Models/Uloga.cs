using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Models
{
    public class Uloga
    {
        [Key]
        public int ID { get; set; }
        public string ImeUloge { get; set; }
        [JsonIgnore]
        public Glumac ImeGlumca { get; set; }
        [JsonIgnore]
        public Predstava ImePredstave { get; set; }
    }
}