import { CommonModule } from '@angular/common'
import { AuthService } from '@/app/services/auth.service'
import { Component, OnInit } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'
import { MatDialog } from '@angular/material/dialog'
import { AuthFormComponent } from '../forms/auth-form/auth-form.component'

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [
    AuthFormComponent,
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.css',
})
export class UserMenuComponent implements OnInit {
  token!: string

  constructor(
    private readonly authService: AuthService,
    private readonly matDialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.token = this.authService.token
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
