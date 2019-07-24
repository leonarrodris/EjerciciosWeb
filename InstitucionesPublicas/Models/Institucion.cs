using Newtonsoft.Json;

namespace InstitucionesPublicas.Models
{
    public class Institucion
    {
        [JsonProperty("Id")]
        public int Id{get; set;}
        
        [JsonProperty("Nombre")]
        public string Nombre{get; set;}

        [JsonProperty("Cupo")]
        public int Cupo{get; set;}
    }
}