import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.styles.scss";

const MenuItem = ({
	title,
	subtitle,
	imageUrl,
	size,
	history,
	linkUrl,
	match,
}) => {
	return (
		<div
			className={`${size} menu-item`}
			onClick={() => history.push(`${match.url}${linkUrl}`)}>
			<div
				style={{ backgroundImage: `url(${imageUrl})` }}
				className="background-image"></div>
			<div className="content">
				<h1 className="title">{title.toUpperCase()}</h1>
				<span className="subtitle">{subtitle.toUpperCase()}</span>
			</div>
		</div>
	);
};

export default withRouter(MenuItem);
