import React, { useState } from "react";
import "./signin.scss"
import FormInput from "../../forminput/fomrinput"
import CustomButton from "../../custom-button/CustomButton"

import { signInWithGoogle } from "../../../firebase/firebase.utils"



const SignIn = () => {

    const [state, setState] = useState({ email: "", password: "" })

    let handleChange = (e) => {
        // const { value, name } = e.target;
        const name = e.target.name
        const value = e.target.value
        setState({ ...state, [name]: value })
    }

    let handleSubmit = e => {
        e.preventDefault();
        setState({ email: "", password: "" }) //при отправке формы очищаем поля емайл и пасворд
    }

    return (
        <div className="sign-in" >
            <h2> I'am already have an account </h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit} >
                <FormInput name="email" type="email" label="email" value={state.email} required handleChange={e => { handleChange(e) }} />
                <FormInput name="password" type="password" label="password" value={state.password} required handleChange={e => { handleChange(e) }} />

                <div className="buttons">
                    <CustomButton type="submit"  >   Sign in </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn > Sign in with Google </CustomButton>
                </div>

            </form>


        </div>)
}

export default SignIn;