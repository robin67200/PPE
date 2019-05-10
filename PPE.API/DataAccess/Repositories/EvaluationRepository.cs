using PPE.API.Models;
using TechCloud.Tools.DataAccess.Infrastructure;

namespace PPE.API.DataAccess.Repositories
{
    public class EvaluationsRepository : GenericRepository<Evaluation>, IEvaluationsRepository
    {
        public EvaluationsRepository(PPEAPIContext context) : base(context)
        {
            
        }
    }
}