namespace EldenRingApi.Models;

public class Lore
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Content { get; set; } = string.Empty;
    public int? CharacterId { get; set; }
}
