namespace PPE.API.Models
{
    public class PhaseEvaluation
    {
        public int PhaseId { get; set; }
        public Phase Phase { get; set; }
        public int EvaluationId { get; set; }
        public Evaluation Evaluation { get; set; }
    }
}