namespace PPE.API.Models
{
    public class Note
    {
        public int Id { get; set; }
        public int CritereId { get; set; }
        public int EvaluationId { get; set; }
        public TypesNote Notation { get; set; }
    }
}