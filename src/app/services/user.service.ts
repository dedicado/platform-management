import { environment } from '@/environments/environment'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { UserRegisterInterface } from '../interfaces/user.interface'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly router: Router,
  ) {}

  create(): void {}

  register({ inputs }: { inputs: UserRegisterInterface }) {
    this.router.navigateByUrl('minha-conta')
  }

  findAll() {}

  findById({ id }: { id: string }) {}

  findByPhone({ phone }: { phone: string }) {}

  update({ id }: { id: string }) {}

  remove({ id }: { id: string }) {}
}
