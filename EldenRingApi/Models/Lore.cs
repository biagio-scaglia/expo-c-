using Swashbuckle.AspNetCore.Annotations;

namespace EldenRingApi.Models;

[SwaggerSchema("Represents a piece of historical lore or a key event.")]
public class Lore
{
    public int Id { get; set; }
    
    [SwaggerSchema("The title of the lore entry (e.g. The Shattering).")]
    public string Title { get; set; } = string.Empty;
    
    [SwaggerSchema("The detailed historical account. (Rendered as Markdown on the client)")]
    public string Content { get; set; } = string.Empty;
    public int? CharacterId { get; set; }
}
