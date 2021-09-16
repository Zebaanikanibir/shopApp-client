
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddShop from './Component/AddShop/AddShop';
import Home from './Component/Home/Home';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/home">
       <Home></Home>
        </Route>
        <Route path="/addShop">
        <AddShop />
        </Route>
        <Route exact path="/">
        <Home />
        </Route>
     </Switch>
    </Router>
      
    </div>
  );
}

export default App;
