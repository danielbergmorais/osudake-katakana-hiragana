import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { caracterList } from 'src/services/caracter.list';
import { TypeStateService } from 'src/services/type-state.service';
import { HelpersService } from 'src/services/helpers.service';
import { ToastController } from '@ionic/angular/standalone';

type Color = 'red' | 'blue';

interface GridItem {
  char: string;
  color: Color;
  row: number;
  col: number;
}

interface Card {
  char: string;
  color: Color;
  top: number;
  left: number;
}

@Component({
  selector: 'app-double',
  templateUrl: './double.page.html',
  styleUrls: ['./double.page.scss'],
  standalone: false,
})
export class DoublePage implements OnInit {
  // --- Estado do jogo ---
  selected: string[] = [];
  selectedError: string[] = [];
  gameOver = false;
  sequenciasConcluidasNaEtapa = 0;

  // --- Seleções ---
  options: string[] = [];
  selectedRed: string[] = [];
  selectedBlue: string[] = [];
  cardsPorEtapa: Card[][] = [];

  // --- Sequências ---
  sequencias: string[][] = [];
  sequenciaCorreta: string[] = [];
  sequenciaAtualIndex = 0;
  progressoClique = 0;

  // --- Controle de etapa ---
  TOTAL_ETAPAS = 5;
  etapaAtual = 1;
  romanji = '';

  // --- Grid ---

  simpleGrid: GridItem[][] = [
    [
      { char: 'う', color: 'red', row: 2, col: 1 },
      { char: 'あ', color: 'red', row: 3, col: 2 },
      { char: 'え', color: 'red', row: 2, col: 3 },
      { char: 'お', color: 'red', row: 4, col: 1 },
      { char: 'い', color: 'red', row: 4, col: 3 },
    ],
    [
      { char: 'け', color: 'blue', row: 3, col: 1 },
      { char: 'か', color: 'blue', row: 5, col: 1 },
      { char: 'く', color: 'blue', row: 4, col: 3 },
      { char: 'き', color: 'blue', row: 2, col: 2 },
      { char: 'こ', color: 'blue', row: 6, col: 2 },
    ],
    [
      { char: 'う', color: 'red', row: 3, col: 1 },
      { char: 'お', color: 'red', row: 2, col: 2 },
      { char: 'い', color: 'red', row: 4, col: 2 },
      { char: 'あ', color: 'red', row: 5, col: 3 },
      { char: 'え', color: 'red', row: 3, col: 3 },
    ],
    [
      { char: 'う', color: 'red', row: 1, col: 2 },
      { char: 'お', color: 'red', row: 3, col: 3 },
      { char: 'い', color: 'red', row: 3, col: 1 },
      { char: 'あ', color: 'red', row: 3, col: 2 },
      { char: 'え', color: 'red', row: 5, col: 2 },
    ],
    [
      { char: 'う', color: 'red', row: 2, col: 3 },
      { char: 'お', color: 'red', row: 2, col: 1 },
      { char: 'い', color: 'red', row: 3, col: 2 },
      { char: 'え', color: 'red', row: 5, col: 2 },
      { char: 'あ', color: 'red', row: 4, col: 1 },
    ]
  ]

