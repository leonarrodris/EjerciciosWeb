using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using InstitucionesPublicas.Models;
namespace InstitucionesPublicas.Controllers
{
[Route("api/[controller]")]
[ApiController]
public class InstitucionController : ControllerBase
{
private readonly DbInstitucionesContext _context;
public InstitucionController(DbInstitucionesContext context)
{
_context = context;
if (_context.Instituciones.Count() == 0)
{
// Crea un nuevo item si la coleccion esta vacia,
// lo que significa que no puedes borrar todos los Items.
_context.Instituciones.Add(new Institucion { Nombre = "IE NACIONAL LOPERENA", Cupo = 10 });
_context.Instituciones.Add(new Institucion { Nombre = "PRUDENCIA DAZA", Cupo = 10 });
_context.Instituciones.Add(new Institucion { Nombre = "SAN JUAQUIN", Cupo = 8 });
_context.Instituciones.Add(new Institucion { Nombre = "FRANSISCO MOLINA SANCHEZ", Cupo = 8 });
_context.SaveChanges();
}
}

// Aquí, despues del constructor de la clase, irán los Métodos HTTP GET,POST, DELETE, PUT
[HttpPost]
public async Task<ActionResult<Estudiante>> PostEstudiantes(Estudiante newEstudiante)
{
var estudiante= await _context.Estudiantes.FindAsync(newEstudiante.Id);
var institucion= await _context.Instituciones.FindAsync(newEstudiante.IdInstitucion);

if (estudiante != null)
{
return BadRequest();
}
else 
{
    if(institucion== null )
    {
        return BadRequest();
    }
    else
    {
        if(institucion.Cupo==0)
        {
            return BadRequest();
        }
        else{
            newEstudiante.Institucion=institucion;
            institucion.Cupo--;
            _context.Estudiantes.Add(newEstudiante);
            
           await _context.SaveChangesAsync();
           return CreatedAtAction(nameof(GetEstudiantes), new { id = newEstudiante.Id }, newEstudiante);
            
        }
    }

}
}
[HttpGet]
public async Task<ActionResult<IEnumerable<Estudiante>>> GetEstudiantes()
{


return await _context.Estudiantes.Include(d=>d.Institucion).ToListAsync();

}

[HttpGet("{Id}")]
public async Task<ActionResult<Estudiante>> GetEstudiantes(int id)
{
var estudiante = await _context.Estudiantes.FindAsync(id);
if (estudiante == null)
{
return NotFound();
}
return estudiante;
}

}



   
}
 
