using System.Collections.Generic;

namespace PPE.API.Business.ViewModels
{
    public class Critere2ViewModel
    {
        public int ID {get; set;}
        public float Bareme {get; set;}

        public string C1 {get; set;}
        public string C2 {get; set;}

        public string C3 {get; set;}

        public string C4 {get;set;}

        public ICollection<PhaseViewModel> phases {get; set;}
    }
}