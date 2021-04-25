import './components/style.css'
import Nav from './components/Nav';
import Contents from './components/Contents';

function App() {
  return (
    <div className="App">
      <header className = "header flex">
        <Nav/>
      </header>
      <Contents/>
    </div>
  );
}

export default App;