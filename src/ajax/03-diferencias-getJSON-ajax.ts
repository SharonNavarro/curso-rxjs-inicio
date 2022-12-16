import { catchError, of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";

const url = 'https://httpbin.org/delay/1';

const manejaError = (resp: AjaxError) => {
    console.warn('error', resp.message);
    return of({
        ok:false,
        usuarios: []
    })
};

// const obs$ = ajax.getJSON(url).pipe(
//     catchError(manejaError)
// );;
// const obs2$ = ajax(url).pipe(
//     catchError(manejaError)
// );

const obs$ = ajax.getJSON(url);
const obs2$ = ajax(url);

// si se maneja con el catchError, el observable no detecta el error y se ejecutará 
// el next

obs$.pipe(
    catchError(manejaError)
).subscribe({
    next: val => console.log('next', val),
    error: val => console.log('error', val),
    complete:()=> console.log('complete'),
});

obs2$.subscribe(data => console.log('ajax', data));
