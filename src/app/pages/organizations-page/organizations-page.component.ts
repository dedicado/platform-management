import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-organizations-page',
  standalone: true,
  imports: [],
  templateUrl: './organizations-page.component.html',
  styleUrl: './organizations-page.component.css'
})
export class OrganizationsPageComponent implements OnInit {
constructor(
    private readonly browserMeta: Meta,
    private readonly browserTitle: Title,
  ) {}

  ngOnInit(): void {
    this.browserTitle.setTitle('Organizações da Plataforma')
    this.browserMeta.updateTag({
      name: 'description',
      content:
        'A Dedicado oferece soluções personalizadas de alta performance que aumentam a produtividade de pessoas e organizações',
    })
  }
}
