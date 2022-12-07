import './App.scss';
import About from './pages/about/About';
import Home from './pages/home/Home';

function App() {
  const arr = [1,2,3,4,5,6,7,8,9,0]
  return (
    <div className="App">
      <h1>App</h1>
      <Home data={arr}/>
      <About/>
    </div>
  );
}

export default App;
