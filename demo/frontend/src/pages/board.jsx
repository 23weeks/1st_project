import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Board() {
	console.log("------------------ [start] Board ------------------")
	
	const [data, setData] = useState("");

	const navigate = useNavigate();

	/*
	useEffect(() => {
		fetch('/test/api.do')
			.then(response => response.json())
			.then(data => {
				console.log(data);
				setData(data);
			});
	},[])
	*/
	console.log("------------------- [end] Board -------------------");
	
	return (
		<div className="board-list">
			<div>
			
			</div>
		</div>
	);
}

export default Board;