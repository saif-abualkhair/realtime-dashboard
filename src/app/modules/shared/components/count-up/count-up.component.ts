import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'rd-count-up',
  templateUrl: './count-up.component.html',
  styleUrls: ['./count-up.component.scss']
})
export class CountUpComponent implements OnChanges {
  @Input() value?: number;
  @Input() speed?: number = 5;
  @Input() decrease?: boolean = true;
  displayValue?: number;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['value']?.currentValue) {
      this.startCountUp();
    }
  }

  startCountUp() {
    this.displayValue = this.value! - Math.round(this.value! / 4);
    const interval = setInterval(() => {
      if (this.displayValue! < this.value!) {
        this.displayValue = this.displayValue! + 1;
      } else {
        this.displayValue = this.value;
        clearInterval(interval);
      }
    }, this.speed);
  }
}
