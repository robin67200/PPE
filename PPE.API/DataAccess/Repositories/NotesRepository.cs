using PPE.API.Models;
using TechCloud.Tools.DataAccess.Infrastructure;

namespace PPE.API.DataAccess.Repositories
{
    public class NotesRepository : GenericRepository<Note>, INotesRepository
    {
        public NotesRepository(PPEAPIContext context) : base(context)
        {
        }
    }
}