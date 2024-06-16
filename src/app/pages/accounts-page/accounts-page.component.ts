import { Component, OnInit } from '@angular/core'
import { Meta, Title } from '@angular/platform-browser'

@Component({
  selector: 'app-accounts-page',
  standalone: true,
  imports: [],
  templateUrl: './accounts-page.component.html',
  styleUrl: './accounts-page.component.css',
})
export class AccountsPageComponent implements OnInit {
  constructor(
    private readonly browserMeta: Meta,
    private readonly browserTitle: Title,
  ) {}

  ngOnInit(): void {
    this.browserTitle.setTitle('Contas da Plataforma')
    this.browserMeta.updateTag({
      name: 'description',
      content:
        'A Dedicado oferece soluções personalizadas de alta performance que aumentam a produtividade de pessoas e organizações',
    })
  }
}
