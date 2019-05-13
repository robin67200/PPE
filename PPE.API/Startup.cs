using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using PPE.API.Business.Services;
using PPE.API.Business.Services.Interfaces;
using PPE.API.DataAccess.Repositories;
using PPE.API.Models;
using TechCloud.Tools.DataAccess.Infrastructure;

namespace PPE.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddAutoMapper();
            services.AddDbContext<PPEAPIContext>(x => x.UseSqlite(Configuration.GetConnectionString("DefaultConnection")));
            
            services.AddScoped<IEvaluationsRepository, EvaluationsRepository>();
            services.AddScoped<IEvaluationsService, EvaluationsService>();
            services.AddScoped<IPhasesRepository, PhasesRepository>();
            services.AddScoped<IPhasesService, PhasesService>();
            services.AddScoped<ICriteresRepository, CriteresRepository>();
            services.AddScoped<INotesRepository, NotesRepository>();
            services.AddScoped<IUnitOfWork,UnitOfWork>();
            services.AddScoped<INotesService, NotesService>();

            services.AddScoped<IDbContext>(f =>
            {
                return f.GetService<PPEAPIContext>();
            });

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
            services.AddCors();

            // 1. Add Authentication Services
        services.AddAuthentication(options =>
        {
            options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
            options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
        }).AddJwtBearer(options =>
        {
            options.Authority = "https://ppe2.eu.auth0.com/";
            options.Audience = "https://api.ppe.com";
        });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
                app.UseExceptionHandler("/Home/Error");
            }
            app.UseStaticFiles();
            app.UseAuthentication();

            app.UseCors(x => x.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
            app.UseHttpsRedirection();
            app.UseMvc(routes =>
        {
            routes.MapRoute(
              name: "default",
              template: "{controller=Home}/{action=Index}/{id?}");
        });
        }
    }
}
