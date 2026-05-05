using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GerenciadorPresenca.Migrations
{
    public partial class TrocaConfirmadoPorNomeCrianca : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Confirmado",
                table: "Convidados");

            migrationBuilder.AddColumn<string>(
                name: "NomeCrianca",
                table: "Convidados",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "NomeCrianca",
                table: "Convidados");

            migrationBuilder.AddColumn<byte>(
                name: "Confirmado",
                table: "Convidados",
                type: "tinyint(1)",
                nullable: false,
                defaultValue: (byte)0);
        }
    }
}
