using Microsoft.EntityFrameworkCore;
namespace ReservaSharpHTTP.Models
{
public class ReservaContext : DbContext
{
public ReservaContext(DbContextOptions<ReservaContext> options) :
base(options)
{
}
public DbSet<ReservaItem> ReservaItems { get; set; }
}
}