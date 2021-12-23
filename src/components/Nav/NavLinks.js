import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import { logout } from '../../actions/auth';
import { connect } from 'react-redux';
import './NavBar.css';

const NavLinks = ({ logout, isAuthenticated }) => {
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
		<div>
			<nav className='mobile-nav-links-container'>
				<Link className='nav-links-homepage' to='/home'>
					Home
				</Link>
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
			</nav>
			<nav className='desktop-nav-links-container'>
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
			</nav>
		</div>
	);
};
const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(NavLinks);
