import { asyncScheduler, fromEvent } from "rxjs";
import { distinctUntilChanged, pluck, throttleTime } from "rxjs/operators";


// Se recomienda algo parecido al anterior. Para sugerir cosas 
// cuando el usuario escriba algo

const click$ = fromEvent(document, 'click');

click$.pipe(
    throttleTime(3000)
);

// Ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent (input, 'keyup');

input$.pipe(
    throttleTime(400, asyncScheduler, {
        leading: false,
        trailing: true
    }),
    pluck('target', 'value'),
    distinctUntilChanged()
).subscribe(console.log);