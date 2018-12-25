export default {
  // Functions return fixtures

  // entity fixtures

  updateOrder: order => ({
    ok: true,
    data: require('../Fixtures/updateOrder.json'),
  }),
  getOrders: () => ({
    ok: true,
    data: require('../Fixtures/getOrders.json'),
  }),
  getOrder: orderId => ({
    ok: true,
    data: require('../Fixtures/getOrder.json'),
  }),
  deleteOrder: orderId => ({
    ok: true,
  }),
  searchOrders: query => ({
    ok: true,
    data: require('../Fixtures/searchOrders.json'),
  }),

  updateProduct: product => ({
    ok: true,
    data: require('../Fixtures/updateProduct.json'),
  }),
  getProducts: () => ({
    ok: true,
    data: require('../Fixtures/getProducts.json'),
  }),
  getProduct: productId => ({
    ok: true,
    data: require('../Fixtures/getProduct.json'),
  }),
  deleteProduct: productId => ({
    ok: true,
  }),
  searchProducts: query => ({
    ok: true,
    data: require('../Fixtures/searchProducts.json'),
  }),

  updateProductCategory: productCategory => ({
    ok: true,
    data: require('../Fixtures/updateProductCategory.json'),
  }),
  getProductCategories: () => ({
    ok: true,
    data: require('../Fixtures/getProductCategories.json'),
  }),
  getProductCategory: productCategoryId => ({
    ok: true,
    data: require('../Fixtures/getProductCategory.json'),
  }),
  deleteProductCategory: productCategoryId => ({
    ok: true,
  }),
  searchProductCategories: query => ({
    ok: true,
    data: require('../Fixtures/searchProductCategories.json'),
  }),

  updateProductVariant: productVariant => ({
    ok: true,
    data: require('../Fixtures/updateProductVariant.json'),
  }),
  getProductVariants: () => ({
    ok: true,
    data: require('../Fixtures/getProductVariants.json'),
  }),
  getProductVariant: productVariantId => ({
    ok: true,
    data: require('../Fixtures/getProductVariant.json'),
  }),
  deleteProductVariant: productVariantId => ({
    ok: true,
  }),
  searchProductVariants: query => ({
    ok: true,
    data: require('../Fixtures/searchProductVariants.json'),
  }),

  updateProfile: (profile) => {
    return {
      ok: true,
      data: require('../Fixtures/updateProfile.json')
    }
  },
  getProfiles: () => {
    return {
      ok: true,
      data: require('../Fixtures/getProfiles.json')
    }
  },
  getProfile: (profileId) => {
    return {
      ok: true,
      data: require('../Fixtures/getProfile.json')
    }
  },
  deleteProfile: (profileId) => {
    return {
      ok: true
    }
  },
  searchProfiles: (query) => {
    return {
      ok: true,
      data: require('../Fixtures/searchProfiles.json')
    }
  },
  // ignite-jhipster-api-fixture-needle

  // user fixtures
  updateUser: user => ({
    ok: true,
    data: require('../Fixtures/updateUser.json'),
  }),
  getUsers: () => ({
    ok: true,
    data: require('../Fixtures/getUsers.json'),
  }),
  getUser: userId => ({
    ok: true,
    data: require('../Fixtures/getUser.json'),
  }),
  deleteUser: userId => ({
    ok: true,
  }),
  // auth fixtures
  setAuthToken: () => {},
  removeAuthToken: () => {},
  login: (authObj) => {
    if (authObj.username === 'user' && authObj.password === 'user') {
      return {
        ok: true,
        data: require('../Fixtures/login.json'),
      };
    }
    return {
      ok: false,
      status: 400,
      data: 'Invalid credentials',
    };
  },
  register: ({ user }) => {
    if (user === 'user') {
      return {
        ok: true,
      };
    }
    return {
      ok: false,
      data: 'Invalid email',
    };
  },
  forgotPassword: ({ email }) => {
    if (email === 'valid@gmail.com') {
      return {
        ok: true,
      };
    }
    return {
      ok: false,
      data: 'Invalid email',
    };
  },
  getAccount: () => ({
    ok: true,
    status: 200,
    data: require('../Fixtures/getAccount.json'),
  }),
  updateAccount: () => ({
    ok: true,
  }),
  changePassword: ({ currentPassword }) => {
    if (currentPassword === 'valid-password') {
      return {
        ok: true,
      };
    }
    return {
      ok: false,
      data: 'Password error',
    };
  },
};
