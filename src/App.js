import React, { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ShopPage from "./page/shop/shopPage"
import HomePage from "./page/home/homePage"
import SignPage from "./page/sign/signPage"
import Header from "./components/header/Header"
import { auth } from "./firebase/firebase.utils"




function App() {

  const [state, setState] = useState({ currentUser: null })
  let unsubscribeFromAuth = null

  useEffect(() => {
    console.log("App_useEffect")

    unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setState({ currentUser: user })
      console.log("App_useEffect", user)
    });


  }, [])


  return (
    <div className="App">
      {console.log("App_return")}
      <Router >
        <Header currentUser={state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />   {/*зарезервировали адрес / за компонентом Home*/}
          <Route path="/shop" component={ShopPage} />     {/*зарезервировали адрес / за компонентом ShopPage*/}
          <Route path="/signin" component={SignPage} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
