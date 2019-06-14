using PPE.API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace PPE.API.DataAccess {
    public class StudentConfig : IEntityTypeConfiguration<Student>
    {
        public void Configure(EntityTypeBuilder<Student> builder)
        {
            builder.ToTable("Student");
            builder.HasKey(p => p.ID);

            builder.Property(x => x.ID).HasColumnName("ID").HasColumnType("INTEGER").IsRequired();
            builder.Property(x => x.Name).HasColumnName("Name").HasColumnType("TEXT").IsRequired();
            builder.Property(x => x.FirstName).HasColumnName("FirstName").HasColumnType("TEXT").IsRequired();
            builder.Property(x => x.Mail).HasColumnName("Mail").HasColumnType("TEXT").IsRequired();
            builder.Property(x => x.Section).HasColumnName("Section").HasColumnType("TEXT").IsRequired();
            builder.Property(x => x.Matiere).HasColumnName("Matiere").HasColumnType("TEXT").IsRequired();
            builder.Property(x => x.Evaluation).HasColumnName("Eval").HasColumnType("TEXT");

            builder.HasMany(x => x.evaluations).WithOne().HasForeignKey(x => x.EtudiantId);
            builder.HasMany(x => x.e6s).WithOne().HasForeignKey(x => x.EtudiantId);
        }
    }
}