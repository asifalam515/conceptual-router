import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './component/Home/Home';
import Employee from './component/Employee/Employee';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './component/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/employee">
          <Employee></Employee>
        </Route>
        <Route path="*">
        <NotFound></NotFound>
        </Route>
      </Switch>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
