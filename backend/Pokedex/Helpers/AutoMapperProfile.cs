using AutoMapper;
using Pokedex.Entities;
using Pokedex.Models.PokemonModel;

namespace Pokedex.Helpers
{
    public class AutoMapperProfile: Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<UpdateRequestPokemon, Pokemon>().ForMember(
                dest => dest.DateCaught,
                opt => opt.MapFrom(x => x.DateCaught)
                ).ForMember(dest => dest.TotalCaught, opt => opt.MapFrom(x => x.TotalCaught));
        }
    }
}
