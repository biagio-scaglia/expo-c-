namespace EldenRingApi.Models;

public class Character
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public int Vigor { get; set; }
    public int Mind { get; set; }
    public int Endurance { get; set; }
    public int Strength { get; set; }
    public int Dexterity { get; set; }
    public int Intelligence { get; set; }
    public int Faith { get; set; }
    public int Arcane { get; set; }
    public string ImageUrl { get; set; } = string.Empty;
    public int? LocationId { get; set; }
}
