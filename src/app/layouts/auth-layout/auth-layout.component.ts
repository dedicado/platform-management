import { NgOptimizedImage } from '@angular/common'
import { AuthFormComponent } from './../../components/forms/auth-form/auth-form.component'
import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { FooterComponent } from '@/app/components/footer/footer.component'

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [AuthFormComponent, FooterComponent, NgOptimizedImage, RouterOutlet],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css',
})
export class AuthLayoutComponent {
  logotipo: string = '/logotipo.svg'
}
