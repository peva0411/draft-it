namespace DraftIt.Data.Migrations
{
    using System.Data.Entity.Migrations;

    internal sealed class Configuration : DbMigrationsConfiguration<DraftItContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(DraftItContext context)
        {
            //  This method will be called after migrating to the latest version.
            context.Categories.AddOrUpdate(p => p.Name,
                new Category { Name = "Category 1"},
                new Category { Name = "Category 2" },
                new Category { Name = "Category 3"},
                new Category { Name = "Category 4"}
            );
        }
    }
}
