using Back.DataAccess.Models;
using Back.DataAccess.Data;
using Back.DataAccess.Repositories.Implements;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Back.Business.Services.Implements
{
    public class JourneyService: IJourneyService
    {
        private JourneyRepository journeyRepository;
        public JourneyService(JourneyRepository journeyRepository)
        {
            this.journeyRepository = journeyRepository;
        }
        public async Task<IEnumerable<Journey>> GetAll()
        {
            return (IEnumerable<Journey>)await journeyRepository.GetAll();
        }

    }
}
