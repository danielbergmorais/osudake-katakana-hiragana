import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { caracterList } from 'src/services/caracter.list';
import { TypeStateService } from 'src/services/type-state.service';
import { HelpersService } from 'src/services/helpers.service';



//TODO
//1 - Refatorar interfaces
//2 - Usar função grid com array e não variaveis repetidas
//3 - Replicar pro grid unico

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
interface Level {
  grid: GridItem[];
  cards: Card[]; // ou Card[][] se você tiver a interface
}

type CardsKey = 'cards1' | 'cards2' | 'cards3' | 'cards4' | 'cards5';


@Component({
  selector: 'app-double',
  templateUrl: './double.page.html',
  styleUrls: ['./double.page.scss'],
  standalone: false,
})


export class DoublePage implements OnInit {
  selected: string[] = [];

  options: string[] = [];
  selectedRed: string[] = [];
  selectedBlue: string[] = [];
  cards: Card[] = [];

  cards1: Card[] = [];
  cards2: Card[] = [];
  cards3: Card[] = [];
  cards4: Card[] = [];
  cards5: Card[] = [];

  type$ = this.typeState.type$;

  shuffleRed: string[] = [];
  shuffleBlue: string[] = [];

  sequenciaCorreta: string[] = [];
  sequenciaAtualIndex = 0;
  etapaAtual = 0;
  progressoClique = 0;
  sequencias: string[][] = [];

  simpleGrid1: GridItem[] = [
    { char: 'う', color: 'red', row: 2, col: 1 },
    { char: 'あ', color: 'red', row: 3, col: 2 },
    { char: 'え', color: 'red', row: 2, col: 3 },
    { char: 'お', color: 'red', row: 4, col: 1 },
    { char: 'い', color: 'red', row: 4, col: 3 },
  ]
  simpleGrid2: GridItem[] = [
    { char: 'け', color: 'blue', row: 3, col: 1 },
    { char: 'か', color: 'blue', row: 5, col: 1 },
    { char: 'く', color: 'blue', row: 4, col: 3 },
    { char: 'き', color: 'blue', row: 2, col: 2 },
    { char: 'こ', color: 'blue', row: 6, col: 2 },
  ]
  simpleGrid3: GridItem[] = [
    { char: 'う', color: 'red', row: 3, col: 1 },
    { char: 'お', color: 'red', row: 2, col: 2 },
    { char: 'い', color: 'red', row: 4, col: 2 },
    { char: 'あ', color: 'red', row: 5, col: 3 },
    { char: 'え', color: 'red', row: 3, col: 3 },
  ]
  simpleGrid4: GridItem[] = [
    { char: 'う', color: 'red', row: 1, col: 2 },
    { char: 'お', color: 'red', row: 3, col: 3 },
    { char: 'い', color: 'red', row: 3, col: 1 },
    { char: 'あ', color: 'red', row: 3, col: 2 },
    { char: 'え', color: 'red', row: 5, col: 2 },
  ]
  simpleGrid5: GridItem[] = [
    { char: 'う', color: 'red', row: 2, col: 3 },
    { char: 'お', color: 'red', row: 2, col: 1 },
    { char: 'い', color: 'red', row: 3, col: 2 },
    { char: 'え', color: 'red', row: 5, col: 2 },
    { char: 'あ', color: 'red', row: 4, col: 1 },
  ]


  level1Grid: GridItem[] = [
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
  ];

  level2Grid: GridItem[] = [

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

  ];

  level3Grid: GridItem[] = [

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
  ];

  level4Grid: GridItem[] = [

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
  ];

  level5Grid: GridItem[] = [
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
  ];

  levels = {
    level1: this.generateLayout(this.simpleGrid1, 7, 3),
    // level2: this.generateLayout(this.level2Grid, 7, 3),
    // level3: this.generateLayout(this.level3Grid, 7, 3),
    // level4: this.generateLayout(this.level4Grid, 7, 3),
    // level5: this.generateLayout(this.level4Grid, 7, 3),
  };

  constructor(
    private router: Router,
    private helpers: HelpersService,
    private typeState: TypeStateService) {
  }

  ngOnInit() {
    this.loadOptions();

    if (!this.selectedRed.length && !this.selectedBlue.length)
      this.prepareRedGrid();
    else
      this.prepareGrid();

    this.begin()
  }

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

