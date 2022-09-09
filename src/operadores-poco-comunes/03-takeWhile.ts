import { fromEvent } from "rxjs";
import { takeWhile, map } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map( ({ x, y }) => ({ x, y }) ),
    // takeWhile( ({ y }) => y <= 150 )
    // se agrega un tercer parametro (un booleano) para que emita el último valor que rompa la condición
    takeWhile( ({ y }) => y <= 150, true )
)
.subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete')
})