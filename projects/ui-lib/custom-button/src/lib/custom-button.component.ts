import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lib-custom-button',
  template: `
    <p>
      custom-button works!! {{label}}
    </p>
  `,
  styles: [
  ]
})
export class CustomButtonComponent implements OnInit {
  @Input() label: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
