import React from 'react';
import '../styles/Register.css';

function Register() {
	return (
		<div className="hero">
			<div className="form-box">
				<h2>Register</h2>
				<form id="register" className="input-group" autoComplete='off'>
					<input type="text" className="input-field" placeholder="User Id" required />
					<input type="email" className="input-field" placeholder="Email" required />
					<input type="password" className="input-field" placeholder="Enter Password" required />
					<input type="password" className="input-field" placeholder="Repeat Password" required />
					<button type="submit" className="submit-btn">Register</button>
				</form>
			</div>
		</div>
	);
}

export default Register;