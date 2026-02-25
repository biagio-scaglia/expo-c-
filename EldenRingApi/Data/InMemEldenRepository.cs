using EldenRingApi.Models;

namespace EldenRingApi.Data;

public class InMemEldenRepository : IEldenRepository
{
    private readonly List<Character> _characters = new()
    {
        new Character { Id = 1, Name = "Malenia, Blade of Miquella", Title = "Goddess of Rot", Description = "A fierce warrior who has never known defeat.", LocationId = 1 },
        new Character { Id = 2, Name = "Radagon of the Golden Order", Title = "The Second Elden Lord", Description = "A champion who came to the Lands Between.", LocationId = 2 },
        new Character { Id = 3, Name = "Ranni the Witch", Title = "Lunar Princess", Description = "A mysterious witch seeking to usher in the Age of Stars.", LocationId = 3 }
    };

    private readonly List<Location> _locations = new()
    {
        new Location { Id = 1, Name = "Elphael, Brace of the Haligtree", Region = "Miquella's Haligtree", Description = "A secret city hidden within the branches of the Haligtree." },
        new Location { Id = 2, Name = "Elden Throne", Region = "Leyndell, Royal Capital", Description = "The seat of the Elden Lord within the Erdtree." },
        new Location { Id = 3, Name = "Ranni's Rise", Region = "Liurnia of the Lakes", Description = "A tower where the Lunar Princess resides." }
    };

    private readonly List<Lore> _loreEntries = new()
    {
        new Lore { Id = 1, Title = "The Shattering", Content = "The war that followed the destruction of the Elden Ring.", CharacterId = null },
        new Lore { Id = 2, Title = "The Scarlet Rot", Content = "A parasitic disease that consumes the Lands Between.", CharacterId = 1 },
        new Lore { Id = 3, Title = "The Dark Moon", Content = "A sign of the Age of Stars proposed by Ranni.", CharacterId = 3 }
    };

    public IEnumerable<Character> GetCharacters() => _characters;
    public Character? GetCharacterById(int id) => _characters.FirstOrDefault(c => c.Id == id);

    public IEnumerable<Location> GetLocations() => _locations;
    public Location? GetLocationById(int id) => _locations.FirstOrDefault(l => l.Id == id);

    public IEnumerable<Lore> GetLoreEntries() => _loreEntries;
    public Lore? GetLoreById(int id) => _loreEntries.FirstOrDefault(l => l.Id == id);
}
