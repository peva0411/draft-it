using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;

namespace DraftIt.Data
{
    public class DraftItContext : DbContext, IUnitOfWork
    {
        private readonly Dictionary<Type, IRepository> repositories;

        public DbSet<Category> Categories { get; set; }

        public DraftItContext() : base("DraftItConnection")
        {
            repositories = GetRepositories();
        }


        public IRepository<T> Get<T>() where T : IEntity
        {
            return (IRepository<T>) repositories[typeof(T)];
        }

        public async void Save()
        {
            await SaveChangesAsync();
        }

        private Dictionary<Type, IRepository> GetRepositories()
        {
            return new Dictionary<Type, IRepository>
            {
                { typeof(Category) , new DbCategoryRepository(this) }
            };
        }
    }
}
