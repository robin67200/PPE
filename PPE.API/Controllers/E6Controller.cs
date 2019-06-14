using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PPE.API.Business.Services;
using PPE.API.Business.ViewModels;
using PPE.API.Models;

namespace PPE.API.Controllers
{
    
    [AllowAnonymous]
    [Route("api/[controller]")]
    [ApiController]
    public class E6sController : ControllerBase
    {
       private readonly IE6sService _service;
       public E6sController (IE6sService service) 
       {
           _service = service;
       }
       
        // GET api/evaluations
        
        [HttpGet]
        public async Task<IActionResult> GetE6s()
        {
            var e6s = await _service.GetAllAsync();

            return Ok(e6s);
        }

        // GET api/evaluations/id
        [HttpGet("{id}")]
        public async Task<IActionResult> GetE6(int id)
        {
            var e6 = await _service.GetByIdAsync(id);

            return Ok(e6);
        }
        
        // POST api/evaluations
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] E6ViewModel e6)
        {
            await _service.CreateAsync(e6);
            return Ok();
        }

        // PUT api/evaluations/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] E6ViewModel e6)
        {
            await _service.UpdateAsync(id, e6);

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