using Back.DataAccess.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Back.DataAccess.Repositories
{
    public interface IJourneyRepository
    {
        Task<IEnumerable<Journey>> GetAll();
      
    }
}
