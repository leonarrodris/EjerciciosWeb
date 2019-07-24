using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AcudienteItemHTTP.Models;

namespace AcudienteItemHTTP.Controllers
{
[Route("api/[controller]")]
[ApiController]
public class AcudienteController : ControllerBase
{
private readonly AcudienteContext _context;
public AcudienteController(AcudienteContext context)
{
_context = context;
if (_context.AcudienteItems.Count() == 0)
{
// Crea un nuevo item si la coleccion esta vacia,
// lo que significa que no puedes borrar todos los Items.
_context.AcudienteItems.Add(new AcudienteItem { Id = 1, Nombre = "Alejandra",Apellido="Rosales", Direccion = "Calle 5b #20-23",Telefono = "31231231", Correo = "Alejandra@Corrio.es"});
_context.AcudienteItems.Add(new AcudienteItem { Id = 2, Nombre = "Alejandra",Apellido="Valenzuela", Direccion = "Calle 5b #20-23",Telefono = "31231231", Correo = "Alejandra@Corrio.es"});
_context.SaveChanges();
}
}

// Aquí, despues del constructor de la clase, irán los Métodos HTTP GET,POST, DELETE, PUT
[HttpGet]
public async Task<ActionResult<IEnumerable<AcudienteItem>>> GetAcudienteItems()
{
return await _context.AcudienteItems.ToListAsync();
}

[HttpGet("{id}")]
public async Task<ActionResult<AcudienteItem>> GetAcudienteItem(int id)
{
var AcudienteItem = await _context.AcudienteItems.FindAsync(id);
if (AcudienteItem == null)
{
return NotFound();
}
return AcudienteItem;
}

[HttpPost]
public async Task<ActionResult<AcudienteItem>> PostEstudianteItem(AcudienteItem item)
{
_context.AcudienteItems.Add(item);
await _context.SaveChangesAsync();
return CreatedAtAction(nameof(GetAcudienteItem), new { id = item.Id }, item);
}


[HttpPut("{id}")]
public async Task<IActionResult> PutAcudienteItem(int id, AcudienteItem item)
{
if (id != item.Id)
{
return BadRequest();
}
_context.Entry(item).State = EntityState.Modified;
await _context.SaveChangesAsync();
return NoContent();
}

[HttpDelete("{id}")]
public async Task<IActionResult> DeleteAcudienteItem(int id)
{
var AcudienteItem = await
_context.AcudienteItems.FindAsync(id);
if (AcudienteItem == null)
{
return NotFound();
}

_context.AcudienteItems.Remove(AcudienteItem);
await _context.SaveChangesAsync();
return NoContent();
}
}
}