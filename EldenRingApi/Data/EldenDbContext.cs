using EldenRingApi.Models;
using Microsoft.EntityFrameworkCore;

namespace EldenRingApi.Data;

public class EldenDbContext : DbContext
{
    public EldenDbContext(DbContextOptions<EldenDbContext> options) : base(options) { }

    public DbSet<Character> Characters { get; set; } = null!;
    public DbSet<Location> Locations { get; set; } = null!;
    public DbSet<Lore> LoreEntries { get; set; } = null!;
}
