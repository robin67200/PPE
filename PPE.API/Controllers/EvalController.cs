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
            dbEval.C1 = evaluation.C1;
            dbEval.C2 = evaluation.C2;
            dbEval.C3 = evaluation.C3;
            dbEval.C4 = evaluation.C4;
            dbEval.NotePhase1 = evaluation.NotePhase1;
            dbEval.C5 = evaluation.C5;
            dbEval.C6 = evaluation.C6;
            dbEval.C7 = evaluation.C7;
            dbEval.C8 = evaluation.C8;
            dbEval.C9 = evaluation.C9;
            dbEval.NotePhase2 = evaluation.NotePhase2;
            dbEval.P1 = evaluation.P1;
            dbEval.P2 = evaluation.P2;
            dbEval.Resultat = evaluation.Resultat;
            
            _context.Evaluations.Update(dbEval);
            await _context.SaveChangesAsync();

            return Ok();
        }

        
    }
}