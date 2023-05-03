using System.ComponentModel.DataAnnotations;

namespace Pokedex.Models.Users
{
    public class UpdateRequestUser
    {
        private string _name;
        public string Name { get => _name; set => _name = replaceEmptyWithNull(value); }

        [EmailAddress]
        public string Email { get; set; }

        private string _pic;
        public string ProfilePicture { get => _pic; set => _pic = replaceEmptyWithNull(value); }

        private string replaceEmptyWithNull(string value)
        {
            // replace empty string with null to make field optional
            return string.IsNullOrEmpty(value) ? null : value;
        }
    }
}
