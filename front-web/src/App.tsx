import './App.css';
import Filter from './components/filter';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <div className="app-container">
          <Filter />
        </div>
      </>
    </div>
  );
}

export default App;
