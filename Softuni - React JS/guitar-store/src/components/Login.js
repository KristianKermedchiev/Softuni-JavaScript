import '../styles/Login.css';

function Login() {
    return (
      <section>
        <div class="form-box">
            <div class="form-value">
                <form action="">
                    <h2>Login</h2>
                    <div class="inputbox">
                        <ion-icon name="mail-outline"></ion-icon>
                        <input type="text" id="email" name="email" required />
                        <label for="email">Email</label>
                      </div>
                      
                    <div class="inputbox">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="password" required />
                        <label for="">Password</label>
                    </div>
                    <button>Log in</button>
                    <div class="register">
                        <p>Don't have an account? <a href="/register">Click here</a></p>
                        <p>Forgot password? <a href="/">Click here</a></p>
                    </div>
                </form>
            </div>
        </div>
    </section>
    );
  }
  
  export default Login;