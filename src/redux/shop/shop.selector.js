import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const shopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectios = createSelector(
  [shopCollections], 
  (collections) =>
  Object.keys(collections).map((key) => collections[key])
);

export const shopCollectionCategory = (collectionIdParam) =>
  createSelector(
    [shopCollections],
    (collections) => collections[collectionIdParam]
  );
