import React, { useState, useEffect } from 'react';
import './Homepage.css';
import NavBar from '../Nav/NavBar';

const Homepage = () => {
	const [blog, setBlogs] = useState([]);
	useEffect(() => {
		const Url = 'http://localhost:8000/blogs/';

		const makeApiCall = (Url) => {
			return fetch(Url, {
				headers: {
					'Content-Type': 'application/json',
				},
			})
				.then((response) => response.json())
				.then((data) => setBlogs(data[0]));
		};
		makeApiCall(Url);
	}, []);
	return (
		<div className='homepage-container'>
			<NavBar />
			<div className='homepage-page-container'>
				<div className='homepage-title'>Home</div>
				<div className='homepage-blog-container'>
					<div className='homepage-blog-header'>Latest Blog</div>
					<div className='homepage-blog-img-container'>
						<img
							className='homepage-blog-img'
							src={blog.image}
							alt='blog-img'
						/>
					</div>
					<div className='homepage-blog-content-container'>
						<div className='homepage-blog-title'>{blog.title}</div>
						<div className='homepage-blog-author'>Author: {blog.author}</div>
						<div className='homepage-blog-created-at'>
							Created at: {blog.created_at}
						</div>
						<div className='homepage-blog-updated-at'>
							Updated at: {blog.updated_at}
						</div>
						<div>
							<a className='homepage-blog-link' href='/blogs'>
								Click to view
							</a>
						</div>
					</div>
				</div>
				<hr className='home-hr' />
				<div className='current-warnings-title'>Current Warnings</div>
				<img
					className='current-warnings-img'
					id='us'
					src='//forecast.weather.gov/wwamap/png/US.png'
					usemap='#US_large_imagemap_800_500'
					alt='current-warnings-img'
				/>
				<div className='current-surface-title'>Current Surface Analysis</div>
				<img
					className='current-surface-img'
					src='http://www.wpc.ncep.noaa.gov/noaa/national_forecast.jpg'
					alt='National Weather Outlook'
					name='national_forecast'
					usemap='#m_national_forecast'
					id='national_forecast'
				/>
				<div className='current-satellite-title'>Current Satellite Image</div>
				<img
					className='current-satellite-img'
					src='https://cdn.star.nesdis.noaa.gov/GOES16/ABI/CONUS/GEOCOLOR/1250x750.jpg'
					alt='current-satellite-img'
				/>
			</div>
		</div>
	);
};

export default Homepage;

<img
	border='0'
	width='1024'
	height='768'
	src='http://mag.ncep.noaa.gov/data/gfs/12/gfs_namer_012_precip_p06.gif'></img>;
