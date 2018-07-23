using System;
using System.Collections.Generic;
using System.Text;
using BLL.Contracts.Services;
using DAL.Contracts.ModelsContracts;
using Microsoft.AspNetCore.Mvc;
namespace BLL.Implementation.Services
{
    public class ResponseService : IResponseService
    {
        public IActionResult SetStatusCode(IResultModel model)
        {
            if (String.IsNullOrEmpty(model.errorMessage))
            {
                return new OkObjectResult(model);
            }
            else
            {
                return new BadRequestObjectResult(model);
            }
        }
    }
}
