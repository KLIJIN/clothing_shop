


import React, { useState } from 'react';

import FormInput from "../../forminput/fomrinput"
import CustomButton from "../../custom-button/CustomButton"

import { auth, createUserProfileDocument } from "../../../firebase/firebase.utils"
//import { auth } from "../../../firebase/firebase.utils"


import './signup.scss';

const SignUp = () => {

    const [state, setState] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })


    let handleSubmit = async event => {

        event.preventDefault();
        const { email, password, confirmPassword } = state;

        if (password !== confirmPassword) {
            alert("Пароли не совпадают"); //ЭТу хуйню добавить под повторный пароль
            return;
        }

        try {
            await auth.createUserWithEmailAndPassword(email, password);
            // await createUserProfileDocument(user, { displayName });

            setState({
                displayName: '',
                email: '',
                password: null,
                confirmPassword: null
            });
        }
        catch (error) {
            console.error(error);
        }
    };

    let handleChange = (e) => {
        const { value, name } = e.target;
        // const name = e.target.name
        // const value = e.target.value
        setState({ ...state, [name]: value })
    }

    const { displayName, email, password, confirmPassword } = state;
    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have a account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}

                    handleChange={e => { handleChange(e) }}
                    label='Display Name'
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    handleChange={e => { handleChange(e) }}
                    label='Email'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    handleChange={handleChange}
                    label='Password'
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    handleChange={handleChange}
                    label='Confirm Password'
                    required
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </div>
    );
}

export default SignUp;






















