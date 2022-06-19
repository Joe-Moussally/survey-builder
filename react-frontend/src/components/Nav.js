import { Link, useNavigate } from "react-router-dom";

import axios from 'axios'

const Nav = () => {

    let nav = useNavigate()

    const handleLogout = () => {
        axios({
            headers: {
                'Authorization': 'Bearer '+localStorage.getItem('token')
            },
            method:'POST',
            url:'http://127.0.0.1:8000/api/logout'
        }).then(Response => {
            localStorage.setItem('token',null)
            nav('/')
        })
    }

    return ( 
        <nav>
            <Link to="/add"><button>Add Survey</button></Link>
            <Link to="/my_surveys"><button>My Surveys</button></Link>
            <button id="logout"onClick={handleLogout}>Log Out</button>
        </nav>
     );
}
 
export default Nav;