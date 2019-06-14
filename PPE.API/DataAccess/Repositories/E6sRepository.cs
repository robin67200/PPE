using PPE.API.Models;
using TechCloud.Tools.DataAccess.Infrastructure;

namespace PPE.API.DataAccess.Repositories
{
    public class E6sRepository : GenericRepository<E6>, IE6sRepository
    {
        public E6sRepository(PPEAPIContext context) : base(context)
        {
            
        }
    }
}