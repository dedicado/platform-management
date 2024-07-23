import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-master-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './master-layout.component.html',
  styleUrl: './master-layout.component.css',
})
export class MasterLayoutComponent {}
