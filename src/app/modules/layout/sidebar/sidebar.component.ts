import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'rd-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() pinState: string = 'state2';
  @Output() onPinChange: EventEmitter<string> = new EventEmitter<string>();
}
