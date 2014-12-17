using System.ComponentModel.DataAnnotations;

namespace DraftIt.Data
{
    public class Category : IEntity
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; }
    }
}
