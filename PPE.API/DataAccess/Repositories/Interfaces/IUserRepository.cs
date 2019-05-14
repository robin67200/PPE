using System.Collections.Generic;
using System.Threading.Tasks;
using PPE.API.Models;

namespace PPE.API.DataAccess.Repositories.Interfaces
{
    public interface IUserRepository
    {
         void add<T>(T entity) where T: class;
         void Delete<T>(T entity) where T: class;
         Task<bool> SaveAll();
         Task<IEnumerable<User>> GetUsers();
         Task<User> GetUser(int id);
    }
}