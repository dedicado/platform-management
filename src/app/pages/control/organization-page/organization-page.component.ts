import { OrganizationsState } from '@/app/core/interfaces/organization.interface'
import { organizationsActions } from '@/app/core/store/organizations/organizations-actions.store'
import { organizationsSelectors } from '@/app/core/store/organizations/organizations-selectors.store'
import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { Meta, Title } from '@angular/platform-browser'
import { ActivatedRoute, Router } from '@angular/router'
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-organization-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './organization-page.component.html',
  styleUrl: './organization-page.component.css',
})
export class OrganizationPageComponent implements OnInit {
  document!: string

  constructor(
    private readonly activateRouter: ActivatedRoute,
    private readonly meta: Meta,
    private readonly router: Router,
    private readonly store: Store<OrganizationsState>,
    private readonly title: Title,
  ) {}
  organization$ = this.store.select(organizationsSelectors.findOne)

  ngOnInit(): void {
    this.document = this.activateRouter.snapshot.paramMap.get(
      'document',
    ) as string
    this.store.dispatch(
      organizationsActions.findByDocument({ document: this.document }),
    )
    this.meta.addTags([
      {
        name: 'description',
        content: 'Você no controle da melhor plataforma de serviços',
      },
    ])
  }
}
