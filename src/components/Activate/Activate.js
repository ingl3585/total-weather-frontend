import React, { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { verify } from '../../actions/auth';
import './Activate.css';
import Nav from '../Nav/Nav';

const Activate = ({ verify }) => {
	const [verified, setVerified] = useState(false);
	const { uid, token } = useParams();
	const verify_account = (event) => {
		verify(uid, token);
		setVerified(true);
	};
	// Is the user authenticated?
	// Redirect to home page
	if (verified) {
		return <Navigate to='/home' />;
	}

	return (
		<div className='activate-container'>
			<Nav />
			<div>
				<h1>Verify your account:</h1>
				<button onClick={verify_account} type='button'>
					Verify
				</button>
			</div>
		</div>
	);
};

export default connect(null, { verify })(Activate);
