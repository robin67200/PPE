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
    
    [Route("api/[controller]")]
    [ApiController]
    public class EvaluationsController : ControllerBase
    {
       private readonly IEvaluationsService _service;
       public EvaluationsController (IEvaluationsService service) 
       {
           _service = service;
       }
       
        // GET api/evaluations
        
        [HttpGet]
        public async Task<IActionResult> GetEvaluations()
        {
            var evaluations = await _service.GetAllAsync();

            return Ok(evaluations);
        }

        // GET api/evaluations/id
        [HttpGet("{id}")]
        public async Task<IActionResult> GetEvaluation(int id)
        {
            var evaluation = await _service.GetByIdAsync(id);

            return Ok(evaluation);
        }
        
        // POST api/evaluations
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] EvaluationViewModel evaluation)
        {
            await _service.CreateAsync(evaluation);
            return Ok();
        }

        // PUT api/evaluations/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] EvaluationViewModel evaluation)
        {
            await _service.UpdateAsync(id, evaluation);

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
