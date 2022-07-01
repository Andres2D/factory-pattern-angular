import { Injectable } from "@angular/core";
import { ActionBase } from './action-base';

@Injectable()
export class RedirectAction extends ActionBase {
  execute(): void {
    window.open('https://www.google.com', '_blank');
  }
}
