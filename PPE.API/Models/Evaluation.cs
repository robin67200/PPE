using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace PPE.API.Models
{
    public class Evaluation
    {
        public int ID {get; set;}

        public int PhaseId {get; set;}
        
        [DataType(DataType.Date)]
        public DateTime Date {get; set;}
        public int EtudiantId {get; set;}
        public int JuryId {get; set;}
        

        
    }
}