import { fromEvent } from "rxjs";
import { first, tap, map } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    tap<MouseEvent>(console.log),
    // map(event => ({
    //     clientY: event.clientY,
    //     clientX: event.clientX
    // })),
    map(({clientX, clientY}) => ({clientY, clientX})),
    first(val => val.clientY >=150 )
)
.subscribe({
    next: val => console.log('next', val),
    complete() {
        console.log('complete')
    },
});
