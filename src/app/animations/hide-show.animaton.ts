import { trigger, state, style, transition, animate } from '@angular/animations';

export const HideShowAnimation = trigger ('HideShowAnimation', [
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'rotateY(45deg)'
      }),
      animate(500, style({
        opacity: 1,
        transform: 'rotateY(0deg)'
      }))
    ]),
    transition(':leave', [
      style({
        opacity: 1
      }),
      animate(1000, style({
        opacity: 0.5,
        transform: 'rotateX(45deg)'
      })),
      animate(1000, style({
        opacity: 0.7,
        transform: 'rotateX(90deg)'
      })),
    ])
  ]
);