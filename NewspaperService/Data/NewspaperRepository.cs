using NewspaperService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NewspaperService.Data
{
    public class NewspaperRepository : INewspaperRepository
    {
        private readonly AppDbContext _context;

        public NewspaperRepository(AppDbContext context)
        {
            _context = context;
        }

        public void CreateBlog(int newspaperId, Blog blog)
        {
            if (blog == null)
            {
                throw new ArgumentNullException(nameof(blog));
            }

            blog.NewspaperId = newspaperId;
            _context.Blogs.Add(blog);
        }

        public void CreateNewspaper(Newspaper newspaper)
        {
            if (newspaper == null)
            {
                throw new ArgumentNullException(nameof(newspaper));
            }
            _context.Newspapers.Add(newspaper);
        }

        public bool ExternalBlogExists(int externalBlogId)
        {
            return _context.Blogs.Any(b => b.ExternalID == externalBlogId);
        }

        public IEnumerable<Newspaper> GetAllNewspapers()
        {
            return _context.Newspapers.ToList();
        }

        public Blog GetBlog(int newspaperId, int blogId)
        {
            return _context.Blogs
                .Where(b => b.NewspaperId == newspaperId && b.Id == blogId).FirstOrDefault();
        }

        public IEnumerable<Blog> GetBlogsForNewspaper(int newspaperId)
        {
            return _context.Blogs
               .Where(b => b.NewspaperId == newspaperId);
        }

        public bool NewspaperExits(int newspaperId)
        {
            return _context.Newspapers.Any(n => n.Id == newspaperId);
        }

        public bool SaveChanges()
        {
            return (_context.SaveChanges() >= 0);
        }
    }
}
