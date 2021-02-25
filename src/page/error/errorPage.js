import React from "react";
import "./errorPage.scss"
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    console.log("ErrorPage")
    return <div className="errorPage">
        <h1>404</h1>
        <h3>Извините, такой страницы не существует</h3>
        <Link to="/" className="btn"> На главную </Link>
    </div >

}


export default ErrorPage;