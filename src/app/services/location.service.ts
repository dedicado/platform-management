import { environment } from '@/environments/environment'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { ZipCodeLocationInterface } from '../interfaces/location.interface'

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  endpoint: string = environment.zipCodeApiUrl + '/'

  constructor(private httpClient: HttpClient) {}

  getLocationByZipCode(zipCode: string) {
    return this.httpClient.get<ZipCodeLocationInterface>(
      this.endpoint + zipCode,
    )
  }
}
