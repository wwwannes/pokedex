using AutoMapper;
using Pokedex.Entities;
using Pokedex.Helpers;
using Pokedex.Models.PokemonModel;
using Pokedex.Models.Users;

namespace Pokedex.Services
{

    public interface IPokemonService
    {
        IEnumerable<Pokemon> GetPokemonByUserId(Guid userId);
        void AddPokemon(Pokemon pokemon);
        void UpdatePokemon(Guid userId, int pokemonId, UpdateRequestPokemon pokemon);
        void DeletePokemon(Guid userId, Pokemon pokemon);

    }
    public class PokemonService : IPokemonService
    {
        private DataContext _dataContext;
        private readonly IMapper _mapper;

        public PokemonService(DataContext dataContext, IMapper mapper)
        {
            _dataContext = dataContext;
            _mapper = mapper;
        }

        public IEnumerable<Pokemon> GetPokemonByUserId(Guid userId)
        {
            var pokemon = _dataContext.Pokemon.Where(x => x.TrainerId == userId);
            if (pokemon == null)
            {
                throw new Exception("No Pokemon caught yet");
            }
            return pokemon;
        }

        public void AddPokemon(Pokemon pokemon)
        {
            _dataContext.Pokemon.Add(pokemon);
            _dataContext.SaveChanges();
        }

        public void UpdatePokemon(Guid userId, int pokemonId, UpdateRequestPokemon pokemon)
        {
            var foundPokemon = _dataContext.Pokemon.Where(x => x.TrainerId == userId && x.PokemonId == pokemonId).FirstOrDefault();
            _mapper.Map(pokemon, foundPokemon);
            _dataContext.Pokemon.Update(foundPokemon);
            _dataContext.SaveChanges();
        }

        public void DeletePokemon(Guid userId, Pokemon pokemon)
        {
            var foundPokemon= _dataContext.Pokemon.Where(x => x.TrainerId == userId && x.PokemonId == pokemon.PokemonId).FirstOrDefault();
            _dataContext.Pokemon.Remove(foundPokemon);
            _dataContext.SaveChanges();
        }
    }
}
