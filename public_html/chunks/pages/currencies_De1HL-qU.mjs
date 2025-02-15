import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, d as renderSlot, e as renderHead, f as addAttribute } from '../astro_DBE5qgVg.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                               */
import axios from 'axios';
import Cookies from 'js-cookie';

const $$Astro$4 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Footer;
  (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`<!--================Footer Area =================-->${maybeRenderHead()}<footer class="footer_area"> <div class="footer_widgets"> <div class="container"> <div class="row footer_wd_inner"> <div class="col-lg-3 col-6"> <aside class="f_widget f_about_widget"> <img src="images/footer-logo.png" alt=""> <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui bland itiis praesentium voluptatum deleniti atque corrupti.</p> <ul class="nav"> <li><a href="#"><i class="fa fa-facebook"></i></a></li> <li><a href="#"><i class="fa fa-linkedin"></i></a></li> <li><a href="#"><i class="fa fa-twitter"></i></a></li> <li><a href="#"><i class="fa fa-google-plus"></i></a></li> </ul> </aside> </div> <div class="col-lg-3 col-6"> <aside class="f_widget f_link_widget"> <div class="f_title"> <h3>Quick links</h3> </div> <ul class="list_style"> <li><a href="#">Your Account</a></li> <li><a href="#">View Order</a></li> <li><a href="#">Privacy Policy</a></li> <li><a href="#">Terms & Conditionis</a></li> </ul> </aside> </div> <div class="col-lg-3 col-6"> <aside class="f_widget f_link_widget"> <div class="f_title"> <h3>Work Times</h3> </div> <ul class="list_style"> <li><a href="#">Mon. :  Fri.: 8 am - 8 pm</a></li> <li><a href="#">Sat. : 9am - 4pm</a></li> <li><a href="#">Sun. : Closed</a></li> </ul> </aside> </div> <div class="col-lg-3 col-6"> <aside class="f_widget f_contact_widget"> <div class="f_title"> <h3>Contact Info</h3> </div> <h4>(1800) 574 9687</h4> <p>Justshiop Store <br>256, baker Street,, New Youk, 5245</p> <h5>cakebakery@contact.co.in</h5> </aside> </div> </div> </div> </div> <div class="footer_copyright"> <div class="container"> <div class="copyright_inner"> <div class="float-left"> <h5>© Copyright  cakebakery WordPress WooCommerce Theme. All right reserved.</h5> </div> <div class="float-right"> <a href="#">Purchase Now</a> </div> </div> </div> </div> </footer> <!--================End Footer Area =================--> <!--================Search Box Area =================--> <!--
<div class="search_area zoom-anim-dialog mfp-hide" id="test-search">
    <div class="search_box_inner">
        <h3>Search</h3>
        <div class="input-group">
            <input type="text" class="form-control" placeholder="Search for...">
            <span class="input-group-btn">
                <button class="btn btn-default" type="button"><i class="icon icon-Search"></i></button>
            </span>
        </div>
    </div>
</div>  --> <!--================End Search Box Area =================-->`;
}, "C:/gitrepos/luya_shop_frontend/src/layouts/Footer.astro", void 0);

const $$Astro$3 = createAstro();
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Navbar;
  return renderTemplate`${maybeRenderHead()}<nav class="navbar navbar-expand-lg navbar-light bg-light"> <a class="navbar-brand" href="/"><img src="/images/logo-3.png" alt=""></a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="my_toggle_menu"> <span></span> <span></span> <span></span> </span> </button> <div class="collapse navbar-collapse" id="navbarSupportedContent"> <ul class="navbar-nav justify-content-end"> <li class="dropdown submenu active"> <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Home</a> <ul class="dropdown-menu"> <li><a href="/">Home 1</a></li> <li><a href="index-2.html">Home 2</a></li> <li><a href="index-3.html">Home 3</a></li> <li><a href="index-4.html">Home 4</a></li> <li><a href="index-5.html">Home 5</a></li> </ul> </li> <li><a href="/cakes">Our Cakes</a></li> <li><a href="/pricelist">Menu</a></li> <li class="dropdown submenu"> <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">About Us</a> <ul class="dropdown-menu"> <li><a href="about-us.html">About Us</a></li> <li><a href="our-team.html">Our Chefs</a></li> <li><a href="testimonials.html">Testimonials</a></li> </ul> </li> <li class="dropdown submenu"> <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Pages</a> <ul class="dropdown-menu"> <li><a href="service.html">Services</a></li> <li class="dropdown submenu"> <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Gallery</a> <ul class="dropdown-menu"> <li><a href="portfolio.html">-  Gallery Classic</a></li> <li><a href="portfolio-full-width.html">-  Gallery Full width</a></li> </ul> </li> <li><a href="faq.html">Faq</a></li> <li><a href="what-we-make.html">What we make</a></li> <li><a href="special.html">Special Recipe</a></li> <li><a href="404.html">404 page</a></li> <li><a href="comming-soon.html">Coming Soon page</a></li> </ul> </li> <li class="dropdown submenu"> <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Blog</a> <ul class="dropdown-menu"> <li><a href="blog.html">Blog with sidebar</a></li> <li><a href="blog-2column.html">Blog 2 column</a></li> <li><a href="single-blog.html">Blog details</a></li> </ul> </li> <li class="dropdown submenu"> <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Shop</a> <ul class="dropdown-menu"> <li><a href="shop.html">Main shop</a></li> <li><a href="product-details.html">Product Details</a></li> <li><a href="cart.html">Cart Page</a></li> <li><a href="checkout.html">Checkout Page</a></li> </ul> </li> <li><a href="contact.html">Contact Us</a></li> <li class="search_icon"><a class="popup-with-zoom-anim" href="#test-search"><i class="icon icon-Search"></i></a></li> </ul> </div> </nav>`;
}, "C:/gitrepos/luya_shop_frontend/src/layouts/Navbar.astro", void 0);

