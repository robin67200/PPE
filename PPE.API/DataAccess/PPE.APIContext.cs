
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using PPE.API.DataAccess;
using PPE.API.Models;
using TechCloud.Tools.DataAccess.Infrastructure;

namespace PPE.API.Models
{
    public class PPEAPIContext : IdentityDbContext<User, Role, int, IdentityUserClaim<int>,
     UserRole, IdentityUserLogin<int>, IdentityRoleClaim<int>, IdentityUserToken<int>>, IDbContext
    {
        public PPEAPIContext(DbContextOptions<PPEAPIContext> options)
            : base(options){}

        public DbSet<PPE.API.Models.Student> Students { get; set; }
        public DbSet<PPE.API.Models.Phase> Phases { get; set; }

        public DbSet<PPE.API.Models.Jury> Jurys { get; set; }
        public DbSet<PPE.API.Models.Evaluation> Evaluations { get; set; }

        public DbSet<PPE.API.Models.Critere> Criteres { get; set; }
        public DbSet<PPE.API.Models.Note> Notes { get; set; }
        public DbSet<PPE.API.Models.E6> e6s { get; set; }
       
    

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
            modelBuilder.ApplyConfiguration(new E6Config());
            modelBuilder.ApplyConfiguration(new NoteConfig());
            modelBuilder.ApplyConfiguration(new CritereConfig());

            modelBuilder.Entity<UserRole>(userRole => 
            {
                userRole.HasKey(ur => new {ur.UserId, ur.RoleId});
                
                userRole.HasOne(ur => ur.Role).WithMany(r => r.UserRoles)
                    .HasForeignKey(ur => ur.RoleId).IsRequired();

                userRole.HasOne(ur => ur.User).WithMany(r => r.UserRoles)
                    .HasForeignKey(ur => ur.UserId).IsRequired();
            });
        }
    }
}