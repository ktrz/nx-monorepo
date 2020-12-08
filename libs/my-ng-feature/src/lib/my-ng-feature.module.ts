import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyNgFeatureComponent } from './my-ng-feature.component';

@NgModule({
  declarations: [MyNgFeatureComponent],
  imports: [CommonModule],
  exports: [
    MyNgFeatureComponent
  ]
})
export class MyNgFeatureModule {}
