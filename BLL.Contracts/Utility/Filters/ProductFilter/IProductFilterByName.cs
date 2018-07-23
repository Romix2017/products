using System.Linq;
using DAL.Contracts.EFContracts;
using DAL.Contracts.ModelsContracts;

namespace BLL.Contracts.Utility.Filters.ProductFilter
{
    public interface IProductFilterByName
    {
        IQueryable<ITblProduct> GetFiltered(IQueryable<ITblProduct> query, IProductFilterModel filter);
    }
}