const $$Astro$2 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="main_header_area" data-astro-cid-xbstl6g3> <div class="top_header_area row m0" data-astro-cid-xbstl6g3> <div class="container" data-astro-cid-xbstl6g3> <div class="float-left" data-astro-cid-xbstl6g3> <a href="tell:+18004567890" data-astro-cid-xbstl6g3><i class="fa fa-phone" aria-hidden="true" data-astro-cid-xbstl6g3></i> + (1800) 456 7890</a> <a href="mainto:info@cakebakery.com" data-astro-cid-xbstl6g3><i class="fa fa-envelope-o" aria-hidden="true" data-astro-cid-xbstl6g3></i> info@cakebakery.com</a> </div> <div class="float-right" data-astro-cid-xbstl6g3> <ul class="h_social list_style" data-astro-cid-xbstl6g3> <li data-astro-cid-xbstl6g3><a href="#" data-astro-cid-xbstl6g3><i class="fa fa-facebook" data-astro-cid-xbstl6g3></i></a></li> <li data-astro-cid-xbstl6g3><a href="#" data-astro-cid-xbstl6g3><i class="fa fa-twitter" data-astro-cid-xbstl6g3></i></a></li> <li data-astro-cid-xbstl6g3><a href="#" data-astro-cid-xbstl6g3><i class="fa fa-google-plus" data-astro-cid-xbstl6g3></i></a></li> <li data-astro-cid-xbstl6g3><a href="#" data-astro-cid-xbstl6g3><i class="fa fa-linkedin" data-astro-cid-xbstl6g3></i></a></li> </ul> <ul class="h_search list_style" data-astro-cid-xbstl6g3> <li class="shop_cart" data-astro-cid-xbstl6g3><a href="#" data-astro-cid-xbstl6g3><i class="lnr lnr-cart" data-astro-cid-xbstl6g3></i></a></li> <li data-astro-cid-xbstl6g3><a class="popup-with-zoom-anim" href="#test-search" data-astro-cid-xbstl6g3><i class="fa fa-search" data-astro-cid-xbstl6g3></i></a></li> </ul> </div> </div> </div> <div class="main_menu_area" data-astro-cid-xbstl6g3> <div class="container" data-astro-cid-xbstl6g3> ${renderComponent($$result, "Navbar", $$Navbar, { "data-astro-cid-xbstl6g3": true })} </div> </div> </header> `;
}, "C:/gitrepos/luya_shop_frontend/src/layouts/Header.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>", '</title><script src="https://unpkg.com/htmx.org@1.9.11" integrity="sha384-0gxUXCCR8yv9FM2b+U3FDbsKthCI66oH5IA9fHppQq9DDMHuMauqq1ZHBpJxQ0J0" crossorigin="anonymous"><\/script>', "</head> <body data-astro-cid-sckkx6r4> ", " ", " <!-- Details 2 --> <!-- end of details 2 --> ", ' <script src="https://code.jquery.com/jquery-3.7.0.min.js"><\/script> <!-- <CartFlyout client:load />   -->  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"><\/script>   </body> </html> '])), addAttribute(Astro2.generator, "content"), title, renderHead(), renderComponent($$result, "Header", $$Header, { "data-astro-cid-sckkx6r4": true }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true }));
}, "C:/gitrepos/luya_shop_frontend/src/layouts/Layout.astro", void 0);

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

const $$Astro = createAstro();
const prerender = false;
const $$Currencies = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Currencies;
  const currencyData = await getAllCurrencies();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Single Products" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"> <h1 class="text-3xl text-center font-bold p-6">Currencies</h1> <div>${currencyData}</div> </div> ` })}`;
}, "C:/gitrepos/luya_shop_frontend/src/pages/currencies.astro", void 0);

const $$file = "C:/gitrepos/luya_shop_frontend/src/pages/currencies.astro";
const $$url = "/currencies";

const currencies = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Currencies,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, currencies as c };
