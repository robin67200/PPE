using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace PPE.API.Models
{
    public class Evaluation
    {
        public int Id {get; set;}
        public DateTime Date {get; set;}
        public int EtudiantId {get; set;}
        public int JuryId {get; set;}
        public float NotePhase1 {get; set;}
        public float NotePhase2 {get; set;}
        public float Resultat {get; set;}
        public ICollection<PhaseEvaluation> Phases {get;set;}
        public ICollection<Note> Notes{get;set;}

        
    }
}