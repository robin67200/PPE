﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using PPE.API.Models;

namespace PPE.API.Migrations
{
    [DbContext(typeof(PPEAPIContext))]
    partial class PPEAPIContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.4-servicing-10062");

            modelBuilder.Entity("PPE.API.Models.Critere1", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("ID")
                        .HasColumnType("INTEGER");

                    b.Property<float>("Bareme")
                        .HasColumnName("Bareme")
                        .HasColumnType("REAL");

                    b.Property<string>("C1")
                        .IsRequired()
                        .HasColumnName("C1")
                        .HasColumnType("TEXT");

                    b.Property<string>("C2")
                        .IsRequired()
                        .HasColumnName("C2")
                        .HasColumnType("TEXT");

                    b.Property<string>("C3")
                        .IsRequired()
                        .HasColumnName("C3")
                        .HasColumnType("TEXT");

                    b.Property<string>("C4")
                        .IsRequired()
                        .HasColumnName("C4")
                        .HasColumnType("TEXT");

                    b.HasKey("ID");

                    b.ToTable("Critere1");
                });

            modelBuilder.Entity("PPE.API.Models.Critere2", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("ID")
                        .HasColumnType("INTEGER");

                    b.Property<float>("Bareme")
                        .HasColumnName("Bareme")
                        .HasColumnType("REAL");

                    b.Property<string>("C1")
                        .IsRequired()
                        .HasColumnName("C1")
                        .HasColumnType("TEXT");

                    b.Property<string>("C2")
                        .IsRequired()
                        .HasColumnName("C2")
                        .HasColumnType("TEXT");

                    b.Property<string>("C3")
                        .IsRequired()
                        .HasColumnName("C3")
                        .HasColumnType("TEXT");

                    b.Property<string>("C4")
                        .IsRequired()
                        .HasColumnName("C4")
                        .HasColumnType("TEXT");

                    b.HasKey("ID");

                    b.ToTable("Critere2");
                });

            modelBuilder.Entity("PPE.API.Models.Evaluation", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("ID")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("Date")
                        .HasColumnName("Date")
                        .HasColumnType("INTEGER");

                    b.Property<int>("EtudiantId")
                        .HasColumnName("EtudiantId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("JuryId")
                        .HasColumnName("JuryId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("PhaseId")
                        .HasColumnName("PhaseId")
                        .HasColumnType("INTEGER");

                    b.HasKey("ID");

                    b.HasIndex("EtudiantId");

                    b.HasIndex("JuryId");

                    b.HasIndex("PhaseId");

                    b.ToTable("Evaluation");
                });

            modelBuilder.Entity("PPE.API.Models.Jury", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("ID")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Teacher1")
                        .IsRequired()
                        .HasColumnName("Teacher1")
                        .HasColumnType("TEXT");

                    b.Property<string>("Teacher2")
                        .IsRequired()
                        .HasColumnName("Teacher2")
                        .HasColumnType("TEXT");

                    b.Property<string>("Teacher3")
                        .IsRequired()
                        .HasColumnName("Teacher3")
                        .HasColumnType("TEXT");

                    b.HasKey("ID");

                    b.ToTable("Jury");
                });

            modelBuilder.Entity("PPE.API.Models.Penalite", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("ID")
                        .HasColumnType("INTEGER");

                    b.Property<int>("P1")
                        .HasColumnName("P1")
                        .HasColumnType("INTEGER");

                    b.Property<int>("P2")
                        .HasColumnName("P2")
                        .HasColumnType("INTEGER");

                    b.Property<float>("Total")
                        .HasColumnName("Total")
                        .HasColumnType("INTEGER");

                    b.HasKey("ID");

                    b.ToTable("Penalite");
                });

            modelBuilder.Entity("PPE.API.Models.Phase", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("ID")
                        .HasColumnType("INTEGER");

                    b.Property<int>("Critere1ID");

                    b.Property<int?>("Critere1ID1");

                    b.Property<int>("Critere2ID");

                    b.Property<int?>("Critere2ID1");

                    b.Property<float>("NoteFinale")
                        .HasColumnName("NoteFinale")
                        .HasColumnType("REAL");

                    b.Property<int>("PenaliteID");

                    b.Property<string>("Remarques")
                        .HasColumnName("Remarques")
                        .HasColumnType("TEXT");

                    b.Property<int?>("penaliteID");

                    b.HasKey("ID");

                    b.HasIndex("Critere1ID");

                    b.HasIndex("Critere1ID1");

                    b.HasIndex("Critere2ID");

                    b.HasIndex("Critere2ID1");

                    b.HasIndex("PenaliteID");

                    b.HasIndex("penaliteID");

                    b.ToTable("Phase");
                });

            modelBuilder.Entity("PPE.API.Models.Student", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("ID")
                        .HasColumnType("INTEGER");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnName("FirstName")
                        .HasColumnType("TEXT");

                    b.Property<string>("Mail")
                        .IsRequired()
                        .HasColumnName("Mail")
                        .HasColumnType("TEXT");

                    b.Property<string>("Matiere")
                        .IsRequired()
                        .HasColumnName("Matiere")
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnName("Name")
                        .HasColumnType("TEXT");

                    b.Property<string>("Section")
                        .IsRequired()
                        .HasColumnName("Section")
                        .HasColumnType("TEXT");

                    b.Property<string>("StyleEval")
                        .IsRequired()
                        .HasColumnName("StyleEval")
                        .HasColumnType("TEXT");

                    b.HasKey("ID");

                    b.ToTable("Student");
                });

            modelBuilder.Entity("PPE.API.Models.Evaluation", b =>
                {
                    b.HasOne("PPE.API.Models.Student")
                        .WithMany("evaluations")
                        .HasForeignKey("EtudiantId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("PPE.API.Models.Jury")
                        .WithMany("evaluations")
                        .HasForeignKey("JuryId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("PPE.API.Models.Phase")
                        .WithMany("evaluations")
                        .HasForeignKey("PhaseId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("PPE.API.Models.Phase", b =>
                {
                    b.HasOne("PPE.API.Models.Critere1")
                        .WithMany("phases")
                        .HasForeignKey("Critere1ID")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("PPE.API.Models.Critere1", "Critere1")
                        .WithMany()
                        .HasForeignKey("Critere1ID1");

                    b.HasOne("PPE.API.Models.Critere2")
                        .WithMany("phases")
                        .HasForeignKey("Critere2ID")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("PPE.API.Models.Critere2", "Critere2")
                        .WithMany()
                        .HasForeignKey("Critere2ID1");

                    b.HasOne("PPE.API.Models.Penalite")
                        .WithMany("phases")
                        .HasForeignKey("PenaliteID")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("PPE.API.Models.Penalite", "penalite")
                        .WithMany()
                        .HasForeignKey("penaliteID");
                });
#pragma warning restore 612, 618
        }
    }
}
