import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skill from './components/Skill';
import Education from './components/Educational';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Skill />
      {/* <Education /> */}
    </div>
  );
}

export default App;
