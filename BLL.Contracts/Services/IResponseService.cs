using DAL.Contracts.ModelsContracts;
using Microsoft.AspNetCore.Mvc;

namespace BLL.Contracts.Services
{
    public interface IResponseService
    {
        IActionResult SetStatusCode(IResultModel model);
    }
}