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
            var principal = convidados.FirstOrDefault();
            if (principal == null) return;

            _appDbContext.Convidados.Add(principal);
            await _appDbContext.SaveChangesAsync();

            foreach (var acompanhante in convidados.Skip(1))
            {
                acompanhante.ConvidadoPrincipalId = principal.Id;
                _appDbContext.Convidados.Add(acompanhante);
            }
            await _appDbContext.SaveChangesAsync();
        }

        public async Task<List<Convidado>> ListarConvidados()
        {
            return await _appDbContext.Convidados.ToListAsync();
        }
    }
}