import { SendersService } from '@/app/services/senders.service'
import { Component } from '@angular/core'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { tap } from 'rxjs'

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
})
export class ContactFormComponent {
  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly sendersService: SendersService,
  ) {}

  contactForm = this.formBuilder.nonNullable.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    message: ['', Validators.required],
  })

  contactOnSubmit() {
    if (this.contactForm.valid) {
      const inputs = this.contactForm.getRawValue()
      this.sendersService.sendContactForm(inputs).pipe(
        tap(() => {
          this.contactForm.reset()
        }),
      ).subscribe().closed
    }
  }
}
