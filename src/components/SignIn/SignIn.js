import React from 'react';
import './SignIn.css';

const SignIn = () => {
	return (
		<form>
			<div className='form-title'>Sign In</div>
			<input className='form-email' type='email' placeholder='Email'></input>
			<input
				className='form-password'
				type='password'
				placeholder='Password'></input>
			<a className='forgot-password-link' href='#'>
				Forgot Password?
			</a>
			<button type='submit' className='form-sign-in-btn'>
				Sign In
			</button>
			<div className='sign-up-link'>
				Don't have an account? <a href='#'>Sign up for free</a>
			</div>
		</form>
	);
};

export default SignIn;
