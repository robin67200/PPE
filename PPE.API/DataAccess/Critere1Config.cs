using PPE.API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace PPE.API.DataAccess {
    public class Critere1Config : IEntityTypeConfiguration<Critere1>
    {
        public void Configure(EntityTypeBuilder<Critere1> builder)
        {
            builder.ToTable("Critere1");
            builder.HasKey(p => p.ID);

            builder.Property(x => x.ID).HasColumnName("ID").HasColumnType("INTEGER").IsRequired();
            builder.Property(x => x.Bareme).HasColumnName("Bareme").HasColumnType("REAL").IsRequired();
            builder.Property(x => x.C1).HasColumnName("C1").HasColumnType("TEXT").IsRequired();
            builder.Property(x => x.C2).HasColumnName("C2").HasColumnType("TEXT").IsRequired();
            builder.Property(x => x.C3).HasColumnName("C3").HasColumnType("TEXT").IsRequired();
            builder.Property(x => x.C4).HasColumnName("C4").HasColumnType("TEXT").IsRequired();

            builder.HasMany(x => x.phases).WithOne().HasForeignKey(x => x.Critere1ID);


        }
    }
}