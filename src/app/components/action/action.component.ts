import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent {

  @Input() title = '';
  @Output() onExecute = new EventEmitter();
  
  onClick(): void {
    this.onExecute.emit();
  }
}
