import { fromEvent, Observable } from "rxjs";
import { debounceTime, map, mergeAll, pluck } from "rxjs/operators";

import { ajax } from "rxjs/ajax";
import { GithubUser } from "../interfaces/github-user.interface";
import { GithubUsersResp } from "../interfaces/github-users.interface";

// Referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append(textInput, orderList);

// Helpers
const mostrarUusarios = (usuarios) => {
    console.log(usuarios)
    orderList.innerHTML = '';

    for (const usuario of usuarios) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url;

        const anchor = document.createElement('a');
        anchor.href = usuario.html_url;
        anchor.text = 'Ver página';
        anchor.target = '_blank';

        li.appendChild(img);
        li.append(usuario.login + '');
        li.append(anchor);

        orderList.appendChild(li);
    }
}

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

// Antes de utilizar mergeAll, el response necesita subscribirse de nuevo

// input$.pipe(
//     debounceTime(500),
//     map(event => {
//         const texto = event.target['value'];
//         return ajax.getJSON(
//             `https://api.github.com/search/users?q=${texto}`
//         )
//     })
// ).subscribe(resp => {
//     resp.subscribe(console.log)
// });


input$.pipe(
    debounceTime(500),
    pluck('target', 'value'),
    map(texto => ajax.getJSON(`https://api.github.com/search/users?q=${texto}`)),
    mergeAll()
).subscribe((users) => {
    mostrarUusarios(users['items'])
});
