using AutoMapper;
using Pokedex.Entities;
using Pokedex.Helpers;
using Pokedex.Models.Users;

namespace Pokedex.Services
{
    public interface IUserService
    {
        IEnumerable<User> GetAll();
        User GetById(Guid id);
        void Create(CreateRequestUser model);
        void Update(Guid id, UpdateRequestUser model);
        void Delete(Guid id);
    }

    public class UserService : IUserService
    {
        private DataContext _dataContext;
        private readonly IMapper _mapper;
        public UserService(DataContext context, IMapper mapper)
        {
            _dataContext = context;
            _mapper = mapper;
        }

        public IEnumerable<User> GetAll()
        {
            return _dataContext.Users;
        }

        public User GetById(Guid id)
        {
            return getUser(id);
        }

        public void Create(CreateRequestUser model)
        {
            if (_dataContext.Users.Any(x => x.Email == model.Email))
            {
                throw new Exception("User with the email " + model.Email + "already exists.");
            }

            var user = _mapper.Map<User>(model);

            _dataContext.Users.Add(user);
            _dataContext.SaveChanges();
        }

        public void Update(Guid id, UpdateRequestUser model)
        {
            var user = getUser(id);

            if (model.Email != user.Email && _dataContext.Users.Any(x => x.Email == model.Email))
            {
                throw new Exception("User with the email " + model.Email + "already exists.");
            }

            _mapper.Map(model, user);
            _dataContext.Users.Update(user);
            _dataContext.SaveChanges();
        }

        public void Delete(Guid id)
        {
            var user = getUser(id);
            _dataContext.Users.Remove(user);
            _dataContext.SaveChanges();
        }

        private User getUser(Guid id)
        {
            var user = _dataContext.Users.Find(id);
            if (user == null)
            {
                throw new KeyNotFoundException("User not found");
            }
            return user;
        }
    }
}
