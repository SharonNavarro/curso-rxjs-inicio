import { fromEvent } from "rxjs";
import { filter, map } from "rxjs/operators";

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map(evet => evet.code), //keyboardEvent, string
    filter(key => key === 'Enter')
)
keyup$.subscribe(console.log);
