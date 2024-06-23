import { CommonModule } from '@angular/common'
import { AuthService } from '@/app/services/auth.service'
import { Component } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'
import { MatDialog } from '@angular/material/dialog'
import { AuthFormComponent } from '../forms/auth-form/auth-form.component'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [
    AuthFormComponent,
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    RouterLink
  ],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.css',
})
export class UserMenuComponent {
  isAuthenticated: boolean

  constructor(
    private readonly authService: AuthService,
    private readonly matDialog: MatDialog,
  ) {
    this.isAuthenticated = this.authService.isAuthenticated()
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
  ): void {
    this.matDialog.open(AuthFormComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    })
  }

  logoutOnClick(): void {
    this.authService.logout()
  }
}