  prepareRedGrid() {
    if (!this.selectedRed.length) return;

    const shuffled = [...this.selectedRed].sort(() => Math.random() - 0.5);

    this.simpleGrid1 = this.simpleGrid1
      .slice(0, shuffled.length)
      .map((item, index) => ({
        ...item,
        char: shuffled[index]
      }));
    this.simpleGrid2 = this.simpleGrid2
      .slice(0, shuffled.length)
      .map((item, index) => ({
        ...item,
        char: shuffled[index]
      }));
    this.simpleGrid3 = this.simpleGrid3
      .slice(0, shuffled.length)
      .map((item, index) => ({
        ...item,
        char: shuffled[index]
      }));
    this.simpleGrid4 = this.simpleGrid4
      .slice(0, shuffled.length)
      .map((item, index) => ({
        ...item,
        char: shuffled[index]
      }));
    this.simpleGrid5 = this.simpleGrid5
      .slice(0, shuffled.length)
      .map((item, index) => ({
        ...item,
        char: shuffled[index]
      }));

    this.cards1 = this.generateLayout(this.simpleGrid1, 7, 3);
    this.cards2 = this.generateLayout(this.simpleGrid2, 7, 3);
    this.cards3 = this.generateLayout(this.simpleGrid3, 7, 3);
    this.cards4 = this.generateLayout(this.simpleGrid4, 7, 3);
    this.cards5 = this.generateLayout(this.simpleGrid5, 7, 3);
  }

  /*
  prepareGrid() {
    if (!this.selectedRed.length && !this.selectedBlue.length) return;
  
    const shuffled = [...this.selectedRed, ...this.selectedBlue]
      .sort(() => Math.random() - 0.5);
  
    this.levels.forEach(level => {
      const preparedGrid: GridItem[] = level.grid
        .slice(0, shuffled.length)
        .map((item, index): GridItem => {
          const char = shuffled[index];
          const color: Color = this.selectedRed.includes(char) ? 'red' : 'blue';
  
          return {
            ...item,
            char,
            color
          };
        });
  
      level.grid = preparedGrid;
      level.cards = this.generateLayout(preparedGrid, 7, 3);
    });
  }
  */

  prepareGrid() {
    if (!this.selectedRed.length && !this.selectedBlue.length) return;

    const shuffled = [...this.selectedRed, ...this.selectedBlue]
      .sort(() => Math.random() - 0.5);

    const levels: { grid: GridItem[]; cardsKey: CardsKey }[] = [
      { grid: this.level1Grid, cardsKey: 'cards1' },
      { grid: this.level2Grid, cardsKey: 'cards2' },
      { grid: this.level3Grid, cardsKey: 'cards3' },
      { grid: this.level4Grid, cardsKey: 'cards4' },
      { grid: this.level5Grid, cardsKey: 'cards5' }
    ];

    levels.forEach(level => {
      const preparedGrid: GridItem[] = level.grid
        .slice(0, shuffled.length)
        .map((item, index): GridItem => {
          const char = shuffled[index];

          const color: Color = this.selectedRed.includes(char)
            ? 'red'
            : 'blue';

          return {
            ...item,
            char,
            color
          };
        });

      this[level.cardsKey] = this.generateLayout(preparedGrid, 7, 3);
      level.grid.splice(0, level.grid.length, ...preparedGrid);
    });
  }


  generateLayout(
    grid: GridItem[],
    rows: number,
    cols: number
  ): Card[] {

    const rowStep = 100 / (rows + 1);
    const colStep = 100 / (cols + 1);

    return grid.map(item => ({
      char: item.char,
      color: item.color,
      top: Math.round(rowStep * item.row),
      left: Math.round(colStep * item.col),
    }));
  }

  irParaOutraPagina() {
    this.router.navigate(['/lesson']);
  }


  selectOptions(target: string) {
    const index = this.selected.indexOf(target);
    this.helpers.play(target);
    this.clicar(target)

    if (index >= 0) {
      this.selected.splice(index, 1);
    } else if (this.selected.length < 5) {
      this.selected.push(target);
    }
    // console.log(this.selected)
  }

  play(src: string) {
    this.helpers.play(src);
  }

  begin() {
    this.sequencias.push(this.selectedRed);
    this.sequencias.push(this.selectedBlue);

    this.sequenciaCorreta = this.sequencias[this.sequenciaAtualIndex];
    this.progressoClique = 0;
  }

  clicar(valor: string) {
    console.log('etapa: ' + this.etapaAtual, 'progresso: ' + this.progressoClique, 'letra_correta: ' + this.sequenciaCorreta[this.progressoClique], 'clicado: ' + valor)

    if (valor === this.sequenciaCorreta[this.progressoClique]) {
      this.progressoClique++;
      console.log('acertou')

      if (this.progressoClique === this.sequenciaCorreta.length) {
        console.log('completou primeira sequencia')
        this.etapaAtual++;
        this.sequenciaAtualIndex++;

        if (this.sequenciaAtualIndex === this.sequencias.length) {
          this.sequenciaAtualIndex = 0;
        }
        this.sequenciaCorreta = this.sequencias[this.sequenciaAtualIndex]

        if (this.etapaAtual === 5) {
          console.log('🎉 Jogo finalizado!')
          return;
        }

        this.progressoClique = 0;
      }

    } else {
      console.log('errou!')
    }

  }
}
