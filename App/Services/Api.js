// a library to wrap and simplify api calls
import apisauce from 'apisauce';
import AppConfig from '../Config/AppConfig';

// our "constructor"
const create = (baseURL = AppConfig.apiUrl) => {
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache',
    },
    // 10 second timeout...
    timeout: 10000,
  });

  // ------
  // STEP 2
  // ------
  //
  // Define some functions that call the api.  The goal is to provide
  // a thin wrapper of the api layer providing nicer feeling functions
  // rather than "get", "post" and friends.
  //
  // I generally don't like wrapping the output at this level because
  // sometimes specific actions need to be take on `403` or `401`, etc.
  //
  // Since we can't hide from that, we embrace it by getting out of the
  // way at this level.
  //
  const setAuthToken = userAuth => api.setHeader('Authorization', `Bearer ${userAuth}`);
  const removeAuthToken = () => api.deleteHeader('Authorization');
  const login = userAuth => api.post('api/authenticate', userAuth);
  const register = user => api.post('api/register', user);
  const forgotPassword = data =>
    api.post('api/account/reset-password/init', data, {
      headers: {
        'Content-Type': 'text/plain',
        Accept: 'application/json, text/plain, */*',
      },
    });

  const getAccount = () => api.get('api/account');
  const updateAccount = account => api.post('api/account', account);
  const changePassword = (currentPassword, newPassword) =>
    api.post(
      'api/account/change-password',
      { currentPassword, newPassword },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json, text/plain, */*',
        },
      },
    );

  const getUser = userId => api.get(`api/users/${userId}`);
  const getUsers = options => api.get('api/users', options);
  const createUser = user => api.post('api/users', user);
  const updateUser = user => api.put('api/users', user);
  const deleteUser = userId => api.delete(`api/users/${userId}`);

  const getOrder = orderId => api.get(`api/orders/${orderId}`);
  const getOrders = options => api.get('api/orders', options);
  const createOrder = order => api.post('api/orders', order);
  const updateOrder = order => api.put('api/orders', order);
  const deleteOrder = orderId => api.delete(`api/orders/${orderId}`);
  const searchOrders = query => api.get('api/_search/orders', { query });

  const getProducts = shopId => api.get('api/products-by-product-shop-id/{shopId}', shopId);
 

  const getProductByCategory = options => api.get(`api/products-by-product-category-id/${options.categoryId}`, options);
  
  const searchProducts = query => api.get('api/_search/products', { query });

  const getProductCategory = productCategoryId =>
    api.get(`api/product-categories/${productCategoryId}`);
  const getProductCategories = options => api.get('api/product-categories/', options);
  const createProductCategory = productCategory =>
    api.post('api/product-categories', productCategory);
  const updateProductCategory = productCategory =>
    api.put('api/product-categories', productCategory);
  const deleteProductCategory = productCategoryId =>
    api.delete(`api/product-categories/${productCategoryId}`);
  const searchProductCategories = query => api.get('api/_search/product-categories', { query });

  const getProductVariant = productVariantId => api.get(`api/product-variants/${productVariantId}`);
  const getProductVariants = options => api.get('api/product-variants', options);
  const createProductVariant = productVariant => api.post('api/product-variants', productVariant);
  const updateProductVariant = productVariant => api.put('api/product-variants', productVariant);
  const deleteProductVariant = productVariantId => api.delete(`api/product-variants/${productVariantId}`);
  const searchProductVariants = query => api.get('api/_search/product-variants', { query });

  const getProfile = (email) => api.get('/api/profile-full-by-email/' + email);

  const getEmployeeTimesheet = employeeTimesheetId => api.get(`api/employee-timesheets/${employeeTimesheetId}`);
  const getEmployeeTimesheets = options => api.get('api/employee-timesheets', options);
  const createEmployeeTimesheet = employeeTimesheet => api.post('api/employee-timesheets', employeeTimesheet);
  const updateEmployeeTimesheet = employeeTimesheet => api.put('api/employee-timesheets', employeeTimesheet);
  const deleteEmployeeTimesheet = employeeTimesheetId => api.delete(`api/employee-timesheets/${employeeTimesheetId}`);
  const searchEmployeeTimesheets = query => api.get('api/_search/employee-timesheets', { query });


  // ignite-jhipster-api-method-needle

  // ------
  // STEP 3
  // ------
  //
  // Return back a collection of functions that we would consider our
  // interface.  Most of the time it'll be just the list of all the
  // methods in step 2.
  //
  // Notice we're not returning back the `api` created in step 1?  That's
  // because it is scoped privately.  This is one way to create truly
  // private scoped goodies in JavaScript.
  //
  return {
    // a list of the API functions from step 2
    createUser,
    updateUser,
    getUsers,
    getUser,
    deleteUser,

    createOrder,
    updateOrder,
    getOrders,
    getOrder,
    deleteOrder,
    searchOrders,


    getProductByCategory,
    getProducts,
    searchProducts,

    createProductCategory,
    updateProductCategory,
    getProductCategories,
    getProductCategory,
    deleteProductCategory,
    searchProductCategories,

    createProductVariant,
    updateProductVariant,
    getProductVariants,
    getProductVariant,
    deleteProductVariant,
    searchProductVariants,


    getProfile,

    createEmployeeTimesheet,
    updateEmployeeTimesheet,
    getEmployeeTimesheets,
    getEmployeeTimesheet,
    deleteEmployeeTimesheet,
    searchEmployeeTimesheets,


    // ignite-jhipster-api-export-needle
    setAuthToken,
    removeAuthToken,
    login,
    register,
    forgotPassword,
    getAccount,
    updateAccount,
    changePassword,
  };
};

// let's return back our create method as the default.
export default {
  create,
};
