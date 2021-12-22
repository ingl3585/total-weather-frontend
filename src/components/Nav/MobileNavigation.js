import { useState } from 'react';
import NavLinks from './NavLinks';
import './NavBar.css';
import Menu from '../../images/menu.png';

const MobileNavigation = () => {
	const [open, setOpen] = useState(false);
	return (
		<nav className='mobile-nav'>
			{open && <NavLinks />}
			<img
				className='menu-pic'
				src={Menu}
				onClick={() => setOpen(!open)}
				alt='mobile-nav'
			/>
		</nav>
	);
};

export default MobileNavigation;
