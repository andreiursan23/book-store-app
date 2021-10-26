import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import AppRouter from './AppRouter';
import './App.css';

import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { getSavedCart } from './store/cart/cart-actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSavedCart())
  }, [])

  return (
    <Layout>
      <AppRouter />
    </Layout>
  );
}

export default App;
