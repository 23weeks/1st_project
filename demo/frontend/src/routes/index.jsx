import React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';

//COMMON
import Header from 'components/Header';
import Footer from 'components/Footer';

const RootRoutes = () => {
	
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

export default RootRoutes;