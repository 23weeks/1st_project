import React from 'react';

import '../css/base.css';

function Footer() {
	return (
		<div className="footer">
			<h3>리뉴얼 솔데스크</h3>
			<div className="authList">
				<div>상주&nbsp;<a href="https://github.com/23weeks" target="_blank"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" /></a></div>
				<div>예중&nbsp;<a href="https://github.com/yehjungkim" target="_blank"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" /></a></div>
			</div>
		</div>
	);
}

export default Footer;