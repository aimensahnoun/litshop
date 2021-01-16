import React from "react";
import { connect } from "react-redux";
import { shopCollectionCategory } from "../../redux/shop/shop.selector";
import CollectionItem from "../../components/collection-item/collection-item.component";

import "./collection-page.styles.scss";

function CollectionPage({ collection }) {
  const { items, title } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  ); 
}

const mapStateToProps = (state, ownProps) => ({
  collection: shopCollectionCategory(ownProps.match.params.collectionID)(state),
});

export default connect(mapStateToProps)(CollectionPage);
