import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../../actions/auth';
import './SignUp.css';
import NavBar from '../Nav/NavBar';

const SignUp = ({ signup, isAuthenticated }) => {
	const [accountCreated, setAccountCreated] = useState(false);
	// Use state to store email and password
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		re_password: '',
	});
	// Destructure
	const { email, password, re_password } = formData;

	const onChange = (event) => {
		// Set email or password to input field
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};
	const onSubmit = (event) => {
		event.preventDefault();
		if (password === re_password) {
			// calls the sign up action
			signup(email, password, re_password);
			// toggles the state
			setAccountCreated(true);
		}
	};
	// Redirect to home page if the user authenticated
	if (isAuthenticated) {
		return <Navigate to='/home' />;
	}
	if (accountCreated) {
		return <Navigate to='/sign-in' />;
	}
	return (
		<div className='sign-up-container'>
			<NavBar />
			<form className='sign-up-form' onSubmit={(event) => onSubmit(event)}>
				<div className='sign-up-title'>Sign Up</div>
				<input
					className='sign-up-email'
					type='email'
					placeholder='Email'
					name='email'
					value={email}
					onChange={(event) => onChange(event)}
					required
				/>
				<input
					className='sign-up-password'
					type='password'
					placeholder='Password'
					name='password'
					value={password}
					onChange={(event) => onChange(event)}
					minLength='6'
					required
				/>
				<input
					className='sign-up-conf-password'
					type='password'
					placeholder='Confirm Password'
					name='re_password'
					value={re_password}
					onChange={(event) => onChange(event)}
					minLength='6'
					required
				/>
				<div className='terms-title'>
					I agree with <a href='#'>Terms</a> and <a href='#'>Privacy</a>
				</div>
				<button className='sign-up-form-btn'>Sign Up</button>
				<div className='already-have-account-title'>
					Already have an account?
				</div>
				<a className='log-in-link' href='/sign-in'>
					Sign in
				</a>
			</form>
		</div>
	);
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { signup })(SignUp);
