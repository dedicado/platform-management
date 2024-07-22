import { OrganizationsState } from '@/app/core/interfaces/organization.interface'
import { organizationsActions } from '@/app/core/store/organizations/organizations-actions.store'
import { organizationsSelectors } from '@/app/core/store/organizations/organizations-selectors.store'
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
  constructor(private store: Store<OrganizationsState>) {}
  organizations$ = this.store.select(organizationsSelectors.findMany)

  ngOnInit(): void {
    this.store.dispatch(organizationsActions.findMany())
  }
}
