using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using GerenciadorPresenca.Data;
using GerenciadorPresenca.Model;
using GerenciadorPresenca.Service;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace GerenciadorPresenca.Controllers
{
    [ApiController]
    [Route("gerenciadorPresenca")]
    public class OrquestradorController : Controller
    {
        private readonly IGerenciadorService _service;
        public OrquestradorController( IGerenciadorService service)
        {           
            _service = service;
        }
        [HttpPost("confirmar")]
        public async Task<IActionResult> ConfirmarPresenca(List<Convidado> convidados)
        {
            await _service.Confirmar(convidados);
            return Ok(new { message = "Confirmação feita com sucesso" });
        }

        [HttpGet("consultar")]
        public async Task<IActionResult> ConsultarConvidados()
        {
            return Ok(await _service.ListarConvidados());
        }

        [HttpGet("ping")]
        [HttpHead("ping")]
        public IActionResult Ping() => Ok("pong");
    }
}