import React from 'react';
import { NavLink } from 'react-router-dom';
import URL from 'constants/url';

function LeftNavAbout() {

	return (
		<div className="nav">
			<div className="inner">
				<h2>사이트 소개</h2>
				<ul className="menu4">
					<li><NavLink to={URL.ABOUT}>소개</NavLink></li>
					<li><NavLink to={URL.ABOUT}>사용기술</NavLink></li>
				</ul>
			</div>
		</div>
	);
}

export default LeftNavAbout;