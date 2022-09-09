import { fromEvent, interval, observable } from "rxjs";
import { takeUntil } from "rxjs/operators";

// takeUntil se utiliza para completar un observable tomando como referencia 
// otro observable, si este emite su primer valor

const boton = document.createElement('button');
boton.innerHTML = 'Detener time';

document.querySelector('body').append(boton);

const counter$ = interval(1000);
const clickBtn$ = fromEvent(boton, 'click');

counter$.pipe(
    takeUntil( clickBtn$ )
)
.subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete')
})