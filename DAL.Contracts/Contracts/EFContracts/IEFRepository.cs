using System.Linq;

namespace DAL.Contracts.EFContracts
{
    public interface IEFRepository
    {
        IQueryable<ITblProduct> GetProducts();
    }
}