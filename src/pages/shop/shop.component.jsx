import React from "react";
import { Route } from "react-router";
import ShopOverview from "../../components/shop-overview/shop-overview.component";
import CollectionPage from "../collectionPage/collection-page.component";
function ShopPage({ match }) {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={ShopOverview} />
      <Route path={`${match.path}/:collectionID`} component={CollectionPage} />
    </div>
  );
}

export default ShopPage;
