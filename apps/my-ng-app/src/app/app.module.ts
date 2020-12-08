import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyNgFeatureModule } from '@nx-monorepo/my-ng-feature';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MyNgFeatureModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
