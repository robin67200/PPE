using PPE.API.Business.ViewModels;
using PPE.API.DataAccess.Repositories;
using PPE.API.Models;
using TechCloud.Tools.Business.Services;
using TechCloud.Tools.DataAccess.Infrastructure;

namespace PPE.API.Business.Services
{
    public class EvaluationsService : BaseService<Evaluation, EvaluationViewModel>, IEvaluationsService
    {
        public EvaluationsService(IEvaluationsRepository repository, IUnitOfWork unitOfWork) : base(repository, unitOfWork)
        {
            
        }
    }
}
