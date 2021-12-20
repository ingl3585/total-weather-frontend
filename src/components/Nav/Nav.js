import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import Logo from '../../images/logo.png';
import Menu from '../../images/menu.png';
import { logout } from '../../actions/auth';
import { connect } from 'react-redux';

const Nav = ({ logout, isAuthenticated }) => {
	const guestLinks = () => (
		<Fragment>
			<Link className='nav-links' to='/sign-in'>
				Login
			</Link>
		</Fragment>
	);
	const authLinks = () => (
		<a className='nav-links' href='#!' onClick={logout}>
			Logout
		</a>
	);
	return (
		<div className='nav-container'>
			<div className='logo-container'>
				<Link to='/home'>
					<img className='logo-pic' src={Logo} alt='logo' />
				</Link>
			</div>
			<div className='nav-links-container'>
				<Link className='nav-links' to='/blogs'>
					Blogs
				</Link>
				<Link className='nav-links' to='/satellite-imagery'>
					Satellite Imagery
				</Link>
				<Link className='nav-links' to='/weather-models'>
					Weather Models
				</Link>
				<Link className='nav-links' to='/forum'>
					Forum
				</Link>
				<Link className='nav-links' to='/about'>
					About
				</Link>
				{isAuthenticated ? authLinks() : guestLinks()}
			</div>
			<div className='menu-container'>
				<img className='menu-pic' src={Menu} alt='menu' />
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Nav);
