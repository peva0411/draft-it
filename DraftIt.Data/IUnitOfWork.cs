namespace DraftIt.Data
{
    public interface IUnitOfWork
    {
        IRepository<T> Get<T>() where T : IEntity;
        void Save();
    }
}