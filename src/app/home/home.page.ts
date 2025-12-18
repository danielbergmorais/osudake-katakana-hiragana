import { Component } from '@angular/core';
import { caracterList } from 'src/services/caracter.list';
import { IonButton, ToastController } from '@ionic/angular/standalone';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})

export class HomePage {
  public caracteresList = caracterList;
  actual = 0;
  letter = '';

  constructor(private toastController: ToastController) { }

  play(src: string): Promise<void> {
    return new Promise((resolve, reject) => {

      this.checkSequence(src);

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
          message: 'Parabéns! おめでとう!',
          duration: 4000,
          position: 'bottom',
          color: 'success',
          cssClass: 'toast-custom'

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
