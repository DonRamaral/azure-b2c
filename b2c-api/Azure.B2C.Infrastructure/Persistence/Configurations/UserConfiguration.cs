using Azure.B2C.Infrastructure.Persistence.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Azure.B2C.Infrastructure.Persistence.Configurations
{
    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.ToTable("USER");
            builder.HasKey(p => p.UserId);
            builder.Property(p => p.UserId).HasColumnName("USER_ID").ValueGeneratedOnAdd();
            builder.Property(p => p.FirstName).IsRequired().HasColumnName("FIRST_NAME").HasMaxLength(100);
            builder.Property(p => p.LastName).IsRequired().HasColumnName("LAST_NAME").HasMaxLength(100);
            builder.Property(p => p.Email).IsRequired().HasColumnName("EMAIL").HasMaxLength(100);
            builder.Property(p => p.IsInternalUser).IsRequired().HasColumnName("INTERNAL");
            builder.Property(p => p.IsActive).IsRequired().HasColumnName("ACTIVE");
            builder.Property(p => p.InvitationUrl).IsRequired().HasColumnName("INVITATION_URL");
        }
    }
}