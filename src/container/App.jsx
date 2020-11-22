import React from 'react';

import cloud from '../../public/images/cloud.png';
import banner from '../../public/images/banner__image.jpg';

import './App.scss';

import Info from '../components/Info.js';

const App = () => (
	<section className="container">
		<article className="banner">
			<img src={banner} alt="banner"/>
		</article>
		<Info/>

		<section className="main__information">
			<article className="main__information-icon">

				<img src={cloud} alt="icon"/>
			</article>
			<article className="main__information-temperature">
				<h1>30 C°</h1>
			</article>
		</section>
	</section>
)

export default App