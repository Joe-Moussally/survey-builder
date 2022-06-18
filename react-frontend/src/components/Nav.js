import { Link } from "react-router-dom";

const Nav = () => {
    return ( 
        <nav>
            <Link to="/add"><button>Add Survey</button></Link>
            <Link to="/my_surveys"><button>My Surveys</button></Link>
        </nav>
     );
}
 
export default Nav;