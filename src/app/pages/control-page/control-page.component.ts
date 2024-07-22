import { UsersState } from '@/app/core/interfaces/user.interface'
import { usersActions } from '@/app/core/store/users/users-actions.store'
import { usersSelectors } from '@/app/core/store/users/users-selectors.store'
import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { Meta } from '@angular/platform-browser'
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-control-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control-page.component.html',
  styleUrl: './control-page.component.css',
})
export class ControlPageComponent implements OnInit {
  constructor(
    private readonly meta: Meta,
    private readonly store: Store<UsersState>,
  ) {}
  profile$ = this.store.select(usersSelectors.findOne)

  ngOnInit(): void {
    this.store.dispatch(usersActions.findMe())
    this.meta.addTags([
      {
        name: 'description',
        content: 'Você no controle da melhor plataforma de serviços',
      },
    ])
  }
}
