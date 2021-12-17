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
			<div className='landing-page-btns'>
				<a href='/sign-in'>
					<button className='sign-in-btn'>Sign In</button>
				</a>
				<a href='/sign-up'>
					<button className='sign-up-btn'>Sign Up</button>
				</a>
			</div>
		</div>
	);
};

export default LandingPage;
