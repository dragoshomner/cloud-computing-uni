using BlogService.Repositories.Interfaces;
using CloudComputing.Data;
using CloudComputing.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlogService.Repositories
{
    public class BlogRepository : IBlogRepository
    {
        private readonly AppDbContext _context;

        public BlogRepository(AppDbContext context)
        {
            _context = context;
        }

        public void Create(Blog blog)
        {
            if (blog == null)
            {
                throw new ArgumentNullException(nameof(blog));
            }

            _context.Blogs.Add(blog);
        }

        public IEnumerable<Blog> GetAll()
        {
            return _context.Blogs.ToList();
        }

        public Blog GetById(int id)
        {
            return _context.Blogs.FirstOrDefault(b => b.Id == id);
        }

        public bool Save()
        {
            return (_context.SaveChanges() >= 0);
        }
    }
}
