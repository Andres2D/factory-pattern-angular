import { Injectable } from "@angular/core";
import { ActionBase } from './action-base';

@Injectable()
export class AlertAction extends ActionBase {
  execute(): void {
      alert('This is an alert!');
  }
}
