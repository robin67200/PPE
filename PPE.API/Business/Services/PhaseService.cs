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
        private readonly ICriteres1Repository _c1Repo;
        private readonly ICriteres2Repository _c2Repo;
        private readonly IPenalitesRepository _penRepo;
        public PhasesService(IPhasesRepository repository, ICriteres1Repository criteres1Repo, ICriteres2Repository criteres2Repo, IPenalitesRepository penalitesRepo, IUnitOfWork unitOfWork) : base(repository, unitOfWork)
        {
            this._repo = repository;
            this._c1Repo = criteres1Repo;
            this._c2Repo = criteres2Repo;
            this._penRepo = penalitesRepo;
        }

        public PhaseViewModel getRemarques(PhaseViewModel phase)
        {
            

            return phase;
        }

        public async override Task<IResult<PhaseViewModel>> CreateAsync(PhaseViewModel phase)
        {

            phase.Critere1 = Mapper.Map<Critere1ViewModel>(this._c1Repo.GetByIdAsync(phase.Critere1Id));
            phase.Critere2= Mapper.Map<Critere2ViewModel>(this._c2Repo.GetByIdAsync(phase.Critere2Id));
            phase.penalite = Mapper.Map<PenaliteViewModel>(this._penRepo.GetByIdAsync(phase.PenaliteId));

            phase.NoteFinale = phase.Critere1.Bareme + phase.Critere2.Bareme - phase.penalite.Total;

            if(phase.NoteFinale < 10)
            {
                phase.Remarques = "Vous êtes recalés";
            }
            else if(phase.NoteFinale >= 10 && phase.NoteFinale < 12)
            {
                phase.Remarques = "Vous êtes admis sans mention";
            }
            else if(phase.NoteFinale >= 12 && phase.NoteFinale < 14)
            {
                phase.Remarques = "Vous êtes admis mmention assez bien";
            }
            else if(phase.NoteFinale >= 14 && phase.NoteFinale < 16)
            {
                phase.Remarques = "Vous êtes admis mention bien";
            }
            else
            {
                phase.Remarques = "Bravo !! Admis mention très bien";
            }

            return await base.CreateAsync(phase);


          }
    }

}