import { SubscriptionsState } from '@/app/core/interfaces/subscription.interface'
import { subscriptionsActions } from '@/app/core/store/subscriptions/subscriptions-actions.store'
import { subscriptionsSelectors } from '@/app/core/store/subscriptions/subscriptions-selectors.store'
import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { MatTableModule } from '@angular/material/table'
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-subscriptions-page',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './subscriptions-page.component.html',
  styleUrl: './subscriptions-page.component.css',
})
export class SubscriptionsPageComponent implements OnInit {
  constructor(private store: Store<SubscriptionsState>) {}
  subscriptions$ = this.store.select(subscriptionsSelectors.findMany)

  displayedColumns: string[] = ['code', 'organization']
  dataSource = this.subscriptions$

  ngOnInit(): void {
    this.store.dispatch(subscriptionsActions.findMany())
  }
}
