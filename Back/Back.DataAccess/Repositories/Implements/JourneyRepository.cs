using Back.DataAccess.Data;
using Back.DataAccess.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Back.DataAccess.Repositories.Implements
{
    
    public class JourneyRepository : IJourneyRepository
    {
        private readonly BackContext backContext;
        public JourneyRepository(BackContext backContext )
        {
            this.backContext = backContext;
        }

        public async Task<IEnumerable<Journey>> GetAll()
        {
            return await backContext.Set<Journey>().ToListAsync();
        }
        
    }
}
