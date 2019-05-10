using System.Linq;
using Microsoft.EntityFrameworkCore;
using PPE.API.DataAccess.Repositories;
using PPE.API.Models;
using TechCloud.Tools.DataAccess.Infrastructure;

namespace PPE.API.DataAccess.Repositories
{
    public class PhasesRepository : GenericRepository<Phase>, IPhasesRepository
    {
        public PhasesRepository(PPEAPIContext context) : base(context)
        {

        }
    }
}