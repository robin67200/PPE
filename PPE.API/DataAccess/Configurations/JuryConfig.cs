using PPE.API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace PPE.API.DataAccess {
    public class JuryConfig : IEntityTypeConfiguration<Jury>
    {
        public void Configure(EntityTypeBuilder<Jury> builder)
        {
            builder.ToTable("Jury");
            builder.HasKey(p => p.ID);

            builder.Property(x => x.ID).HasColumnName("ID").HasColumnType("INTEGER").IsRequired();
            builder.Property(x => x.Teacher1).HasColumnName("Teacher1").HasColumnType("TEXT").IsRequired();
            builder.Property(x => x.Teacher2).HasColumnName("Teacher2").HasColumnType("TEXT").IsRequired();
            builder.Property(x => x.Teacher3).HasColumnName("Teacher3").HasColumnType("TEXT").IsRequired();
            
            builder.HasMany(x => x.evaluations).WithOne().HasForeignKey(x => x.JuryId);
        }
    }
}