using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PPE.API.Models;

namespace Timesheet.API.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
       private readonly PPEAPIContext _context;
       public StudentsController (PPEAPIContext context)
       {
           _context = context;
       }
       
        // GET api/students
        
        [HttpGet]
        public async Task<IActionResult> GetStudents()
        {
            var students = await _context.Students.Include(x => x.evaluations)
            .ToListAsync();

            return Ok(students);
        }

        // GET api/students/id
        [HttpGet("{id}")]
        public async Task<IActionResult> GetStudent(int id)
        {
            var student = await _context.Students.Include(x => x.evaluations)
            .FirstOrDefaultAsync(x => x.ID == id);

            return Ok(student);
        }
        
        // POST api/students
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Student student)
        {
            _context.Students.Add(student);
            await _context.SaveChangesAsync();
            
            return Ok();
        }

        // PUT api/students/id
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Student student)
        {
            var dbStudent = _context.Students.FirstOrDefault(x => x.ID == id);
            dbStudent.Name = student.Name;
            dbStudent.FirstName = student.FirstName;
            dbStudent.Mail = student.Mail;
            dbStudent.Section = student.Section;
            dbStudent.Matiere = student.Matiere;
            dbStudent.StyleEval = student.StyleEval;
            

            _context.Students.Update(dbStudent);
            await _context.SaveChangesAsync();

            return Ok();
        }

        // DELETE api/students/id
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
             var dbStudent = _context.Students.FirstOrDefault(x => x.ID == id);
             _context.Remove(dbStudent);
             await _context.SaveChangesAsync();

             return Ok();
        } 
    }
}
