using System;
using System.Collections.Generic;

namespace PPE.API.Models
{
    public class Penalite
    {
        public int ID {get; set;}
        public float Total {get; set;}
        public int P1 {get; set;}
        public int P2 {get; set;} 

        public ICollection<Phase> phases {get; set;}
    }
}