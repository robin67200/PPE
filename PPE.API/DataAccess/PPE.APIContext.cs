
using Microsoft.EntityFrameworkCore;
using PPE.API.DataAccess;
using PPE.API.Models;
using TechCloud.Tools.DataAccess.Infrastructure;

namespace PPE.API.Models
{
    public class PPEAPIContext : DbContext,IDbContext
    {
        public PPEAPIContext (DbContextOptions<PPEAPIContext> options)
            : base(options)
        {
        }

        public DbSet <PPE.API.Models.Student> Students {get; set;}
        public DbSet <PPE.API.Models.Phase> Phases {get; set;}
        public DbSet <PPE.API.Models.Penalite> Penalites {get; set;}
        public DbSet <PPE.API.Models.Jury> Jurys {get; set;}
        public DbSet <PPE.API.Models.Evaluation> Evaluations {get; set;}
        public DbSet <PPE.API.Models.Critere2> Critere2s {get; set;}
        public DbSet <PPE.API.Models.Critere1> Critere1s {get; set;}

        protected override void OnModelCreating(ModelBuilder modelBuilder){
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfiguration(new StudentConfig());
            modelBuilder.ApplyConfiguration(new PhaseConfig());
            modelBuilder.ApplyConfiguration(new PenaliteConfig());
            modelBuilder.ApplyConfiguration(new JuryConfig());
            modelBuilder.ApplyConfiguration(new EvaluationConfig());
            modelBuilder.ApplyConfiguration(new Critere1Config());
            modelBuilder.ApplyConfiguration(new Critere2Config());
        }
    }
}