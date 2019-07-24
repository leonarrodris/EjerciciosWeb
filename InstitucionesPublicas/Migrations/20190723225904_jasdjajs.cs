using Microsoft.EntityFrameworkCore.Migrations;

namespace InstitucionesPublicas.Migrations
{
    public partial class jasdjajs : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "InstitucionId",
                table: "Estudiantes",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Estudiantes_InstitucionId",
                table: "Estudiantes",
                column: "InstitucionId");

            migrationBuilder.AddForeignKey(
                name: "FK_Estudiantes_Instituciones_InstitucionId",
                table: "Estudiantes",
                column: "InstitucionId",
                principalTable: "Instituciones",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Estudiantes_Instituciones_InstitucionId",
                table: "Estudiantes");

            migrationBuilder.DropIndex(
                name: "IX_Estudiantes_InstitucionId",
                table: "Estudiantes");

            migrationBuilder.DropColumn(
                name: "InstitucionId",
                table: "Estudiantes");
        }
    }
}
