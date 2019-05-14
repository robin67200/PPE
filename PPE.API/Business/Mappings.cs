using AutoMapper;
using PPE.API.Business.ViewModels;
using PPE.API.Dtos;
using PPE.API.Models;

namespace PPE.API.Business
{
    public class MappingsToDomain : Profile
    {
        public MappingsToDomain() {
            CreateMap<EvaluationViewModel, Evaluation>();
            CreateMap<PhaseViewModel, Phase>();
            CreateMap<CritereViewModel, Critere>();
            CreateMap<NoteViewModel, Note>();
        }
    }

      public class MappingsToViewModel : Profile
    {
        public MappingsToViewModel(){
            CreateMap<Evaluation, EvaluationViewModel>();
            CreateMap<Phase, PhaseViewModel>();
            CreateMap<Critere, CritereViewModel>();
            CreateMap<Note, NoteViewModel>();
        }
    }

    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserForListDto>()
                .ForMember(dest => dest.Age, opt => {
                    opt.ResolveUsing(d => d.DateOfBirth.CalculateAge());
                });
            CreateMap<User, UserForDetailedDto>()
                .ForMember(dest => dest.Age, opt => {
                    opt.ResolveUsing(d => d.DateOfBirth.CalculateAge());
                });
        }
    }
}