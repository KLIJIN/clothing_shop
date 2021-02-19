import React from "react"
import "./signPage.scss"
import SignIn from "../../components/sign/signin/signin"
import SignUp from "../../components/sign/signup/signup"


const SignPage = () => {
    return (
        <div className="sign-in-and-sign-up ">
            <SignIn />  {/* ВОЙТИ */}
            <SignUp />  {/* РЕГИСТРАЦИЯ */}
        </div>)
}

export default SignPage;