  doubleGrid: GridItem[][] = [
    [
      { char: 'う', color: 'red', row: 2, col: 1 },
      { char: 'え', color: 'red', row: 2, col: 3 },
      { char: 'あ', color: 'red', row: 3, col: 2 },
      { char: 'お', color: 'red', row: 4, col: 1 },
      { char: 'い', color: 'red', row: 7, col: 2 },

      { char: 'こ', color: 'blue', row: 1, col: 2 },
      { char: 'け', color: 'blue', row: 6, col: 3 },
      { char: 'か', color: 'blue', row: 4, col: 3 },
      { char: 'く', color: 'blue', row: 6, col: 1 },
      { char: 'き', color: 'blue', row: 5, col: 2 },
    ],
    [
      { char: 'け', color: 'blue', row: 3, col: 1 },
      { char: 'か', color: 'blue', row: 5, col: 1 },
      { char: 'こ', color: 'blue', row: 6, col: 2 },
      { char: 'き', color: 'blue', row: 2, col: 2 },
      { char: 'く', color: 'blue', row: 3, col: 3 },

      { char: 'う', color: 'red', row: 1, col: 1 },
      { char: 'あ', color: 'red', row: 7, col: 1 },
      { char: 'え', color: 'red', row: 4, col: 2 },
      { char: 'い', color: 'red', row: 1, col: 3 },
      { char: 'お', color: 'red', row: 5, col: 3 },
    ],
    [
      { char: 'う', color: 'red', row: 1, col: 1 },
      { char: 'お', color: 'red', row: 2, col: 2 },
      { char: 'い', color: 'red', row: 4, col: 2 },
      { char: 'あ', color: 'red', row: 5, col: 3 },
      { char: 'え', color: 'red', row: 3, col: 3 },

      { char: 'こ', color: 'blue', row: 3, col: 1 },
      { char: 'け', color: 'blue', row: 6, col: 1 },
      { char: 'か', color: 'blue', row: 6, col: 2 },
      { char: 'き', color: 'blue', row: 1, col: 3 },
      { char: 'く', color: 'blue', row: 7, col: 3 },
    ],
    [

      { char: 'こ', color: 'blue', row: 1, col: 1 },
      { char: 'け', color: 'blue', row: 6, col: 1 },
      { char: 'か', color: 'blue', row: 1, col: 2 },
      { char: 'き', color: 'blue', row: 7, col: 2 },
      { char: 'く', color: 'blue', row: 2, col: 3 },

      { char: 'う', color: 'red', row: 4, col: 1 },
      { char: 'お', color: 'red', row: 3, col: 2 },
      { char: 'え', color: 'red', row: 5, col: 2 },
      { char: 'い', color: 'red', row: 4, col: 3 },
      { char: 'あ', color: 'red', row: 7, col: 3 },
    ],
    [
      { char: 'い', color: 'red', row: 3, col: 1 },
      { char: 'う', color: 'red', row: 7, col: 3 },
      { char: 'お', color: 'red', row: 1, col: 2 },
      { char: 'え', color: 'red', row: 6, col: 2 },
      { char: 'あ', color: 'red', row: 7, col: 1 },

      { char: 'き', color: 'blue', row: 4, col: 2 },
      { char: 'こ', color: 'blue', row: 2, col: 3 },
      { char: 'け', color: 'blue', row: 5, col: 3 },
      { char: 'か', color: 'blue', row: 1, col: 1 },
      { char: 'く', color: 'blue', row: 5, col: 1 },
    ]

  ]
  // --- Serviços ---
  type$ = this.typeState.type$;

  constructor(
    private router: Router,
    private helpers: HelpersService,
    private typeState: TypeStateService,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.loadOptions();
    if (this.selectedRed.length && !this.selectedBlue.length) {
      // Modo Red-only
      this.prepareRedGrid();
      this.begin(true);
    } else {
      // Modo normal Red+Blue
      this.prepareGrid();
      this.begin(false);
    }
  }

  // ------------------------
  // Carrega opções do localStorage
  // ------------------------
  loadOptions() {
    const op = localStorage.getItem('options');
    if (!op) return;

    this.options = JSON.parse(op);

    const foundGroups = this.options
      .map(opt => caracterList.find(group => group[0] === opt))
      .filter((g): g is string[] => !!g);

    this.selectedRed = foundGroups[0] ?? [];
    this.selectedBlue = foundGroups[1] ?? [];
  }

  // ------------------------
  // Preparar grid Red-only
  // ------------------------

  prepareRedGrid() {
    if (!this.selectedRed.length) return;

    const shuffled = [...this.selectedRed].sort(() => Math.random() - 0.5);

    this.cardsPorEtapa = [];

    this.simpleGrid.forEach((grid, etapaIndex) => {
      const preparedGrid: GridItem[] = grid
        .slice(0, shuffled.length)
        .map((item, index) => ({
          ...item,
          char: shuffled[index],
        }));

      this.cardsPorEtapa[etapaIndex] = this.generateLayout(preparedGrid, 7, 3);
    });
  }

  // ------------------------
  // Preparar grid Red+Blue
  // ------------------------
  prepareGrid() {
    if (!this.selectedRed.length && !this.selectedBlue.length) return;

    const shuffled = [...this.selectedRed, ...this.selectedBlue].sort(
      () => Math.random() - 0.5
    );

    this.cardsPorEtapa = [];

    this.doubleGrid.forEach((grid, etapaIndex) => {
      const preparedGrid: GridItem[] = grid
        .slice(0, shuffled.length)
        .map((item, index): GridItem => {
          const char = shuffled[index];
          const color: Color = this.selectedRed.includes(char) ? 'red' : 'blue';
          return { ...item, char, color };
        });

      this.cardsPorEtapa[etapaIndex] = this.generateLayout(preparedGrid, 7, 3);

      this.doubleGrid[etapaIndex].splice(
        0,
        this.doubleGrid[etapaIndex].length,
        ...preparedGrid
      );
    });
  }

