import { useState } from 'react';
import { addProduct } from '../../store/products/products-actions'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';


const AddProductItem = (props) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('')
    const [author, setAuthor] = useState('');
    const dispatch = useDispatch();

    const history = useHistory();

    const submit = (e) => {
        e.preventDefault();
        dispatch(addProduct(title, price, description, category, author));
        history.push("/");
        window.location.reload();
    }
    
    /*
        Pt Andrei:
        const [stateObj, setStateObj] = useState({ prop1: 'value1', prop2: 'value2' });

        const updateStateHandler = (valueProp1) => {
            const newObject = Object.create(stateObj);
            newObject.prop1 = valueProp1;
            setStateObj(newObject);
        }
    */

    return (
        <div className="form-container">
            <form>
                <input 
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    name="title"
                    placeholder="Title"
                />
                <input 
                    onChange={e =>setPrice(e.target.value)}
                    type="text"
                    name="price"
                    placeholder="Price"
                />
                <input 
                    onChange={e =>setDescription(e.target.value)}
                    type="text"
                    name="description"
                    placeholder="Description"
                />
                <input 
                    onChange={e =>setCategory(e.target.value)}
                    type="text"
                    name="category"
                    placeholder="Category"
                />
                <input 
                    onChange={e =>setAuthor(e.target.value)}
                    type="text"
                    name="author"
                    placeholder="Aut"
                />
            
                <input onClick={submit}
                    type="submit" 
                    value="Submit" 
                />
            </form>
        </div>
    );
};

export default AddProductItem;
