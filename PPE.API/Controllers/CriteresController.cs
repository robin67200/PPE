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
    public class CriteresController : ControllerBase
    {
       private readonly PPEAPIContext _context;
       public CriteresController (PPEAPIContext context)
       {
           _context = context;
       }
       
        // GET api/critere1s
        
        [HttpGet]
        public async Task<IActionResult> GetCritere1s()
        {
            var criteres = await _context.Criteres
            .ToListAsync();

            return Ok(criteres);
        }

        // GET api/critere1s/id
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCritere1(int id)
        {
            var critere = await _context.Criteres
            .FirstOrDefaultAsync(x => x.Id == id);

            return Ok(critere);
        }
        
        // POST api/critere1s
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Critere critere1)
        {
            _context.Criteres.Add(critere1);
            await _context.SaveChangesAsync();
            
            return Ok();
        }

        // PUT api/critere1s/id
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Critere critere1)
        {
            var dbCritere1 = _context.Criteres.FirstOrDefault(x => x.Id == id);
            /* dbCritere1.Bareme = critere1.Bareme;
            dbCritere1.C1 = critere1.C1;
            dbCritere1.C2 = critere1.C2;
            dbCritere1.C3 = critere1.C3;
            dbCritere1.C4 = critere1.C4;*/

            _context.Criteres.Update(dbCritere1);
            await _context.SaveChangesAsync();

            return Ok();
        }

        // DELETE api/critere1s/id
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
             var dbCritere1 = _context.Criteres.FirstOrDefault(x => x.Id == id);
             _context.Remove(dbCritere1);
             await _context.SaveChangesAsync();

             return Ok();
        } 
    }
}
