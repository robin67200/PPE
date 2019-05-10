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
    public class JurysController : ControllerBase
    {
       private readonly PPEAPIContext _context;
       public JurysController (PPEAPIContext context)
       {
           _context = context;
       }
       
        // GET api/jurys
        
        [HttpGet]
        public async Task<IActionResult> GetJurys()
        {
            var jurys = await _context.Jurys.Include(x => x.evaluations)
            .ToListAsync();

            return Ok(jurys);
        }

        // GET api/jurys/id
        [HttpGet("{id}")]
        public async Task<IActionResult> GetJury(int id)
        {
            var jury = await _context.Jurys.Include(x => x.evaluations)
            .FirstOrDefaultAsync(x => x.ID == id);

            return Ok(jury);
        }
        
        // POST api/jurys
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Jury jury)
        {
            _context.Jurys.Add(jury);
            await _context.SaveChangesAsync();
            
            return Ok();
        }

        // PUT api/jurys/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Jury jury)
        {
            var dbJury = _context.Jurys.FirstOrDefault(x => x.ID == id);
            dbJury.Teacher1 = jury.Teacher1;
            dbJury.Teacher2 = jury.Teacher2;
            dbJury.Teacher3 = jury.Teacher3;

            _context.Jurys.Update(dbJury);
            await _context.SaveChangesAsync();

            return Ok();
        }

        // DELETE api/jurys/id
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
             var dbJury = _context.Jurys.FirstOrDefault(x => x.ID == id);
             _context.Remove(dbJury);
             await _context.SaveChangesAsync();

             return Ok();
        } 
    }
}
