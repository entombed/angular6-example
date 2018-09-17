import { trigger, state, style, transition, animate } from '@angular/animations';

export const ChangeSizeAnimation = trigger(
  'ChangeSizeAnimation', [
    transition('long <=> short', [
      animate(1000, style({
        width: '100%',
        height: '100px'
      })),
      animate(1000, style({
        width: '200px'
      })),
      animate(1000, style({
        width: '*',
        height: '*'
      })),
    ]),
  ]
)