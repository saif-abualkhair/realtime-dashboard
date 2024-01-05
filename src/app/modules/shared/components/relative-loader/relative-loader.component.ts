import { Component, Input } from '@angular/core';

@Component({
  selector: 'rd-relative-loader',
  templateUrl: './relative-loader.component.html',
  styleUrls: ['./relative-loader.component.scss']
})
export class RelativeLoaderComponent {
  @Input() isLoading: boolean = true;
}
