import { of } from "rxjs";

// const obs$ = of(1,2,3,4,5,6);
const obs$ = of(...[1, 2, 3, 4, 5, 6], 2, 3, 4, 5);
// const obs$ = of([1,2], {a:1, b:2}, function(){}, true, Promise.resolve);

console.log('Inicio del Obs$');
obs$.subscribe({
    next: (v) => console.log(v),
    error: (e) => console.error(e),
    complete: () => console.info('complete') 
})
console.log('Fin del Obs$');