import { environment } from '@/environments/environment'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Organization } from '../interfaces/organization.interface'

@Injectable({
  providedIn: 'root',
})
export class OrganizationsService {
  private endpoint = environment.platformApiUrl + '/organizations'

  constructor(private readonly http: HttpClient) {}

  create(data: Organization) {
    return this.http.post<Organization>(`${this.endpoint}`, data)
  }

  findAll() {
    return this.http.get<Organization[]>(`${this.endpoint}`)
  }

  findOne(id: string) {
    return this.http.get<Organization>(`${this.endpoint}/${id}`)
  }

  update(id: string, data: Organization) {
    return this.http.patch<Organization>(`${this.endpoint}/${id}`, data)
  }

  remove(id: string) {
    return this.http.delete<string>(`${this.endpoint}/${id}`)
  }
}
