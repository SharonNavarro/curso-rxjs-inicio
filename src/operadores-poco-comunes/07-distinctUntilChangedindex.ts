import { of, from } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

// Solo cuando el valor anterior emitido es igual "==="

const numeros$ = of(1,'1',3,2,2,4,4,5,3,1,1);

numeros$.pipe(
    distinctUntilChanged()
).subscribe(console.log);

interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Dr. Willy'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Zero'
    }
];

// Con objetos no funciona como el observable de arriba, 
// ya que se manejan en distintos espacios de memoria
// y no hace la misma comparacion

from(personajes).pipe(
    distinctUntilChanged( (anterior, actual) => anterior.nombre === actual.nombre)
).subscribe(console.log);