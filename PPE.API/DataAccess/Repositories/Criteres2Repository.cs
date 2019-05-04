using PPE.API.Models;
using TechCloud.Tools.DataAccess.Infrastructure;

namespace PPE.API.DataAccess.Repositories
{
    public class Criteres2Repository : GenericRepository<Critere2>, ICriteres2Repository
    {
        public Criteres2Repository(PPEAPIContext context) : base(context)
        {
        }
    }
}