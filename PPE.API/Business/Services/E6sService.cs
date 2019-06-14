using PPE.API.Business.ViewModels;
using PPE.API.DataAccess.Repositories;
using PPE.API.Models;
using TechCloud.Tools.Business.Services;
using TechCloud.Tools.DataAccess.Infrastructure;

namespace PPE.API.Business.Services
{
    public class E6sService : BaseService<E6, E6ViewModel>, IE6sService
    {
        public E6sService(IE6sRepository repository, IUnitOfWork unitOfWork) : base(repository, unitOfWork)
        {
            
        }
    }
}