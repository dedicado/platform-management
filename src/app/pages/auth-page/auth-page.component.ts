import { Component, OnInit } from '@angular/core'
import { Meta, Title } from '@angular/platform-browser'
import { AuthFormComponent } from '@/app/components/forms/auth-form/auth-form.component'
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [AuthFormComponent, NgOptimizedImage],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css',
})
export class AuthPageComponent implements OnInit {
  logotipo: string = '/logotipo.svg'

  constructor(private readonly meta: Meta, private readonly title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Acessar o Painel de Controle da Plataforma')
    this.meta.addTags([
      {
        name: 'description',
        content: 'Você no controle da melhor plataforma de serviços',
      },
    ])
  }
}
