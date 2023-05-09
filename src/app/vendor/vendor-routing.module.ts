import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVendorComponent } from './add-vendor/add-vendor.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';

const routes: Routes = [
  { path: 'add', component: AddVendorComponent },
  { path: 'list', component: VendorListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }
