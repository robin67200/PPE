using PPE.API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace PPE.API.DataAccess {
    public class PhaseConfig : IEntityTypeConfiguration<Phase>
    {
        public void Configure(EntityTypeBuilder<Phase> builder)
        {
            builder.ToTable("Phase");
            builder.HasKey(p => p.ID);

            builder.Property(x => x.ID).HasColumnName("ID").HasColumnType("INTEGER").IsRequired();
            builder.Property(x => x.NoteFinale).HasColumnName("NoteFinale").HasColumnType("REAL").IsRequired();
            builder.Property(x => x.Remarques).HasColumnName("Remarques").HasColumnType("TEXT");
            builder.Property(x => x.Critere1ID).HasColumnName("Critere1ID").HasColumnType("INTEGER");
            builder.Property(x => x.Critere2ID).HasColumnName("Critere2ID").HasColumnType("INTEGER");
            builder.Property(x => x.PenaliteID).HasColumnName("Critere2ID").HasColumnType("INTEGER");

            builder.HasMany(x => x.evaluations).WithOne().HasForeignKey(x => x.PhaseId);
           
            
            
        }
    }
}