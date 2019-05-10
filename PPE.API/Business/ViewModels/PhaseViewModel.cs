using System.Collections.Generic;
using PPE.API.Models;

namespace PPE.API.Business.ViewModels
{
    public class PhaseViewModel
    {
         public int ID {get; set;}

        public string label{get;set;}

        public ICollection<CritereViewModel> Criteres {get;set;}

    }
}