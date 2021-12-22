import React, { useState, useEffect } from 'react';
import './Blogs.css';
import NavBar from '../Nav/NavBar';

const Blogs = () => {
	const [blogs, setBlogs] = useState([]);
	useEffect(() => {
		const Url = 'http://localhost:8000/blogs/';

		const makeApiCall = (Url) => {
			return fetch(Url, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `JWT ${localStorage.getItem('access')}`,
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
					<li className='blog-author'>By: {blog.author}</li>
					<li className='blog-created-at'>Created at: {blog.created_at}</li>
					<li className='blog-content'>{blog.content}</li>
				</ul>
				<hr />
			</div>
		);
	});

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
};

export default Blogs;
