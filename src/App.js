import React from 'react';
import {Switch, Route} from 'react-router-dom';
import "./App.css"

import HomePage from './pages/homepage/hompage.component';
import ShopPage from './pages/shop/shop.component';
import Header from '../src/components/header/header.component'

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route path="/" exact component={HomePage} />
				<Route path="/shop" component={ShopPage} />
			</Switch>
		</div>
	);
}

export default App;
