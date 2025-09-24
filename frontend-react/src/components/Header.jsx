import Button from "./Button";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext} from "../AuthProvider"
import { useContext } from "react"

function Header() {

    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext);
    const navigate = useNavigate();

    function handleLogout() {
        localStorage.removeItem('accesToken');
        localStorage.removeItem('refreshToken');
        setIsLoggedIn(false);
        console.log('logged out');
        navigate('/login')


    }

    return (
        <>
        <nav className="navbar container pt-3 pb-3 align-items-start">
            <Link className="navbar-brand text-light" to="/">Stock Prediction Portal</Link>

            <div>
                { isLoggedIn ? (
                    <Button className="btn btn-danger" onClick={handleLogout}>Logout</Button>
                ) : (

                <>
                <Button className="btn btn-outline-info" to="/login">Login</Button>
                &nbsp;
                <Button className="btn btn-info" to="/register">Register</Button>

                </>
                ) }


            </div>
        </nav>
        </>
    );

}

export default Header