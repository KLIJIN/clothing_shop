import './App.css';
import HomePage from "./page/homePage"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <Router >
        <Switch>

          <Route exact path="/" component={HomePage} />   {/*зарезервировали адрес / за компонентом Home*/}
          <Route exact path="/hats">   </Route>   {/*зарезервировали адрес / за компонентом Home*/}
        </Switch>
      </Router>

    </div>
  );
}

export default App;
