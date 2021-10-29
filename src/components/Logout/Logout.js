import { loginActions } from "../../store/login/login-slice"
import { useEffect } from 'react';
import { useDispatch } from "react-redux";


const Logout = () => {
    const dispatch = useDispatch();
    //const history = useHistory()
    
    useEffect(() => {
        dispatch(loginActions.logout());
       // history.push('/');
    }, []);
    
    return (
        <>
        <h1>Ai fost delogat cu succes!</h1>
        </>
    );
}

export default Logout;