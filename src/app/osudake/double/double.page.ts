import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { caracterList } from 'src/services/caracter.list';
import { TypeStateService } from 'src/services/type-state.service';

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
  steps: boolean[] = [false, false, false, false, false];

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
    private typeState: TypeStateService) {
  }

  ngOnInit() {
    this.loadOptions();
    this.prepareGrid();
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

    this.simpleGrid5 = this.simpleGrid5
      .slice(0, shuffled.length)
      .map((item, index) => ({
        ...item,
        char: shuffled[index]
      }));

    this.cards = this.generateLayout(this.simpleGrid5, 7, 3);
  }

  prepareGrid() {
    console.log(this.selectedRed, this.selectedBlue)
    if (!this.selectedRed.length) return;

    const shuffled = [...this.selectedRed, ...this.selectedBlue].sort(() => Math.random() - 0.5);

    this.level1Grid = this.level1Grid
      .slice(0, shuffled.length)
      .map((item, index) => ({
        ...item,
        char: shuffled[index]
      }));

    this.level2Grid = this.level2Grid
      .slice(0, shuffled.length)
      .map((item, index) => ({
        ...item,
        char: shuffled[index]
      }));

    this.level3Grid = this.level3Grid
      .slice(0, shuffled.length)
      .map((item, index) => ({
        ...item,
        char: shuffled[index]
      }));

    this.level4Grid = this.level4Grid
      .slice(0, shuffled.length)
      .map((item, index) => ({
        ...item,
        char: shuffled[index]
      }));


    this.level5Grid = this.level5Grid
      .slice(0, shuffled.length)
      .map((item, index) => ({
        ...item,
        char: shuffled[index]
      }));

    this.cards1 = this.generateLayout(this.level1Grid, 7, 3);
    this.cards2 = this.generateLayout(this.level2Grid, 7, 3);
    this.cards3 = this.generateLayout(this.level3Grid, 7, 3);
    this.cards4 = this.generateLayout(this.level4Grid, 7, 3);
    this.cards5 = this.generateLayout(this.level5Grid, 7, 3);
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
}
