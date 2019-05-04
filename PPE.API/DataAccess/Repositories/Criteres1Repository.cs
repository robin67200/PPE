using PPE.API.Models;
using TechCloud.Tools.DataAccess.Infrastructure;

namespace PPE.API.DataAccess.Repositories
{
    public class Criteres1Repository : GenericRepository<Critere1>, ICriteres1Repository
    {
        public Criteres1Repository(PPEAPIContext context) : base(context)
        {
        }
    }
}