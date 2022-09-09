import { of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";
import { catchError, map } from "rxjs/operators";

const url = 'https://api.github.com/users?per_pages=5';

const manejaErrores = (response: Response) => {
    if(!response.ok) {
        throw new Error(response.statusText);
    }
    return response;
};

const atrapaError = (err: AjaxError) => {
    console.warn('error en:', err.message);
    return of([]);
}

const fetchPromesa = fetch(url);

// fetchPromesa
// .then(resp => resp.json())
// .then(data => console.log('data', data))
// .catch(err => console.warn('error en usuarios', err))

// fetchPromesa
// .then(manejaErrores)
// .then(respo => respo.json())
// .then(data => console.log('data;', data))
// .catch(err => console.warn('error en usuarios'))

ajax(url).pipe(
    map(resp => resp.response),
    catchError(atrapaError)
)
.subscribe(console.log);
