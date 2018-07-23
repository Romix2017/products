using DAL.Contracts.EFContracts;
using DAL.EF.Data;
using DAL.Models.Models;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DAL.EF
{
    public class EFRepository : IEFRepository
    {
        private readonly ApplicationDbContext _dbContext;
        private readonly ILogger<EFRepository> _logger;

        public EFRepository(ApplicationDbContext dbContext, ILogger<EFRepository> logger)
        {
            _dbContext = dbContext;
            _logger = logger;
        }

        public IQueryable<ITblProduct> GetProducts()
        {
            IQueryable<TblProduct> res = null;
            try
            {
                res = _dbContext.TblProducts;
                return res;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return res;
            }

        }
    }
}
