import React from 'react';
import {Switch, Route} from 'react-router-dom';

import HomePage from './pages/homepage/hompage.component';

const HatsPage = () => {
	return (
		<div>
			<h1>Hats Page!</h1>
		</div> 
	)
}

function App() {
	return (
		<div>
			<Switch>
				<Route path="/" exact component={HomePage} />
				<Route path="/hats" exact component={HatsPage} />
			</Switch>
		</div>
	);
}

export default App;
