using DAL.Contracts.ModelsContracts;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models.Models.CustomModels
{
    public class ProductFilterModel : IProductFilterModel
    {
        public string Name { get; set; }
    }
}
