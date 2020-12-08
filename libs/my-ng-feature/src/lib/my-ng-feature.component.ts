import { Component } from '@angular/core';
import { myLib } from '@nx-monorepo/my-lib';

@Component({
  selector: 'nx-monorepo-my-ng-feature',
  template: `
    <h2>This app is using {{mySubtitle}}!</h2>
  `,
})
export class MyNgFeatureComponent {
  mySubtitle = myLib();
}
