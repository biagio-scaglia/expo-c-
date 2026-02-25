using EldenRingApi.Data;
using EldenRingApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace EldenRingApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class LocationsController : ControllerBase
{
    private readonly IEldenRepository _repository;

    public LocationsController(IEldenRepository repository)
    {
        _repository = repository;
    }

    [HttpGet]
    public ActionResult<IEnumerable<Location>> GetAll()
    {
        return Ok(_repository.GetLocations());
    }

    [HttpGet("{id}")]
    public ActionResult<Location> GetById(int id)
    {
        var location = _repository.GetLocationById(id);
        if (location == null) return NotFound();
        return Ok(location);
    }
}
