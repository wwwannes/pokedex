using System;

namespace Pokedex.Entities
{
    [Serializable]
    public class Pokemon
    {
        public Guid Id { get; set; }
        public int PokemonId { get; set; }
        public DateTime DateCaught { get; set; }
        public int TotalCaught { get; set; }
        public Guid TrainerId { get; set; }
    }
}
