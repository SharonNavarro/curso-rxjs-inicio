import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
    next : value => console.log(value),
    error: error => console.warn(error),
    complete: () => console.info('complete')
}

// const obs$ = Observable.create();
const obs$ = new Observable<string>(subs => {
    subs.next('Hola');
    // const a = undefined;
    // a.nombre = 'Fernando;'
    subs.complete();
});

obs$.subscribe(observer);

// obs$.subscribe({
//     next: result => {
//         console.log('next: ', result);
//     }, error: err => {
//         console.log('error: ', err);
//     }, complete() {
//         console.info('completado');
//     },
// }
// )






