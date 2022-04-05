import './App.css';
import {movies} from './movies';

const App = () => {
    return (
        <div>
            <p>Jeff Gullion</p>
            <p>Hello</p>

            {/* the following .map is like outputting multiple lines manually */}
            {
                movies.map( (movie) => <p>{movie.title}</p>)
            }


            <h3>Manual outputs</h3>
            <p>{movies[0].title}</p>
            <p>{movies[1].title}</p>
            <pre>{JSON.stringify(movies, null, 4)}</pre>
        </div>
    );
}

export default App;
