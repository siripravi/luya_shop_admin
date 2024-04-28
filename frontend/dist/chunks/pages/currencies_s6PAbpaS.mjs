import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../astro_DBE5qgVg.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './__DcT6BTZo.mjs';
import axios from 'axios';
import Cookies from 'js-cookie';

// luya-api.js

const setAuthToken = (token) => {
  Cookies.set('luya_auth_token', token);
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const get = async (url, params = {}) => {
  try {
    const response = await axios.get(`<span class="math-inline">\{baseUrl\}/</span>{url}`, { params });
    return response.data;
  } catch (error) {
    console.error('API request error:', error);
    throw error; // Or handle errors as needed
  }
};

async function getAllCurrencies() {
    const token = 'bd9cf13092018ddea756b4180dda749ebe768816b8f368253bb2a8a15e034af7JilHZo3Cbko7JDgE1iIl5a_Sk9JufRIc';
    setAuthToken(token);
    try {
    const data = await get(`${baseUrl}/api-catalog-currency`, { });   
    return data;
} catch (error) {
    console.error('Error fetching users:', error);
    // Handle errors as needed
  }

}

const $$Astro = createAstro("http://localhost:4321");
const prerender = false;
const $$Currencies = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Currencies;
  const currencyData = await getAllCurrencies();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Single Products" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"> <h1 class="text-3xl text-center font-bold p-6">Currencies</h1> <div>${currencyData}</div> </div> ` })}`;
}, "C:/gitrepos/luya_shop_admin/frontend/src/pages/currencies.astro", void 0);

const $$file = "C:/gitrepos/luya_shop_admin/frontend/src/pages/currencies.astro";
const $$url = "/currencies";

export { $$Currencies as default, $$file as file, prerender, $$url as url };
