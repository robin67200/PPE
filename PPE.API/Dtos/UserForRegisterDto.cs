using System.ComponentModel.DataAnnotations;

namespace PPE.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username {get; set;}
        
        [Required]
        [StringLength(20, MinimumLength = 6, ErrorMessage="password with minimum 6 Length")]
        public string Password {get; set;}
    }
}