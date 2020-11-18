import React, { Fragment } from 'react';

import './App.scss';

import Info from '../components/Info.js';

const App = () => (
	<Fragment>
		<section className="container">
			<article className="banner">
				<img src="../../public/images/banner__image.jpg" alt="banner"/>
			</article>
			<Info/>
			<section className="main__information">
				<article className="main__information-icon">

					<img src="../../public/images/cloud.png" alt="icon"/>
				</article>
				<article className="main__information-temperature">
					<h1>Bogotá C°</h1>
				</article>
			</section>
		</section>

	</Fragment>
)

export default App