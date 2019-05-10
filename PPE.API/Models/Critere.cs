using System;
using System.Collections.Generic;

namespace PPE.API.Models
{
    public class Critere
    {
        public int Id {get; set;}
        public string Label { get; set; }     
        public int? Order { get; set; } 
        public int PhaseId { get; set; }
        public TypesCritere Type {get; set;}
    }
}