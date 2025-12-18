import { Component, OnInit } from '@angular/core';



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

// interface Card {
//   char: string;
//   color: 'red' | 'blue';
//   top: number;   // porcentagem relativa
//   left: number;  // porcentagem relativa
// }

@Component({
  selector: 'app-double',
  templateUrl: './double.page.html',
  styleUrls: ['./double.page.scss'],
  standalone: false,
})


export class DoublePage implements OnInit {
  /*
    cards: Card[] = [
      { char: 'う', color: 'red', top: 4, left: 10 },
      { char: 'こ', color: 'blue', top: 20, left: 35 },
      { char: 'か', color: 'blue', top: 6, left: 52 },
      { char: 'き', color: 'blue', top: 35, left: 12 },
      { char: 'え', color: 'red', top: 50, left: 33 },
      { char: 'い', color: 'red', top: 30, left: 56 },
      { char: 'あ', color: 'red', top: 50, left: 56 },
      { char: 'お', color: 'red', top: 65, left: 10 },
      { char: 'け', color: 'blue', top: 67, left: 36 },
      { char: 'く', color: 'blue', top: 80, left: 53 },
    ];
  
    cards2: Card[] = [
      // Linha 1
      { char: 'く', color: 'blue', top: 5, left: 15 },
      { char: 'う', color: 'red', top: 5, left: 40 },
      { char: 'え', color: 'red', top: 5, left: 65 },
      // Linha 2
      { char: 'こ', color: 'blue', top: 25, left: 15 },
      { char: 'お', color: 'red', top: 25, left: 65 },
      // Linha 3
      { char: 'い', color: 'red', top: 42, left: 40 },
      { char: 'き', color: 'blue', top: 42, left: 65 },
      // Linha 4
      { char: 'あ', color: 'red', top: 60, left: 15 },
      // Linha 5
      { char: 'け', color: 'blue', top: 78, left: 35 },
      { char: 'か', color: 'blue', top: 78, left: 55 },
    ];
  
    cards3: Card[] = [
      // Topo
      { char: 'こ', color: 'blue', top: 5, left: 50 },
  
      // Linha 2
      { char: 'う', color: 'red', top: 15, left: 25 },
      { char: 'え', color: 'red', top: 15, left: 75 },
  
      // Centro
      { char: 'あ', color: 'red', top: 30, left: 50 },
  
      // Linha 4
      { char: 'け', color: 'blue', top: 45, left: 25 },
      { char: 'か', color: 'blue', top: 45, left: 75 },
  
      // Linha 5
      { char: 'き', color: 'blue', top: 60, left: 50 },
  
      // Linha 6
      { char: 'く', color: 'blue', top: 75, left: 25 },
      { char: 'い', color: 'red', top: 75, left: 75 },
  
      // Base
      { char: 'お', color: 'red', top: 90, left: 50 },
    ];*/

  level1Grid: GridItem[] = [
    { char: 'う', color: 'red', row: 2, col: 1 },
    { char: 'け', color: 'blue', row: 4, col: 1 },
    { char: 'く', color: 'blue', row: 6, col: 1 },

    { char: 'こ', color: 'blue', row: 1, col: 2 },
    { char: 'あ', color: 'red', row: 3, col: 2 },
    { char: 'き', color: 'blue', row: 5, col: 2 },

    { char: 'え', color: 'red', row: 2, col: 3 },
    { char: 'か', color: 'blue', row: 4, col: 3 },
    { char: 'い', color: 'red', row: 6, col: 3 },
    { char: 'お', color: 'red', row: 7, col: 2 },
  ];

  level2Grid: GridItem[] = [
    { char: 'う', color: 'red', row: 1, col: 1 },
    { char: 'け', color: 'blue', row: 3, col: 1 },
    { char: 'か', color: 'blue', row: 5, col: 1 },
    { char: 'あ', color: 'red', row: 7, col: 1 },

    { char: 'き', color: 'blue', row: 2, col: 2 },
    { char: 'え', color: 'red', row: 4, col: 2 },
    { char: 'こ', color: 'blue', row: 6, col: 2 },

    { char: 'い', color: 'red', row: 1, col: 3 },
    { char: 'く', color: 'blue', row: 4, col: 3 },
    { char: 'お', color: 'red', row: 7, col: 3 },
  ];

  level3Grid: GridItem[] = [

    { char: 'こ', color: 'blue', row: 2, col: 1 },
    { char: 'う', color: 'red', row: 4, col: 1 },
    { char: 'け', color: 'blue', row: 6, col: 1 },

    { char: 'お', color: 'red', row: 1, col: 2 },
    { char: 'き', color: 'blue', row: 3, col: 2 },
    { char: 'え', color: 'red', row: 5, col: 2 },
    { char: 'か', color: 'blue', row: 7, col: 2 },

    { char: 'い', color: 'red', row: 1, col: 3 },
    { char: 'く', color: 'blue', row: 4, col: 3 },
    { char: 'あ', color: 'red', row: 6, col: 3 },
  ];

  level4Grid: GridItem[] = [

    { char: 'こ', color: 'blue', row: 1, col: 1 },
    { char: 'う', color: 'red', row: 3, col: 1 },
    { char: 'け', color: 'blue', row: 5, col: 1 },

    { char: 'お', color: 'red', row: 2, col: 2 },
    { char: 'き', color: 'blue', row: 4, col: 2 },
    { char: 'え', color: 'red', row: 6, col: 2 },

    { char: 'か', color: 'blue', row: 1, col: 3 },
    { char: 'い', color: 'red', row: 3, col: 3 },
    { char: 'く', color: 'blue', row: 5, col: 3 },
    { char: 'あ', color: 'red', row: 7, col: 3 },
  ];

  levels = {
    level1: this.generateLayout(this.level1Grid, 7, 3),
    level2: this.generateLayout(this.level2Grid, 7, 3),
    level3: this.generateLayout(this.level3Grid, 7, 3),
    level4: this.generateLayout(this.level4Grid, 7, 3),
  };

  constructor() { }

  ngOnInit() {
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

}
