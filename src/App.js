
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">

          </Route>
          <Route path ="/">

          </Route>
        </Switch>





       <Home />

      </Router>
    
    </div>




  );
}

export default App;
