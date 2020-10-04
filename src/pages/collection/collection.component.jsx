import React from "react";
// import CollectionItem from "../../components/collection-item/collection-item.component";
import {connect} from "react-redux";

import {selectCollection} from "../../redux/shop/shop.selector";
import "./collection.styles.scss";

const CollectionPage = ({collection}) => {
    return(
    <div className="category">
        <h2>CATEGORY PAGE</h2>
    </div>
)}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.collectionId)(state),
})
export default connect(mapStateToProps)(CollectionPage);