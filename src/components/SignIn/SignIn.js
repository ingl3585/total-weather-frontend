import React from 'react';
import './SignIn.css';
import Nav from '../Nav/Nav';

const SignIn = () => {
	return (
		<div className='sign-in-container'>
			<Nav />
			<div className='sign-in-form-container'>
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
				<div className='sign-up-link'>Don't have an account?</div>
				<div>
					<a href='/sign-up'>Sign up for free</a>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
