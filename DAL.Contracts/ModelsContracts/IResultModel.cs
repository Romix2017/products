using System;

namespace DAL.Contracts.ModelsContracts
{
    public interface IResultModel
    {
        object body { get; set; }
        string errorMessage { get; set; }
    }
}