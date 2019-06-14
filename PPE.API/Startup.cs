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
using PPE.API.Business;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.Authorization;

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
            Mapper.Reset();
            services.AddAutoMapper();
            services.AddDbContext<PPEAPIContext>(x => x.UseSqlite(Configuration.GetConnectionString("DefaultConnection")));

            IdentityBuilder builder = services.AddIdentityCore<User>(opt => {
                opt.Password.RequireDigit = false;
                opt.Password.RequiredLength = 6;
                opt.Password.RequireNonAlphanumeric = false;
                opt.Password.RequireUppercase = false;
            });

            builder = new IdentityBuilder(builder.UserType, typeof(Role), builder.Services);
            builder.AddEntityFrameworkStores<PPEAPIContext>();
            builder.AddRoleValidator<RoleValidator<Role>>();
            builder.AddRoleManager<RoleManager<Role>>();
            builder.AddSignInManager<SignInManager<User>>();

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
            
            services.AddScoped<IEvaluationsRepository, EvaluationsRepository>();
            services.AddScoped<IEvaluationsService, EvaluationsService>();
            services.AddScoped<IPhasesRepository, PhasesRepository>();
            services.AddScoped<IPhasesService, PhasesService>();
            services.AddScoped<ICriteresRepository, CriteresRepository>();
            services.AddScoped<INotesRepository, NotesRepository>();
            services.AddScoped<IUnitOfWork,UnitOfWork>();
            services.AddScoped<INotesService, NotesService>();
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<IE6sRepository, E6sRepository>();
            services.AddScoped<IE6sService, E6sService>();
            

            services.AddScoped<IDbContext>(f =>
            {
                return f.GetService<PPEAPIContext>();
            }); 

                
                services.AddMvc(options => 
                {
                    var policy = new AuthorizationPolicyBuilder()
                        .RequireAuthenticatedUser()
                        .Build();
                   // options.Filters.Add(new AuthorizeFilter(policy));
                }
            )
                .SetCompatibilityVersion(CompatibilityVersion.Version_2_2)
                .AddJsonOptions(opt => {
                    opt.SerializerSettings.ReferenceLoopHandling = 
                    Newtonsoft.Json.ReferenceLoopHandling.Ignore;
                });
                
                
                services.AddAuthorization(options => {
                options.AddPolicy("RequireAdminRole", policy => policy.RequireRole("Admin"));
                options.AddPolicy("ModerateDataRole", policy => policy.RequireRole("Admin", "Moderator"));
                options.AddPolicy("VipOnle", policy => policy.RequireRole("VIP"));
            });
            

            
            services.AddCors();
            services.AddTransient<Seed>();

            
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, Seed seeder)
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
            seeder.SeedUsers();
            app.UseHttpsRedirection();
            app.UseMvc();
            app.UseAuthentication();
        }
    }
}
