import axios from 'axios';
import {loginActions} from './login-slice';

export const login = (username, password) => {
    return (dispatch) => {
        axios.post('http://apps.loopevo.com/apis/shop/login.php', {username, password})
            .then((response) => {
                dispatch(loginActions.loadUser({ token: response.data.token, username: response.data.username}));
            })
            .catch((error) => {
                alert('Invalid Username or Password');
            })
    }
};

