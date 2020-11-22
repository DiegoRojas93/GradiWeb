import React from 'react';

import './styleComponents/Info__others.scss'

import images1 from '../../public/images/1.jpg';
import images2 from '../../public/images/2.jpg';
import images3 from '../../public/images/3.jpg';
import museum from '../../public/images/museum.jpg';
import rosa from '../../public/images/rosa.jpg';

const Info__others = () => (
	<section className="container__info">
		<article className="reviews">
			<p>+ top Reviews</p>
			<section className="users">
				<div className="figure"><img src={images1} alt="user1" /></div>
				<div className="figure"><img src={images2} alt="user2" /></div>
				<div className="figure"><img src={images3} alt="user3" /></div>
				<div className="figure"><span>G+</span></div>
			</section>
		</article>

		<article className="museum">
			<article className="box__left">
				<div className="icon">
					<i className="fas fa-map-marker-alt"></i>
				</div>
				<div className="text">
					<span>Art science</span>
					<span>Museum</span>
				</div>
			</article>
			<img src={museum} alt="museum" />
		</article>

		<article className="images">
			<article className="box__left">
				<div className="icon">
					<i className="fas fa-map-marker-alt"></i>
				</div>
				<div className="text">
					<span>Foutain</span>
					<span>of healt</span>
				</div>
			</article>
			<img src={rosa} alt="rosa" />
			<div className="box"><h1>+</h1></div>
		</article>
	</section>
)

export default Info__others;