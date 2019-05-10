using PPE.API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace PPE.API.DataAccess {
    public class CritereConfig : IEntityTypeConfiguration<Critere>
    {
        public void Configure(EntityTypeBuilder<Critere> builder)
        {
            builder.ToTable("Critere");
            builder.HasKey(p => p.Id);

            builder.Property(x => x.Id).HasColumnName("Id").HasColumnType("INTEGER").IsRequired();
            builder.Property(x => x.Label).HasColumnName("Label").HasColumnType("TEXT").IsRequired();
            builder.Property(x => x.Order).HasColumnName("Order").HasColumnType("INTEGER");
            builder.Property(x => x.PhaseId).HasColumnName("PhaseId").HasColumnType("INTEGER").IsRequired();
            builder.Property(x => x.Type).HasColumnName("Type").HasColumnType("INTEGER").IsRequired();

            


        }
    }
}