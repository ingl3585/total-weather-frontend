import React, { useState, useEffect } from 'react';
import './Homepage.css';
import NavBar from '../Nav/NavBar';
import BeatLoader from 'react-spinners/BeatLoader';

const Homepage = () => {
	const [loading, setLoading] = useState(true);
	const [blog, setBlogs] = useState([]);
	useEffect(() => {
		const Url = 'https://total-weather-backend.herokuapp.com/blogs/';

		const makeApiCall = (Url) => {
			return fetch(Url, {
				headers: {
					'Content-Type': 'application/json',
				},
			})
				.then((response) => response.json())
				.then((data) => {
					setBlogs(data[0]);
					setLoading(false);
				});
		};
		makeApiCall(Url);
	}, []);
	if (!loading) {
		return (
			<div className='homepage-container'>
				<NavBar />
				<div className='homepage-page-container'>
					<div className='homepage-title'>Homepage</div>
					<div className='homepage-blog-container'>
						<div className='homepage-blog-header'>Latest Blog</div>
						<div className='homepage-blog-img-container'>
							<a href='#/blogs'>
								<img
									className='homepage-blog-img'
									src={blog.image}
									alt='blog-img'
								/>
							</a>
						</div>
						<div className='homepage-blog-content-container'>
							<div className='homepage-blog-title'>{blog.title}</div>
							<div>
								<a className='homepage-blog-link' href='#/blogs'>
									Click to view
								</a>
							</div>
						</div>
					</div>
					<hr className='home-hr' />
					<div className='current-imgs-container'>
						<div className='current-warnings-title'>Current Warnings</div>
						<a href='https://www.weather.gov/'>
							<img
								className='current-warnings-img'
								id='us'
								src='//forecast.weather.gov/wwamap/png/US.png'
								useMap='#US_large_imagemap_800_500'
								alt='current-warnings-img'
							/>
						</a>
						<div className='current-surface-title'>
							Current Surface Analysis
						</div>
						<a href='https://www.aviationweather.gov/progchart/sfc'>
							<img
								className='current-surface-img'
								src='http://www.wpc.ncep.noaa.gov/noaa/national_forecast.jpg'
								alt='National Weather Outlook'
								name='national_forecast'
								useMap='#m_national_forecast'
								id='national_forecast'
							/>
						</a>
						<div className='current-satellite-title'>
							Current Satellite Image
						</div>
						<a href='https://www.star.nesdis.noaa.gov/goes/conus.php?sat=G16'>
							<img
								className='current-satellite-img'
								src='https://cdn.star.nesdis.noaa.gov/GOES16/ABI/CONUS/GEOCOLOR/1250x750.jpg'
								alt='current-satellite-img'
							/>
						</a>
						<div className='current-tropical-title'>
							Current Atlantic Tropical Outlook
						</div>
						<a href='https://www.nhc.noaa.gov/'>
							<img
								className='current-tropical-img'
								src='https://www.nhc.noaa.gov/xgtwo/two_atl_2d0.png'
								alt='current-tropical-img'
							/>
						</a>
					</div>
				</div>
			</div>
		);
	} else if (loading) {
		return (
			<div className='homepage-container'>
				<NavBar />
				<div className='blog-loading'>
					<BeatLoader color='#3B9CDE' />
				</div>
			</div>
		);
	}
};

export default Homepage;
