import React, { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from "react-redux";

import ShopPage from "./page/shop/shopPage"
import HomePage from "./page/home/homePage"
import SignPage from "./page/sign/signPage"
import ErrorPage from "./page/error/errorPage"
import CheckoutPage from "./page/checkout/checkoutPage"

import Header from "./components/header/Header"

import { auth, app } from "./firebase/firebase.utils"
import { setCurrentUserAction } from "./redux/actions.js"


import { selectcurrentUser } from "./redux/userSelector"



function App({ setCurrentUser, currentUser }) {
  //  /* "homepage": "http://KLIJIN.github.io/clothing_shop", */
  console.log(currentUser)
  let unsubscribeFromAuth = null

  useEffect(() => {
    // const { setCurrentUser } = props
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        // const userRef = await createUserProfileDocument(userAuth);
        // userRef.onSnapshot(snapShot => {
        //   setCurrentUser({
        //     id: snapShot.id,
        //     ...snapShot.data()
        //   })

        // });
      }

      setCurrentUser(userAuth);
    });
  }, [])


  return (
    <div className="App">
      {/* {console.log("App_return")} */}
      <Router >
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />   {/*зарезервировали адрес / за компонентом Home*/}
          <Route exact path="/clothing_shop" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          {/* <Route path="/signin" component={SignPage} /> */}
          <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<SignPage />)} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="*"> <ErrorPage /> </Route>
        </Switch>
      </Router>

    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    currentUser: selectcurrentUser(state)
  }

}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: (user) => {
    dispatch(setCurrentUserAction(user))
  }
})



export default connect(mapStateToProps, mapDispatchToProps)(App);