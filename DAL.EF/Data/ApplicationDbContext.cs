using DAL.Models.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.EF.Data
{
    public partial class ApplicationDbContext : DbContext
    {
        public virtual DbSet<TblProduct> TblProducts { get; set; }

        private const int MAX_LENGTH_PRODUCT_NAME = 200;
        private const string MONEY = "money";
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
           : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TblProduct>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Name).HasMaxLength(MAX_LENGTH_PRODUCT_NAME);
                entity.Property(e => e.Price).HasColumnType(MONEY);
            });

            modelBuilder.Entity<TblProduct>().HasData(
                new TblProduct { Name = "Milk", Price = 2, Id = 1  },
                new TblProduct { Name = "Meat", Price = 5, Id = 2 },
                new TblProduct { Name = "Orange juice", Price = 3, Id = 3 },
                new TblProduct { Name = "Tomato juice", Price = 7, Id = 4 },
                new TblProduct { Name = "Sugar", Price = 1, Id = 5 },
                new TblProduct { Name = "Salt", Price = 9, Id = 6 },
                new TblProduct { Name = "Apples", Price = 12, Id = 7 },
                new TblProduct { Name = "Bananas", Price = 2, Id = 8 });
        }
    }
}
