import React, { useState, useEffect } from 'react';
import './Blogs.css';
import NavBar from '../Nav/NavBar';
import BeatLoader from 'react-spinners/BeatLoader';

const Blogs = () => {
	const [blogs, setBlogs] = useState([]);
	useEffect(() => {
		const Url = 'https://total-weather-backend.herokuapp.com/blogs/';

		const makeApiCall = (Url) => {
			return fetch(Url, {
				headers: {
					'Content-Type': 'application/json',
				},
			})
				.then((response) => response.json())
				.then((data) => setBlogs(data));
		};
		makeApiCall(Url);
	}, []);

	let blogArray = blogs.map((blog) => {
		return (
			<div>
				<ul>
					<li className='blog-title'>{blog.title}</li>
					<li className='blog-image-container'>
						<img className='blog-image' src={blog.image} alt='blog-img' />
					</li>
					<li className='blog-content'>{blog.content}</li>
				</ul>
				<hr />
			</div>
		);
	});

	if (blogs) {
		return (
			<div>
				<NavBar />
				<div className='blog-page-container'>
					<div className='blog-page-title'>Blogs</div>
					<div className='blog-container'>
						<div className='blogs-container'>{blogArray}</div>
					</div>
				</div>
			</div>
		);
	} else if (!blogs) {
		return (
			<div className='homepage-container'>
				<NavBar />
				<div className='blogs-loading'>
					<BeatLoader color='#3B9CDE' />
				</div>
			</div>
		);
	}
};

export default Blogs;
