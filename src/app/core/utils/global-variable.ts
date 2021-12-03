import {environment} from '../../../environments/environment';

export const DATABASE_KEY = Object.freeze({
  loginToken: 'ENDLESS_SQUAD_TOKEN_' + environment.VERSION,
  loggInSession: 'ENDLESS_SQUAD_SESSION_' + environment.VERSION,
  loginTokenAdmin: 'ENDLESS_SQUAD_ADMIN_TOKEN_' + environment.VERSION,
  loggInSessionAdmin: 'ENDLESS_SQUAD_ADMIN_SESSION_' + environment.VERSION,
  encryptAdminLogin: 'ENDLESS_SQUAD_USER_0_' + environment.VERSION,
  loginAdminRole: 'ENDLESS_SQUAD_ADMIN_ROLE_' + environment.VERSION,
  cartsProduct: 'ENDLESS_SQUAD_USER_CART_' + environment.VERSION,
  productFormData: 'ENDLESS_SQUAD_PRODUCT_FORM_' + environment.VERSION,
  userCart: 'ENDLESS_SQUAD_USER_CART_' + environment.VERSION,
  recommendedProduct: 'ENDLESS_SQUAD_RECOMMENDED_PRODUCT_' + environment.VERSION,
  userCoupon: 'ENDLESS_SQUAD_USER_COUPON_' + environment.VERSION,
  userCookieTerm: 'ENDLESS_SQUAD_COOKIE_TERM' + environment.VERSION,
});
