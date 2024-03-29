﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using ReservaSharpHTTP.Models;

namespace ParcialReserva.Migrations
{
    [DbContext(typeof(ReservaContext))]
    partial class ReservaContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.4-servicing-10062")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("ReservaSharpHTTP.Models.ReservaItem", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Identificacion");

                    b.Property<string>("NSillas");

                    b.Property<string>("Nombre");

                    b.Property<bool>("Tipo");

                    b.HasKey("Id");

                    b.ToTable("ReservaItems");
                });
#pragma warning restore 612, 618
        }
    }
}
