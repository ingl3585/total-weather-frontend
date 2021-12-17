import React from 'react';
import './SignUp.css';
import Nav from '../Nav/Nav';

const SignUp = () => {
	return (
		<div className='sign-up-container'>
			<Nav />
			<div className='sign-up-form'>
				<div className='sign-up-title'>Sign Up</div>
				<input className='sign-up-email' type='email' placeholder='Email' />
				<input
					className='sign-up-password'
					type='password'
					placeholder='Password'
				/>
				<input
					className='sign-up-conf-password'
					type='password'
					placeholder='Confirm Password'
				/>
				<div className='terms-title'>
					I agree with <a href='#'>Terms</a> and <a href='#'>Privacy</a>
				</div>
				<button className='sign-up-form-btn'>Sign Up</button>
				<div className='already-have-account-title'>
					Already have an account?
				</div>
				<a className='log-in-link' href='/'>
					Log in
				</a>
			</div>
		</div>
	);
};

export default SignUp;
