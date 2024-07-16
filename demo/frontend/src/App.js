import React from 'react';
import './App.css';
import RootRoutes from './routes';

function App() {
	
	return (
		<div className="wrap">
			<React.StrictMode>
				<RootRoutes />
			</React.StrictMode>
		</div>
	);
}

export default App;
