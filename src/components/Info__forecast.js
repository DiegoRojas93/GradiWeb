import React, { Fragment } from 'react';

import './styleComponents/Info__forecast.scss';

const Info__forecast = () => (
	<Fragment>
		<div className="title">
			<h1>3 Days <span>Forecast</span></h1>
		</div>
		<div className="info__forecast-container">
			<section className="box">
				<div className="box__day">
					<div className="box__day-information">
						<div className="image">
							<img src="../../public/images/cloud.png" alt="icon" />
						</div>
						<div className="day">
							<div className="title"><h1>day</h1></div>
							<p>weather</p>
						</div>
					</div>
				</div>
				<div className="box__average-temperature">
					<h1>32° / 23°</h1>
				</div>
			</section>

			<article className="box">
				<div className="box__day">
					<div className="box__day-information">
						<div className="image">
							<img src="../../public/images/cloud.png" alt="icon" />
						</div>
						<div className="day">
							<div className="title"><h1>day</h1></div>
							<p>weather</p>
						</div>
					</div>
				</div>
				<div className="box__average-temperature">
					<h1>32° / 23°</h1>
				</div>
			</article>

			<article className="box">
				<div className="box__day">
					<div className="box__day-information">
						<div className="image">
							<img src="../../public/images/cloud.png" alt="icon" />
						</div>
						<div className="day">
							<div className="title"><h1>saturday</h1></div>
							<p>weather</p>
						</div>
					</div>
				</div>
				<div className="box__average-temperature">
					<h1>32° / 23°</h1>
				</div>
			</article>
		</div>

	</Fragment>
)

export default Info__forecast