using PPE.API.Models;

namespace PPE.API.Business.ViewModels
{
    public class NoteViewModel
    {
        public int Id { get; set; }
        public int CritereId { get; set; }
        public int EvaluationId { get; set; }
        public TypesNote Notation { get; set; }
    }
}