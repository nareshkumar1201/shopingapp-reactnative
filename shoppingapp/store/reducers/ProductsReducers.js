import PRODUCTS from "../../models/product-dummy-data";
const initialState = {
  available_Products: PRODUCTS,
  owner_added_Products: PRODUCTS.filter(
    (product) => product.p_OwnerId === "u1"
  ),
};

const ProductsReducers = (state = initialState, action) => {
  return state;
};

export default ProductsReducers;
