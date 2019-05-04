using System;
using System.Collections.Generic;

namespace PPE.API.Models
{
    public class Phase
    {
        public int ID {get; set;}
        public float NoteFinale {get; set;}
        
        public Critere1 Critere1 {get;set;}
        public int Critere1ID {get;set;}

        public Critere2 Critere2 {get;set;}
        public int Critere2ID {get;set;}
        
        public Penalite Penalite {get;set;}
        public int PenaliteID {get;set;}

        public string Remarques {get; set;}
        public ICollection<Evaluation> evaluations {get; set;}

        

       
    }
}