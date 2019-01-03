import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

export const HideShowAnimation = trigger ('HideShowAnimation', [
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'translateX(-100%)',
      }),
      animate(500, style({
        opacity: 1,
        transform: 'translateX(0)'
      }))
    ]),
    transition(':leave', [
      animate(1000, keyframes([
        style({
          transform: 'translateX(-10%)',
          offset: 0
        }),
        style({
          opacity: 0.7,
          transform: 'rotateX(45deg)',
          offset: 0.7
        }),
        style({
          opacity: 0.5,
          transform: 'rotateX(90deg) translateX(100%)',
          offset: 1
        })
      ]))
    ])
  ]
);