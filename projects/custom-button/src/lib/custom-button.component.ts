import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-custom-button',
  template: `
    <p>
      custom-button works!!!!
    </p>
  `,
  styles: [
  ]
})
export class CustomButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
