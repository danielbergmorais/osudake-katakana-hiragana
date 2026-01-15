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
  progressoClique = 0;

  // --- Seleções ---
  options: string[] = [];
  selectedRed: string[] = [];
  selectedBlue: string[] = [];
  cardsPerStep: Card[][] = [];

  // --- Sequências ---
  sequences: string[][] = [];
  sequenceCorrect: string[] = [];
  sequenceIndex = 0;
  sequencesFinishedsInActualStep = 0;

  // --- Controle de etapa ---
  TOTAL_ETAPAS = 5;
  step = 1;
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

    this.cardsPerStep = [];

    this.simpleGrid.forEach((grid, etapaIndex) => {
      const preparedGrid: GridItem[] = grid
        .slice(0, shuffled.length)
        .map((item, index) => ({
          ...item,
          char: shuffled[index],
        }));

      this.cardsPerStep[etapaIndex] = this.generateLayout(preparedGrid, 7, 3);
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

    this.cardsPerStep = [];

    this.doubleGrid.forEach((grid, etapaIndex) => {
      const preparedGrid: GridItem[] = grid
        .slice(0, shuffled.length)
        .map((item, index): GridItem => {
          const char = shuffled[index];
          const color: Color = this.selectedRed.includes(char) ? 'red' : 'blue';
          return { ...item, char, color };
        });

      this.cardsPerStep[etapaIndex] = this.generateLayout(preparedGrid, 7, 3);

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
    this.sequences = [];

    if (redOnly) {
      this.sequences.push(this.selectedRed);
    } else {
      this.sequences.push(this.selectedRed);
      this.sequences.push(this.selectedBlue);
    }

    this.sequenceIndex = 0;
    this.sequenceCorrect = this.sequences[0];
    this.progressoClique = 0;
    this.sequencesFinishedsInActualStep = 0;
    this.romanji = this.sequenceCorrect[this.progressoClique];
  }

  // ------------------------
  // Clique em letra
  // ------------------------
  click(valor: string) {
    if (this.gameOver) return;

    this.helpers.play(valor);

    const esperado = this.sequenceCorrect[this.progressoClique];

    if (valor === esperado) {
      this.isCorrect(valor);
      this.romanji = this.sequenceCorrect[this.progressoClique];
    } else {
      this.isWrong(valor);
    }
  }

  private isCorrect(valor: string) {
    this.selectedError = [];
    this.progressoClique++;

    if (!this.selected.includes(valor)) this.selected.push(valor);

    // Remove erros se existirem
    this.selectedError = this.selectedError.filter(v => v !== valor);

    if (this.sequenceIsComplete()) this.nextSequence();
  }

  private isWrong(valor: string) {
    if (!this.selected.includes(valor) && !this.selectedError.includes(valor)) {
      this.selectedError.push(valor);
    }
  }

  private sequenceIsComplete(): boolean {
    return this.progressoClique === this.sequenceCorrect.length;
  }

  private nextSequence() {
    this.sequencesFinishedsInActualStep++;

    if (this.isAllSequenceFinisheds()) {
      this.finishingStep();
      return;
    }

    this.progressoClique = 0;
    this.sequenceIndex =
      (this.sequenceIndex + 1) % this.sequences.length;
    this.sequenceCorrect = this.sequences[this.sequenceIndex];
  }

  private isAllSequenceFinisheds(): boolean {
    return this.sequencesFinishedsInActualStep === this.sequences.length;
  }

  // ------------------------
  // Finalização de etapa
  // ------------------------
  private finishingStep() {
    if (this.step === this.TOTAL_ETAPAS) {
      this.finishingGame();
      return;
    }

    this.step++;
    this.resetSteps();
    this.resetControlSequence();
  }

  private resetSteps() {
    this.selected = [];
    this.selectedError = [];
  }

  private resetControlSequence() {
    this.sequencesFinishedsInActualStep = 0;
    this.progressoClique = 0;
    this.sequenceIndex = 0;
    this.sequenceCorrect = this.sequences[0];
  }

  // ------------------------
  // Finalização de jogo
  // ------------------------
  private async finishingGame() {
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

}
