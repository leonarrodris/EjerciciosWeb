 using Newtonsoft.Json;
namespace PacialLicor.Models
{
 public class Impuesto
        {
            [JsonProperty("id")]
            public int Id { get; set; }
            [JsonProperty("NProducto")]
            public string NProducto { get; set; }
            [JsonProperty("GAlcohol")]
            public decimal GAlcohol { get; set; }
            [JsonProperty("ValorPagar")]
            public decimal TotalPagar { get  {return (GAlcohol <= 35 ? GAlcohol * 200 : GAlcohol * 400); } }
        }
}