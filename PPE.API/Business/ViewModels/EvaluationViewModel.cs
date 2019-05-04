using System;

namespace PPE.API.Business.ViewModels
{
    public class EvaluationViewModel
    {
        public int ID {get; set;}

        public int PhaseId {get; set;}
        
        public DateTime Date {get; set;}
        public int EtudiantId {get; set;}
        public int JuryId {get; set;}
        

    }
}