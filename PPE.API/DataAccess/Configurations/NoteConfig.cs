using PPE.API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace PPE.API.DataAccess {
    public class NoteConfig : IEntityTypeConfiguration<Note>
    {
        public void Configure(EntityTypeBuilder<Note> builder)
        {
            builder.ToTable("Notes");
            builder.HasKey(p => p.Id);

            builder.Property(x => x.Id).HasColumnName("Id").HasColumnType("INTEGER").IsRequired();
            builder.Property(x => x.Notation).HasColumnName("Notation").HasColumnType("INTEGER").IsRequired();
            builder.Property(x => x.CritereId).HasColumnName("CritereId").HasColumnType("INTEGER");
            builder.Property(x => x.EvaluationId).HasColumnName("EvaluationId").HasColumnType("INTEGER").IsRequired();
            



            


        }
    }
}