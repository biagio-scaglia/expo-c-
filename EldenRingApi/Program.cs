using EldenRingApi.Models;
using EldenRingApi.Data;
using Microsoft.EntityFrameworkCore;
using Scalar.AspNetCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddOpenApi();

builder.Services.AddDbContext<EldenDbContext>(options =>
    options.UseSqlite("Data Source=elden.db"));

builder.Services.AddScoped<IEldenRepository, InMemEldenRepository>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        policy =>
        {
            policy.AllowAnyOrigin()
                  .AllowAnyMethod()
                  .AllowAnyHeader();
        });
});

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<EldenDbContext>();
    db.Database.EnsureCreated();
    
    if (!db.Characters.Any())
    {
        var malenia = new Character { Name = "Malenia, Blade of Miquella", Title = "Goddess of Rot", Description = "A fierce warrior who has never known defeat.", Vigor = 99, Mind = 20, Endurance = 50, Strength = 30, Dexterity = 90, Intelligence = 10, Faith = 10, Arcane = 10, ImageUrl = "/images/malenia.webp" };
        var radagon = new Character { Name = "Radagon of the Golden Order", Title = "The Second Elden Lord", Description = "A champion who came to the Lands Between.", Vigor = 90, Mind = 40, Endurance = 60, Strength = 80, Dexterity = 40, Intelligence = 50, Faith = 60, Arcane = 10, ImageUrl = "/images/radagon.webp" };
        var ranni = new Character { Name = "Ranni the Witch", Title = "Lunar Princess", Description = "A mysterious witch seeking to usher in the Age of Stars.", Vigor = 40, Mind = 80, Endurance = 30, Strength = 10, Dexterity = 20, Intelligence = 99, Faith = 20, Arcane = 40, ImageUrl = "/images/ranni.jpg" };
        
        db.Characters.AddRange(malenia, radagon, ranni);
        
        db.Locations.AddRange(
            new Location { Name = "Elphael, Brace of the Haligtree", Region = "Miquella's Haligtree", Description = "A secret city hidden within the branches of the Haligtree.", ImageUrl = "/images/elphael.avif" },
            new Location { Name = "Elden Throne", Region = "Leyndell, Royal Capital", Description = "The seat of the Elden Lord within the Erdtree.", ImageUrl = "/images/elden throne.webp" },
            new Location { Name = "Ranni's Rise", Region = "Liurnia of the Lakes", Description = "A tower where the Lunar Princess resides.", ImageUrl = "/images/ranni's rise.jpg" }
        );
        
        db.LoreEntries.AddRange(
            new Lore { Title = "The Shattering", Content = "The war that followed the destruction of the Elden Ring." },
            new Lore { Title = "The Scarlet Rot", Content = "A parasitic disease that consumes the Lands Between." },
            new Lore { Title = "The Dark Moon", Content = "A sign of the Age of Stars proposed by Ranni." }
        );
        
        db.SaveChanges();
    }
}

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.MapScalarApiReference(options => 
    {
        options.WithTitle("Elden Ring Web API - Scalar Reference")
               .WithTheme(ScalarTheme.Mars);
    });
}

app.MapGet("/", () => Results.Redirect("/scalar/v1"));

app.UseStaticFiles();
app.UseCors("AllowAll");
app.UseAuthorization();
app.MapControllers();

app.Run();
