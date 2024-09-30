import React from "react";
import WeeklyFeatured from "./weekly-featured/WeeklyFeatured";
import Line from "../../ui/Line";
import Recommended from "./recommended/Recommended";

const LeftSide = () => {
	return (
		<div className="left_side">
			<WeeklyFeatured />

			<Line />

			<Recommended />
		</div>
	);
};

export default LeftSide;
