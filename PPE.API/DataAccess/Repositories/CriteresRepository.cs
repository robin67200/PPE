using PPE.API.Models;
using TechCloud.Tools.DataAccess.Infrastructure;

namespace PPE.API.DataAccess.Repositories
{
    public class CriteresRepository : GenericRepository<Critere>, ICriteresRepository
    {
        public CriteresRepository(PPEAPIContext context) : base(context)
        {
        }
    }
}