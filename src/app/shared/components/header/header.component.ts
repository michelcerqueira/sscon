import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuDrop = [{ title: 'Cep', href: '/cep'}];
  constructor(private router: Router) { }
  ngOnInit() {
  }

  public redirect(rota: string): void {
    this.router.navigateByUrl(rota);
  }

}
