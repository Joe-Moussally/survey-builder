import { useNavigate } from "react-router-dom";

import axios from 'axios';

const Signup = () => {

    const nav = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault()
        console.log('ASD')
        let name = document.getElementById('name').value
        let email = document.getElementById('email').value
        let p1 = document.getElementById('p2').value
        let p2 = document.getElementById('p2').value

        let data = new FormData();
        data.append('email',email)
        data.append('password',p1)
        data.append('password_confirmation',p2)
        data.append('name',name)
        
        axios({
            method:'POST',
            url: 'http://127.0.0.1:8000/api/register',
            data: data
        }).then((Response) => {
            console.log(Response.data)
            nav('/')
        })
    }

    return ( 
        <>

            <div id="main-container">
            <form id="login-container">
                <h1>Sign Up As Admin</h1>
                <input type='email' id='email' placeholder='email'></input>
                <input type='text' id='name' placeholder='name'></input>
                <input type='password' id='p1' placeholder='password'></input>
                <input type='password' id='p2' placeholder='confirm password'></input>
                <button id="login" onClick={handleSignUp}>Sign Up</button>
                <button id="create-account" onClick={() => {nav('/')}}>Login As Admin</button>
                <button id="continue-user">Continue as Normal User</button>
            </form>
            </div>

        </>
     );
}
 
export default Signup;