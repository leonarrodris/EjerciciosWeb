using Newtonsoft.Json;

namespace EstudianteItemHTTP.Models
{
public class EstudianteItem
{
[JsonProperty("id")]
public int Id { get; set; }
[JsonProperty("Nombre")]
public string Nombre { get; set; }

[JsonProperty("Telefono")]
public string Telefono { get; set; }
[JsonProperty("Correo")]
public string Correo { get; set; }
[JsonProperty("Direccion")]
public string Direccion { get; set; }
[JsonProperty("RH")]
public string RH { get; set; }
[JsonProperty("Alergia")]
public string Alergia { get; set; }
}}