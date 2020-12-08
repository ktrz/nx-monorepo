import { Component } from '@angular/core';
import { myLib } from '@nx-monorepo/my-lib';

@Component({
  selector: 'nx-monorepo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-ng-app';
  mySubtitle = myLib();
}
