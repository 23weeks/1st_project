import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import URL from 'constants/url';

function Header() {
	console.log("------------------ [start] Header ------------------")
	
	const [data, setData] = useState("");
	const [name1, setName1] = useState("");

	const navigate = useNavigate();

	const logInHandler = () => {
		console.log("navigate =>> login");
		navigate(URL.LOGIN);
	}
	
	const logOutHandler = () => {
		console.log("navigate =>> main");
		navigate(URL.MAIN);
	}
	/*
	useEffect(() => {
		fetch('/test/api.do')
			.then(response => response.json())
			.then(data => {
				console.log(data);
				setData(data);
				setName1(data.name1); // 임시
			});
	},[])
	*/
	console.log("------------------- [end] Header -------------------");
	
	return (
		<div className="header">
			<div className="header-content">
				{/*로그인 정보가 없을 때*/}
				{name1 &&
					<>
					<button className="btn" onClick={logInHandler}>로그인</button>
					</>
				}
				
				{/*로그인 정보가 있을 때*/}
				{!name1 &&
					<>
					<span className="userName">이름이 들어갈 자리</span>
					<button className="btn" onClick={logOutHandler}>로그아웃</button>
					</>
				}
			</div>
		</div>
	);
}

export default Header;