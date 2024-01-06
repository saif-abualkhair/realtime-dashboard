import { AfterViewInit, Component, Input } from '@angular/core';

@Component({
  selector: 'rd-info-icon',
  templateUrl: './info-icon.component.html',
  styleUrls: ['./info-icon.component.scss']
})
export class InfoIconComponent implements AfterViewInit {
  @Input() position: 'top' | 'bottom' | 'left' | 'right' = 'left';
  @Input() title?: string;
  ngAfterViewInit(): void {
    $(function () {
      ($('[data-bs-toggle="tooltip"]') as any).tooltip();
    });
  }

}
