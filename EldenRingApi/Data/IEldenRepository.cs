using EldenRingApi.Models;

namespace EldenRingApi.Data;

public interface IEldenRepository
{
    IEnumerable<Character> GetCharacters();
    Character? GetCharacterById(int id);
    IEnumerable<Location> GetLocations();
    Location? GetLocationById(int id);
    IEnumerable<Lore> GetLoreEntries();
    Lore? GetLoreById(int id);
}
