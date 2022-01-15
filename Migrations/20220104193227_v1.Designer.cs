﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Models;

namespace DramskoDrustvo.Migrations
{
    [DbContext(typeof(DramskoDrustvoContext))]
    [Migration("20220104193227_v1")]
    partial class v1
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.0");

            modelBuilder.Entity("Models.Glumac", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<int>("Godine")
                        .HasColumnType("int");

                    b.Property<string>("Ime")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Prezime")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("ID");

                    b.ToTable("Glumci");
                });

            modelBuilder.Entity("Models.Pozoriste", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Ime")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<int>("Kapacitet")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.ToTable("Pozorista");
                });

            modelBuilder.Entity("Models.Predstava", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Ime")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<int>("Trajanje")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.ToTable("Predstave");
                });

            modelBuilder.Entity("Models.PredstaveUPozoristima", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<int?>("ImePozoristaID")
                        .HasColumnType("int");

                    b.Property<int?>("imePredstaveID")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.HasIndex("ImePozoristaID");

                    b.HasIndex("imePredstaveID");

                    b.ToTable("PredstaveUPozoristima");
                });

            modelBuilder.Entity("Models.Uloga", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<int?>("ImeGlumcaID")
                        .HasColumnType("int");

                    b.Property<int?>("ImePredstaveID")
                        .HasColumnType("int");

                    b.Property<string>("ImeUloge")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.HasIndex("ImeGlumcaID");

                    b.HasIndex("ImePredstaveID");

                    b.ToTable("Uloge");
                });

            modelBuilder.Entity("Models.PredstaveUPozoristima", b =>
                {
                    b.HasOne("Models.Pozoriste", "ImePozorista")
                        .WithMany("ListaPredtava")
                        .HasForeignKey("ImePozoristaID");

                    b.HasOne("Models.Predstava", "imePredstave")
                        .WithMany("Pozorista")
                        .HasForeignKey("imePredstaveID");

                    b.Navigation("ImePozorista");

                    b.Navigation("imePredstave");
                });

            modelBuilder.Entity("Models.Uloga", b =>
                {
                    b.HasOne("Models.Glumac", "ImeGlumca")
                        .WithMany("ListaUloga")
                        .HasForeignKey("ImeGlumcaID");

                    b.HasOne("Models.Predstava", "ImePredstave")
                        .WithMany("ListaUloga")
                        .HasForeignKey("ImePredstaveID");

                    b.Navigation("ImeGlumca");

                    b.Navigation("ImePredstave");
                });

            modelBuilder.Entity("Models.Glumac", b =>
                {
                    b.Navigation("ListaUloga");
                });

            modelBuilder.Entity("Models.Pozoriste", b =>
                {
                    b.Navigation("ListaPredtava");
                });

            modelBuilder.Entity("Models.Predstava", b =>
                {
                    b.Navigation("ListaUloga");

                    b.Navigation("Pozorista");
                });
#pragma warning restore 612, 618
        }
    }
}
