const Login = () => {
    return (
        <div className="form-container">
            <form>
                <input
                    type="text"
                    name="username"
                />
                <input
                    type="password"
                    name="password"
                />
            
                <input 
                    type="button" 
                    value="Submit" 
                />
            </form>
        </div>
    );
}

export default Login;