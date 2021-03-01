import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectShopItems } from "../../redux/shop/shop.selectors";

import CollectionPreview from "../collection-preview/collection-preview.component";

import "./collection-overview.styles.scss";

const CollectionOverview = ({ collections }) => (
	<div className="collections-overview">
		{collections.map(({ id, ...theProps }) => {
			return <CollectionPreview key={id} {...theProps} />;
		})}
	</div>
);

const mapStateToProps = createStructuredSelector({
	collections: selectShopItems,
});

export default connect(mapStateToProps)(CollectionOverview);
