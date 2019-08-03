import React from 'react';
import {Switch, Route} from 'react-router-dom';

import HomePage from './pages/homepage/hompage.component';
import ShopPage from './pages/shop/shop.component';

function App() {
	return (
		<div>
			<Switch>
				<Route path="/" exact component={HomePage} />
				<Route path="/shop" component={ShopPage} />
			</Switch>
		</div>
	);
}

export default App;
