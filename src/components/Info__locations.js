import React from 'REACT'

import './styleComponents/Info__locations.scss'

const Info__locations = () => (
	<section className="info__locations-container">
		<article className="box" id="francia">
			<div className="data__important">
				<section className="icon">
					<img src="../../public/images/cloud.png" alt="icon" />
				</section>
				<section className="general">
					<article className="title"><h1>12 C°</h1></article>
					<article className="country">
						<h2>Paris</h2>
						<p>Francia</p>
					</article>
				</section>
			</div>
			<div className="data">
				<span>humedad</span>
				<span>viento</span>
				<span>direccion</span>
			</div>

		</article>

		<article className="box">
			<div className="data__important">
				<section className="icon">
					<img src="../../public/images/cloud.png" alt="icon" />
				</section>
				<section className="general">
					<article className="title"><h1>12 C°</h1></article>
					<article className="country">
						<h2>Paris</h2>
						<p>Francia</p>
					</article>
				</section>
			</div>
			<div className="data">
				<span>humedad</span>
				<span>viento</span>
				<span>direccion</span>
			</div>
		</article>

		<article className="box">
			<img src="../../public/images/Location.jpg" alt="Location" />
		</article>
	</section>
)

export default Info__locations