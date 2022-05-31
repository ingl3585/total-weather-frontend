import React, { useState } from 'react';
import './About.css';
import NavBar from '../Nav/NavBar';

const About = () => {
	const [data, setData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		message: '',
	});

	const { firstName, lastName, email, message } = data;

	const handleChange = (event) => {
		setData({ ...data, [event.target.name]: event.target.value });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = await fetch(
				'https://v1.nocodeapi.com/ingl3585/google_sheets/CoYpzKbitMpZbKry?tabId=Sheet1',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify([
						[firstName, lastName, email, message, new Date().toLocaleString()],
					]),
				}
			);
			await response.json();
			setData({ ...data, firstName: '', lastName: '', email: '', message: '' });
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className='contact-container'>
			<NavBar />
			<div className='about-me-container'>
				<div className='about-me-title'>About Me</div>
				<div className='about-me-content'>
					I'm a meteorologist turned full-stack developer based in Denver, CO.
					Interested in working together or maybe just want to stop by and say
					hello? Send a me a message below!
				</div>
			</div>
			<form className='contact-form-container' onSubmit={handleSubmit}>
				<div className='contact-title'>Contact Me</div>
				<input
					className='first-name-form'
					type='text'
					name='firstName'
					value={firstName}
					onChange={handleChange}
					placeholder='First Name'
				/>
				<input
					className='last-name-form'
					type='text'
					name='lastName'
					value={lastName}
					onChange={handleChange}
					placeholder='Last Name'
				/>
				<input
					className='email-form'
					type='text'
					name='email'
					value={email}
					onChange={handleChange}
					placeholder='Email'
				/>
				<input
					className='message-form'
					type='text'
					name='message'
					value={message}
					onChange={handleChange}
					placeholder='Message'
				/>
				<button type='submit' className='contact-me-btn'>
					Submit
				</button>
			</form>
		</div>
	);
};

export default About;
