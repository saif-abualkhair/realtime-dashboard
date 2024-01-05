import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'rd-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  @Output() onHamburgerClick: EventEmitter<void> = new EventEmitter<void>();
}
