using AutoMapper;
using PPE.API.Business.ViewModels;
using PPE.API.Models;

namespace PPE.API.Business
{
    public class MappingsToDomain : Profile
    {
        public MappingsToDomain() {
            CreateMap<EvaluationViewModel, Evaluation>();
            CreateMap<PhaseViewModel, Phase>();
            CreateMap<Critere1ViewModel, Critere1>();
            CreateMap<Critere2ViewModel, Critere2>();
            CreateMap<PenaliteViewModel, Penalite>();
        }
    }

      public class MappingsToViewModel : Profile
    {
        public MappingsToViewModel(){
            CreateMap<Evaluation, EvaluationViewModel>();
            CreateMap<Phase, PhaseViewModel>();
            CreateMap<Critere1, Critere1ViewModel>();
            CreateMap<Critere2, Critere2ViewModel>();
            CreateMap<Penalite, PenaliteViewModel>();
        }
    }
}