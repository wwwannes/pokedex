using Microsoft.EntityFrameworkCore;
using Pokedex.Entities;

namespace Pokedex.Helpers
{
    public class DataContext: DbContext
    {
        protected readonly IConfiguration Configuration;

        public DataContext(IConfiguration configuration)
        {
            configuration = Configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseInMemoryDatabase("PokedexDb");
        }

        public DbSet<Pokemon> Pokemon { get; set; }
        public DbSet<User> Users { get; set; }
    }
}
