import { fromEvent } from "rxjs";
import { map, pluck } from "rxjs/operators";

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
const keyupCode$ = keyup$.pipe(
    map(event => event.code)
);

const keyupPluck$ = keyup$.pipe(
    pluck('target', 'baseURI')
);

keyupPluck$.subscribe(code => console.log('pluck', code))