import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelpersService } from 'src/services/helpers.service';
import { TypeStateService } from 'src/services/type-state.service';
import { lessonList, Lesson } from 'src/services/lesson.list';
import { caracterList } from 'src/services/caracter.list';
import { ToastController } from '@ionic/angular/standalone';

type LessonsMap = Record<string, Lesson>;

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.page.html',
  styleUrls: ['./lesson.page.scss'],
  standalone: false,
})

export class LessonPage implements OnInit {
  // --- Lições ---
  allLesson = lessonList;
  lessons!: Record<string, Lesson>;
  randomLessons: Lesson[] = [];

  // Opções selecionadas
  opt: string[] = [];
  options: string[][] = [];

  // --- Controle de etapa ---
  etapaAtual = 1;
  letraAtual = 0;
  etapasMaximas = 5;
  gameOver = false;

  // --- Estado do jogo ---
  selected: string[] = [];
  selectedError: string[] = [];

  // --- Serviços ---
  type$ = this.typeState.type$;

  /*
   - TODO 
   - Ajustar para katakana
   - Voltar pro inicio
  */

  constructor(
    private router: Router,
    private helpers: HelpersService,
    private typeState: TypeStateService,
    private toastController: ToastController) { }

  ngOnInit() {

    this.carregarDoStorage();
    this.recuperarGrupos();
    this.trazerLicoes(this.options, this.allLesson)

    const lessonsArray: Lesson[] = Object.values(this.lessons);
    if (lessonsArray.length < this.etapasMaximas) {
      this.etapasMaximas = lessonsArray.length;
    }


    this.options.forEach(group => {
      group.sort(() => Math.random() - 0.5);
    });

    this.randomLessons = this.getRandomLessons(this.lessons, 5);
  }

  // ------------------------
  // Carregar opções selecionadas do inicio
  // ------------------------
  carregarDoStorage() {
    const op = localStorage.getItem('options');
    if (!op) return;
    this.opt = JSON.parse(op);
  }

  // ------------------------
  // Recuperar os grupos pertencentes as opções
  // ------------------------
  recuperarGrupos() {
    this.options = this.opt
      .map(opt => caracterList.find(group => group[0] === opt))
      .filter((g): g is string[] => !!g);
  }

  // ------------------------
  // Selecionar as opções das liçoes dos grupos selecionados
  // ------------------------
  trazerLicoes(
    grupos: string[][],
    lessons: Record<string, Lesson>
  ): Record<string, Lesson> {

    const validos = new Set(
      grupos.reduce((acc, g) => acc.concat(g), [] as string[])
    );

    const resultado: Record<string, Lesson> = {};

    for (const [chave, lesson] of Object.entries(lessons)) {
      if (lesson.glyphs.every(g => validos.has(g))) {
        resultado[chave] = lesson;
      }
    }

    this.lessons = resultado;
    return resultado;
  }

  // ------------------------
  // Tratar o clique
  // ------------------------
  clicar(target: string) {
    this.helpers.play(target);
    const palavra = this.randomLessons[this.etapaAtual - 1];

    if (palavra.glyphs[this.letraAtual] == target) {
      this.letraAtual++;
      this.selected.push(target);
      this.selectedError = [];

      if (palavra.glyphs.length <= this.letraAtual) {
        this.etapaAtual++;
        this.letraAtual = 0;
        this.selected = [];
        if (this.etapaAtual >= this.etapasMaximas) {
          this.finalizarJogo()
        }
      }
    } else {
      const index = this.selected.indexOf(target);
      if (index < 0) {
        this.selectedError.push(target);
      }
    }

  }

  play(src: string) {
    this.helpers.play(src);
  }

  irParaOutraPagina() {
    this.router.navigateByUrl('/tabs/home', { replaceUrl: true });
  }
  
  getRandomLessons(
    lessons: LessonsMap,
    amount: number
  ): Lesson[] {
    const array = Object.values(lessons);
    const copy = [...array];

    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }

    return copy.slice(0, amount);
  }

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
  }

}
