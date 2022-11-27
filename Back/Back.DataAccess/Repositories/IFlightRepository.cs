using Back.DataAccess.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Back.DataAccess.Repositories
{
    
    public interface IFlightRepository
    {
        Task<IEnumerable<Flight>> GetAll();
    }
}
