using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PacialLicor.Models;
namespace PacialLicor.controllers
{

[Route("api/[controller]")]
[ApiController]
public class ImpuestoController : ControllerBase
{
private readonly ImpuestoContext _context;
public ImpuestoController(ImpuestoContext context)
{
_context = context;
if (_context.Impuestos.Count() == 0)
{
_context.Impuestos.Add(new Impuesto { Id = 1, NProducto ="Ron Añejo", GAlcohol = 35 });
_context.Impuestos.Add(new Impuesto { Id = 2, NProducto ="Ron Añejo", GAlcohol = 35});
_context.SaveChanges();
}
}

[HttpGet]
public async Task<ActionResult<IEnumerable<Impuesto>>> GetImpuestoItems()
{
return await _context.Impuestos.ToListAsync();
}


[HttpPost]
public async Task<ActionResult<Impuesto>> PostTaskItem(Impuesto item)
{
_context.Impuestos.Add(item);
await _context.SaveChangesAsync();
return CreatedAtAction(nameof(GetImpuestoItems), new { id = item.Id }, item);
}
}
}