import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class HelpersService {

  play(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const audio = new Audio(`assets/audios/${src}.mp3`);

      audio.onended = () => resolve();
      audio.onerror = err => reject(err);

      audio.play().catch(reject);
    });
  }
}
