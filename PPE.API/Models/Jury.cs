using System;
using System.Collections.Generic;

namespace PPE.API.Models
{
    public class Jury
    {
        public int ID {get; set;}

        public string Teacher1 {get; set;}
        public string Teacher2 {get; set;}

        public string Teacher3 {get; set;}

        public ICollection<Evaluation> evaluations {get; set;}
        public ICollection<E6> e6s {get; set;}
    }
}