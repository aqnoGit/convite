import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html', // ← CORRIGIR
  styleUrl: './app.component.css', // ← CORRIGIR
})
export class AppComponent {
  // ← Verificar se o nome está correto
  title = 'convite-interativo-front';
}
