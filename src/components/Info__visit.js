import React, {Fragment} from 'react';

import './styleComponents/Info__visit.scss';
import singopore from '../../public/images/singopore.jpg'

const Info__visit = () => (
	<Fragment>
		<div className="title">
			<h1>Place to <span>Visit</span></h1>
		</div>
		<div className="image">
			<article className="box__left">
				<div className="icon">
					<i className="fas fa-map-marker-alt"></i>
				</div>
				<div className="text">
					<span>Arab street</span>
					<span>singapure</span>
				</div>
			</article>
			<img src={singopore} alt="singopore"/>
		</div>
	</Fragment>
)

export default Info__visit;