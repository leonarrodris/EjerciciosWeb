using Microsoft.EntityFrameworkCore;
namespace InstitucionesPublicas.Models
{
public class DbInstitucionesContext : DbContext
{
public DbInstitucionesContext(DbContextOptions<DbInstitucionesContext> options) :
base(options)
{
}

public DbSet<Estudiante> Estudiantes { get; set; }
public DbSet<Institucion> Instituciones { get; set; }
}
}