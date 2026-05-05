using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GerenciadorPresenca.Model
{
    public class Convidado
    {
        public int Id { get; set; }
        public string? Nome { get; set; }
        public string? NomeCrianca { get; set; }
        public int? ConvidadoPrincipalId { get; set; }
    }
}