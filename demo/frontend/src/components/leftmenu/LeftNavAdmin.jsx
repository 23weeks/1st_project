import React from 'react';
import { NavLink } from 'react-router-dom';
import URL from 'constants/url';

function LeftNavAdmin() {

	return (
		<div className="nav">
			<div className="inner">
				<h2>사이트 관리</h2>
				<ul className="menu4">
					<li><NavLink to={URL.ABOUT}>게시판생성관리</NavLink></li>
					<li><NavLink to={URL.ABOUT}>게시판사용관리</NavLink></li>
					<li><NavLink to={URL.ABOUT}>QNA관리</NavLink></li>
					<li><NavLink to={URL.ABOUT}>FAQ관리</NavLink></li>
					<li><NavLink to={URL.ABOUT}>사이트관리자 암호변경</NavLink></li>
				</ul>
			</div>
		</div>
	);
}

export default LeftNavAdmin;