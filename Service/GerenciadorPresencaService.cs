using GerenciadorPresenca.Data;
using GerenciadorPresenca.Model;
using Microsoft.EntityFrameworkCore;

namespace GerenciadorPresenca.Service
{
    public class GerenciadorPresencaService : IGerenciadorService
    {
        private readonly AppDbContext _appDbContext;

        public GerenciadorPresencaService(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public async Task Confirmar(List<Convidado> convidados)
        {
            _appDbContext.Convidados.AddRange(convidados);
            await _appDbContext.SaveChangesAsync();
        }

        public async Task<List<Convidado>> ListarConvidados()
        {
            return await _appDbContext.Convidados.ToListAsync();
        }
    }
}