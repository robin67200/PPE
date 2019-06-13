using System;
using System.Collections.Generic;

namespace PPE.API.Business.ViewModels
{
    public class EvaluationViewModel
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public int EtudiantId { get; set; }
        public int JuryId { get; set; }
        public int NotePhase1 {get; set;}
        public int NotePhase2 {get; set;}
        public int Resultat {get; set;}
        public ICollection<PhaseViewModel> Phases { get; set; }
        public ICollection<NoteViewModel> Notes { get; set; }
    }
}