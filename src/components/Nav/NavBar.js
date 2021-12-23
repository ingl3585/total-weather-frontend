import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';
import Logo from '../../images/logo.png';
import './NavBar.css';

const NavBar = () => {
	return (
		<div className='nav-bar'>
			<Link to='/total-weather-frontend/home'>
				<img className='logo-pic' src={Logo} alt='logo' />
			</Link>
			<Navigation />
			<MobileNavigation />
		</div>
	);
};

export default NavBar;
