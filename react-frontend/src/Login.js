const Login = () => {
    return ( 
        <>
            <div id="main-container">
            <form id="login-container">
                <h1>Login As Admin</h1>
                <input type='email' id='email'></input>
                <input type='password' id='password'></input>
                <button id="login">Login</button>
                <button id="create-account">Create Admin Account</button>
                <button id="continue-user">Continue as Normal User</button>
            </form>
            </div>
        </>
     );
}
 
export default Login;