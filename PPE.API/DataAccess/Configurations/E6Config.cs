using PPE.API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;


namespace PPE.API.DataAccess
{
    public class E6Config : IEntityTypeConfiguration<E6>
    {
        public void Configure(EntityTypeBuilder<E6> builder)
        {
            builder.ToTable("E6");
            builder.HasKey(p => p.Id);

            builder.Property(x => x.Id).HasColumnName("ID").HasColumnType("INTEGER").IsRequired();
            builder.Property(x => x.Date).HasColumnName("Date").HasColumnType("INTEGER").IsRequired();
            builder.Property(x => x.EtudiantId).HasColumnName("EtudiantId").HasColumnType("INTEGER").IsRequired();
            builder.Property(x => x.JuryId).HasColumnName("JuryId").HasColumnType("INTEGER").IsRequired();
            builder.Property(x => x.C1).HasColumnName("C1").HasColumnType("REAL");
            builder.Property(x => x.C2).HasColumnName("C2").HasColumnType("REAL");
            builder.Property(x => x.C3).HasColumnName("C3").HasColumnType("REAL");
            builder.Property(x => x.C4).HasColumnName("C4").HasColumnType("REAL");
            builder.Property(x => x.NotePhase1).HasColumnName("NotePhase1").HasColumnType("REAL");
            builder.Property(x => x.C5).HasColumnName("C5").HasColumnType("REAL");
            builder.Property(x => x.C6).HasColumnName("C6").HasColumnType("REAL");
            builder.Property(x => x.C7).HasColumnName("C7").HasColumnType("REAL");
            builder.Property(x => x.NotePhase2).HasColumnName("NotePhase2").HasColumnType("REAL");
            builder.Property(x => x.P1).HasColumnName("P1").HasColumnType("REAL");
            builder.Property(x => x.P2).HasColumnName("P2").HasColumnType("REAL");
            builder.Property(x => x.Resultat).HasColumnName("Resultat").HasColumnType("REAL");

        






        }
    }
}