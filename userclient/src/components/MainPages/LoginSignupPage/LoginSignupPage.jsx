import React from "react";
import "./LoginSignupPage.css";

// import Headers from "../../pages/navbar/Navbar"
// import Footer from "../../pages/NewFooter/Footer"

// import LoginPage from "./LoginPage/LoginPage";
import SignupPage from "./SignupPage/SignupPage";
// import VerificationPage from "./VerificationPage/VerificationPage";

const LoginSignupPage = () => {
    return (
        <div>
        {/* <Headers/> */}
        <div className="LoginSignupPage">
            {/* <LoginPage/> */}
             <SignupPage/>
            {/* <VerificationPage/> */} 
        </div>

        {/* <Footer /> */}
        </div>
    )
}

export default LoginSignupPage