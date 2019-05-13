using System.Threading.Tasks;
using PPE.API.Models;

namespace PPE.API.DataAccess.Repositories.Interfaces
{
    public interface IAuthRepository
    {
         Task<User> Register(User user, string password);
         Task<User> Login(string username, string password);
         Task<bool> UserExists(string username);
    }
}