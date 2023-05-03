using System.ComponentModel.DataAnnotations;

namespace Pokedex.Models.Users
{
    public class CreateRequestUser
    {
        [Required]
        public string Name { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }
        
        public string ProfilePicture { get; set; }
    }
}
