using Swashbuckle.AspNetCore.Annotations;

namespace EldenRingApi.Models;

[SwaggerSchema("Represents a geographical area or dungeon in the Lands Between.")]
public class Location
{
    public int Id { get; set; }
    
    [SwaggerSchema("The name of the location.")]
    public string Name { get; set; } = string.Empty;
    
    [SwaggerSchema("The broader region where this location is found (e.g. Limgrave, Altus Plateau).")]
    public string Region { get; set; } = string.Empty;
    
    [SwaggerSchema("A brief lore description of the area. (Supports Markdown)")]
    public string Description { get; set; } = string.Empty;
    
    [SwaggerSchema("The relative path to a landscape image of the location.")]
    public string ImageUrl { get; set; } = string.Empty;
}
