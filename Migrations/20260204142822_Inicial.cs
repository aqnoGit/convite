using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GerenciadorPresenca.Migrations
{
    /// <inheritdoc />
    public partial class Inicial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            // MySQL: Configuração de charset do banco
            // migrationBuilder.AlterDatabase()
            //     .Annotation("MySql:CharSet", "utf8mb4");

            // SQL Server: Não precisa de configuração especial de banco
            migrationBuilder.AlterDatabase();

            migrationBuilder.CreateTable(
                name: "Convidados",
                columns: table => new
                {
                    // MySQL: Auto incremento com MySqlValueGenerationStrategy
                    // Id = table.Column<int>(type: "int", nullable: false)
                    //     .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),

                    // SQL Server: Identity com seed 1 e incremento 1
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),

                    // MySQL: longtext com charset utf8mb4
                    // Nome = table.Column<string>(type: "longtext", nullable: true)
                    //     .Annotation("MySql:CharSet", "utf8mb4"),

                    // SQL Server: nvarchar(max) sem charset
                    Nome = table.Column<string>(type: "nvarchar(max)", nullable: true),

                    // MySQL: tinyint(1) para boolean
                    // Confirmado = table.Column<bool>(type: "tinyint(1)", nullable: false)

                    // SQL Server: bit para boolean
                    Confirmado = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Convidados", x => x.Id);
                });
            // MySQL: Charset da tabela
            // .Annotation("MySql:CharSet", "utf8mb4");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Convidados");
        }
    }
}