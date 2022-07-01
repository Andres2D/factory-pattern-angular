import { Injectable } from "@angular/core";
import { ActionBase } from './action-base';
import { BackgroundService } from '../services/background.service';

@Injectable()
export class BackgroundAction extends ActionBase {
  
  constructor(
    private backgroundService: BackgroundService
  ) {
    super();  
  }

  execute(): void {
    this.backgroundService.changeBackground();
  }
}
