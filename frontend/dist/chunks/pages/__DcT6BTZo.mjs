import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, d as renderSlot, e as renderHead, f as addAttribute } from '../astro_DBE5qgVg.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                           */
import { useSSRContext, reactive, ref, onMounted } from 'vue';
import 'uid';
import { map } from 'nanostores';
import axios from 'axios';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderComponent } from 'vue/server-renderer';
/* empty css                           */

const $$Astro$4 = createAstro("http://localhost:4321");
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
}, "C:/gitrepos/luya_shop_admin/frontend/src/layouts/Footer.astro", void 0);

const $$Astro$3 = createAstro("http://localhost:4321");
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Navbar;
  return renderTemplate`${maybeRenderHead()}<nav class="navbar navbar-expand-lg navbar-light bg-light"> <a class="navbar-brand" href="/"><img src="/images/logo-3.png" alt=""></a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="my_toggle_menu"> <span></span> <span></span> <span></span> </span> </button> <div class="collapse navbar-collapse" id="navbarSupportedContent"> <ul class="navbar-nav justify-content-end"> <li class="dropdown submenu active"> <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Home</a> <ul class="dropdown-menu"> <li><a href="/">Home 1</a></li> <li><a href="index-2.html">Home 2</a></li> <li><a href="index-3.html">Home 3</a></li> <li><a href="index-4.html">Home 4</a></li> <li><a href="index-5.html">Home 5</a></li> </ul> </li> <li><a href="/cakes">Our Cakes</a></li> <li><a href="/pricelist">Menu</a></li> <li class="dropdown submenu"> <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">About Us</a> <ul class="dropdown-menu"> <li><a href="about-us.html">About Us</a></li> <li><a href="our-team.html">Our Chefs</a></li> <li><a href="testimonials.html">Testimonials</a></li> </ul> </li> <li class="dropdown submenu"> <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Pages</a> <ul class="dropdown-menu"> <li><a href="service.html">Services</a></li> <li class="dropdown submenu"> <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Gallery</a> <ul class="dropdown-menu"> <li><a href="portfolio.html">-  Gallery Classic</a></li> <li><a href="portfolio-full-width.html">-  Gallery Full width</a></li> </ul> </li> <li><a href="faq.html">Faq</a></li> <li><a href="what-we-make.html">What we make</a></li> <li><a href="special.html">Special Recipe</a></li> <li><a href="404.html">404 page</a></li> <li><a href="comming-soon.html">Coming Soon page</a></li> </ul> </li> <li class="dropdown submenu"> <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Blog</a> <ul class="dropdown-menu"> <li><a href="blog.html">Blog with sidebar</a></li> <li><a href="blog-2column.html">Blog 2 column</a></li> <li><a href="single-blog.html">Blog details</a></li> </ul> </li> <li class="dropdown submenu"> <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Shop</a> <ul class="dropdown-menu"> <li><a href="shop.html">Main shop</a></li> <li><a href="product-details.html">Product Details</a></li> <li><a href="cart.html">Cart Page</a></li> <li><a href="checkout.html">Checkout Page</a></li> </ul> </li> <li><a href="contact.html">Contact Us</a></li> <li class="search_icon"><a class="popup-with-zoom-anim" href="#test-search"><i class="icon icon-Search"></i></a></li> </ul> </div> </nav>`;
}, "C:/gitrepos/luya_shop_admin/frontend/src/layouts/Navbar.astro", void 0);

