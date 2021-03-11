import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'mt-header',
  templateUrl: './header.component.html',
  animations: [
    trigger('headAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translate(500px)'}),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {

  headState= 'ready'

  constructor() { }

  ngOnInit() {
  }

}
