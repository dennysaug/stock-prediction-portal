import { useState } from "react"
import Button from "./Button"
import axios from "axios"
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faSpinner } from '@fortawesome/free-solid-svg-icons'


function Register() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    async function handleRegistration(e) {
        e.preventDefault();

        setLoading(true);

        const userData = {
            username, email, password
        }

        try {

            const response = await axios.post('http://127.0.0.1:8000/api/v1/register/', userData)
            setErrors({});
            setUsername('');
            setPassword('');
            setEmail('');
            setSuccess(true)

        } catch(error) {

            setErrors(error.response.data);


        } finally {

            setLoading(false);

        }

    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 bg-light-dark p-5 rounded">
                        <h3 className="text-light text-center mb-4">Create an account</h3>

                        <form onSubmit={handleRegistration}>
                            <div className="mb-3">
                                <input type="text" className="form-control" placeholder="Enter username" defaultValue={username} onChange={(e) => setUsername(e.target.value)} />
                                <small>{errors.username && <div className="text-danger">{errors.username}</div>}</small>
                            </div>

                            <div className="mb-3">
                                <input type="email" className="form-control" placeholder="Enter e-mail" defaultValue={email} onChange={(e) => setEmail(e.target.value)} />
                                <small>{errors.email && <div className="text-danger">{errors.email}</div>}</small>
                            </div>

                            <div className="mb-3">
                                <input type="password" className="form-control" placeholder="Set password" defaultValue={password} onChange={(e) => setPassword(e.target.value)} />
                                <small>{errors.password && <div className="text-danger">{errors.password}</div>}</small>
                            </div>
                            {success && <div className="alert alert-success" role="alert">Registration succesful</div>}
                            <Button type="submit" className="btn btn-info d-block mx-auto" disabled={loading}>{ (loading) ? 'Please Wait' : 'Register' }</Button>

                        </form>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Register