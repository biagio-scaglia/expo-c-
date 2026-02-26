using Swashbuckle.AspNetCore.Annotations;

namespace EldenRingApi.Models;

[SwaggerSchema("Represents a powerful entity or boss within the Lands Between.")]
public class Character
{
    public int Id { get; set; }
    
    [SwaggerSchema("The full name of the character.")]
    public string Name { get; set; } = string.Empty;
    
    [SwaggerSchema("The official title or honorific of the character.")]
    public string Title { get; set; } = string.Empty;
    
    [SwaggerSchema("A brief lore description. (Supports Markdown)")]
    public string Description { get; set; } = string.Empty;
    
    public int Vigor { get; set; }
    public int Mind { get; set; }
    public int Endurance { get; set; }
    public int Strength { get; set; }
    public int Dexterity { get; set; }
    public int Intelligence { get; set; }
    public int Faith { get; set; }
    public int Arcane { get; set; }
    
    [SwaggerSchema("The relative path to the character's portrait image.")]
    public string ImageUrl { get; set; } = string.Empty;
    
    public int? LocationId { get; set; }
}
