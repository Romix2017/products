using DAL.Contracts.ModelsContracts;
using System;
using System.Collections.Generic;
using System.Text;
using static DAL.Models.Models.CustomModels.Enums;

namespace DAL.Models.Models.CustomModels
{
    public class ResultModel : IResultModel
    {
        public string errorMessage { get; set; }
        public object body { get; set; }
    }
}
