using System;
using System.Collections.Generic;
using System.Deployment.Internal;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace DraftIt.Data
{
    public class DbCategoryRepository : IRepository<Category>
    {
        private readonly DraftItContext context;

        public DbCategoryRepository(DraftItContext context)
        {
            this.context = context;
        }

        public IQueryable<Category> All()
        {
            return context.Categories;
        }

        public IQueryable<Category> All(Expression<Func<Category, bool>> filter)
        {
            return context.Categories.Where(filter);
        }

        public Category Get(Expression<Func<Category, bool>> filter)
        {
            return context.Categories.SingleOrDefault(filter);
        }

        public Category Get(params object[] identifiers)
        {
            var id = (int) identifiers[0];
            return context.Categories.SingleOrDefault(c => c.Id == id);
        }

        public void Delete(params object[] identifiers)
        {
            var category = new Category {Id = (int) identifiers[0]};
            context.Categories.Attach(category);
            context.Categories.Remove(category);
        }

        public void Add(Category entity)
        {
            context.Categories.Add(entity);
        }
    }

    public interface IRepository { }

    public interface IRepository<T> : IRepository
    {
        IQueryable<T> All();
        IQueryable<T> All(Expression<Func<T, bool>> filter);

        T Get(Expression<Func<T, bool>> filter);
        T Get(params object[] filter);

        void Add(T entity);
        void Delete(params object[] id);
    }
}
