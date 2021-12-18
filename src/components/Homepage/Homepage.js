import React from 'react';
import './Homepage.css';
import Nav from '../Nav/Nav';
import '../Nav/Nav.css';

const Homepage = () => {
	return (
		<div>
			<Nav />
			<div>
				<div>Homepage</div>
				<div>Current Warnings</div>
				<img
					id='us'
					src='//forecast.weather.gov/wwamap/png/US.png'
					usemap='#US_large_imagemap_800_500'></img>
				<div>Current Surface Analysis</div>
				<img
					src='http://www.wpc.ncep.noaa.gov/noaa/national_forecast.jpg'
					alt='National Weather Outlook'
					name='national_forecast'
					width='515'
					height='412'
					border='0'
					usemap='#m_national_forecast'
					id='national_forecast'></img>
				<div>Current Satellite Image</div>
				<img src='https://cdn.star.nesdis.noaa.gov/GOES16/ABI/CONUS/GEOCOLOR/1250x750.jpg' />
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
