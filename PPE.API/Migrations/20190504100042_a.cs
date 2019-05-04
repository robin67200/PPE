using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace PPE.API.Migrations
{
    public partial class a : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Critere1",
                columns: table => new
                {
                    ID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Bareme = table.Column<float>(type: "REAL", nullable: false),
                    C1 = table.Column<string>(type: "TEXT", nullable: false),
                    C2 = table.Column<string>(type: "TEXT", nullable: false),
                    C3 = table.Column<string>(type: "TEXT", nullable: false),
                    C4 = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Critere1", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Critere2",
                columns: table => new
                {
                    ID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Bareme = table.Column<float>(type: "REAL", nullable: false),
                    C1 = table.Column<string>(type: "TEXT", nullable: false),
                    C2 = table.Column<string>(type: "TEXT", nullable: false),
                    C3 = table.Column<string>(type: "TEXT", nullable: false),
                    C4 = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Critere2", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Jury",
                columns: table => new
                {
                    ID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Teacher1 = table.Column<string>(type: "TEXT", nullable: false),
                    Teacher2 = table.Column<string>(type: "TEXT", nullable: false),
                    Teacher3 = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Jury", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Penalite",
                columns: table => new
                {
                    ID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Total = table.Column<float>(type: "INTEGER", nullable: false),
                    P1 = table.Column<int>(type: "INTEGER", nullable: false),
                    P2 = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Penalite", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Student",
                columns: table => new
                {
                    ID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    FirstName = table.Column<string>(type: "TEXT", nullable: false),
                    Mail = table.Column<string>(type: "TEXT", nullable: false),
                    Section = table.Column<string>(type: "TEXT", nullable: false),
                    Matiere = table.Column<string>(type: "TEXT", nullable: false),
                    StyleEval = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Student", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Phase",
                columns: table => new
                {
                    ID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    NoteFinale = table.Column<float>(type: "REAL", nullable: false),
                    Critere1ID1 = table.Column<int>(nullable: true),
                    Critere1ID = table.Column<int>(type: "INTEGER", nullable: false),
                    Critere2ID1 = table.Column<int>(nullable: true),
                    Critere2ID = table.Column<int>(type: "INTEGER", nullable: false),
                    penaliteID = table.Column<int>(nullable: true),
                    Remarques = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Phase", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Phase_Critere1_Critere1ID",
                        column: x => x.Critere1ID,
                        principalTable: "Critere1",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Phase_Critere1_Critere1ID1",
                        column: x => x.Critere1ID1,
                        principalTable: "Critere1",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Phase_Critere2_Critere2ID",
                        column: x => x.Critere2ID,
                        principalTable: "Critere2",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Phase_Critere2_Critere2ID1",
                        column: x => x.Critere2ID1,
                        principalTable: "Critere2",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Phase_Penalite_Critere2ID",
                        column: x => x.Critere2ID,
                        principalTable: "Penalite",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Phase_Penalite_penaliteID",
                        column: x => x.penaliteID,
                        principalTable: "Penalite",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Evaluation",
                columns: table => new
                {
                    ID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    PhaseId = table.Column<int>(type: "INTEGER", nullable: false),
                    Date = table.Column<DateTime>(type: "INTEGER", nullable: false),
                    EtudiantId = table.Column<int>(type: "INTEGER", nullable: false),
                    JuryId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Evaluation", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Evaluation_Student_EtudiantId",
                        column: x => x.EtudiantId,
                        principalTable: "Student",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Evaluation_Jury_JuryId",
                        column: x => x.JuryId,
                        principalTable: "Jury",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Evaluation_Phase_PhaseId",
                        column: x => x.PhaseId,
                        principalTable: "Phase",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Evaluation_EtudiantId",
                table: "Evaluation",
                column: "EtudiantId");

            migrationBuilder.CreateIndex(
                name: "IX_Evaluation_JuryId",
                table: "Evaluation",
                column: "JuryId");

            migrationBuilder.CreateIndex(
                name: "IX_Evaluation_PhaseId",
                table: "Evaluation",
                column: "PhaseId");

            migrationBuilder.CreateIndex(
                name: "IX_Phase_Critere1ID",
                table: "Phase",
                column: "Critere1ID");

            migrationBuilder.CreateIndex(
                name: "IX_Phase_Critere1ID1",
                table: "Phase",
                column: "Critere1ID1");

            migrationBuilder.CreateIndex(
                name: "IX_Phase_Critere2ID",
                table: "Phase",
                column: "Critere2ID");

            migrationBuilder.CreateIndex(
                name: "IX_Phase_Critere2ID1",
                table: "Phase",
                column: "Critere2ID1");

            migrationBuilder.CreateIndex(
                name: "IX_Phase_penaliteID",
                table: "Phase",
                column: "penaliteID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Evaluation");

            migrationBuilder.DropTable(
                name: "Student");

            migrationBuilder.DropTable(
                name: "Jury");

            migrationBuilder.DropTable(
                name: "Phase");

            migrationBuilder.DropTable(
                name: "Critere1");

            migrationBuilder.DropTable(
                name: "Critere2");

            migrationBuilder.DropTable(
                name: "Penalite");
        }
    }
}
