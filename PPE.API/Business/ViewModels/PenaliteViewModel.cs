using System.Collections.Generic;

namespace PPE.API.Business.ViewModels
{
    public class PenaliteViewModel
    {
        public int ID {get; set;}
        public float Total {get; set;}
        public int P1 {get; set;}
        public int P2 {get; set;} 

        public ICollection<PhaseViewModel> phases {get; set;}
    }
}