import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./Header.scss";

import { auth } from "../../firebase/firebase.utils"
import { ReactComponent as Logo } from "../../assets/images/4.3 crown.svg"



const Header = ({ currentUser }) => {
    console.log("`Header`", currentUser)
    return (
        <div className="header">
            <Link to="/" className="logo-container"> <Logo className="logo" /> </Link>

            <div className="options">
                <Link to="/shop" className="option"  > shop </Link>
                <Link to="/shop" className="option"  > contact  </Link>
                {
                    currentUser
                        ? <div className="option" onClick={() => auth.signOut()}  > sign out      </div>
                        : <Link className="option" to="/signin" >sign in</Link>

                }
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {

    return { currentUser: state.user.currentUser }

}

export default connect(mapStateToProps)(Header);


