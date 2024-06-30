import { articlesActions } from '@/app/core/store/actions/articles-actions'
import { articlesSelectors } from '@/app/core/store/selectors/articles-selectors'
import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-articles-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './articles-page.component.html',
  styleUrl: './articles-page.component.css',
})
export class ArticlesPageComponent implements OnInit {
  constructor(private store: Store) {}

  articles$ = this.store.select(articlesSelectors.findAll)

  ngOnInit(): void {
    this.store.dispatch(articlesActions.findAll())
  }
}
