using EldenRingApi.Data;
using EldenRingApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace EldenRingApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class LoreController : ControllerBase
{
    private readonly IEldenRepository _repository;

    public LoreController(IEldenRepository repository)
    {
        _repository = repository;
    }

    [HttpGet]
    public ActionResult<IEnumerable<Lore>> GetAll()
    {
        return Ok(_repository.GetLoreEntries());
    }

    [HttpGet("{id}")]
    public ActionResult<Lore> GetById(int id)
    {
        var lore = _repository.GetLoreById(id);
        if (lore == null) return NotFound();
        return Ok(lore);
    }
}
