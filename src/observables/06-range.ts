import { range, asyncScheduler, observeOn, of } from "rxjs";

// const src$ = of(1, 2, 3, 4, 5);
// const src$ = range(-5, 10);
const src$ = range(1, 5).pipe(observeOn(asyncScheduler));

console.log('inicio');
src$.subscribe(console.log);
console.log('fin');



