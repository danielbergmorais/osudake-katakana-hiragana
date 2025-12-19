import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

import { caracterList } from 'src/services/caracter.list';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})

export class HomePage {
  public caracteresList = caracterList;
  actual = 0;
  type = 'hiragana';
  options: string[] = ['a', 'ka', 'sa', 'ta', 'na', 'ha', 'ma', 'ya', 'ra', 'wa'];
  selected: string[] = [];

  constructor(private toastController: ToastController, private router: Router) { }

  ngOnInit() {
    const tp = localStorage.getItem('type');
    if (tp !== null) this.type = tp;
  }
  play(src: string): Promise<void> {
    return new Promise((resolve, reject) => {

      let path = document.baseURI + 'assets/audios/' + src + '.mp3';
      const audio = new Audio(path);

      const selectedElement = document.getElementById(src);
      if (selectedElement) {
        selectedElement.classList.add('active');
      }

      audio.onended = () => {
        if (selectedElement) {
          selectedElement.classList.remove('active');
        }
        resolve();
      };

      audio.onerror = (e) => {
        if (selectedElement) {
          selectedElement.classList.remove('active');
        }
        reject(e);
      };

      audio.play();
    });
  }

  selectOptions(target: string) {
    const index = this.selected.indexOf(target);
    this.play(target);

    if (index >= 0) {
      this.selected.splice(index, 1);
    } else if (this.selected.length < 2) {
      this.selected.push(target);
    }
  }

  confirm() {
    if (this.selected.length > 0) {
      localStorage.setItem('options', JSON.stringify(this.selected));
      (document.activeElement as HTMLElement)?.blur();
      this.router.navigate(['/double']);
    }

  }

  onTypeChange(event: any) {
    this.type = event.detail.value;
    localStorage.setItem('type', this.type);
  }

  //Move to right place
  async checkSequence(target: string) {
    let correct = ['a', 'i', 'u', 'e', 'o'];

    if (!(this.actual > correct.indexOf(target))) {
      const selectedElement = document.getElementById(target);
      if (target == correct[this.actual]) {
        if (selectedElement) {
          selectedElement.classList.remove('error');
          selectedElement.classList.add('success');
        }
        this.actual++;
      } else {
        if (selectedElement) {
          selectedElement.classList.add('error');
        }
      }
      if (this.actual == correct.length) {
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
  }

  resetSequence() {
    document.querySelectorAll('.osu')
      .forEach(el => el.classList.remove('error'));
    document.querySelectorAll('.osu')
      .forEach(el => el.classList.remove('success'));
    this.actual = 0;
  }

}
