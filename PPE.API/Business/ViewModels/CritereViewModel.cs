using System.Collections.Generic;
using PPE.API.Models;

namespace PPE.API.Business.ViewModels
{
    public class CritereViewModel
    {
        public int Id { get; set; }
        public string Label { get; set; }
        public int? Order { get; set; }
        public int PhaseId { get; set; }
        public TypesCritere Type {get; set;}    
    }
}