import { FooterComponent } from '@/app/components/footer/footer.component'
import { HeaderComponent } from './../../components/header/header.component'
import { NavComponent } from './../../components/nav/nav.component'
import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-master-layout',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, NavComponent, RouterOutlet],
  templateUrl: './master-layout.component.html',
  styleUrl: './master-layout.component.css',
})
export class MasterLayoutComponent {}
