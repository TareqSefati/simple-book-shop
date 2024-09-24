export const ROUTES = {
    HOME: "/",
    PRODUCTS: "/products",
    SINGLE_PRODUCTS: {
      STATIC: "/product/:productId",
      DYNAMIC: (productId) => `/product/${productId}`,
    },
  };
  