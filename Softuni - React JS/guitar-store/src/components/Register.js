import React, { useEffect } from 'react';
import '../styles/Register.css';
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../Utils/firebase';
import { useNavigate } from 'react-router-dom';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import styledComponents from 'styled-components';
import { validateEmail, validatePassword, validateRepeatPassword } from '../Utils/UserValidator';
import errorParser from '../Utils/errors';

const StyledInput = styledComponents.input`
background-color: ${props => props.hasError ? 'transparent' : 'red'}
`;


function Register() {
	const [email, setEmail] = useState('');
	const [password, setpassword] = useState('');
	const [rePass, setrePass] = useState('');
	const [error, setError] = useState("");

	const navigate = useNavigate();
	const db = getFirestore(app);


	const [isValidEmail, setisValidEmail] = useState('');
	const [isValidPassword, setisValidPassword] = useState('');
	const [isValidRepass, setisValidRepass] = useState('');
	const [isFormValid, setIsFormValid] = useState(false);


	useEffect(() => {
		const isEmailvalid = validateEmail(email);
		setisValidEmail(isEmailvalid);
		const isPasswordValid = validatePassword(password);
		setisValidPassword(isPasswordValid);
		const isRepassValid = validateRepeatPassword(password, rePass);
		setisValidRepass(isRepassValid);


		setIsFormValid(
			isEmailvalid &&
			isPasswordValid &&
			isRepassValid
		);

	}, [email,
		password,
		rePass,
	])


	const handleRegister = (event) => {
		event.preventDefault();

		const auth = getAuth(app);
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				setDoc(doc(db, "Users", userCredential.user.uid), {
					id: userCredential.user.uid,
					username: '',
					email: email,
					profileImg: '',
					posts: [''],
					likes: [''],
					telephone: ''
				})
				const user = userCredential.user;
				console.log(user);
				navigate('/catalog');
			})
			.catch((error) => {
				const errorMessage = error.message;
				setError((errorParser(errorMessage)));
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

			{error ?
				<div className='auth-error'>
					{error}
				</div> :
				null}

			<div className="form-box">
				<h2 className='register-h2'>Register</h2>
				<form onSubmit={handleRegister} id="register" className="input-group" autoComplete='off'>
					<StyledInput hasError={isValidEmail} onChange={handleChangeEmail} type="email" className="input-field" placeholder="Email" required id='email' value={email} />
					<StyledInput hasError={isValidPassword} onChange={handlePassword} type="password" className="input-field" placeholder="min 6 max 10, 1 letter and number" required id='password' value={password} />
					<StyledInput hasError={isValidRepass} onChange={handleRePass} type="password" className="input-field" placeholder="Repeat Password" required id='rePass' value={rePass} />
					<button type="submit"
						className="register-submit-btn"
						disabled={!isFormValid}
					>Register
					</button>
				</form>
			</div>
		</div>
	);
}

export default Register;