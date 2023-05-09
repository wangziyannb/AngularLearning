import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.css']
})
export class AddVendorComponent {
  vendorForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    address: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {

  }

  get name() {
    return this.vendorForm.get('name');
  }
  get description() {
    return this.vendorForm.get('description');
  }
  get address() {
    return this.vendorForm.get('address');
  }
  submitVendor() {
    console.log(this.vendorForm.value);

  }
}
