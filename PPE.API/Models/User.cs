using System;
using System.Collections.Generic;

namespace PPE.API.Models
{
    public class User
    {
        public int Id {get; set;}
        public string Status {get; set;}
        public DateTime DateOfBirth {get; set;}
        public string Username {get; set;}
        public byte[] PasswordHash {get; set;}
        public byte[] PasswordSalt {get; set;}
        public DateTime Created {get; set;}
        public DateTime LastActive {get; set;}
    }
}