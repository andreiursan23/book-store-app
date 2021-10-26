import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router";
import { editProduct, fetchProducts } from "../../store/products/products-actions";

const EditProduct = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    const items = useSelector(state => state.products.items);

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('')
    const [author, setAuthor] = useState('');

    const currentId = params.id;

    useEffect(() => {
        if (items.length === 0) {
            dispatch(fetchProducts());
        } else {
            const currentItem = items.find(item => item.id === currentId);
            if (!currentItem) {
                alert(`Produsul cu id-ul ${params.id} pus nu exista. Vei fi redirectionat catre homepage`);
                history.push('/')
            } else {
                setTitle(currentItem.title);
                setPrice(currentItem.price);
                setDescription(currentItem.description);
                setCategory(currentItem.category);
                setAuthor(currentItem.author);
            }
        }
    }, [currentId, items]);

    const editCurrentItem = (e) => {
        e.preventDefault();
        dispatch(editProduct(title, price, description, category, author, currentId));
        history.push('/');
    }

    return (
        <div className="form-container">
            <form>
                <input
                    onChange={e => setTitle(e.target.value)}
                    value={title}
                    type="text"
                    name="title"
                />
                <input
                    onChange={e => setPrice(e.target.value)}
                    value={price}
                    type="text"
                    name="price"
                />
                <input
                    onChange={e => setDescription(e.target.value)}
                    value={description}
                    type="text"
                    name="description"
                />
                <input
                    onChange={e => setCategory(e.target.value)}
                    value={category}
                    type="text"
                    name="category"
                />
                <input
                    onChange={e => setAuthor(e.target.value)}
                    value={author}
                    type="text"
                    name="author"
                />
            
                <input
                    onClick={editCurrentItem}
                    type="submit" 
                    value="Submit" 
                />
            </form>
        </div>
    );
};

export default EditProduct;
