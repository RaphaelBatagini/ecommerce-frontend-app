import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

// TODO: hide API credentials because Create React App build .env variables with front
const woocommerce = new WooCommerceRestApi({
    url: process.env.REACT_APP_API_ADDRESS,
    consumerKey: process.env.REACT_APP_API_KEY,
    consumerSecret: process.env.REACT_APP_API_SECRET,
    version: 'wc/v3'
});

export default woocommerce;