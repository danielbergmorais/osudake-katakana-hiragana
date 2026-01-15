import { Component } from '@angular/core';
import { caracterList } from 'src/services/caracter.list';
import { HelpersService } from 'src/services/helpers.service';
import { TypeStateService } from 'src/services/type-state.service';

@Component({
  selector: 'app-caracteres',
  templateUrl: 'caracteres.page.html',
  styleUrls: ['caracteres.page.scss'],
  standalone: false,
})

export class CaracteresPage {
  type$ = this.typeState.type$;

  public caracteresList = caracterList;

  constructor(
    private helpers: HelpersService,
    private typeState: TypeStateService
  ) { }

  ngOnInit() {
  }

  play(src: string) {
    this.helpers.play(src);
  }

  onTypeChange(event: any) {
    this.typeState.setType(event.detail.value);
  }

}
