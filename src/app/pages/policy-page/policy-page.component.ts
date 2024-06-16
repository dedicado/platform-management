import { Component, OnInit } from '@angular/core'
import { Meta, Title } from '@angular/platform-browser'

@Component({
  selector: 'app-policy-page',
  standalone: true,
  imports: [],
  templateUrl: './policy-page.component.html',
  styleUrl: './policy-page.component.css',
})
export class PolicyPageComponent implements OnInit {
  constructor(
    private readonly browserMeta: Meta,
    private readonly browserTitle: Title,
  ) {}

  ngOnInit(): void {
    this.browserTitle.setTitle('Termos e Políticas de Utilização da Plataforma')
    this.browserMeta.updateTag({
      name: 'description',
      content:
        'A Dedicado oferece soluções personalizadas de alta performance que aumentam a produtividade de pessoas e organizações',
    })
  }
}
