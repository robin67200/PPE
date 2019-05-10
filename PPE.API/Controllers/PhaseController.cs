using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PPE.API.Business.Services.Interfaces;
using PPE.API.Business.ViewModels;
using PPE.API.Models;

namespace PPE.API.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class PhasesController : ControllerBase
    {
       private readonly IPhasesService _service;
       public PhasesController (IPhasesService service)
       {
           _service = service;
       }
       
        // GET api/phases
        
        [HttpGet]
        public async Task<IActionResult> GetPhases()
        {
            var phases = await _service.GetAllAsync();

            return Ok(phases);
        }

        // GET api/phases/id
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPhase(int id)
        {
            var phase = await _service.GetByIdAsync(id);

            return Ok(phase);
        }
        
        // POST api/phases
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] PhaseViewModel phase)
        {
            //var dbPhase = new Phase();

            var result = await _service.CreateAsync(phase);
            
            return Ok();
        }

        // PUT api/phases/id
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] PhaseViewModel phase)
        {
            await _service.UpdateAsync(id, phase);
            
            return Ok();
       }


        // DELETE api/pahses/id
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
             await _service.DeleteAsync(id);
             return Ok();
        } 
    }
}
