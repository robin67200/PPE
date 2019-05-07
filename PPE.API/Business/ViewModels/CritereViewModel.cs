using System.Collections.Generic;

namespace PPE.API.Business.ViewModels
{
    public class CritereViewModel
    {
        public int Id { get; set; }
        public string Label { get; set; }
        public int? Order { get; set; }
        public int PhaseId { get; set; }
    }
}