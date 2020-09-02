import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<Card />
			<Footer />
		</div>
	);
}
