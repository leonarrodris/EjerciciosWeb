using Newtonsoft.Json;

namespace ReservaSharpHTTP.Models
{
    public class ReservaItem
    {
        [JsonProperty("Id")]
        public string Id{get; set;}

        [JsonProperty("Identificacion")]
        public string Identificacion{get; set;}
        
        [JsonProperty("Nombre")]
        public string Nombre{get; set;}

        [JsonProperty("NSillas")]
        public string NSillas{get; set;}

        [JsonProperty("Tipo")]
        public bool Tipo{get; set;}


    }
}


