import { RouterOutlet } from '@angular/router'
import { Component, OnInit } from '@angular/core'
import { AuthService } from './core/services/auth.service'
import { Meta, Title } from '@angular/platform-browser'
import { Store } from '@ngrx/store'
import { UsersState } from './core/interfaces/user.interface'
import { usersActions } from './core/store/users/users-actions.store'
import { usersSelectors } from './core/store/users/users-selectors.store'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet />`,
})
export class AppComponent implements OnInit {
  logotipo: string = '/logotipo.svg'
  isAuthenticated!: boolean
  constructor(
    private readonly authService: AuthService,
    private readonly meta: Meta,
    private readonly store: Store<UsersState>,
    private readonly title: Title,
  ) {}
  profile$ = this.store.select(usersSelectors.findOne)

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated
    if (this.isAuthenticated) this.store.dispatch(usersActions.findMe())
    this.title.setTitle(`Você no Controle com a Melhor Plataforma de Serviços`)
    this.meta.addTags([
      {
        name: 'description',
        content:
          'Potencialize a capacidade da sua demanda operacional utilizando inteligência artificial',
      },
    ])
  }
}
