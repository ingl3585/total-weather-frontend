import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password } from '../../actions/auth';
import NavBar from '../Nav/NavBar';
import './ResetPassword.css';

const ResetPassword = ({ reset_password }) => {
	const [requestSent, setRequestSent] = useState(false);
	// Use state to store email
	const [formData, setFormData] = useState({
		email: '',
	});
	// Destructure
	const { email } = formData;

	const onChange = (event) => {
		// Set email to input field
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};
	const onSubmit = (event) => {
		event.preventDefault();
		reset_password(email);
		setRequestSent(true);
	};
	// Is the user authenticated?
	// Redirect to home page
	if (requestSent) {
		return <Navigate to='/sign-in' />;
	}

	return (
		<div className='sign-in-container'>
			<NavBar />
			<form
				className='sign-in-form-container'
				onSubmit={(event) => onSubmit(event)}>
				<div className='reset-form-title'>Change Password:</div>
				<input
					className='form-email'
					type='email'
					name='email'
					value={email}
					placeholder='Email'
					onChange={(event) => onChange(event)}
					required
				/>
				<button className='form-sign-in-btn' type='submit'>
					Reset Password
				</button>
			</form>
		</div>
	);
};

export default connect(null, { reset_password })(ResetPassword);
