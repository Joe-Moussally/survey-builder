import { useParams, useNavigate } from 'react-router-dom';

import axios from 'axios';

const Login = () => {

    const navigate = useNavigate()

    //function to redirect to singup
    const handleSignUp = () => {
        navigate('/signup')
    }

    const handleLogin = (e) => {
        e.preventDefault()
        console.log('ASD')
        let email = document.getElementById('email').value
        let password = document.getElementById('password').value

        let data = new FormData();
        data.append('email',email)
        data.append('password',password)
        
        axios({
            method:'POST',
            url: 'http://127.0.0.1:8000/api/login',
            data: data
        }).then((Response) => {
            console.log(Response.data.access_token)
            localStorage.setItem('token',Response.data.access_token)
            navigate('/my_surveys')
        })
    }

    return ( 
        <>
            <div id="main-container">
            <form id="login-container">
                <h1>Login As Admin</h1>
                <input type='email' id='email' placeholder='email'></input>
                <input type='password' id='password' placeholder='password'></input>
                <button id="login" onClick={handleLogin}>Login</button>
                <button id="create-account" onClick={handleSignUp}>Create Admin Account</button>
                <button id="continue-user">Continue as Normal User</button>
            </form>
            </div>
        </>
     );
}
 
export default Login;