import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lession',
  templateUrl: './lession.page.html',
  styleUrls: ['./lession.page.scss'],
  standalone: false,
})
export class LessionPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  irParaOutraPagina() {
    this.router.navigateByUrl('/tabs/home', { replaceUrl: true });

  }

  filtrarArrays(
    primeiro: string[][],
    segundo: Record<string, string[]>
  ) {
    const validos = new Set([...primeiro[0], ...primeiro[1]]);
    const resultado: Record<string, string[]> = {};

    for (const [chave, silabas] of Object.entries(segundo)) {
      if (silabas.every(s => validos.has(s))) {
        resultado[chave] = silabas;
      }
    }

    return resultado;
  }
}
