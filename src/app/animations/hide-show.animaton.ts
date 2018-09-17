import { trigger, state, style, transition, animate } from '@angular/animations';

export const HideShowAnimation = trigger ('HideShowAnimation', [
  state('show', style({
    opacity: 1,
  })),
  transition('void => show', [
    style({
      opacity: 0
    }),
    animate(500, style({
      opacity: 1
    }))
  ]),
  transition('show => void', [
    style({
      opacity: 1
    }),
    animate(1000, style({
      opacity: 0
    }))
  ])
]
);