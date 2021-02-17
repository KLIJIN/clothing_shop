import React from "react";
import "./homepage.scss"
import Directory from "../components/directory/Directory"

const HomePage = ({ history }) => {
    console.log(history)
    return <div className="homepage">
        <Directory history={history} />  {/*  прокидываем историю в компонент */}
    </div >

}


export default HomePage;