using EldenRingApi.Data;
using Scalar.AspNetCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddOpenApi();

builder.Services.AddSingleton<IEldenRepository, InMemEldenRepository>();

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

app.UseCors("AllowAll");
app.UseAuthorization();
app.MapControllers();

app.Run();
