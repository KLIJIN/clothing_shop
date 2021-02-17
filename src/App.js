import './App.css';
import HomePage from "./page/homePage"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ShopPage from "./page/shop/shop"


function App() {
  return (
    <div className="App">

      <Router >
        <Switch>
          <Route exact path="/" component={HomePage} />   {/*зарезервировали адрес / за компонентом Home*/}
          <Route exact path="/hats">   </Route>   {/*зарезервировали адрес / за компонентом Home*/}
          <ShopPage exact path="/shop" component={ShopPage}  >   </ShopPage>   {/*зарезервировали адрес / за компонентом ShopPage*/}
        </Switch>
      </Router>

    </div>
  );
}

export default App;
