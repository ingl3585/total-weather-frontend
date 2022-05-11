import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import './SignIn.css';
import NavBar from '../Nav/NavBar';

const SignIn = ({ login, isAuthenticated }) => {
	// Use state to store email and password
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});
	// Destructure
	const { email, password } = formData;

	const onChange = (event) => {
		// Set email or password to input field
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};
	const onSubmit = (event) => {
		event.preventDefault();
		login(email, password);
	};
	// Is the user authenticated?
	// Redirect to home page
	if (isAuthenticated) {
		return <Navigate to='/home' />;
	} else if (!isAuthenticated) {
		alert(
			'Email and password combination did match any records. Please try again.'
		);
	}

	return (
		<div className='sign-in-container'>
			<NavBar />
			<form
				className='sign-in-form-container'
				onSubmit={(event) => onSubmit(event)}>
				<div className='form-title'>Sign In</div>
				<input
					className='form-email'
					type='email'
					name='email'
					value={email}
					placeholder='Email'
					onChange={(event) => onChange(event)}
					required
				/>
				<input
					className='form-password'
					type='password'
					name='password'
					value={password}
					placeholder='Password'
					onChange={(event) => onChange(event)}
					minLength='6'
					required></input>
				<a className='forgot-password-link' href='#/reset-password'>
					Forgot Password?
				</a>
				<button className='form-sign-in-btn' type='submit'>
					Sign In
				</button>
				<div className='sign-up-link'>Don't have an account?</div>
				<div>
					<a href='#/sign-up'>Sign up for free</a>
				</div>
			</form>
		</div>
	);
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(SignIn);
