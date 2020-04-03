import { Component, OnInit } from '@angular/core';
import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild
} from '@angular/animations';

export const fader =
  trigger('routeAnimations', [
    transition('* <=> *', [
      // Set a default  style for enter and leave
      query(':enter, :leave',  [
        style({
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          opacity: 0,
          transform: 'scale(0) translateY(100%)',
        }), 
      ]),
      // Animate the new page in
      query(':enter', [
        animate('600ms ease', style({ opacity: 1, transform: 'scale(1) translateY(0)' })),
      ])
    ]),
]);

  function slideTo(direction) {
    const optional = { optional: true };
    return [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          [direction]: 0,
          width: '100%'
        })
      ], optional),
      query(':enter', [
        style({ [direction]: '-100%'})
      ]),
      group([
        query(':leave', [
          animate('400ms ease', style({ [direction]: '100%'}))
        ], optional),
        query(':enter', [
          animate('400ms ease', style({ [direction]: '0%'}))
        ])
      ]),
  ]};

  export const slider =
  trigger('routeAnimations', [
    transition('* => homeAnm', slideTo('left') ),
    transition('* => aboutAnm', slideTo('right') ),
    transition('* => workAnm', slideTo('left') ),
    transition('* => processAnm', slideTo('right') ),
    transition('* => singleWorkAnm', slideTo('left') ),
    transition('* => errorAnm', slideTo('right') )
  ]);

@Component({
  selector: 'markostalma-route-animations',
  template: `
    <p>
      route-animations works!
    </p>
  `,
  styles: []
})

export class RouteAnimationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

}
