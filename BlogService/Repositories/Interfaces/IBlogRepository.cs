using CloudComputing.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlogService.Repositories.Interfaces
{
    public interface IBlogRepository
    {
        bool Save();

        IEnumerable<Blog> GetAll();

        Blog GetById(int id);

        void Create(Blog blog);
    }
}
