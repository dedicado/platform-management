import { NgOptimizedImage } from '@angular/common'
import { Component } from '@angular/core'

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  logotipo: string = '/logotipo.svg'
}
