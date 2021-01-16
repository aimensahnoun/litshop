import React from "react";
import "./shop-overvies.styles.scss"
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectios } from "../../redux/shop/shop.selector";
import CollectionPreview from "../../components/collection-preview/collection-preview";

function ShopOverview({ collections }) {
  return (
    <div className="shop-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectios,
});

export default connect(mapStateToProps)(ShopOverview);
