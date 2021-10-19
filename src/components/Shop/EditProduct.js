const EditProduct = (props) => {
    return (
        <div className="form-container">
            <form>
                <input
                    type="text"
                    name="title"
                />
                <input
                    type="text"
                    name="price"
                />
                <input
                    type="text"
                    name="description"
                />
                <input
                    type="text"
                    name="category"
                />
                <input
                    type="text"
                    name="author"
                />
            
                <input 
                    type="submit" 
                    value="Submit" 
                />
            </form>
        </div>
    );
};

export default EditProduct;
