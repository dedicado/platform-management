import { NgOptimizedImage } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { Meta, Title } from '@angular/platform-browser'
import { MatIconModule } from '@angular/material/icon'

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [MatIconModule, NgOptimizedImage],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent implements OnInit {
  logotipo: string = '/logotipo.svg'

  constructor(
    private readonly browserMeta: Meta,
    private readonly browserTitle: Title,
  ) {}

  ngOnInit(): void {
    this.browserTitle.setTitle('Sua Melhor Plataforma de Serviços')
    this.browserMeta.updateTag({
      name: 'description',
      content:
        'A Dedicado oferece soluções personalizadas de alta performance que aumentam a produtividade de pessoas e organizações',
    })
  }
}
