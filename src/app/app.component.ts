import { RouterOutlet } from '@angular/router'
import { Component, OnInit } from '@angular/core'
import { Meta, Title } from '@angular/platform-browser'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet />`,
})
export class AppComponent implements OnInit {
  constructor(
    private readonly meta: Meta,
    private readonly title: Title,
  ) {}

  ngOnInit(): void {
    this.title.setTitle(`Você no Controle com a Melhor Plataforma de Serviços`)
    this.meta.addTags([
      {
        name: 'description',
        content:
          'Potencialize a capacidade da sua demanda operacional utilizando inteligência artificial',
      },
    ])
  }
}
