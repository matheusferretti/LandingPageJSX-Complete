import React from "react";

const Card = () => {
	return (
		<div
			className="container"
			style={{ display: "flex", flexdirection: "column" }}>
			<div
				className="card"
				style={{ width: "18rem", margin: "5px", marginBottom: "30px" }}>
				<img
					src="https://placehold.it/500x325.jpg"
					className="card-img-top"
					alt=""
				/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Some quick example text to build on the card title and
						make up the bulk of the cards content.
					</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>

			<div
				className="card"
				style={{ width: "18rem", margin: "5px", marginBottom: "30px" }}>
				<img
					src="https://placehold.it/500x325.jpg"
					className="card-img-top"
					alt=""
				/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Some quick example text to build on the card title and
						make up the bulk of the cards content.
					</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>

			<div
				className="card"
				style={{ width: "18rem", margin: "5px", marginBottom: "30px" }}>
				<img
					src="https://placehold.it/500x325.jpg"
					className="card-img-top"
					alt=""
				/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Some quick example text to build on the card title and
						make up the bulk of the cards content.
					</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>

			<div
				className="card"
				style={{ width: "18rem", margin: "5px", marginBottom: "30px" }}>
				<img
					src="https://placehold.it/500x325.jpg"
					className="card-img-top"
					alt=""
				/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Some quick example text to build on the card title and
						make up the bulk of the cards content.
					</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
};

export default Card;
