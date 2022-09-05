import { fromEvent, range } from "rxjs";
import { tap, map } from "rxjs/operators";

const text = document.createElement('div');
text.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sagittis eros eu sapien sodales vehicula. Aliquam eu quam ipsum. Cras ullamcorper quis lorem quis sagittis. Praesent sed metus vel erat vestibulum condimentum. Suspendisse in pulvinar tellus, at pulvinar ante. Pellentesque eleifend ligula id risus fermentum bibendum. Proin odio nulla, gravida quis dapibus sit amet, ultricies a urna.
<br/><br/>
Nunc accumsan nisi euismod magna tempus, ut molestie quam lobortis. Nulla id maximus diam, porta viverra elit. Aenean at massa eget eros vulputate pretium ut quis neque. Sed finibus varius erat eu pellentesque. Ut non libero non nunc tincidunt lacinia nec ut ex. Suspendisse pulvinar, eros sit amet tempus scelerisque, nibh est accumsan elit, at sollicitudin purus massa eget felis. Aenean mattis lectus justo, a maximus tortor fringilla in.
<br/><br/>
Aenean blandit ante sit amet neque malesuada mollis. Cras lectus odio, tempus ut mollis in, tincidunt vel libero. Phasellus non ullamcorper felis, vel cursus ligula. Mauris tempor risus nec ex posuere venenatis. Vestibulum porta est elit, sed luctus ante viverra consectetur. Praesent quis orci ac nulla molestie elementum. Pellentesque vitae nunc laoreet, aliquam odio ornare, rutrum turpis. Nam et sem at neque molestie ullamcorper. Nam vel vestibulum nunc. Donec nec lacus ligula. Nullam rutrum eget libero ac blandit. Donec nec hendrerit elit. Nulla malesuada erat enim, vitae imperdiet justo scelerisque eu. Cras venenatis lorem a erat egestas, sed egestas dui sodales. Nulla ac vehicula ligula, sit amet vulputate velit. Integer fringilla quam sed euismod faucibus.
<br/><br/>
Ut vel aliquam dui. Integer commodo nisl diam, in ornare dolor ultrices at. Donec mauris erat, ultrices eget ipsum at, accumsan vestibulum nisi. Mauris scelerisque erat et odio viverra dignissim. Vestibulum hendrerit auctor eros, at finibus mi consequat in. Duis id est bibendum, euismod nulla hendrerit, fringilla lectus. Sed sed massa nec nulla volutpat rhoncus at ac nunc. Vestibulum fermentum semper sagittis. Maecenas turpis erat, convallis ac nibh eu, gravida ullamcorper enim. Nulla cursus cursus ex. Proin ultrices ante ut lectus interdum, eu ultricies purus faucibus. Integer lobortis orci sit amet odio accumsan, non maximus tellus tempus. Quisque vel diam malesuada orci pellentesque sodales. Vestibulum placerat risus et dignissim aliquam.
<br/><br/>
Sed nec lorem porta, tincidunt felis non, pharetra lacus. Donec sit amet imperdiet massa. Quisque justo justo, venenatis et tortor eu, euismod vulputate turpis. Maecenas eget lectus dapibus sem sollicitudin pharetra. Curabitur mollis ligula elit, id finibus dui congue ac. Duis sed tempor elit. Maecenas et nunc vitae sem ullamcorper molestie vel a dui. Phasellus eu turpis arcu. Phasellus vitae tortor nec ante posuere accumsan. Aenean vel sem quis ligula pulvinar ultrices. Suspendisse cursus egestas orci, eu ultricies justo vehicula at. Mauris hendrerit, nulla sed pellentesque scelerisque, neque est finibus tellus, vitae tempor enim risus eget arcu. Fusce eu velit nec velit rutrum tincidunt.
<br/><br/>
`;

const body = document.querySelector('body');
body.append(text);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

// funcion que haga el calculo
const calcularPorcentaheScroll = (event) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    return (scrollTop / (scrollHeight - clientHeight)) * 100
}

// Streams
const scroll$ = fromEvent(document, 'scroll');
// scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
    // map(event => calcularPorcentaheScroll(event))
    map(calcularPorcentaheScroll),
    tap(console.log)
);

progress$.subscribe(porcentaje => {
    progressBar.style.width = `${porcentaje}%`;
});


