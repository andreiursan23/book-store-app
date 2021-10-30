import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Products from './components/Shop/Products';
import AddProductItem from './components/Shop/AddProductItem';
import MainHeader from './components/Layout/MainHeader';
import EditProduct from './components/Shop/EditProduct';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import SearchResults from './components/Shop/SearchResults';
import { useSelector } from 'react-redux';
import CategoryProducts from './components/Shop/CategoryProducts';


const AppRouter = () => {
    const isCartVisible = useSelector(state => state.cart.cartIsVisible)
    const token = useSelector(state => state.login.token)
    const checkAuth = () => {
        if(token !== null){
            return true
        } else {
            return false
        } 
    } 

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
                <Route path='/add-product' render={() => (
                    checkAuth() ? (<AddProductItem/>) : (<Login />)
                )}>
                </Route>

                <Route path='/edit-product/:id'>
                    <EditProduct />
                </Route>
                <Route path='/login'>
                    <Login />
                </Route>
            
                <Route path='/logout'>
                    <Logout />
                </Route>

                <Route path='/search-results'>
                    <SearchResults />
                </Route>

                <Route path='/category/:category'>
                    <CategoryProducts />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter;