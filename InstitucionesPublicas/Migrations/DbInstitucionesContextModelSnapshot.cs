﻿// <auto-generated />
using System;
using InstitucionesPublicas.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace InstitucionesPublicas.Migrations
{
    [DbContext(typeof(DbInstitucionesContext))]
    partial class DbInstitucionesContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.4-servicing-10062")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("InstitucionesPublicas.Models.Estudiante", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Grado");

                    b.Property<int>("IdInstitucion");

                    b.Property<int?>("InstitucionId");

                    b.Property<string>("Nombre");

                    b.Property<string>("TipoId");

                    b.HasKey("Id");

                    b.HasIndex("InstitucionId");

                    b.ToTable("Estudiantes");
                });

            modelBuilder.Entity("InstitucionesPublicas.Models.Institucion", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Cupo");

                    b.Property<string>("Nombre");

                    b.HasKey("Id");

                    b.ToTable("Instituciones");
                });

            modelBuilder.Entity("InstitucionesPublicas.Models.Estudiante", b =>
                {
                    b.HasOne("InstitucionesPublicas.Models.Institucion", "Institucion")
                        .WithMany()
                        .HasForeignKey("InstitucionId");
                });
#pragma warning restore 612, 618
        }
    }
}
