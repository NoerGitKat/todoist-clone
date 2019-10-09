import React from 'react';
import { Header } from './components/layout/Header';
import { Content } from './components/layout/Content';

// Styles
import './App.scss';

function App() {
	return (
		<div className="App">
			<Header />
			<Content />
		</div>
	);
}

export { App };
