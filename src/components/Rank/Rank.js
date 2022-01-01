import React from "react";

const Rank = ({ name, entries }) => {
	return (
		<div>
			<div className="white f3 mt4">
				{`${name}, your total number of image uploads is...`}
			</div>
			<div className="white f1">{entries}</div>
		</div>
	);
};

export default Rank;
