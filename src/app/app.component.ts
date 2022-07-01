import { Component, ElementRef, Injector, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { BackgroundService } from './services/background.service';
import { provider } from './app.component.providers';
import { ActionBase } from './actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

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
  backgroundSubs?: Subscription;
  backgroundColor = '#333';

  constructor(private backgroundService: BackgroundService, private readonly injector: Injector) {}

  ngOnInit(): void{
    this.backgroundSubs = this.backgroundService.background.subscribe(res => {
      this.backgroundColor = `#${res}`;
    });
  }

  ngOnDestroy(): void {
    this.backgroundSubs?.unsubscribe();
  }

  executeAction(id: string): void {
    this.injector.get<ActionBase>(provider[id].token).execute();
  }
}
