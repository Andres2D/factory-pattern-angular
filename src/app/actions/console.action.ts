import { Injectable } from "@angular/core";
import { ActionBase } from './action-base';

@Injectable()
export class ConsoleAction extends ActionBase {
  execute(): void {
      console.log('This is console log!');
  }
}
