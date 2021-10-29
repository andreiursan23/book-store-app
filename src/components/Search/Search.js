import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import React from 'react';
import {useDispatch} from 'react-redux';
import { searchProducts} from '../../store/products/products-actions';
import {useState} from 'react';
import { useHistory } from 'react-router-dom';
 
const Search = () => {

    const [text, setText]= useState('')
    const dispatch = useDispatch();
    const history = useHistory()

    const doSearch = () => {
        dispatch(searchProducts(text))
        history.push('search-results');
    }
    
    return (
        <Form inline>
            <FormControl onChange={(event)=> setText(event.target.value)} type="text" placeholder="Search" className="mr-sm-2" />
            <Button onClick={doSearch} variant="outline-success">Search</Button>
        </Form>
    );
}

export default Search;