using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace PPE.API.Models
{
    public class User : IdentityUser<int>
    {
       
        public string Status {get; set;}
        public DateTime DateOfBirth {get; set;}
        public DateTime Created {get; set;}
        public DateTime LastActive {get; set;}
        public ICollection<UserRole> UserRoles {get; set;}
    }
}