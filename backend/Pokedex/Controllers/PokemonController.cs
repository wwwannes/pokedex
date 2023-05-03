using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Pokedex.Entities;
using Pokedex.Models.PokemonModel;
using Pokedex.Models.Users;
using Pokedex.Services;

namespace Pokedex.Controllers
{
    [ApiController]
    [Route(("[controller]"))]
    public class PokemonController: ControllerBase
    {
        private IPokemonService _pokemonService;
        private IMapper _mapper;

        public PokemonController(IPokemonService pokemonService, IMapper mapper)
        {
            _pokemonService = pokemonService;
            _mapper = mapper;
        }

        [HttpGet("GetPokemonByUserId/{userId}")]
        public IActionResult GetPokemonByUserId(Guid userId)
        {
            var pokemon = _pokemonService.GetPokemonByUserId(userId);
            return Ok(pokemon);
        }

        [HttpPost("AddPokemon")]
        public IActionResult AddPokemon(Pokemon pokemon)
        {
            _pokemonService.AddPokemon(pokemon);
            return Ok(new {message = "Pokemon added"});
        }

        [HttpPut("UpdatePokemon/${pokemonId}")]
        public IActionResult UpdatePokemon(Guid userId, int pokemonId, UpdateRequestPokemon pokemon)
        {
            _pokemonService.UpdatePokemon(userId, pokemonId, pokemon);
            return Ok(new { message = "Pokemon updated" });
        }

        [HttpDelete("DeletePokemon")]
        public IActionResult DeletePokemon(Guid userId, Pokemon pokemon)
        {
            _pokemonService.DeletePokemon(userId, pokemon);
            return Ok(new { message = "Pokemon deleted" });
        }
    }
}
