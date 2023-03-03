import React from 'react';
import '../styles/Register.css';
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../Utils/firebase';


function Register() {
	const [ email, setEmail ] = useState('');
	const [ password, setpassword ] = useState('');
	const [ rePass, setrePass ] = useState('');

	const handleRegister = (event) => {
		event.preventDefault();
   
		const auth = getAuth(app);
		createUserWithEmailAndPassword(auth, email, password)
  		.then((userCredential) => {
    	// Signed in 
    	const user = userCredential.user;
    	console.log(user);
 		 })
  		.catch((error) => {
			  const errorCode = error.code;
			  const errorMessage = error.message;
			  console.log(errorCode);
			  console.log(errorMessage);
    		// ..
  		});

	};
	const handleChangeEmail = (e) => {
		setEmail(e.target.value);
	};
	const handlePassword = (e) => {
		setpassword(e.target.value);
	};
	const handleRePass = (e) => {
		setrePass(e.target.value);
	};

	


	return (
		<div className="register">
			<div className="form-box">
				{/* {error ? <div>} */}
				<h2>Register</h2>
				<form onSubmit={handleRegister} id="register" className="input-group" autoComplete='off'>
					<input onChange={handleChangeEmail} type="email" className="input-field" placeholder="Email" required id='email' value={email}/>
					<input onChange={handlePassword} type="password" className="input-field" placeholder="Enter Password" required id='password' value={password}/>
					<input onChange={handleRePass} type="password" className="input-field" placeholder="Repeat Password" required id='rePass'value={rePass}/>
					<button type="submit" className="submit-btn">Register</button>
				</form>
			</div>
		</div>
	);
}

export default Register;