using DAL.Contracts.ModelsContracts;

namespace BLL.Contracts.Services
{
    public interface IProductService
    {
        IResultModel GetAllProducts();
        IResultModel GetProductByFilter(IProductFilterModel filter);
    }
}