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
        public float C1 {get; set;}
        public float C2 {get; set;}
        public float C3 {get; set;}
        public float C4 {get; set;}
        public float NotePhase1 {get; set;}
        public float C5 {get; set;}
        public float C6 {get; set;}
        public float C7 {get; set;}
        public float C8 {get; set;}
        public float C9 {get; set;}

        public float NotePhase2 {get; set;}
        public float P2 {get; set;}
        public float P1 {get; set;}
        public float Resultat {get; set;}
        public ICollection<PhaseEvaluation> Phases {get;set;}
        public ICollection<Note> Notes{get;set;}

        
    }
}