const $$Astro$2 = createAstro("http://localhost:4321");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="main_header_area" data-astro-cid-xbstl6g3> <div class="top_header_area row m0" data-astro-cid-xbstl6g3> <div class="container" data-astro-cid-xbstl6g3> <div class="float-left" data-astro-cid-xbstl6g3> <a href="tell:+18004567890" data-astro-cid-xbstl6g3><i class="fa fa-phone" aria-hidden="true" data-astro-cid-xbstl6g3></i> + (1800) 456 7890</a> <a href="mainto:info@cakebakery.com" data-astro-cid-xbstl6g3><i class="fa fa-envelope-o" aria-hidden="true" data-astro-cid-xbstl6g3></i> info@cakebakery.com</a> </div> <div class="float-right" data-astro-cid-xbstl6g3> <ul class="h_social list_style" data-astro-cid-xbstl6g3> <li data-astro-cid-xbstl6g3><a href="#" data-astro-cid-xbstl6g3><i class="fa fa-facebook" data-astro-cid-xbstl6g3></i></a></li> <li data-astro-cid-xbstl6g3><a href="#" data-astro-cid-xbstl6g3><i class="fa fa-twitter" data-astro-cid-xbstl6g3></i></a></li> <li data-astro-cid-xbstl6g3><a href="#" data-astro-cid-xbstl6g3><i class="fa fa-google-plus" data-astro-cid-xbstl6g3></i></a></li> <li data-astro-cid-xbstl6g3><a href="#" data-astro-cid-xbstl6g3><i class="fa fa-linkedin" data-astro-cid-xbstl6g3></i></a></li> </ul> <ul class="h_search list_style" data-astro-cid-xbstl6g3> <li class="shop_cart" data-astro-cid-xbstl6g3><a href="#" data-astro-cid-xbstl6g3><i class="lnr lnr-cart" data-astro-cid-xbstl6g3></i></a></li> <li data-astro-cid-xbstl6g3><a class="popup-with-zoom-anim" href="#test-search" data-astro-cid-xbstl6g3><i class="fa fa-search" data-astro-cid-xbstl6g3></i></a></li> </ul> </div> </div> </div> <div class="main_menu_area" data-astro-cid-xbstl6g3> <div class="container" data-astro-cid-xbstl6g3> ${renderComponent($$result, "Navbar", $$Navbar, { "data-astro-cid-xbstl6g3": true })} </div> </div> </header> `;
}, "C:/gitrepos/luya_shop_admin/frontend/src/layouts/Header.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("http://localhost:4321");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>", '</title><script src="https://unpkg.com/htmx.org@1.9.11" integrity="sha384-0gxUXCCR8yv9FM2b+U3FDbsKthCI66oH5IA9fHppQq9DDMHuMauqq1ZHBpJxQ0J0" crossorigin="anonymous"><\/script>', "</head> <body data-astro-cid-sckkx6r4> ", " ", " <!-- Details 2 --> <!-- end of details 2 --> ", ' <script src="https://code.jquery.com/jquery-3.7.0.min.js"><\/script> <!-- <CartFlyout client:load />   -->  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"><\/script>   </body> </html> '])), addAttribute(Astro2.generator, "content"), title, renderHead(), renderComponent($$result, "Header", $$Header, { "data-astro-cid-sckkx6r4": true }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true }));
}, "C:/gitrepos/luya_shop_admin/frontend/src/layouts/Layout.astro", void 0);

async function fetchAxios(params) {
  Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "http://localhost:4321", "ASSETS_PREFIX": undefined}, { OS: process.env.OS, PUBLIC: process.env.PUBLIC });
  const url = "http://localhost:3030/api/page";
  const { data } = await axios.get(url, { params });
  return data.placeholders.content;
}

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

/**
 * Strips HTML from the inputted string
 * @param {String} description Input text to strip HTML from
 */
function stripHTML(string) {
  return string.replace(/(<([^>]+)>)/gi, "")
}

/**
 * Filter variant price. Changes "kr198.00 - kr299.00" to kr299.00 or kr198 depending on the side variable
 * @param {String} side Which side of the string to return (which side of the "-" symbol)
 * @param {String} price The inputted price that we need to convert
 */
const filteredVariantPrice = (price, side) => {
  if (side === "right") {
    return price.substring(price.length, price.indexOf("-")).replace("-", "")
  }
  return price.substring(0, price.indexOf("-")).replace("-", "")
};

async function getSingleProduct(pid) {
  const data = await fetchAxios({ id: 4 , slug:pid});

  //return data?.product;
  return data.filter(function (item) {
    return item.block_name == "ModuleBlock";
  })[0];
}

const cartItems = map({});

function addProductToCart({ id, name, imageSrc }) {
  const existingEntry = cartItems.get()[id];
  if (existingEntry) {
    cartItems.setKey(id, {
      ...existingEntry,
      quantity: existingEntry.quantity + 1
    });
  } else {
    cartItems.setKey(id, { id, name, imageSrc, quantity: 1 });
  }
}

async function addToCart(product) {
  const data = await fetchAxios(
    `
    mutation ($input: AddToCartInput!) {
        addToCart(input: $input) {
          cartItem {
            key
            product {
              id
              databaseId
              name
              description
              type
              onSale
              slug
              averageRating
              reviewCount
              image {
                id
                sourceUrl
                altText
              }
              galleryImages {
                nodes {
                  id
                  sourceUrl
                  altText
                }
              }
            }
            variation {
              id
              databaseId
              name
              description
              type
              onSale
              price
              regularPrice
              salePrice
              image {
                id
                sourceUrl
                altText
              }
              attributes {
                nodes {
                  id
                  attributeId
                  name
                  value
                }
              }
            }
            quantity
            total
            subtotal
            subtotalTax
          }
        }
      }
    `);

  return data?.addToCart;
}

const _sfc_main$1 = {
  __name: "AddToCartButton",
  props: ["product"],
  setup(__props, { expose: __expose }) {
    __expose();
    const state = reactive({ loading: false });
    const props = __props;
    const hardcodedItemInfo = {
      id: "astronaut-figurine",
      name: "Astronaut Figurine",
      imageSrc: "/images/astronaut-figurine.png"
    };
    const addProduct = (product) => {
      state.loading = true;
      const productId = product.databaseId ? product.databaseId : product;
      const productQueryInput = {
        productId
      };
      try {
        addToCart(productQueryInput).then((result) => {
          state.loading = false;
          if (!result) {
            localStorage.clear();
          }
          window.location.reload();
        });
        addProductToCart(hardcodedItemInfo);
      } catch (e) {
        state.loading = false;
      }
    };
    const __returned__ = { state, props, hardcodedItemInfo, addProduct, reactive, get addProductToCart() {
      return addProductToCart;
    }, get addToCart() {
      return addToCart;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-6f1eff71><button class="${ssrRenderClass([{ disabled: $setup.state.loading }, "pest_btn"])}" data-v-6f1eff71> ADD TO CART `);
  if ($setup.state.loading) {
    _push(`<svg class="absolute -mt-6 -ml-2 animate-spin" width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-6f1eff71><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM4.14355 13.5165C4.85219 17.2096 8.10023 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C8.0886 4 4.83283 6.80704 4.13728 10.5165L6.72824 10.5071C7.37819 8.20738 9.49236 6.52222 12.0001 6.52222C15.0254 6.52222 17.4779 8.9747 17.4779 12C17.4779 15.0253 15.0254 17.4778 12.0001 17.4778C9.49752 17.4778 7.3869 15.7995 6.73228 13.5071L4.14355 13.5165ZM9.52234 12C9.52234 13.3684 10.6317 14.4778 12.0001 14.4778C13.3685 14.4778 14.4779 13.3684 14.4779 12C14.4779 10.6316 13.3685 9.52222 12.0001 9.52222C10.6317 9.52222 9.52234 10.6316 9.52234 12Z" fill="white" data-v-6f1eff71></path></svg>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</button></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Cart/AddToCartButton.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AddToCartButton = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-6f1eff71"]]);

const _sfc_main = {
  __name: 'ShowSingleProduct',
  props: ["product"],
  setup(__props, { expose: __expose }) {
  __expose();

const props = __props;

const selectedVariation = ref(18);

onMounted(() => {
  if (props.product.variations) {
    const firstVariant = props.product.variations.nodes[0].databaseId;
    selectedVariation.value = firstVariant;
  }
});

const changeVariation = (event) => {
  selectedVariation.value = event.target.value;
};

const __returned__ = { props, selectedVariation, changeVariation, ref, onMounted, get filteredVariantPrice() { return filteredVariantPrice }, get stripHTML() { return stripHTML }, AddToCartButton };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($props.product.extras.moduleContent.product) {
    _push(`<div${
      ssrRenderAttrs(_attrs)
    }><section><div class="container flex flex-wrap items-center pt-4 pb-12 mx-auto"><div class="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-2"><div class="ml-8"><p class="text-3xl font-bold text-left">${
      ssrInterpolate($props.product.extras.moduleContent.product.name)
    }</p><p class="pt-1 mt-4 text-2xl text-gray-900">${
      ssrInterpolate($props.product.extras.moduleContent.product.price_from)
    }</p><br><p class="pt-1 mt-4 text-2xl text-gray-900">${
      ssrInterpolate($setup.stripHTML($props.product.extras.moduleContent.model.text))
    }</p>`);
    if ($props.product.variations) {
      _push(`<p class="pt-1 mt-4 text-xl text-gray-900"><span class="py-2">Variants</span><select id="variant" name="variant" class="block w-64 px-6 py-2 bg-white border border-gray-500 rounded-lg focus:outline-none focus:shadow-outline"><!--[-->`);
      ssrRenderList($props.product.variations.nodes, (variation, index) => {
        _push(`<option${
          ssrRenderAttr("value", variation.databaseId)
        }${
          (ssrIncludeBooleanAttr(index === 0)) ? " selected" : ""
        }>${
          ssrInterpolate(variation.name)
        } (${
          ssrInterpolate(variation.stockQuantity)
        } in stock) </option>`);
      });
      _push(`<!--]--></select></p>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<div class="pt-1 mt-2">`);
    if ($props.product.variations) {
      _push(ssrRenderComponent($setup["AddToCartButton"], {
        product: $setup.selectedVariation,
        "client:visible": ""
      }, null, _parent));
    } else {
      _push(ssrRenderComponent($setup["AddToCartButton"], {
        product: $props.product,
        "client:visible": ""
      }, null, _parent));
    }
    _push(`</div></div></div></div></section></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Products/ShowSingleProduct.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const ShowSingleProduct = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender]]);

const $$Astro = createAstro("http://localhost:4321");
const prerender = false;
function getStaticPaths() {
  return [
    { params: { path: "cake/chocolate-cake/28" } },
    { params: { path: "cakes" } },
    { params: { path: "pokemon/charizard" } },
    { params: { path: "pokemon/squirtle" } },
    { params: { path: "pokemon/ninetales" } },
    { params: { path: void 0 } }
  ];
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const productData = await getSingleProduct("9");
  Astro2.params;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Product" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <h1 class="text-center text-3xl font-bold p-4">Search </h1> ${renderComponent($$result2, "ShowSingleProduct", ShowSingleProduct, { "product": productData, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/gitrepos/luya_shop_admin/frontend/src/components/Products/ShowSingleProduct.vue", "client:component-export": "default" })} <div id="app"> ${renderComponent($$result2, "router-view", "router-view", {})} </div> </main> ` })} `;
}, "C:/gitrepos/luya_shop_admin/frontend/src/pages/[...path].astro", void 0);

const $$file = "C:/gitrepos/luya_shop_admin/frontend/src/pages/[...path].astro";
const $$url = "/[...path]";

const ____path_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _export_sfc as _, filteredVariantPrice as a, ____path_ as b, fetchAxios as f, getSingleProduct as g };
