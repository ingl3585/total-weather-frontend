import axios from 'axios';

// import states

import {
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	USER_LOADED_SUCCESS,
	USER_LOADED_FAIL,
	AUTHENTICATED_SUCCESS,
	AUTHENTICATED_FAIL,
	PASSWORD_RESET_SUCCESS,
	PASSWORD_RESET_FAIL,
	PASSWORD_RESET_CONFIRM_SUCCESS,
	PASSWORD_RESET_CONFIRM_FAIL,
	SIGNUP_SUCCESS,
	SIGNUP_FAIL,
	ACTIVATION_SUCCESS,
	ACTIVATION_FAIL,
	LOGOUT,
} from './types';

function getCookie(name) {
	let cookieValue = null;
	if (document.cookie && document.cookie !== '') {
		const cookies = document.cookie.split(';');
		for (let i = 0; i < cookies.length; i++) {
			const cookie = cookies[i].trim();
			// Does this cookie string begin with the name we want?
			if (cookie.substring(0, name.length + 1) === name + '=') {
				cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
				break;
			}
		}
	}
	return cookieValue;
}
const csrftoken = getCookie('csrftoken');

export const checkAuthenticated = () => async (dispatch) => {
	if (localStorage.getItem('access')) {
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		};
		const body = JSON.stringify({ token: localStorage.getItem('access') });
		try {
			const response = await axios.post(
				`${process.env.REACT_APP_API_URL}/auth/jwt/verify/`,
				body,
				config
			);
			if (response.data.code !== 'token_not_valid') {
				dispatch({
					type: AUTHENTICATED_SUCCESS,
				});
			}
		} catch (err) {
			dispatch({
				type: AUTHENTICATED_FAIL,
			});
		}
	} else {
		dispatch({
			type: AUTHENTICATED_FAIL,
		});
	}
};

// load user function
export const load_user = () => async (dispatch) => {
	if (localStorage.getItem('access')) {
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `JWT ${localStorage.getItem('access')}`,
				Accept: 'application/json',
			},
		};
		try {
			const response = await axios.get(
				`${process.env.REACT_APP_API_URL}/auth/users/me/`,
				config
			);
			dispatch({
				type: USER_LOADED_SUCCESS,
				payload: response.data,
			});
		} catch (err) {
			dispatch({
				type: USER_LOADED_FAIL,
			});
		}
	} else {
		dispatch({
			type: USER_LOADED_FAIL,
		});
	}
};

// login function
export const login = (email, password) => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
			'X-CSRFToken': csrftoken,
		},
	};
	const body = JSON.stringify({ email, password });
	try {
		const response = await axios.post(
			`${process.env.REACT_APP_API_URL}/auth/jwt/create/`,
			body,
			config
		);
		dispatch({
			type: LOGIN_SUCCESS,
			payload: response.data,
		});
		dispatch(load_user());
	} catch (err) {
		dispatch({
			type: LOGIN_FAIL,
		});
	}
};

// sign up function
// pass in email, password, and password confirmation
export const signup = (email, password, re_password) => async (dispatch) => {
	// pass in headers... csrf token is a secret user specific token for security purposes. harder for other sites to steal your data essentially
	const config = {
		headers: {
			'Content-Type': 'application/json',
			'X-CSRFToken': csrftoken,
		},
	};
	// pass in the JSON data
	const body = JSON.stringify({ email, password, re_password });
	try {
		// post request to sign up users with the header and body data
		const response = await axios.post(
			`${process.env.REACT_APP_API_URL}/auth/users/`,
			body,
			config
		);
		// update the state with sign up success if successful. payload holds the actual data in the object
		dispatch({
			type: SIGNUP_SUCCESS,
			payload: response.data,
		});
	} catch (err) {
		// or sign up fail. no payload since sign up action failed
		dispatch({
			type: SIGNUP_FAIL,
		});
	}
};

export const verify = (uid, token) => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
			'X-CSRFToken': csrftoken,
		},
	};
	const body = JSON.stringify({ uid, token });
	try {
		await axios.post(
			`${process.env.REACT_APP_API_URL}/auth/users/activation/`,
			body,
			config
		);
		dispatch({
			type: ACTIVATION_SUCCESS,
		});
	} catch (err) {
		dispatch({
			type: ACTIVATION_FAIL,
		});
	}
};

export const reset_password = (email) => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};
	const body = JSON.stringify({ email });
	try {
		await axios.post(
			`${process.env.REACT_APP_API_URL}/auth/users/reset_password/`,
			body,
			config
		);
		dispatch({
			type: PASSWORD_RESET_SUCCESS,
		});
	} catch (err) {
		dispatch({
			type: PASSWORD_RESET_FAIL,
		});
	}
};

export const reset_password_confirm =
	(uid, token, new_password, re_new_password) => async (dispatch) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		const body = JSON.stringify({ uid, token, new_password, re_new_password });
		try {
			await axios.post(
				`${process.env.REACT_APP_API_URL}/auth/users/reset_password_confirm/`,
				body,
				config
			);
			dispatch({
				type: PASSWORD_RESET_CONFIRM_SUCCESS,
			});
		} catch (err) {
			dispatch({
				type: PASSWORD_RESET_CONFIRM_FAIL,
			});
		}
	};

export const logout = () => (dispatch) => {
	dispatch({
		type: LOGOUT,
	});
};
