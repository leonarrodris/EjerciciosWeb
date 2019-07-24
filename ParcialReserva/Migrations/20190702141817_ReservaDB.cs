using Microsoft.EntityFrameworkCore.Migrations;

namespace ParcialReserva.Migrations
{
    public partial class ReservaDB : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ReservaItems",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Identificacion = table.Column<string>(nullable: true),
                    Nombre = table.Column<string>(nullable: true),
                    NSillas = table.Column<string>(nullable: true),
                    Tipo = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ReservaItems", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ReservaItems");
        }
    }
}
