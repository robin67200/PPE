using PPE.API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace PPE.API.DataAccess {
    public class EvaluationConfig : IEntityTypeConfiguration<Evaluation>
    {
        public void Configure(EntityTypeBuilder<Evaluation> builder)
        {
            builder.ToTable("Evaluation");
            builder.HasKey(p => p.ID);

            builder.Property(x => x.ID).HasColumnName("ID").HasColumnType("INTEGER").IsRequired();
            builder.Property(x => x.Date).HasColumnName("Date").HasColumnType("INTEGER").IsRequired();
            builder.Property(x => x.PhaseId).HasColumnName("PhaseId").HasColumnType("INTEGER").IsRequired();
            builder.Property(x => x.EtudiantId).HasColumnName("EtudiantId").HasColumnType("INTEGER").IsRequired();
            builder.Property(x => x.JuryId).HasColumnName("JuryId").HasColumnType("INTEGER").IsRequired();

            


            
            
            

        }
    }
}