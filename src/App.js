import React, { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from "react-redux";

import ShopPage from "./page/shop/shopPage"
import HomePage from "./page/home/homePage"
import SignPage from "./page/sign/signPage"
import Header from "./components/header/Header"

import { auth, app } from "./firebase/firebase.utils"
import { setCurrentUserAction } from "./redux/acions.js"


function App({ setCurrentUser, currentUser }) {

  console.log(currentUser)
  let unsubscribeFromAuth = null
  // let signupFunct = (email, password) => {
  //   return auth.createUserWithEmailAndPassword(email, password)
  // }

  useEffect(() => {
    // const { setCurrentUser } = props

    console.log("App_useEffect")

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
          <Route path="/shop" component={ShopPage} />     {/*зарезервировали адрес / за компонентом ShopPage*/}
          {/* <Route path="/signin" component={SignPage} /> */}
          <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<SignPage />)} />
        </Switch>
      </Router>

    </div>
  );
}


const mapStateToProps = ({ user }) => {

  return { currentUser: user.currentUser }

}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: (user) => {
    dispatch(setCurrentUserAction(user))
  }
})



export default connect(mapStateToProps, mapDispatchToProps)(App);