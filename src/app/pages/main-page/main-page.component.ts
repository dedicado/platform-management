import { NavComponent } from '@/app/components/nav/nav.component'
import { Component, OnInit } from '@angular/core'
import { LandingPageComponent } from '../landing-page/landing-page.component'
import { AuthService } from '@/app/services/auth.service'
import { CommonModule } from '@angular/common'
import { Meta, Title } from '@angular/platform-browser'
import { FooterComponent } from '@/app/components/footer/footer.component'
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    CommonModule,
    FooterComponent,
    LandingPageComponent,
    NavComponent,
    RouterOutlet,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent implements OnInit {
  token!: string

  constructor(
    private readonly authService: AuthService,
    private readonly browserMeta: Meta,
    private readonly browserTitle: Title,
  ) {}

  ngOnInit(): void {
    this.token = this.authService.token
    this.browserTitle.setTitle(
      'Você no Controle da Melhor Plataforma de Servços',
    )
    this.browserMeta.updateTag({
      name: 'description',
      content:
        'A Dedicado oferece soluções personalizadas de alta performance que aumentam a produtividade de pessoas e organizações',
    })
  }
}
