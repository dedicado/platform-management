import { NavComponent } from '@/app/components/nav/nav.component'
import { Component } from '@angular/core'

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {}
