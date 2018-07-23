using DAL.Contracts.EFContracts;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models.Models
{
    public partial class TblProduct : ITblProduct
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
    }
}
