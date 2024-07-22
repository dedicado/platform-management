import { AuthFormComponent } from '@/app/components/forms/auth-form/auth-form.component'
import { NgOptimizedImage } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [NgOptimizedImage, AuthFormComponent],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css',
})
export class AuthPageComponent implements OnInit {
  logotipo: string = '/logotipo.svg'

  constructor(private readonly meta: Meta) {}

  ngOnInit(): void {
    this.meta.addTags([
      {
        name: 'description',
        content: 'Você no controle da melhor plataforma de serviços',
      },
    ])
  }
}
