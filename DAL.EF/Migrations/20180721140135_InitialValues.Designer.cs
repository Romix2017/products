﻿// <auto-generated />
using DAL.EF.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace DAL.EF.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20180721140135_InitialValues")]
    partial class InitialValues
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.1-rtm-30846")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("DAL.Models.Models.TblProduct", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name")
                        .HasMaxLength(200);

                    b.Property<decimal>("Price")
                        .HasColumnType("money");

                    b.HasKey("Id");

                    b.ToTable("TblProducts");

                    b.HasData(
                        new { Id = 1, Name = "Milk", Price = 2m },
                        new { Id = 2, Name = "Meat", Price = 5m },
                        new { Id = 3, Name = "Orange juice", Price = 3m },
                        new { Id = 4, Name = "Tomato juice", Price = 7m },
                        new { Id = 5, Name = "Sugar", Price = 1m },
                        new { Id = 6, Name = "Salt", Price = 9m },
                        new { Id = 7, Name = "Apples", Price = 12m },
                        new { Id = 8, Name = "Bananas", Price = 2m }
                    );
                });
#pragma warning restore 612, 618
        }
    }
}
