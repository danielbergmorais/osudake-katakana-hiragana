import { Component } from '@angular/core';
import { caracterList } from 'src/services/caracter.list';

@Component({
  selector: 'app-caracteres',
  templateUrl: 'caracteres.page.html',
  styleUrls: ['caracteres.page.scss'],
  standalone: false,
})

export class CaracteresPage {
  public type = 'hiragana';
  public caracteresList = caracterList;
  constructor() { }

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

  onTypeChange(event: any) {
    this.type = event.detail.value;
  }

}
