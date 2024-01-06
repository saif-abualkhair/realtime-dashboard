import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Carousel } from "bootstrap";
import { MockupService } from '../../shared/services/mockup.service';
import { Weather } from '../models/weather';

@Component({
  selector: 'rd-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements AfterViewInit, OnInit {
  @ViewChild("carouselExampleSlidesOnly") carouselElement!: ElementRef<
    HTMLElement
  >;

  carouselRef!: Carousel;
  weather?: Weather;

  constructor(private mockupService: MockupService) { }

  ngOnInit(): void {
    this.getWeather();
  }



  ngAfterViewInit() {
    this.carouselRef = new Carousel(this.carouselElement.nativeElement, {
      slide: false,
      interval: 500
    } as any);
  }

  nextSlide() {
    this.carouselRef.next();
  }

  getWeather = () => {
    this.mockupService.getWeather().subscribe(response => {
      this.weather = response;
    });
  }
}
