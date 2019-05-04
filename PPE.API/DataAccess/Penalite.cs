using PPE.API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace PPE.API.DataAccess {
    public class PenaliteConfig : IEntityTypeConfiguration<Penalite>
    {
        public void Configure(EntityTypeBuilder<Penalite> builder)
        {
            builder.ToTable("Penalite");
            builder.HasKey(p => p.ID);

            builder.Property(x => x.ID).HasColumnName("ID").HasColumnType("INTEGER").IsRequired();
            builder.Property(x => x.P1).HasColumnName("P1").HasColumnType("INTEGER").IsRequired();
            builder.Property(x => x.P2).HasColumnName("P2").HasColumnType("INTEGER").IsRequired();
            builder.Property(x => x.Total).HasColumnName("Total").HasColumnType("INTEGER").IsRequired();

            builder.HasMany(x => x.phases).WithOne().HasForeignKey(x => x.PenaliteID);

            
            

        }
    }
}