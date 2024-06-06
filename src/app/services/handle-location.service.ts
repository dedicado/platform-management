import { environment } from '@/environments/environment'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class HandleLocationService {
  zipCodeApi: string = environment.zipCodeApiUrl

  constructor(private readonly httpClient: HttpClient) {}

  getByZipCode({ zipCode }: { zipCode: string }) {
    console.log(this.zipCodeApi, zipCode)
  }
}
