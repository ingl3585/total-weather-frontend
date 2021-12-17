import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import Logo from '../../images/logo.png';
import Menu from '../../images/menu.png';

const Nav = () => {
	return (
		<div className='nav-container'>
			<div className='logo-container'>
				<Link to='/home'>
					<img className='logo-pic' src={Logo} alt='logo' />
				</Link>
			</div>
			<div className='menu-container'>
				<img className='menu-pic' src={Menu} alt='menu' />
			</div>
		</div>
	);
};

export default Nav;
