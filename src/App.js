import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './hocs/Layout';
import './App.css';
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
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
	return (
		<div className='App'>
			<Provider store={store}>
				<Layout>
					<Routes>
						<Route path='/total-weather-frontend' element={<LandingPage />} />
						<Route
							path='/total-weather-frontend/sign-up'
							element={<SignUp />}
						/>
						<Route
							path='/total-weather-frontend/sign-in'
							element={<SignIn />}
						/>
						<Route
							path='/total-weather-frontend/reset-password'
							element={<ResetPassword />}
						/>
						<Route
							path='/total-weather-frontend/password/reset/confirm/:uid/:token'
							element={<ResetPasswordConfirm />}
						/>
						<Route
							path='/total-weather-frontend/activate/:uid/:token'
							element={<Activate />}
						/>
						<Route path='/total-weather-frontend/home' element={<Homepage />} />
						<Route path='/total-weather-frontend/blogs' element={<Blogs />} />
						<Route
							path='/total-weather-frontend/satellite-imagery'
							element={<SatelliteImagery />}
						/>
						<Route
							path='/total-weather-frontend/weather-models'
							element={<WeatherModels />}
						/>
						<Route path='/total-weather-frontend/forum' element={<Forum />} />
						<Route path='/total-weather-frontend/about' element={<About />} />
					</Routes>
				</Layout>
			</Provider>
		</div>
	);
};

export default App;
