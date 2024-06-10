import { ZipCodeLocationInterface } from '@/app/interfaces/location.interface'
import { LocationService } from '@/app/services/location.service'
import { Component } from '@angular/core'

@Component({
  selector: 'app-address-form',
  standalone: true,
  imports: [],
  templateUrl: './address-form.component.html',
  styleUrl: './address-form.component.css',
})
export class AddressFormComponent {
  zipCodeLocation!: ZipCodeLocationInterface | undefined
  zipCode!: string

  constructor(private locationService: LocationService) {
    this.locationByZipCode(this.zipCode).subscribe(
      (data) => (this.zipCodeLocation = data),
    ).closed
  }

  locationByZipCode(zipCode: string) {
    return this.locationService.getLocationByZipCode(zipCode)
  }
}
