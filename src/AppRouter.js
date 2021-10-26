import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Products from './components/Shop/Products';
import AddProductItem from './components/Shop/AddProductItem';
import MainHeader from './components/Layout/MainHeader';
import EditProduct from './components/Shop/EditProduct';
import Cart from './components/Cart/Cart';

import { useSelector } from 'react-redux';

const AppRouter = () => {
    const isCartVisible = useSelector(state => state.cart.cartIsVisible)

    return (
        <BrowserRouter>
            <MainHeader/>
            
            {isCartVisible && <Cart />}

            <Switch>
                {/* localhost:3000 */}
                <Route path='/' exact>
                    <Products/>
                </Route>

                {/* localhost:3000/add-product */}
                <Route path='/add-product'>
                    <AddProductItem/>
                </Route>

                <Route path='/edit-product/:id'>
                    <EditProduct />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter;