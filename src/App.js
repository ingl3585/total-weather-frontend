import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Layout from './hocs/Layout';
import LandingPage from './components/LandingPage/LandingPage';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import ResetPassword from './components/ResetPassword/ResetPassword';
import ResetPasswordConfirm from './components/ResetPasswordConfirm/ResetPasswordConfirm';
import Activate from './components/Activate/Activate';
import Homepage from './components/Homepage/Homepage';
import Blogs from './components/Blogs/Blogs';
import SatelliteImagery from './components/SatelliteImagery/SatelliteImagery';
import WeatherModels from './components/WeatherModels/WeatherModels';
import Forum from './components/Forum/Forum';
import About from './components/About/About';
import './App.css';

const App = () => {
	return (
		<div className='App'>
			<Provider store={store}>
				<Layout>
					<Routes>
						<Route path='/' element={<LandingPage />} />
						<Route path='/sign-up' element={<SignUp />} />
						<Route path='/sign-in' element={<SignIn />} />
						<Route path='/reset-password' element={<ResetPassword />} />
						<Route
							path='/password/reset/confirm/:uid/:token'
							element={<ResetPasswordConfirm />}
						/>
						<Route path='/activate/:uid/:token' element={<Activate />} />
						<Route path='/home' element={<Homepage />} />
						<Route path='/blogs' element={<Blogs />} />
						<Route path='/satellite-imagery' element={<SatelliteImagery />} />
						<Route path='/weather-models' element={<WeatherModels />} />
						<Route path='/forum' element={<Forum />} />
						<Route path='/about' element={<About />} />
					</Routes>
				</Layout>
			</Provider>
		</div>
	);
};

export default App;
