using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using BLL.Contracts.Services;
using BLL.Contracts.Utility.Filters.ProductFilter;
using BLL.Implementation.Utility.Filters.ProductFilter;
using DAL.Contracts.EFContracts;
using DAL.Contracts.ModelsContracts;
using DAL.Models.Models;
using DAL.Models.Models.CustomModels;
using Microsoft.Extensions.Logging;
using static DAL.Models.Models.CustomModels.Enums;

namespace BLL.Implementation.Services
{
    public class ProductService : IProductService
    {
        private readonly ILogger<ProductService> _logger;
        private readonly IEFRepository _repository;
        private readonly IProductFilterByName _filterByName;

        public ProductService(ILogger<ProductService> logger, IEFRepository repository)
        {
            _logger = logger;
            _repository = repository;
            _filterByName = new ProductFilterByName();
        }


        public IResultModel GetAllProducts()
        {
            IResultModel res = new ResultModel();

            try
            {
                var innerRes = _repository.GetProducts().ToList();
                res.body = innerRes;
                return res;

            }
            catch (Exception ex)
            {
                res.errorMessage = ex.Message;
                _logger.LogError(ex.Message);
                return res;
            }

        }

        public IResultModel GetProductByFilter(IProductFilterModel filter)
        {
            IResultModel res = new ResultModel();

            try
            {
                var query = _repository.GetProducts();
                query = _filterByName.GetFiltered(query, filter);
                var innerRes = query.ToList();
                res.body = innerRes;
                return res;
            }
            catch (Exception ex)
            {
                res.errorMessage = ex.Message;
                _logger.LogError(ex.Message);
                return res;
            }

        }

    }
}
