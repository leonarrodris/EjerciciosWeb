using Microsoft.EntityFrameworkCore;
namespace EstudianteItemHTTP.Models
{
public class EstudianteContext : DbContext
{
public EstudianteContext(DbContextOptions<EstudianteContext> options) :
base(options)
{
}
public DbSet<EstudianteItem> EstudianteItems { get; set; }
}
}