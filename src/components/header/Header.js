import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./Header.scss";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown"

import { auth } from "../../firebase/firebase.utils"
import { ReactComponent as Logo } from "../../assets/images/4.3 crown.svg"
// import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cartSelector"
import { selectcurrentUser } from "../../redux/userSelector"


const Header = ({ currentUser, hidden }) => {
    console.log("`Header`", currentUser, hidden)

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
                <CartIcon />
            </div>
            {  !hidden && <CartDropdown />}
            {/* {  !hidden ? <CartDropdown /> : null} */}
            {/* Если False   ?  рисуем     имначе null */}

        </div>
    )
}


const mapStateToProps = (state) => {

    return {
        currentUser: selectcurrentUser(state),
        hidden: selectCartHidden(state),
    }

}

export default connect(mapStateToProps)(Header);


