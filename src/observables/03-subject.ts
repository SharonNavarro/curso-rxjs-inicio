import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
    next : value => console.log(value),
    error: error => console.warn(error),
    complete: () => console.info('complete')
}

const intervalo$ = new Observable<number>(subscriber => {

    const intervalID = setInterval(() => {
        subscriber.next(Math.random());
    }, 1000);

    return () => clearInterval(intervalID);
});

// 1- Casteo multiple 
// 2- Tambien es un observer
// 3- Next, error y complete

const subject$ = new Subject();
const subscription = intervalo$.subscribe(subject$);

const subs1 = subject$.subscribe(observer);

setTimeout(() => {
    subject$.next(10);
    subject$.complete(); 
    subscription.unsubscribe();
}, 4500);

// const subject = new Subject<number>();
// subject.next(1);
// subject.subscribe({
//   next: (v) => console.log(`observerA: ${v}`)
// });
// subject.next(2);