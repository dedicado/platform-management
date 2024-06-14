import { CommonModule, NgOptimizedImage } from '@angular/common'
import { Component } from '@angular/core'

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  logotipo: string = '/logotipo.svg'
  currentYear: Date = new Date()
}
