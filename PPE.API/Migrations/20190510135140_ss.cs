using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace PPE.API.Migrations
{
    public partial class ss : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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
                name: "Phase",
                columns: table => new
                {
                    ID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Label = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Phase", x => x.ID);
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
                    Eval = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Student", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Critere",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Label = table.Column<string>(type: "TEXT", nullable: false),
                    Order = table.Column<int>(type: "INTEGER", nullable: true),
                    PhaseId = table.Column<int>(type: "INTEGER", nullable: false),
                    Type = table.Column<long>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Critere", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Critere_Phase_PhaseId",
                        column: x => x.PhaseId,
                        principalTable: "Phase",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Evaluation",
                columns: table => new
                {
                    ID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
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
                });

            migrationBuilder.CreateTable(
                name: "Notes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    CritereId = table.Column<int>(type: "INTEGER", nullable: false),
                    EvaluationId = table.Column<int>(type: "INTEGER", nullable: false),
                    Notation = table.Column<long>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Notes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Notes_Evaluation_EvaluationId",
                        column: x => x.EvaluationId,
                        principalTable: "Evaluation",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PhaseEvaluation",
                columns: table => new
                {
                    PhaseId = table.Column<int>(nullable: false),
                    EvaluationId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PhaseEvaluation", x => new { x.EvaluationId, x.PhaseId });
                    table.ForeignKey(
                        name: "FK_PhaseEvaluation_Evaluation_EvaluationId",
                        column: x => x.EvaluationId,
                        principalTable: "Evaluation",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PhaseEvaluation_Phase_PhaseId",
                        column: x => x.PhaseId,
                        principalTable: "Phase",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Critere_PhaseId",
                table: "Critere",
                column: "PhaseId");

            migrationBuilder.CreateIndex(
                name: "IX_Evaluation_EtudiantId",
                table: "Evaluation",
                column: "EtudiantId");

            migrationBuilder.CreateIndex(
                name: "IX_Evaluation_JuryId",
                table: "Evaluation",
                column: "JuryId");

            migrationBuilder.CreateIndex(
                name: "IX_Notes_EvaluationId",
                table: "Notes",
                column: "EvaluationId");

            migrationBuilder.CreateIndex(
                name: "IX_PhaseEvaluation_PhaseId",
                table: "PhaseEvaluation",
                column: "PhaseId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Critere");

            migrationBuilder.DropTable(
                name: "Notes");

            migrationBuilder.DropTable(
                name: "PhaseEvaluation");

            migrationBuilder.DropTable(
                name: "Evaluation");

            migrationBuilder.DropTable(
                name: "Phase");

            migrationBuilder.DropTable(
                name: "Student");

            migrationBuilder.DropTable(
                name: "Jury");
        }
    }
}
