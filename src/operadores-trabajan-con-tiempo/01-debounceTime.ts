import { from, fromEvent } from "rxjs";
import { debounceTime, distinctUntilChanged, pluck } from "rxjs/operators";


// Por ejemplo, podria servir cuando se haga una peticion por la api
// a traves de la busqueda con un input, y al momento de escribir letra por letra no se haga repetidas veces 
// la peticion, sino esperar cierto tiempo para cuando se deje de escribir


const click$ = fromEvent(document, 'click');

click$.pipe(
    debounceTime(3000)
);

// Ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent (input, 'keyup');

input$.pipe(
    debounceTime(1000),
    pluck('target', 'value'),
    distinctUntilChanged()
).subscribe(console.log);