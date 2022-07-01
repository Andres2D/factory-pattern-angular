import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {

  getRandomColor(): string {
    return Math.floor(Math.random()*16777215).toString(16);
  }

  background: Subject<string> = new Subject();

  changeBackground() {
    this.background.next(this.getRandomColor());
  }
}
