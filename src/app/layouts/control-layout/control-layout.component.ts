import { FooterComponent } from './../../components/footer/footer.component'
import { HeaderComponent } from './../../components/header/header.component'
import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-control-layout',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, RouterOutlet],
  templateUrl: './control-layout.component.html',
  styleUrl: './control-layout.component.css',
})
export class ControlLayoutComponent {}
