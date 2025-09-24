import { useState, useContext } from "react"
import Button from "./Button"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import {AuthContext} from "../AuthProvider"
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faSpinner } from '@fortawesome/free-solid-svg-icons'


function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)


    async function handleLogin(e) {
        e.preventDefault();

        setLoading(true);

        const userData = {
            username, password
        }

        try {

            const response = await axios.post('http://127.0.0.1:8000/api/v1/token/', userData)
            localStorage.setItem('accessToken', response.data.access);
            localStorage.setItem('refreshToken', response.data.refresh);
            console.log('Login successful');
            setIsLoggedIn(true)
            navigate('/')



        } catch(error) {

            console.log('error', error);

            setError('Invalid credentials');


        } finally {

            setLoading(false);

        }

    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 bg-light-dark p-5 rounded">
                        <h3 className="text-light text-center mb-4">Login to our Portal</h3>

                        <form onSubmit={handleLogin}>
                            <div className="mb-3">
                                <input type="text" className="form-control" placeholder="Enter username" defaultValue={username} onChange={(e) => setUsername(e.target.value)} />
                            </div>

                            <div className="mb-3">
                                <input type="password" className="form-control" placeholder="Set password" defaultValue={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            { error && <div className="text-danger">{error}</div>}
                            {success && <div className="alert alert-success" role="alert">Login in...</div>}
                            <Button type="submit" className="btn btn-info d-block mx-auto" disabled={loading}>{ (loading) ? 'Please Wait' : 'Login' }</Button>

                        </form>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Login