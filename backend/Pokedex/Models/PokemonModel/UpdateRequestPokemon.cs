using System.ComponentModel.DataAnnotations;
using Microsoft.VisualBasic;
using Pokedex.Entities;

namespace Pokedex.Models.PokemonModel
{
    public class UpdateRequestPokemon
    {
        /*public UpdateRequestPokemon(Pokemon dto)
        {
            DateCaught = dto.DateCaught;
            TotalCaught = dto.TotalCaught;
        }*/

        public int TotalCaught { get; set; }

        private DateTime _lastUpdate;
        public DateTime DateCaught { get => _lastUpdate; set => _lastUpdate = DateTime.UtcNow; }
    }
}
