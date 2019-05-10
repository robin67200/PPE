using System.Threading.Tasks;
using PPE.API.Business.Services.Interfaces;
using PPE.API.Business.ViewModels;
using AutoMapper;
using PPE.API.Models;
using TechCloud.Tools.Business.Services;
using TechCloud.Tools.Core.Validation;
using TechCloud.Tools.DataAccess.Infrastructure;
using PPE.API.DataAccess.Repositories;

namespace PPE.API.Business.Services
{
    public class PhasesService : BaseService<Phase, PhaseViewModel>, IPhasesService
    {
        private readonly IPhasesRepository _repo;
        public PhasesService(IPhasesRepository repository, IUnitOfWork unitOfWork) : base(repository, unitOfWork)
        {
            this._repo = repository;;
        }
        
    }

}