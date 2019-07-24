using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ReservaSharpHTTP.Models;
namespace ReservaSharpHTTP.Controllers
{
[Route("api/[controller]")]
[ApiController]
public class ReservaController : ControllerBase
{
private readonly ReservaContext _context;
public ReservaController(ReservaContext context)
{
_context = context;
if (_context.ReservaItems.Count() == 0)
{
// Crea un nuevo item si la coleccion esta vacia,
// lo que significa que no puedes borrar todos los Items.
_context.ReservaItems.Add(new ReservaItem { Identificacion = "1123", Nombre = "Pedro PicaPiedra", NSillas = "2", Tipo= true });
_context.ReservaItems.Add(new ReservaItem { Identificacion = "2123", Nombre = "Vilma Picapiedra", NSillas = "2", Tipo = true });
_context.SaveChanges();
}
}

// Aquí, despues del constructor de la clase, irán los Métodos HTTP GET,POST, DELETE, PUT
[HttpGet]
public async Task<ActionResult<IEnumerable<ReservaItem>>> GetReservaItems()
{
return await _context.ReservaItems.ToListAsync();
}

[HttpGet("{Id}")]
public async Task<ActionResult<ReservaItem>> GetReservaItem(int id)
{
var reservaItem = await _context.ReservaItems.FindAsync(id);
if (reservaItem == null)
{
return NotFound();
}
return reservaItem;
}

// POST: api/Task
[HttpPost]
public async Task<ActionResult<ReservaItem>> PostReservaItem(ReservaItem item)
{
_context.ReservaItems.Add(item);
await _context.SaveChangesAsync();
return CreatedAtAction(nameof(GetReservaItem), new { id = item.Id }, item);
}

// PUT: api/Task/5
[HttpPut("{Id}")]
public async Task<IActionResult> PutReservaItem(string id, ReservaItem
item)
{
if (id != item.Id)
{
return BadRequest();
}
_context.Entry(item).State = EntityState.Modified;
await _context.SaveChangesAsync();
return NoContent();
}

// DELETE: api/Todo/5
[HttpDelete("{Id}")]
public async Task<IActionResult> DeleteReservaItem(string id)
{
var ReservaItem = await
_context.ReservaItems.FindAsync(id);
if (ReservaItem == null)
{
return NotFound();
}

_context.ReservaItems.Remove(ReservaItem);
await _context.SaveChangesAsync();
return NoContent();
}
}
}