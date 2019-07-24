using Newtonsoft.Json;

namespace InstitucionesPublicas.Models
{
    public class Estudiante
    {
        
        [JsonProperty("Id")]
        public int Id{get; set;}
        
        [JsonProperty("TipoID")]
        public string TipoId{get; set;}

        [JsonProperty("Nombre")]
        public string Nombre{get; set;}

        [JsonProperty("Grado")]
        public string Grado{get; set;}

        [JsonProperty("IdInstitucion")]
        public int IdInstitucion{get; set;}

        [JsonProperty("institucion")]
        public Institucion Institucion{get; set;}
    }
}