using PPE.API.Business.Services.Interfaces;
using PPE.API.Business.ViewModels;
using PPE.API.DataAccess.Repositories;
using PPE.API.Models;
using TechCloud.Tools.Business.Services;
using TechCloud.Tools.DataAccess.Infrastructure;

namespace PPE.API.Business.Services
{
    public class NotesService : BaseService<Note, NoteViewModel>, INotesService
    {
       
        public NotesService(INotesRepository repository, IUnitOfWork unitOfWork) : base(repository, unitOfWork)
        {
            
        
        }
    }

}