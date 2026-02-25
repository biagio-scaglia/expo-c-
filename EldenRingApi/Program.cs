using EldenRingApi.Data;
using Scalar.AspNetCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddOpenApi();

// Register the Repository for Scalability (Dependency Injection)
// This allows us to scale by switching implementation (e.g., to SQL Server) easily.
builder.Services.AddSingleton<IEldenRepository, InMemEldenRepository>();

// Enable CORS
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

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    // Using Scalar for a premium and interactive API documentation experience
    app.MapScalarApiReference(options => 
    {
        options.WithTitle("Elden Ring Web API - Scalar Reference")
               .WithTheme(ScalarTheme.Mars);
    });
}

// Simple redirect to documentation from home
app.MapGet("/", () => Results.Redirect("/scalar/v1"));

app.UseCors("AllowAll");
app.UseAuthorization();
app.MapControllers();

app.Run();
