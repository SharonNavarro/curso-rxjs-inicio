import { fromEvent, interval } from "rxjs";
import { switchMap } from "rxjs/operators";

const click$ = fromEvent(document, 'click');
const interval$ = interval(1000);

click$.pipe(
    switchMap(() => interval$)
).subscribe(console.log);

// Se diferencia del mergeMap ya que este puede manejar 
// varias llamadas a la vez, 
// y switchMap solo toma la actual