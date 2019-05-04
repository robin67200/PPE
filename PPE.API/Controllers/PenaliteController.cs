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
    public class PenalitesController : ControllerBase
    {
       private readonly PPEAPIContext _context;
       public PenalitesController (PPEAPIContext context)
       {
           _context = context;
       }
       
        // GET api/penalites
        
        [HttpGet]
        public async Task<IActionResult> GetCritere1s()
        {
            var penalites = await _context.Penalites.Include(x => x.phases)
            .ToListAsync();

            return Ok(penalites);
        }

        // GET api/penalites/id
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPenalite(int id)
        {
            var penalite = await _context.Penalites.Include(x => x.phases)
            .FirstOrDefaultAsync(x => x.ID == id);

            return Ok(penalite);
        }
        
        // POST api/penalites
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Penalite penalite)
        {
            _context.Penalites.Add(penalite);
            await _context.SaveChangesAsync();
            
            return Ok();
        }

        // PUT api/penalites/id
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Penalite penalite)
        {
            var dbPenalite = _context.Penalites.FirstOrDefault(x => x.ID == id);
            dbPenalite.Total = penalite.Total;
            dbPenalite.P1 = penalite.P1;
            dbPenalite.P2 = penalite.P2;
            

            _context.Penalites.Update(dbPenalite);
            await _context.SaveChangesAsync();

            return Ok();
        }

        // DELETE api/penalites/id
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
             var dbPenalite = _context.Penalites.FirstOrDefault(x => x.ID == id);
             _context.Remove(dbPenalite);
             await _context.SaveChangesAsync();

             return Ok();
        } 
    }
}
