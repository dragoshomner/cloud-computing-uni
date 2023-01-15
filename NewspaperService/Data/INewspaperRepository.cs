using NewspaperService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NewspaperService.Data
{
    public interface INewspaperRepository
    {
        bool SaveChanges();

        // Newspaper
        IEnumerable<Newspaper> GetAllNewspapers();
        void CreateNewspaper(Newspaper newspaper);
        bool NewspaperExits(int newspaperId);

        // Blog
        IEnumerable<Blog> GetBlogsForNewspaper(int newspaperId);
        Blog GetBlog(int newspaperId, int blogId);
        void CreateBlog(int newspaperId, Blog blog);
        bool ExternalBlogExists(int externalBlogId);
    }
}
