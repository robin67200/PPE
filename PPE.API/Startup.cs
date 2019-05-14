using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using PPE.API.Business.Services;
using PPE.API.Business.Services.Interfaces;
using PPE.API.DataAccess.Repositories;
using PPE.API.DataAccess.Repositories.Interfaces;
using PPE.API.Models;
using TechCloud.Tools.DataAccess.Infrastructure;
using System.Text;

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
            services.AddScoped<IAuthRepository, AuthRepository>();
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options => {
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.
                            GetBytes(Configuration.GetSection("AppSettings:Token").Value)),
                        ValidateIssuer = false,
                        ValidateAudience = false
                    }; 
                });

            services.AddScoped<IDbContext>(f =>
            {
                return f.GetService<PPEAPIContext>();
            });

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
            services.AddCors();

            
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
            }

            app.UseCors(x => x.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
            app.UseHttpsRedirection();
            app.UseMvc();
            app.UseAuthentication();
        }
    }
}
