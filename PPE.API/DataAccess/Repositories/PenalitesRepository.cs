using PPE.API.DataAccess.Repositories;
using PPE.API.Models;
using TechCloud.Tools.DataAccess.Infrastructure;

namespace PPE.API.DataAccess.Repositories
{
    public class PenalitesRepository : GenericRepository<Penalite>, IPenalitesRepository
    {
        public PenalitesRepository(PPEAPIContext context) : base(context)
        {
        }
    }
}