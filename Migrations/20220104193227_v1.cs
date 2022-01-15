using Microsoft.EntityFrameworkCore.Migrations;

namespace DramskoDrustvo.Migrations
{
    public partial class v1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Glumci",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Ime = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Prezime = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Godine = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Glumci", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Pozorista",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Ime = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Kapacitet = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pozorista", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Predstave",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Ime = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Trajanje = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Predstave", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "PredstaveUPozoristima",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    imePredstaveID = table.Column<int>(type: "int", nullable: true),
                    ImePozoristaID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PredstaveUPozoristima", x => x.ID);
                    table.ForeignKey(
                        name: "FK_PredstaveUPozoristima_Pozorista_ImePozoristaID",
                        column: x => x.ImePozoristaID,
                        principalTable: "Pozorista",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_PredstaveUPozoristima_Predstave_imePredstaveID",
                        column: x => x.imePredstaveID,
                        principalTable: "Predstave",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Uloge",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ImeUloge = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ImeGlumcaID = table.Column<int>(type: "int", nullable: true),
                    ImePredstaveID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Uloge", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Uloge_Glumci_ImeGlumcaID",
                        column: x => x.ImeGlumcaID,
                        principalTable: "Glumci",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Uloge_Predstave_ImePredstaveID",
                        column: x => x.ImePredstaveID,
                        principalTable: "Predstave",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_PredstaveUPozoristima_ImePozoristaID",
                table: "PredstaveUPozoristima",
                column: "ImePozoristaID");

            migrationBuilder.CreateIndex(
                name: "IX_PredstaveUPozoristima_imePredstaveID",
                table: "PredstaveUPozoristima",
                column: "imePredstaveID");

            migrationBuilder.CreateIndex(
                name: "IX_Uloge_ImeGlumcaID",
                table: "Uloge",
                column: "ImeGlumcaID");

            migrationBuilder.CreateIndex(
                name: "IX_Uloge_ImePredstaveID",
                table: "Uloge",
                column: "ImePredstaveID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PredstaveUPozoristima");

            migrationBuilder.DropTable(
                name: "Uloge");

            migrationBuilder.DropTable(
                name: "Pozorista");

            migrationBuilder.DropTable(
                name: "Glumci");

            migrationBuilder.DropTable(
                name: "Predstave");
        }
    }
}
