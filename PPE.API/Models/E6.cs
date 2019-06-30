using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace PPE.API.Models
{
    public class E6
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
        public float NotePhase2 {get; set;}
        public float P2 {get; set;}
        public float P1 {get; set;}
        public float SommePenalite {get; set;}
        public float Resultat {get; set;}

        
    }
}