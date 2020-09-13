import React, { useContext}  from 'react';
import { LoginContext } from "./LoginContext";
import { useHistory } from "react-router-dom";
import './style.css'

const Login = () => {
    const history = useHistory();
    const [login,setLogin]=useContext(LoginContext);
    const handleSubmit=(event)=>{
        event.preventDefault();
        setLogin("sudah");
        console.log(login);
        history.push("/");
    }
    return (
        <div>
            <div className="login">
                <h1>Login</h1>
                <form>
                
                    <strong style={{width: '10px'}}>Username: </strong>
                    <input type="text"/><br/><br/>
                    <strong style={{width: '10px'}}>Email: </strong> 
                    <input type="text"/><br/><br/>
                    <button id="btn-login" onClick={handleSubmit}>Submit</button>
                
                </form>
            </div>
            <footer>
                <h5>copyright © 2020 by Sanbercode</h5>
            </footer>
        </div>
    );
}
export default Login;