import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import AppRouter from './AppRouter';
import {loginActions} from './store/login/login-slice';
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getSavedCart } from './store/cart/cart-actions';

function App() {
  const dispatch = useDispatch();

  const checkLogin = () => {
    if(localStorage.getItem('username') && localStorage.getItem('token')){
      dispatch(loginActions.loadUser({username:localStorage.getItem('username'), token:localStorage.getItem('token')}))
    }
  }  

  useEffect(() => {
    dispatch(getSavedCart())
    checkLogin();
  }, [])



  return (
    <Layout>
      <AppRouter />
    </Layout>
  );
}

export default App;
