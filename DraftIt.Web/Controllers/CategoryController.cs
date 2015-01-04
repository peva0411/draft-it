using System.Collections.Generic;
using System.Web.Http;
using DraftIt.Data;

namespace DraftIt.Web.Controllers
{
    public class CategoryController : ApiController
    {
        private readonly IUnitOfWork unitOfWork;
        private readonly IRepository<Category> categoryRepository;

        public CategoryController(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
            this.categoryRepository = this.unitOfWork.Get<Category>();
        }

        // GET api/values
        public IEnumerable<Category> Get()
        {
            return categoryRepository.All();
        }

        // GET api/values/5
        public Category Get(int id)
        {
            return categoryRepository.Get(id);
        }

        // POST api/values
        public void Post([FromBody]Category category)
        {
            categoryRepository.Add(category);
            unitOfWork.Save();
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]Category input)
        {
            var category = categoryRepository.Get(id);
            category.Name = input.Name;
            unitOfWork.Save();
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
            categoryRepository.Delete(id);
            unitOfWork.Save();
        }
    }
}
