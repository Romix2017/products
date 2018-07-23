using BLL.Contracts.Utility.Filters.ProductFilter;
using DAL.Contracts.EFContracts;
using DAL.Contracts.ModelsContracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace BLL.Implementation.Utility.Filters.ProductFilter
{
    public class ProductFilterByName : IProductFilterByName
    {
        public IQueryable<ITblProduct> GetFiltered(IQueryable<ITblProduct> query, IProductFilterModel filter)
        {
            if (!String.IsNullOrEmpty(filter.Name))
            {
                return query.Where(x => x.Name.ToLower().Contains(filter.Name.ToLower()));
            }
            else
            {
                return query;
            }
        }
    }
}
