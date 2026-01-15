import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HelpersService } from 'src/services/helpers.service';
import { TypeStateService } from 'src/services/type-state.service';
import { caracterList } from 'src/services/caracter.list';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})

export class HomePage {
  caracteresList = caracterList;
  options: string[] = ['a', 'ka', 'sa', 'ta', 'na', 'ha', 'ma', 'ya', 'ra', 'wa'];
  selected: string[] = [];

  type$ = this.typeState.type$;

  constructor(
    private router: Router,
    private helpers: HelpersService,
    private typeState: TypeStateService
  ) { }

  ngOnInit() {
  }

  onTypeChange(event: any) {
    this.typeState.setType(event.detail.value);
  }

  play(src: string) {
    this.helpers.play(src);
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
}
