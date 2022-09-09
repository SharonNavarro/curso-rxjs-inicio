import { fromEvent, interval, observable } from "rxjs";
import { takeUntil, tap, skip } from "rxjs/operators";

// skip "saltea" la cantidad de emisiones que se le indica

const boton = document.createElement('button');
boton.innerHTML = 'Detener time';

document.querySelector('body').append(boton);

const counter$ = interval(1000);
const clickBtn$ = fromEvent(boton, 'click').pipe(
    tap((val) => console.log('tap antes de skip', val)),
    skip(2),
    tap((val) => console.log('tap despues de skip', val)),
);

counter$.pipe(
    takeUntil( clickBtn$ )
)
.subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete')
})