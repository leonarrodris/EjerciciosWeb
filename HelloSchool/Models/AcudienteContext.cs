using Microsoft.EntityFrameworkCore;
namespace AcudienteItemHTTP.Models
{
public class AcudienteContext : DbContext
{
public AcudienteContext(DbContextOptions<AcudienteContext> options) :
base(options)
{
}

public DbSet<AcudienteItem> AcudienteItems { get; set; }
}
}