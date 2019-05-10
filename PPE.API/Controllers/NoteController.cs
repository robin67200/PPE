using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PPE.API.Business.Services;
using PPE.API.Business.Services.Interfaces;
using PPE.API.Business.ViewModels;
using PPE.API.Models;

namespace PPE.API.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class NotesController : ControllerBase
    {
       private readonly INotesService _service;
       public NotesController (INotesService service) 
       {
           _service = service;
       }
       
        // GET api/evaluations
        
        [HttpGet]
        public async Task<IActionResult> GetNotes()
        {
            var notes = await _service.GetAllAsync();

            return Ok(notes);
        }

        // GET api/evaluations/id
        [HttpGet("{id}")]
        public async Task<IActionResult> GetNotes(int id)
        {
            var note = await _service.GetByIdAsync(id);

            return Ok(note);
        }
        
        // POST api/evaluations
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] NoteViewModel note)
        {
            await _service.CreateAsync(note);
            return Ok();
        }

        // PUT api/evaluations/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] NoteViewModel note)
        {
            await _service.UpdateAsync(id, note);

            return Ok();
        }

        // DELETE api/evaluations/id
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _service.DeleteAsync(id);

             return Ok();
        } 
    }
}