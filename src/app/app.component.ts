import {Component, OnInit} from "@angular/core"
import { animate, state, style, transition, trigger } from "@angular/animations"

@Component({
  selector: 'mt-app',
  templateUrl: 'app.component.html',
  animations: [
    trigger('appAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0}),
        animate('2s 0s ease-in-out')
      ])
    ]),
  ]
})
export class AppComponent implements OnInit {

  appState = 'ready'

  content = 'Welcome do Meat App!'

  constructor() { }

  ngOnInit() {
  }

}
