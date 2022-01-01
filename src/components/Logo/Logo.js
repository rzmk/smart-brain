import React from "react";
import Tilt from "react-parallax-tilt";
import "./Logo.css";
import brain from "./brain.svg";

const Logo = () => {
	return (
		<div className={{ justifyContent: "center" }}>
			<Tilt className="Tilt">
				<img className="pa3" src={brain} alt="Logo" />
			</Tilt>
		</div>
	);
};

export default Logo;
