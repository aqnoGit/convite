using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GerenciadorPresenca.Model;

namespace GerenciadorPresenca.Service
{
    public interface IGerenciadorService
    {
        Task Confirmar(List<Convidado> convidados);
        Task<List<Convidado>> ListarConvidados();
    }
}