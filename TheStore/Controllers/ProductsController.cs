using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BLL.Contracts.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TheStore.Controllers
{
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {

        private readonly IProductService _productService;
        private readonly IResponseService _responseService;

        public ProductsController(IProductService productService, IResponseService responseService)
        {
            _productService = productService;
            _responseService = responseService;
        }

        // GET: api/<controller>
        [HttpGet]
        public IActionResult Get()
        {
            return _responseService.SetStatusCode(_productService.GetAllProducts());
        }


        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
