using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Models
{
    public class PredstaveUPozoristima
    {
        [Key]
        public int ID { get; set; }
        [JsonIgnore]
        public Predstava imePredstave { get; set; }
        [JsonIgnore]
        public Pozoriste ImePozorista { get; set; }
    }
}