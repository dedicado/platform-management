import { environment } from '@/environments/environment'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Article } from '../interfaces/article.interface'

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  endpoint = environment.platformApiUrl + '/articles'

  constructor(private readonly http: HttpClient) {}

  create(data: Article) {
    return this.http.post<Article>(`${this.endpoint}`, data)
  }

  findAll() {
    return this.http.get<Article[]>(`${this.endpoint}`)
  }

  findOne(id: string) {
    return this.http.get<Article>(`${this.endpoint}/${id}`)
  }

  findBySlug(slug: string) {
    return this.http.get<Article>(`${this.endpoint}/slug/${slug}`)
  }

  update(id: string, data: Article) {
    return this.http.patch<Article>(`${this.endpoint}/${id}`, data)
  }

  remove(id: string) {
    return this.http.delete<string>(`${this.endpoint}/${id}`)
  }
}
