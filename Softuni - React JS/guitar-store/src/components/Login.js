import '../styles/Login.css';

function Login() {
    return (
        <div className="hero">
        <div className="login-form-box">
            <h2>Login</h2>
            <form id="login" className="input-group" autoComplete='off'>
                <input type="text" className="input-field" placeholder="User Id" required />
                <input type="password" className="input-field" placeholder="Enter Password" required />
                <button type="submit" className="submit-btn">Login</button>
            </form>
        </div>
    </div>
    );
  }
  
  export default Login;