using System.Collections.Generic;

namespace PPE.API.Models
{
    public class Student
    {
        public int ID {get; set;}

        public string Name {get; set;}
        public string FirstName {get; set;}
        public string Mail {get; set;}
        public string Section {get; set;}
        public string Matiere {get; set;}

        public string Evaluation {get; set;}


        

        public ICollection<Evaluation> evaluations {get; set;}
    }
}