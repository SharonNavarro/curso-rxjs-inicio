import { Observable, Observer, subscribeOn } from "rxjs";

const observer: Observer<any> = {
    next : value => console.log(value),
    error: error => console.warn(error),
    complete: () => console.info('complete')
}

const intervalo$ = new Observable<number>(subscriber => {

    let count = 0;
    const interval = setInterval(() => {
        count++;
        subscriber.next(count);
    }, 1000);

    setTimeout(() => {
        subscriber.complete();
    }, 2500);

    return () => {
        clearInterval(interval);
        console.log('Intervalo destruido');
    }
});

const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);

subs1.add( subs2 )

setTimeout(() => {
    subs1.unsubscribe();
    // subs2.unsubscribe();

    console.log('Completado tiemout')
}, 6000)