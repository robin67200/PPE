using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PPE.API.Models;

namespace PPE.API.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class EvalsController : ControllerBase
    {
       private readonly PPEAPIContext _context;
       public EvalsController (PPEAPIContext context)
       {
           _context = context;
       }
       
       
        

        // PUT api/students/id
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Evaluation evaluation)
        {
            var dbEval = _context.Evaluations.FirstOrDefault(x => x.Id == id);
            dbEval.Date = evaluation.Date;
            dbEval.EtudiantId = evaluation.EtudiantId;
            dbEval.JuryId = evaluation.JuryId;
            dbEval.NotePhase1 = evaluation.NotePhase1;
            dbEval.NotePhase2 = evaluation.NotePhase2;
            dbEval.Resultat = evaluation.Resultat;
            
            _context.Evaluations.Update(dbEval);
            await _context.SaveChangesAsync();

            return Ok();
        }

        
    }
}