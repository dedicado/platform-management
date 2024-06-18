import { ContactFormComponent } from '@/app/components/forms/contact-form/contact-form.component'
import { NgOptimizedImage } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { Meta, Title } from '@angular/platform-browser'

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [ContactFormComponent, NgOptimizedImage],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css',
})
export class ContactPageComponent implements OnInit {
  logotipo: string = '/logotipo.svg'

  constructor(
    private readonly browserMeta: Meta,
    private readonly browserTitle: Title,
  ) {}

  ngOnInit(): void {
    this.browserTitle.setTitle('Faça Contato')
    this.browserMeta.updateTag({
      name: 'description',
      content:
        'A Dedicado oferece soluções personalizadas de alta performance que aumentam a produtividade de pessoas e organizações',
    })
  }
}
