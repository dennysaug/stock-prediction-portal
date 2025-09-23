import Button from "./Button";
import { Link } from "react-router-dom"

function Header() {

    return (
        <>
        <nav className="navbar container pt-3 pb-3 align-items-start">
            <Link className="navbar-brand text-light" to="/">Stock Prediction Portal</Link>
            <div>
                <Button className="btn btn-outline-info" to="/login">Login</Button>
                &nbsp;
                <Button className="btn btn-info" to="/register">Register</Button>
            </div>
        </nav>
        </>
    );

}

export default Header