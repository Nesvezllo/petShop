import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import PizzaDisplay from "../../Components/pizzaDisplay/PizzaDisplay.js";
import './styles.module.css';
function Home() {
	return (
		<div>
			<Navbar />
			<PizzaDisplay />
		</div>
	);
}

export default Home;