  // ------------------------
  // Gera layout final das cartas
  // ------------------------
  generateLayout(grid: GridItem[], rows: number, cols: number): Card[] {
    const rowStep = 100 / (rows + 1);
    const colStep = 100 / (cols + 1);

    return grid.map(item => ({
      char: item.char,
      color: item.color,
      top: Math.round(rowStep * item.row),
      left: Math.round(colStep * item.col),
    }));
  }

  // ------------------------
  // Inicia sequência
  // ------------------------
  begin(redOnly = false) {
    this.sequencias = [];

    if (redOnly) {
      this.sequencias.push(this.selectedRed);
    } else {
      this.sequencias.push(this.selectedRed);
      this.sequencias.push(this.selectedBlue);
    }


    this.sequenciaAtualIndex = 0;
    this.sequenciaCorreta = this.sequencias[0];
    this.progressoClique = 0;
    this.sequenciasConcluidasNaEtapa = 0;
    this.romanji = this.sequenciaCorreta[this.progressoClique];
  }

  // ------------------------
  // Clique em letra
  // ------------------------
  clicar(valor: string) {
    if (this.gameOver) return;

    const esperado = this.sequenciaCorreta[this.progressoClique];

    if (valor === esperado) {
      this.tratarAcerto(valor);
      this.romanji = this.sequenciaCorreta[this.progressoClique];
    } else {
      this.tratarErro(valor);
    }
  }

  private tratarAcerto(valor: string) {
    this.selectedError = [];
    this.progressoClique++;

    if (!this.selected.includes(valor)) this.selected.push(valor);

    // Remove erros se existirem
    this.selectedError = this.selectedError.filter(v => v !== valor);

    if (this.sequenciaCompleta()) this.avancarSequencia();
  }

  private tratarErro(valor: string) {
    if (!this.selected.includes(valor) && !this.selectedError.includes(valor)) {
      this.selectedError.push(valor);
    }
  }

  private sequenciaCompleta(): boolean {
    return this.progressoClique === this.sequenciaCorreta.length;
  }

  private avancarSequencia() {
    this.sequenciasConcluidasNaEtapa++;

    if (this.todasSequenciasConcluidas()) {
      this.finalizarEtapa();
      return;
    }

    this.progressoClique = 0;
    this.sequenciaAtualIndex =
      (this.sequenciaAtualIndex + 1) % this.sequencias.length;
    this.sequenciaCorreta = this.sequencias[this.sequenciaAtualIndex];
  }

  private todasSequenciasConcluidas(): boolean {
    return this.sequenciasConcluidasNaEtapa === this.sequencias.length;
  }

  // ------------------------
  // Finalização de etapa
  // ------------------------
  private finalizarEtapa() {
    if (this.etapaAtual === this.TOTAL_ETAPAS) {
      this.finalizarJogo();
      return;
    }

    this.etapaAtual++;
    this.resetarEstadoEtapa();
    this.resetarControleSequencias();
  }

  private resetarEstadoEtapa() {
    this.selected = [];
    this.selectedError = [];
  }

  private resetarControleSequencias() {
    this.sequenciasConcluidasNaEtapa = 0;
    this.progressoClique = 0;
    this.sequenciaAtualIndex = 0;
    this.sequenciaCorreta = this.sequencias[0];
  }

  // ------------------------
  // Finalização de jogo
  // ------------------------
  private async finalizarJogo() {
    this.gameOver = true;

    const toast = await this.toastController.create({
      message: `
        <div class="toast-success">
          <div class="text">
            <div class="title">Bom trabalho! Você conseguiu!</div>
            <div class="jp">よくできました! </div>
            <div class="jp">おめでとうございます</div>
          </div>
        </div>
      `,
      icon: 'checkmark-circle',
      duration: 5000,
      position: 'bottom',
      color: 'success',
      cssClass: 'success-toast',
    });
    await toast.present();
    this.router.navigate(['/lesson']);
  }

  // ------------------------
  // Função de helper para tocar som e clicar
  // ------------------------
  selectOptions(target: string) {
    this.helpers.play(target);
    this.clicar(target);
  }

}
