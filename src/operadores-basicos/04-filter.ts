import { range, of, from } from "rxjs";
import { filter } from "rxjs/operators";

range(1, 10).pipe(
    filter( (val, i) => {
        console.log('index', i);
        return val % 2 ===1
    })
)//.subscribe(console.log);

interface Personaje {
    tipo: string;
    nombre: string;
}

const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    }
];

// mi solucion para filtrar solo los que son villanos
// of(...personajes).pipe(
//     filter( (val) => {
//         return val.tipo === 'villano'
//     })
// ).subscribe(console.log);


// Solucion del profesor
from(personajes).pipe(
    filter( p => p.tipo !== 'heroe')
).subscribe(console.log);