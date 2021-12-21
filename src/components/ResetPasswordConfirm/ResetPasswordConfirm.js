import React, { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password_confirm } from '../../actions/auth';
import Nav from '../Nav/Nav';
import './ResetPasswordConfirm.css';

const ResetPasswordConfirm = ({ match, reset_password_confirm }) => {
	const [requestSent, setRequestSent] = useState(false);
	// Use state to store email
	const [formData, setFormData] = useState({
		new_password: '',
		re_new_password: '',
	});
	// Destructure
	const { new_password, re_new_password } = formData;

	const { uid, token } = useParams();

	const onChange = (event) => {
		// Set email to input field
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};
	const onSubmit = (event) => {
		event.preventDefault();
		reset_password_confirm(uid, token, new_password, re_new_password);
		setRequestSent(true);
	};
	// Is the user authenticated?
	// Redirect to home page
	if (requestSent) {
		return <Navigate to='/sign-in' />;
	}

	return (
		<div className='password-confirm-container'>
			<Nav />
			<form
				className='password-confirm-form-container'
				onSubmit={(event) => onSubmit(event)}>
				<div className='form-group'>
					<input
						className='form-password'
						type='password'
						placeholder='New Password'
						name='new_password'
						value={new_password}
						onChange={(event) => onChange(event)}
						minLength='6'
						required
					/>
				</div>
				<div className='form-group'>
					<input
						className='form-password'
						type='password'
						placeholder='Confirm New Password'
						name='re_new_password'
						value={re_new_password}
						onChange={(event) => onChange(event)}
						minLength='6'
						required
					/>
				</div>
				<button className='form-password-confirm-btn' type='submit'>
					Reset Password
				</button>
			</form>
		</div>
	);
};

export default connect(null, { reset_password_confirm })(ResetPasswordConfirm);
