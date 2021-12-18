import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import './components/LandingPage/LandingPage.css';
import SignUp from './components/SignUp/SignUp';
import './components/SignUp/SignUp.css';
import SignIn from './components/SignIn/SignIn';
import './components/SignIn/SignIn.css';
import Homepage from './components/Homepage/Homepage';
import './components/Homepage/Homepage.css';
import Blogs from './components/Blogs/Blogs';
import './components/Blogs/Blogs.css';
import SatelliteImagery from './components/SatelliteImagery/SatelliteImagery';
import './components/SatelliteImagery/SatelliteImagery.css';
import WeatherModels from './components/WeatherModels/WeatherModels';
import './components/WeatherModels/WeatherModels.css';
import Forum from './components/Forum/Forum';
import './components/Forum/Forum.css';
import About from './components/About/About';
import './components/About/About.css';

const App = () => {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path='/sign-up' element={<SignUp />} />
				<Route path='/sign-in' element={<SignIn />} />
				<Route path='/home' element={<Homepage />} />
				<Route path='/blogs' element={<Blogs />} />
				<Route path='/satellite-imagery' element={<SatelliteImagery />} />
				<Route path='/weather-models' element={<WeatherModels />} />
				<Route path='/forum' element={<Forum />} />
				<Route path='/about' element={<About />} />
			</Routes>
		</div>
	);
};

export default App;
