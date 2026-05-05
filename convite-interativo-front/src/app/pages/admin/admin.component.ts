import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvidadoService, Convidado } from '../../services/convidado.service';

@Component({
  selector: 'app-admin',
  imports: [CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent implements OnInit {
  convidados: Convidado[] = [];
  carregando: boolean = true;

  constructor(private convidadoService: ConvidadoService) { }

  ngOnInit() {
    this.carregarConvidados();
  }
  get totalAdultos(): number {
    return this.convidados.filter(c => !c.nomeCrianca).length;
  }

  get totalCriancas(): number {
    return this.convidados.filter(c => !!c.nomeCrianca).length;
  }
  carregarConvidados() {
    this.convidadoService.getConvidados().subscribe({
      next: (data) => {
        this.convidados = data;
        this.carregando = false;
      },
      error: (err) => {
        console.error('Erro ao carregar convidados:', err);
        this.carregando = false;
      },
    });
  }
}
