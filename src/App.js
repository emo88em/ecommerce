import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/hompage.component';
import ShopPage from './pages/shop/shop.component';
import Header from '../src/components/header/header.component';
import SignInandSignUp from './pages/sign-in-sign-up-page/sign-in-sign-up.component';

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route path="/" exact component={HomePage} />
				<Route path="/shop" component={ShopPage} />
				<Route path="/signin" component={SignInandSignUp} />
			</Switch>
		</div>
	);
}

export default App;
