﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using PPE.API.Models;

namespace PPE.API.Migrations
{
    [DbContext(typeof(PPEAPIContext))]
    [Migration("20190513194538_user2")]
    partial class user2
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.4-servicing-10062");

            modelBuilder.Entity("PPE.API.Models.Critere", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("Id")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Label")
                        .IsRequired()
                        .HasColumnName("Label")
                        .HasColumnType("TEXT");

                    b.Property<int?>("Order")
                        .HasColumnName("Order")
                        .HasColumnType("INTEGER");

                    b.Property<int>("PhaseId")
                        .HasColumnName("PhaseId")
                        .HasColumnType("INTEGER");

                    b.Property<TypesCritere>("Type")
                        .HasColumnName("Type")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("PhaseId");

                    b.ToTable("Critere");
                });

            modelBuilder.Entity("PPE.API.Models.Evaluation", b =>
                {
                    b.Property<int>("Id")
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

                    b.HasKey("Id");

                    b.HasIndex("EtudiantId");

                    b.HasIndex("JuryId");

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

            modelBuilder.Entity("PPE.API.Models.Note", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("Id")
                        .HasColumnType("INTEGER");

                    b.Property<int>("CritereId")
                        .HasColumnName("CritereId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("EvaluationId")
                        .HasColumnName("EvaluationId")
                        .HasColumnType("INTEGER");

                    b.Property<TypesNote>("Notation")
                        .HasColumnName("Notation")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("EvaluationId");

                    b.ToTable("Notes");
                });

            modelBuilder.Entity("PPE.API.Models.Phase", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("ID")
                        .HasColumnType("INTEGER");

                    b.Property<string>("label")
                        .IsRequired()
                        .HasColumnName("Label")
                        .HasColumnType("TEXT");

                    b.HasKey("ID");

                    b.ToTable("Phase");
                });

            modelBuilder.Entity("PPE.API.Models.PhaseEvaluation", b =>
                {
                    b.Property<int>("EvaluationId");

                    b.Property<int>("PhaseId");

                    b.HasKey("EvaluationId", "PhaseId");

                    b.HasIndex("PhaseId");

                    b.ToTable("PhaseEvaluation");
                });

            modelBuilder.Entity("PPE.API.Models.Student", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("ID")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Evaluation")
                        .HasColumnName("Eval")
                        .HasColumnType("TEXT");

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

                    b.HasKey("ID");

                    b.ToTable("Student");
                });

            modelBuilder.Entity("PPE.API.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<byte[]>("PasswordHash");

                    b.Property<byte[]>("PasswordSalt");

                    b.Property<string>("Username");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("PPE.API.Models.Critere", b =>
                {
                    b.HasOne("PPE.API.Models.Phase")
                        .WithMany("Criteres")
                        .HasForeignKey("PhaseId")
                        .OnDelete(DeleteBehavior.Cascade);
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
                });

            modelBuilder.Entity("PPE.API.Models.Note", b =>
                {
                    b.HasOne("PPE.API.Models.Evaluation")
                        .WithMany("Notes")
                        .HasForeignKey("EvaluationId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("PPE.API.Models.PhaseEvaluation", b =>
                {
                    b.HasOne("PPE.API.Models.Evaluation", "Evaluation")
                        .WithMany("Phases")
                        .HasForeignKey("EvaluationId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("PPE.API.Models.Phase", "Phase")
                        .WithMany("Evaluations")
                        .HasForeignKey("PhaseId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
