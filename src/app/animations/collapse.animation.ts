import { trigger, state, transition, style, animate } from '@angular/animations';

export const collapseAnimation =
    trigger('collapseAnimation', [
        transition(':enter', [
            style({
                height: '0px'
            }),
            animate('.5s ease-out',
                style({
                    height: '*'
                })
            )
        ]),
        transition(':leave', [
            style({ height: '*' }),
            animate('0.5s ease-in',
                style({
                    height: '0px'
                })
            )
        ])
    ]);
