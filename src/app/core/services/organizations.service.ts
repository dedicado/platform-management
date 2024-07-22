import { environment } from '@/environments/environment'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Organization } from '../interfaces/organization.interface'

@Injectable({
  providedIn: 'root',
})
export class OrganizationsService {
  constructor(private readonly httpClient: HttpClient) {}

  endpoint: string = environment.platformApiUrl + '/organizations'

  findByDocument(document: string): Observable<Organization> {
    return this.httpClient.get<Organization>(this.endpoint + `/document/${document}`)
  }

  findMany(): Observable<Organization[]> {
    return this.httpClient.get<Organization[]>(this.endpoint)
  }

  findOne(id: string): Observable<Organization> {
    return this.httpClient.get<Organization>(this.endpoint + `/${id}`)
  }
}
