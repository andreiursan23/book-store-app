import { loginActions } from "../../store/login/login-slice";
import { login } from '../../store/login/login-actions';
import { useDispatch } from "react-redux";
import {useState} from 'react'


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch= useDispatch()

    const submit = (event) => {
        event.preventDefault();
        dispatch(login(username, password))
        
    }

    return (
        <div className="form-container">
            <form>
                <input onChange = {(event) => setUsername(event.target.value)}
                    type="text"
                    name="username"
                />
                <input onChange = {(event) => setPassword(event.target.value)}
                    type="password"
                    name="password"
                />
            
                <input onClick={submit}
                    type="button" 
                    value="Submit" 
                />
            </form>
        </div>
    );
}

export default Login;