import { range, fromEvent } from "rxjs";
import { map } from "rxjs/operators";
import { EnvironmentPlugin } from "webpack";

// range(1,5).pipe(
//     map<number, string>(val => (val * 10).toString())
// )
// .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
const keyupCode$ = keyup$.pipe(
    map(event => event.code)
);

keyupCode$.subscribe(code => console.log('map', code));