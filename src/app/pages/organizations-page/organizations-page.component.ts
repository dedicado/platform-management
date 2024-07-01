import { OrganizationState } from '@/app/core/interfaces/state.interface'
import { organizationsActions } from '@/app/core/store/actions/organizations-actions'
import { organizationsSelectors } from '@/app/core/store/selectors/organizations-selectors'
import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-organizations-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './organizations-page.component.html',
  styleUrl: './organizations-page.component.css',
})
export class OrganizationsPageComponent implements OnInit {
  constructor(private store: Store<OrganizationState>) {}

  organizations$ = this.store.select(organizationsSelectors.findAll)

  ngOnInit(): void {
    this.store.dispatch(organizationsActions.findAll())
  }
}
