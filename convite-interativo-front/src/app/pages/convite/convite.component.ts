import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ConvidadoService, Convidado } from '../../services/convidado.service';

@Component({
  selector: 'app-convite',
  imports: [FormsModule, CommonModule],
  templateUrl: './convite.component.html',
  styleUrl: './convite.component.css',
})
export class ConviteComponent {
  nomeConvidado: string = '';
  mensagem: string = '';
  showMensagem: boolean = false;
  erroMensagem = false;
  carregando = false;

  modalAberta = false;
  modalTipo: 'local' | 'presentes' | null = null;

  vaiComAdultos = false;
  nomesAdultos: string[] = [];

  vaiComCrianca = false;
  nomesCriancas: string[] = [];

  constructor(private convidadoService: ConvidadoService) { }

  confirmarPresenca() {
    // Validações
    if (!this.nomeConvidado.trim()) {
      this.mostrarMensagem('Por favor, digite seu nome!', true);
      return;
    }
    if (this.vaiComAdultos && this.nomesAdultos.some(n => !n.trim())) {
      this.mostrarMensagem('Por favor, preencha o nome de todos os acompanhantes!', true);
      return;
    }
    if (this.vaiComCrianca && this.nomesCriancas.some(n => !n.trim())) {
      this.mostrarMensagem('Por favor, preencha o nome de todas as crianças!', true);
      return;
    }

    // Monta a lista
    const convidados: Convidado[] = [];

    convidados.push({ nome: this.nomeConvidado.trim(), nomeCrianca: null });

    if (this.vaiComAdultos) {
      this.nomesAdultos.forEach(nome => {
        convidados.push({ nome: nome.trim(), nomeCrianca: null });
      });
    }

    if (this.vaiComCrianca) {
      this.nomesCriancas.forEach(nomeCrianca => {
        convidados.push({ nome: null, nomeCrianca: nomeCrianca.trim() });
      });
    }
    this.carregando = true;
    // Envia
    this.convidadoService.confirmar(convidados).subscribe({
      next: () => {
        this.mostrarMensagem('Presença confirmada! Te esperamos na festa!');
        this.limparFormulario();
         this.carregando = false;
      },
      error: () => {
        this.mostrarMensagem('Erro ao confirmar presença. Tente novamente!', true);
        this.carregando = false;
      }
    });
  }

  trackByIndex(index: number): number {
    return index;
  }

  mostrarMensagem(msg: string, erro: boolean = false) {
    this.mensagem = msg;
    this.erroMensagem = erro;
    this.showMensagem = true;
    setTimeout(() => this.showMensagem = false, 3000);
  }

  limparFormulario() {
    this.nomeConvidado = '';
    this.nomesAdultos = [];
    this.nomesCriancas = [];
    this.vaiComAdultos = false;
    this.vaiComCrianca = false;
  }

  abrirModal() {
    this.modalAberta = true;
  }

  fecharModal() {
    this.modalAberta = false;
    this.modalTipo = null;
  }

  toggleAdultos() {
    this.vaiComAdultos = !this.vaiComAdultos;
    this.nomesAdultos = this.vaiComAdultos ? [''] : [];
  }

  adicionarAdulto() {
    if (this.nomesAdultos.length < 10) this.nomesAdultos.push('');
  }

  removerAdulto() {
    if (this.nomesAdultos.length > 1) this.nomesAdultos.pop();
  }

  toggleCrianca() {
    this.vaiComCrianca = !this.vaiComCrianca;
    this.nomesCriancas = this.vaiComCrianca ? [''] : [];
  }

  adicionarCrianca() {
    if (this.nomesCriancas.length < 10) this.nomesCriancas.push('');
  }

  removerCrianca() {
    if (this.nomesCriancas.length > 1) this.nomesCriancas.pop();
  }
}