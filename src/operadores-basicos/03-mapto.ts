import { fromEvent } from "rxjs";
import { map, mapTo, pluck } from "rxjs/operators";

// range(1,5).pipe(
//     map<number, string>(val => (val * 10).toString())
// )
// .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyupMapTo$ = keyup$.pipe(
    mapTo('tecla presionada')
);

keyupMapTo$.subscribe(code => console.log('mapTo', code))  