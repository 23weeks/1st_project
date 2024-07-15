import React, { useState, useEffect } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';

const RootRoutes = () => {
	
	const [data, setData] = useState("");

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
	return (
		<>
		<Header />
		<Routes>
			<Route path={URL.MAIN} element={}></Route>
		</Routes>
		<Footer />
		</>
	)
}

export default Board;