import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import "./style.css";

const Login = () => {

    const [loginType, setLoginType] = useState("Sign In");
    

    return(
        <div className="login-section">
            <Navbar />
            <div className="page-header">
                <h2>{loginType}</h2>
            </div>
            <div className="login">
                <form className="login-form">
                    <label htmlFor="email">Email</label>
                    <input  
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter Email here"
                        required
                    />
                    <label htmlFor="password">Password</label>
                    <input  
                        id="password"
                        name="password"
                        type="text"
                        placeholder="Enter Password here"
                        required
                    />
                    <button>{loginType}</button>
                    {loginType === "Sign In" 
                    ? <p>New to GymPulse? <span className="red" onClick={() => setLoginType("Sign Up")}>Sign Up</span></p>
                    : <p>Already have account? <span className="red" onClick={() => setLoginType("Sign In")}>Sign In</span></p>
                    }
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Login;
