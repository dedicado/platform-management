import { environment } from '@/environments/environment'
import { HttpClient } from '@angular/common/http'
import { DestroyRef, Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import {
  CreateOrganization,
  Organization,
  UpdateOrganization,
} from '../interfaces/organization.interface'
import { RemoveData } from '../interfaces/core.interface'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'

@Injectable({
  providedIn: 'root',
})
export class OrganizationsService {
  constructor(
    private readonly destroyRef: DestroyRef,
    private readonly httpClient: HttpClient,
  ) {}

  private endpoint: string = environment.platformApiUrl + '/organizations'

  create(createOrganization: CreateOrganization): Observable<string> {
    return this.httpClient.post<string>(this.endpoint, createOrganization)
  }

  createForUser(
    phone: string,
    createOrganization: CreateOrganization,
  ): Observable<string> {
    return this.httpClient
      .post<string>(this.endpoint + `/user/${phone}`, createOrganization)
      .pipe(takeUntilDestroyed(this.destroyRef))
  }

  findByDocument(document: string): Observable<Organization> {
    return this.httpClient.get<Organization>(
      this.endpoint + `/document/${document}`,
    )
  }

  findMany(): Observable<Organization[]> {
    return this.httpClient.get<Organization[]>(this.endpoint)
  }

  findOne(id: string): Observable<Organization> {
    return this.httpClient.get<Organization>(this.endpoint + `/${id}`)
  }

  remove(id: string, removeData: RemoveData): Observable<string> {
    const { definitely } = removeData
    if (definitely) {
      return this.httpClient
        .delete<string>(this.endpoint + `/${id}`)
        .pipe(takeUntilDestroyed(this.destroyRef))
    } else {
      return this.httpClient
        .patch<string>(this.endpoint + `/${id}`, {
          active: false,
          softDeleted: true,
        })
        .pipe(takeUntilDestroyed(this.destroyRef))
    }
  }

  update(
    id: string,
    updateOrganization: UpdateOrganization,
  ): Observable<string> {
    return this.httpClient
      .patch<string>(this.endpoint + `/${id}`, updateOrganization)
      .pipe(takeUntilDestroyed(this.destroyRef))
  }
}
