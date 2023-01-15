using Microsoft.EntityFrameworkCore;
using NewspaperService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NewspaperService.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> opt) : base(opt)
        {

        }

        public DbSet<Blog> Blogs { get; set; }
        public DbSet<Newspaper> Newspapers { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder
                .Entity<Newspaper>()
                .HasMany(p => p.Blogs)
                .WithOne(p => p.Newspaper!)
                .HasForeignKey(p => p.NewspaperId);

            modelBuilder
                .Entity<Blog>()
                .HasOne(p => p.Newspaper)
                .WithMany(p => p.Blogs)
                .HasForeignKey(p => p.NewspaperId);
        }
    }
}
