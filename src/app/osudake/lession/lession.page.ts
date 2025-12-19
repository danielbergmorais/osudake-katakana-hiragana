import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lession',
  templateUrl: './lession.page.html',
  styleUrls: ['./lession.page.scss'],
  standalone: false,
})
export class LessionPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  irParaOutraPagina() {
    this.router.navigateByUrl('/tabs/home', { replaceUrl: true });

  }
}
