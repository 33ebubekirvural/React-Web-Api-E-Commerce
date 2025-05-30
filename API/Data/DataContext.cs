using API.Entity;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class DataContext(DbContextOptions options) : DbContext(options)
{
    public DbSet<Product> Products => Set<Product>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Product>().HasData(
            new List<Product>{
            
                new Product {Id=1, Name="Iphone 15", Description="Telefon açıklaması", ImageUrl="1.jpeg", Price=70000, IsActive=true, Stock=100 },
                new Product {Id=2, Name="Iphone 16", Description="Telefon açıklaması", ImageUrl="2.jpeg", Price=80000, IsActive=true, Stock=200 },
                new Product {Id=3, Name="Iphone 16 Pro", Description="Telefon açıklaması", ImageUrl="3.jpeg", Price=90000, IsActive=true, Stock=300 },
                new Product {Id=4, Name="Iphone 16 Pro Max", Description="Telefon açıklaması", ImageUrl="4.jpeg", Price=100000, IsActive=true, Stock=400 },
            }
        );
    }
}
