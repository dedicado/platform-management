import { SubscriptionsState } from '@/app/core/interfaces/subscription.interface'
import { subscriptionsActions } from '@/app/core/store/subscriptions/subscriptions-actions.store'
import { subscriptionsSelectors } from '@/app/core/store/subscriptions/subscriptions-selectors.store'
import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-subscriptions-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subscriptions-page.component.html',
  styleUrl: './subscriptions-page.component.css',
})
export class SubscriptionsPageComponent implements OnInit {
  constructor(private store: Store<SubscriptionsState>) {}
  subscriptions$ = this.store.select(subscriptionsSelectors.findMany)

  ngOnInit(): void {
    this.store.dispatch(subscriptionsActions.findMany())
  }
}
