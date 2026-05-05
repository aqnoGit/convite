import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvidadoService, Convidado } from '../../services/convidado.service';

interface GrupoConvidado {
  principal: Convidado;
  acompanhantes: Convidado[];
}

@Component({
  selector: 'app-admin',
  imports: [CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent implements OnInit {
  convidados: Convidado[] = [];
  grupos: GrupoConvidado[] = [];
  carregando: boolean = true;

  constructor(private convidadoService: ConvidadoService) { }

  ngOnInit() {
    this.carregarConvidados();
  }

  carregarConvidados() {
    this.convidadoService.getConvidados().subscribe({
      next: (data) => {
        this.convidados = data;
        this.grupos = this.agrupar(data);
        this.carregando = false;
      },
      error: (err) => {
        console.error('Erro ao carregar convidados:', err);
        this.carregando = false;
      },
    });
  }

  agrupar(data: Convidado[]): GrupoConvidado[] {
    const principais = data.filter(c => !c.convidadoPrincipalId).sort((a, b) => (a.nome ?? '').localeCompare(b.nome ?? ''));
    return principais.map(p => ({
      principal: p,
      acompanhantes: data.filter(c => c.convidadoPrincipalId === p.id)
    }));
  }
}
