using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EstudianteItemHTTP.Models;
namespace EstudianteItemHTTP.Controllers
{
[Route("api/[controller]")]
[ApiController]
public class EstudianteController : ControllerBase
{
private readonly EstudianteContext _context;
public EstudianteController(EstudianteContext context)
{
_context = context;
if (_context.EstudianteItems.Count() == 0)
{
// Crea un nuevo item si la coleccion esta vacia,
// lo que significa que no puedes borrar todos los Items.
_context.EstudianteItems.Add(new EstudianteItem { Id = 1, Nombre = "Alejandra", Direccion = "Calle 5b #20-23",Telefono = "31231231", Correo = "Alejandra@Corrio.es",RH = "A+",Alergia = "No Alergias" });
_context.EstudianteItems.Add(new EstudianteItem { Id = 2, Nombre = "Alejandra", Direccion = "Calle 5b #20-23",Telefono = "31231231", Correo = "Alejandra@Corrio.es",RH = "A+",Alergia = "No Alergias" });
_context.SaveChanges();
}
}

// Aquí, despues del constructor de la clase, irán los Métodos HTTP GET,POST, DELETE, PUT
[HttpGet]
public async Task<ActionResult<IEnumerable<EstudianteItem>>> GetEstudianteItems()
{
return await _context.EstudianteItems.ToListAsync();
}

[HttpGet("{id}")]
public async Task<ActionResult<EstudianteItem>> GetEstudianteItem(int id)
{
var EstudianteItem = await _context.EstudianteItems.FindAsync(id);
if (EstudianteItem == null)
{
return NotFound();
}
return EstudianteItem;
}

[HttpPost]
public async Task<ActionResult<EstudianteItem>> PostEstudianteItem(EstudianteItem item)
{
_context.EstudianteItems.Add(item);
await _context.SaveChangesAsync();
return CreatedAtAction(nameof(GetEstudianteItem), new { id = item.Id }, item);
}


[HttpPut("{id}")]
public async Task<IActionResult> PutEstudianteItem(int id, EstudianteItem item)
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
public async Task<IActionResult> DeleteEstudianteItem(int id)
{
var EstudianteItem = await
_context.EstudianteItems.FindAsync(id);
if (EstudianteItem == null)
{
return NotFound();
}

_context.EstudianteItems.Remove(EstudianteItem);
await _context.SaveChangesAsync();
return NoContent();
}
}
}