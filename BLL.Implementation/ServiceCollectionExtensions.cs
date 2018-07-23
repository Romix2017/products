using BLL.Contracts.Services;
using BLL.Implementation.Services;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;

namespace BLL.Implementation
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddDataProcessingServices(this IServiceCollection services)
        {
            services.AddScoped<IProductService, ProductService>();
            services.AddScoped<IResponseService, ResponseService>();
            return services;
        }
    }
}