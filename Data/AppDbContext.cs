using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GerenciadorPresenca.Model;
using Microsoft.EntityFrameworkCore;

namespace GerenciadorPresenca.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options){}
        public DbSet<Convidado> Convidados{get; set;}
    }
}