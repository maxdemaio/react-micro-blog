import Navbar from './Navbar';
import Home from './Home';

// Root component
function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        {/* Load home child component (contains everything) */}
        <Home />
      </div>
    </div>
  );
}

export default App;
