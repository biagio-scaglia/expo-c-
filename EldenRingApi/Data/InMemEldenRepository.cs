using EldenRingApi.Models;

namespace EldenRingApi.Data;

public class InMemEldenRepository : IEldenRepository
{
    private readonly EldenDbContext _context;

    public InMemEldenRepository(EldenDbContext context)
    {
        _context = context;
    }

    public IEnumerable<Character> GetCharacters() => _context.Characters.ToList();
    public Character? GetCharacterById(int id) => _context.Characters.Find(id);

    public IEnumerable<Location> GetLocations() => _context.Locations.ToList();
    public Location? GetLocationById(int id) => _context.Locations.Find(id);

    public IEnumerable<Lore> GetLoreEntries() => _context.LoreEntries.ToList();
    public Lore? GetLoreById(int id) => _context.LoreEntries.Find(id);
}
