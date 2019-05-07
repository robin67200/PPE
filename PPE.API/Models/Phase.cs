using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace PPE.API.Models
{
    public class Phase
    {
        public int ID { get; set; }

        public string label { get; set; }

        public ICollection<Critere> Criteres { get; set; }

        public ICollection<PhaseEvaluation> Evaluations {get;set;}


    }
}