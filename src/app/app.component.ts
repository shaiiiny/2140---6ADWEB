import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  myName = 'Angular ' + VERSION.major;
  appName = 'Hello';
  clientName: string = 'Joseph';
  appliedCSSClass = 'Green';
  notappliedCSSClass = false;
  myColor = 'red';

  showData($event: any) {
    console.log('Button is Clicked!!');
    if ($event) {
      console.log($event.target);
      console.log($event.target.value);
    }
  }
}
