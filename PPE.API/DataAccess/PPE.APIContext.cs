
using Microsoft.EntityFrameworkCore;
using PPE.API.DataAccess;
using PPE.API.Models;
using TechCloud.Tools.DataAccess.Infrastructure;

namespace PPE.API.Models
{
    public class PPEAPIContext : DbContext, IDbContext
    {
        public PPEAPIContext(DbContextOptions<PPEAPIContext> options)
            : base(options)
        {
        }

        public DbSet<PPE.API.Models.Student> Students { get; set; }
        public DbSet<PPE.API.Models.Phase> Phases { get; set; }

        public DbSet<PPE.API.Models.Jury> Jurys { get; set; }
        public DbSet<PPE.API.Models.Evaluation> Evaluations { get; set; }

        public DbSet<PPE.API.Models.Critere> Criteres { get; set; }
        public DbSet<PPE.API.Models.Note> Notes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<PhaseEvaluation>().HasKey(bc => new { bc.EvaluationId, bc.PhaseId });
            modelBuilder.Entity<PhaseEvaluation>()
                .HasOne(bc => bc.Evaluation)
                .WithMany(b => b.Phases)
                .HasForeignKey(bc => bc.EvaluationId);



            modelBuilder.Entity<PhaseEvaluation>()
                .HasOne(bc => bc.Phase)
                .WithMany(c => c.Evaluations)
                .HasForeignKey(bc => bc.PhaseId);

            modelBuilder.ApplyConfiguration(new StudentConfig());
            modelBuilder.ApplyConfiguration(new PhaseConfig());

            modelBuilder.ApplyConfiguration(new JuryConfig());
            modelBuilder.ApplyConfiguration(new EvaluationConfig());
            modelBuilder.ApplyConfiguration(new NoteConfig());
            modelBuilder.ApplyConfiguration(new CritereConfig());
        }
    }
}