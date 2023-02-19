import React from "react";
import "./404ErrorPage.css";
import ErrorImg from "./Image/404Error.gif";
import ErrorImg2 from "./Image/Error.gif";
import Error2 from "./Image/Error2.gif"

const ErrorPage = () => {
    return(
        <div className="ErrorPage">
            <img src={Error2} alt="Error 404" />
        </div>
    )
}

export default ErrorPage;