using EldenRingApi.Data;
using EldenRingApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace EldenRingApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CharactersController : ControllerBase
{
    private readonly IEldenRepository _repository;

    public CharactersController(IEldenRepository repository)
    {
        _repository = repository;
    }

    [HttpGet]
    public ActionResult<IEnumerable<Character>> GetAll()
    {
        return Ok(_repository.GetCharacters());
    }

    [HttpGet("{id}")]
    public ActionResult<Character> GetById(int id)
    {
        var character = _repository.GetCharacterById(id);
        if (character == null) return NotFound();
        return Ok(character);
    }
}
