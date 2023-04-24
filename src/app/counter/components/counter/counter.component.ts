import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h2>{{title}}</h2>
  <h3>Counter: {{counter}}</h3>

  <button (click)="decreeBy(1)">
    -1
  </button>

  <button (click)="resetCounter()">
    Reset
  </button>

  <button (click)="increaseBy(1)">
    +1
  </button>

  <hr>
  `
})

export class CounterComponent {
  constructor() { }
  public title: string = 'Hola Counter';
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }
  decreeBy(value: number): void {
    this.counter -= value;
  }
  resetCounter(): void {
    this.counter = 10;
  }

}
