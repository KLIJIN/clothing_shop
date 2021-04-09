import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
//assets
import "./Header.scss";
import { ReactComponent as Logo } from "../../assets/images/4.3 crown.svg"
//components
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown"
//utils
import { auth } from "../../firebase/firebase.utils"


const Header = () => {

    const ShovCart = useSelector(state => state.cartR.hidden); //отражение иконки сумки с покупками
    const currentUser = useSelector(state => state.userR.currentUser);

    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link to="/shop" className="option"> shop </Link>
                <Link to="/" className="option"> contact </Link>
                {
                    currentUser
                        ? <div className="option" onClick={() => auth.signOut()}  > sign out      </div>
                        : <Link className="option" to="/signin" >sign in</Link>
                }
                <CartIcon />
            </div>
            {  !ShovCart && <CartDropdown />}
            {/* {  !hidden ? <CartDropdown /> : null} */}
            {/* Если False   ?  рисуем     имначе null */}
        </div>
    )
}


export default Header;


