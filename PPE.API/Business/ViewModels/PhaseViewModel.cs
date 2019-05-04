using System.Collections.Generic;
using PPE.API.Models;

namespace PPE.API.Business.ViewModels
{
    public class PhaseViewModel
    {
        public int ID {get; set;}
        public float NoteFinale {get; set;}
        public int Critere1Id {get; set;}
        public Critere1ViewModel Critere1 {get;set;}

        public int Critere2Id {get; set;}
        public Critere2ViewModel Critere2 {get;set;}
        
        public int PenaliteId {get; set;}
        public PenaliteViewModel penalite {get;set;}

        public string Remarques {get; set;}
        public ICollection<EvaluationViewModel> evaluations {get; set;}
    }
}