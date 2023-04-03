import './App.css';
//Hard coded data for level 0
const movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

function App() {
  return (
    <div className="App">
      <h3>Movie Titles</h3>
      {movies.map((movie, index) => <li key={index}>{movie.title}</li>)}
    </div>
  );
}

export default App;
