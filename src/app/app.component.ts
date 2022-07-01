import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'factory-pattern-angular';
  DUMMY_DATA = [
    {
      id: '01',
      title: 'Alert',
      action: 'alert'
    },
    {
      id: '02',
      title: 'Console log',
      action: 'console'
    },
    {
      id: '03',
      title: 'Redirect',
      action: 'redirect'
    },
    {
      id: '04',
      title: 'Change backgorund',
      action: 'background'
    }
  ];

  executeAction(): void {
    console.log('Execute action');
  }
}
