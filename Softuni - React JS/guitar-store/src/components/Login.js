import '../styles/Login.css';
import styled from 'styled-components';


// function Login() {
//     return (
//         <div className="login">
//         <div className="login-form-box">
//             <h2>Login</h2>
//             <form id="login" className="input-group" autoComplete='off'>
//                 <input type="text" className="input-field" placeholder="email" required />
//                 <input type="password" className="input-field" placeholder="Enter Password" required />
//                 <button type="submit" className="submit-btn">Login</button>
//             </form>
//         </div>
//     </div>
//     );
//   }
  
//   export default Login;

const Wrapper = styled.div`
    background-color: #fff;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-height: 100vh;
    // Shows vertical scrollbar only when needed
    overflow-y: auto;
    // Dont shift content to side when vertical scrollbar shows/hides
    margin-right: calc(-1 * (100vw - 100%)) !important;
  `;
  
  const Header = styled.div`

    border: 2px solid #2a8ee6;
    width: 100%;
    height: 20vh;
  `;
  
  // Vsichki page-ove
  const Content = styled.div`
    border: 2px solid red;
    width: 100%;
    height:60vh;
  `;
  
  const Footer = styled.div`
    border: 2px solid green;
    width: 100%;
    flex-grow: 1;
  `;

  function Login (){
    
    return (
        <Wrapper>
            <Header/>
            <Content/>
            <Footer/>
        </Wrapper>
        
    )
  }
  export default Login;
