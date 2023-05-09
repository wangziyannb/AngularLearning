import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorRoutingModule } from './vendor-routing.module';
import { AddVendorComponent } from './add-vendor/add-vendor.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddVendorComponent,
    VendorListComponent
  ],
  imports: [
    CommonModule,
    VendorRoutingModule,
    ReactiveFormsModule,
  ]
})
export class VendorModule { }
