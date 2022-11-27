using Back.DataAccess.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Back.Business.Services
{
    public interface IFlightService
    {
        Task<IEnumerable<Flight>> GetAll();

    }
}
