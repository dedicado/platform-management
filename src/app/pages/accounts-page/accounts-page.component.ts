import { accountsActions } from '@/app/core/store/accounts/accounts-actions'
import { accountsSelectors } from '@/app/core/store/accounts/accounts-selectors'
import { CommonModule } from '@angular/common'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Account } from '@/app/core/interfaces/account.interface'
import * as crypto from 'crypto'

@Component({
  selector: 'app-accounts-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './accounts-page.component.html',
  styleUrl: './accounts-page.component.css',
})
export class AccountsPageComponent implements OnInit {
  constructor(private store: Store, private builder: FormBuilder) {}

  accounts$ = this.store.select(accountsSelectors.selectAllAccounts)

  ngOnInit(): void {
    this.store.dispatch(accountsActions.findAll())
  }

  createAccountForm = this.builder.group({
    name: this.builder.control('', Validators.required),
  })

  onSubmit() {
    if (this.createAccountForm.valid) {
      const data: Account = {
        name: this.createAccountForm.value.name! as string,
      }
      console.log(data)
      this.store.dispatch(accountsActions.create({ data }))
    } else {
      this.createAccountForm.markAllAsTouched()
    }
  }
}
