using DAL.Contracts.Contracts.EFContracts;
using DAL.Contracts.EFContracts;
using DAL.EF.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.EF
{
    public static class EFStorageServiceCollectionExtensions
    {
        public static IServiceCollection AddStoreDataContext(this IServiceCollection services, string connectionString)
        {
            services.AddDbContext<ApplicationDbContext>(options => options.UseSqlServer(connectionString));
            return services;
        }


        public static IServiceCollection AddEFDataStorage(this IServiceCollection services)
        {
            services.TryAddScoped<IEFRepository, EFRepository>();
            services.TryAddScoped<IDataStorageControl, EFStorageControl>();
            return services;
        }

    }
}
