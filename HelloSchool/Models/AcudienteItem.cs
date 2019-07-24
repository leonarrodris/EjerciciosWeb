using Newtonsoft.Json;

namespace AcudienteItemHTTP.Models
{
public class AcudienteItem
{
[JsonProperty("id")]
public int Id { get; set; }
[JsonProperty("Nombre")]
public string Nombre { get; set; }
[JsonProperty("Apellido")]
public string Apellido { get; set; }
[JsonProperty("Direccion")]
public string Direccion { get; set; }
[JsonProperty("Telefono")]
public string Telefono { get; set; }
[JsonProperty("Correo")]
public string Correo { get; set; }

}}