using CloudComputing.Data;
using CloudComputing.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlogService.Data
{
    public class InitializeDatabase
    {
        public static void Run(IApplicationBuilder app)
        {
            using (var serviceScope = app.ApplicationServices.CreateScope())
            {
                SeedData(serviceScope.ServiceProvider.GetService<AppDbContext>());
            }
        }

        private static void SeedData(AppDbContext context)
        {
            try
            {
                context.Database.Migrate();
            }
            catch (Exception ex)
            {
                Console.WriteLine($"--> Migration error: {ex.Message}");
            }

            if (!context.Blogs.Any())
            {
                context.Blogs.AddRange(
                    new Blog() { 
                        Title = "Five famous artworks that were accidentally hung upside-down", 
                        Content = "Art will always inspire and provoke, but it also continues to baffle and confound. To kick off the New Year, we look at some of the lighter examples of a world turned upside-down, with even some of the most experienced curators not quite getting the hang of it.", 
                        ImageUrl = "article1.jpeg" 
                    },
                    new Blog()
                    {
                        Title = "The first Orient Express cruise ship will set sail in 2026",
                        Content = "Around 140 years after making its debut as one of the most luxurious trains in the world, the iconic Orient Express is branching out into the cruising world.",
                        ImageUrl = "article2.jpeg"
                    },
                    new Blog()
                    {
                        Title = "Teenage ‘phenom’ and high school student Alyssa Thompson selected No. 1 in NWSL draft",
                        Content = "Teenage sensation and high school student Alyssa Thompson was selected with the No. 1 overall pick of the National Women’s Soccer League (NWSL) Draft on Thursday.",
                        ImageUrl = "article3.jpeg"
                    }
                );

                context.SaveChanges();
            }
            else
            {
                Console.WriteLine("--> Data is already seeded");
            }
        }
    }
}
