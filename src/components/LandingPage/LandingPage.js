import React from 'react';
import './LandingPage.css';
import Nav from '../Nav/Nav';
import '../Nav/Nav.css';

const LandingPage = () => {
	return (
		<div className='landing-page-container'>
			<Nav />
			<div className='word-total'>Total</div>
			<div className='word-weather'>Weather</div>
			<form>
				<div className='tab-desk-form'>
					<div className='form-title'>Sign In</div>
					<input
						className='form-email'
						type='email'
						placeholder='Email'></input>
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
					<div>
						<div className='sign-up-link'>Don't have an account?</div>
						<a href='#'>Sign up for free</a>
					</div>
				</div>
				<div className='landing-page-btns'>
					<a href='/sign-in'>
						<button className='sign-in-btn'>Sign In</button>
					</a>
					<a href='/sign-up'>
						<button className='sign-up-btn'>Sign Up</button>
					</a>
				</div>
			</form>
		</div>
	);
};

export default LandingPage;
