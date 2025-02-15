import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, f as addAttribute, d as renderSlot, F as Fragment, u as unescapeHTML, s as spreadAttributes } from './astro_DBE5qgVg.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './pages/currencies_De1HL-qU.mjs';
import { createSchema, createYoga } from 'graphql-yoga';
import { clsx } from 'clsx';
import gql from 'graphql-tag';
import { nanoid } from 'nanoid';
import { titleCase } from 'title-case';
import { marked } from 'marked';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderSlot, ssrRenderComponent, ssrRenderClass, ssrRenderVNode } from 'vue/server-renderer';
import { useSSRContext, defineComponent, mergeProps, ref, onBeforeMount, withCtx, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, Fragment as Fragment$1, renderList, computed, reactive, resolveComponent, resolveDynamicComponent } from 'vue';
/* empty css                          */
import axios from 'axios';
/* empty css                            */
import { Form, Field, ErrorMessage } from 'vee-validate';
import { object, string, number } from 'yup';
import 'uid';
import { ApolloClient, InMemoryCache } from '@apollo/client/core/index.js';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
/* empty css                         */

const $$Astro$13 = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$13, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 not found" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <h1>Page not found</h1> <ul role="list">There was an error locating the page</ul> </main> ` })}`;
}, "C:/gitrepos/luya_shop_frontend/src/pages/404.astro", void 0);

const $$file$c = "C:/gitrepos/luya_shop_frontend/src/pages/404.astro";
const $$url$c = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file$c,
  url: $$url$c
}, Symbol.toStringTag, { value: 'Module' }));

const post = async ({ request }) => {
  const result = await request.formData();
  if (result) {
    return new Response(null, { status: 200 });
  } else {
    return new Response(
      JSON.stringify({
        message: "Data is mal-form-ed (hehe)"
      }),
      { status: 400 }
    );
  }
};

const checkout$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  post
}, Symbol.toStringTag, { value: 'Module' }));

const ShoppingCart = [
  {
    id: 1,
    name: "Apple",
    price: 0.59,
    qty: 4
  },
  {
    id: 2,
    name: "Shampoo",
    price: 1.2,
    qty: 3
  },
  {
    id: 3,
    name: "Wholemeal bread",
    price: 0.75,
    qty: 1
  },
  {
    id: 4,
    name: "Dozen eggs - large",
    price: 2.95,
    qty: 2
  },
  {
    id: 5,
    name: "Large mayonnaise",
    price: 1.43,
    qty: 100
  }
];

const schema = createSchema({
  typeDefs: `
    type CartItem {
      id: Int!
      name: String!
      price: Float!
      qty: Int!
    }
    type Query {
      cart: [CartItem!]
    }    
  `,
  resolvers: {
    Query: {
      cart: () => ShoppingCart
    }
  }
});
const { handleRequest } = createYoga({
  schema,
  graphqlEndpoint: "/api/graphql",
  fetchAPI: {
    Request,
    Response
  }
});
const POST = async (context) => {
  const { request } = context;
  return handleRequest(request, context);
};

const graphql = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$12 = createAstro();
const $$Cart = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$12, $$props, $$slots);
  Astro2.self = $$Cart;
  return renderTemplate`<template></template>`;
}, "C:/gitrepos/luya_shop_frontend/src/pages/cart.astro", void 0);

const $$file$b = "C:/gitrepos/luya_shop_frontend/src/pages/cart.astro";
const $$url$b = "/cart";

const cart = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cart,
  file: $$file$b,
  url: $$url$b
}, Symbol.toStringTag, { value: 'Module' }));

const { PUBLIC_GRAPHQL_URL } = Object.assign({"PUBLIC_GRAPHQL_URL_OL": "https://cakeoncall.in/cakery/graphql", "PUBLIC_GRAPHQL_URL": "http://crater.local/graphql", "PUBLIC_PLACEHOLDER_SMALL_IMAGE_URL": "https://via.placeholder.com/500", "PUBLIC_CURRENCY": "NOK", "PUBLIC_CURRENCY_LOCALE": "nb-NO", "PUBLIC_ALGOLIA_INDEX_NAME": "change me", "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}, { PUBLIC: process.env.PUBLIC });
const client = new ApolloClient({
  uri: PUBLIC_GRAPHQL_URL,
  cache: new InMemoryCache()
});

const $$Astro$11 = createAstro();
const $$Accordion = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$11, $$props, $$slots);
  Astro2.self = $$Accordion;
  const {
    flush,
    class: className,
    data = [],
    id: userId,
    alwaysOpen,
    headerClass,
    itemClass,
    bodyClass
  } = Astro2.props;
  const id = userId || `accordion-${nanoid(8)}`;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["accordion", className, { "accordion-flush": flush }], "class:list")}${addAttribute(id, "id")}> ${renderSlot($$result, $$slots["default"], renderTemplate` ${data && data.map((item, index) => renderTemplate`${renderComponent($$result, "Accordion.Item", Accordion.Item, { "class": itemClass }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Accordion.Header", Accordion.Header, { "parent": id, "index": index, "class": headerClass, "show": item.show }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate`${unescapeHTML(item.header)}` })} ` })} ${renderComponent($$result2, "Accordion.Body", Accordion.Body, { "parent": id, "index": index, "class": bodyClass, "show": item.show, "alwaysOpen": alwaysOpen }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate`${unescapeHTML(item.body)}` })} ` })} ` })}`)} `)} </div> `;
}, "C:/gitrepos/luya_shop_frontend/node_modules/astro-bootstrap/lib/components/Accordion.astro", void 0);

const $$Astro$10 = createAstro();
const $$AccordionBody = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$10, $$props, $$slots);
  Astro2.self = $$AccordionBody;
  const {
    parent: id,
    index: i,
    show,
    alwaysOpen = false,
    class: className,
    text
  } = Astro2.props;
  const dataBsParent = alwaysOpen ? null : `#${id}`;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`${id}-collapse-${i}`, "id")}${addAttribute(["accordion-collapse", "collapse", { show }], "class:list")}${addAttribute(`${id}-heading-${i}`, "aria-labelledby")}${addAttribute(dataBsParent, "data-bs-parent")}> <div${addAttribute(["accordion-body", className], "class:list")}> ${renderSlot($$result, $$slots["default"], renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })}`)} </div> </div>`;
}, "C:/gitrepos/luya_shop_frontend/node_modules/astro-bootstrap/lib/components/AccordionBody.astro", void 0);

const $$Astro$$ = createAstro();
const $$AccordionHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$$, $$props, $$slots);
  Astro2.self = $$AccordionHeader;
  const { parent: id, class: className, index: i, show, text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h2${addAttribute(["accordion-header", className], "class:list")}${addAttribute(`${id}-heading-${i}`, "id")}> <button class="accordion-button" type="button" data-bs-toggle="collapse"${addAttribute(`#${id}-collapse-${i}`, "data-bs-target")}${addAttribute(show, "aria-expanded")}${addAttribute(`${id}-collapse-${i}`, "aria-controls")}> ${renderSlot($$result, $$slots["default"], renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })}`)} </button> </h2>`;
}, "C:/gitrepos/luya_shop_frontend/node_modules/astro-bootstrap/lib/components/AccordionHeader.astro", void 0);

const $$Astro$_ = createAstro();
const $$AccordionItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$_, $$props, $$slots);
  Astro2.self = $$AccordionItem;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["accordion-item", className], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/gitrepos/luya_shop_frontend/node_modules/astro-bootstrap/lib/components/AccordionItem.astro", void 0);

const Accordion = Object.assign($$Accordion, { Body: $$AccordionBody, Header: $$AccordionHeader, Item: $$AccordionItem });

const $$Astro$Z = createAstro();
const $$Alert = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$Z, $$props, $$slots);
  Astro2.self = $$Alert;
  const { variant, class: className, dismissable } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "alert",
    `alert-${variant}`,
    className,
    { "alert-dismissible": dismissable }
  ], "class:list")} role="alert"> <div>${renderSlot($$result, $$slots["default"])}</div> ${dismissable && renderTemplate`<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`} </div> `;
}, "C:/gitrepos/luya_shop_frontend/node_modules/astro-bootstrap/lib/components/Alert.astro", void 0);

const $$Astro$Y = createAstro();
const $$AlertHeading = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$Y, $$props, $$slots);
  Astro2.self = $$AlertHeading;
  const { text, h = 4, class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["alert-heading", `h-${h}`, className], "class:list")}> ${renderSlot($$result, $$slots["default"], renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })}`)} </div>`;
}, "C:/gitrepos/luya_shop_frontend/node_modules/astro-bootstrap/lib/components/AlertHeading.astro", void 0);

const $$Astro$X = createAstro();
const $$AlertLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$X, $$props, $$slots);
  Astro2.self = $$AlertLink;
  const { href, text, class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(["alert-link", className], "class:list")}>${renderSlot($$result, $$slots["default"], renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })}`)}</a>`;
}, "C:/gitrepos/luya_shop_frontend/node_modules/astro-bootstrap/lib/components/AlertLink.astro", void 0);

Object.assign($$Alert, { Heading: $$AlertHeading, Link: $$AlertLink });

const items = (path) => {
  const slugs = path.split("/").filter((x) => x);
  let currentPath = "";
  const parts = [
    {
      text: "Home",
      href: path !== "/" ? "/" : void 0
    }
  ];
  slugs.forEach((slug) => {
    const text = slug.replace(/[-_]/g, " ");
    currentPath = `${currentPath}/${slug}`;
    const href = currentPath;
    parts.push({
      text: titleCase(text),
      href
    });
  });
  return parts;
};

const $$Astro$W = createAstro();
const $$VanishLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$W, $$props, $$slots);
  Astro2.self = $$VanishLink;
  const { href, class: className, text, ...props } = Astro2.props;
  let Tag = "";
  if (href) {
    Tag = "a";
  } else {
    Tag = "span";
  }
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "href": href, "class": className, ...props }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"], renderTemplate`${text}`)}` })}`;
}, "C:/gitrepos/luya_shop_frontend/node_modules/astro-bootstrap/lib/utils/VanishLink.astro", void 0);

const $$Astro$V = createAstro();
const $$BreadcrumbItemIterate = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$V, $$props, $$slots);
  Astro2.self = $$BreadcrumbItemIterate;
  const { class: className } = Astro2.props;
  const path = Astro2.url.pathname;
  const parts = items(path);
  return renderTemplate`${parts.map(({ text, href }) => {
    const active = path === href;
    const link = active ? void 0 : href;
    return renderTemplate`${renderComponent($$result, "Breadcrumb.Item", Breadcrumb.Item, { "class": className, "active": active }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "VanishLink", $$VanishLink, { "href": link, "class": className }, { "default": ($$result3) => renderTemplate`${text}` })}` })}`;
  })}`;
}, "C:/gitrepos/luya_shop_frontend/node_modules/astro-bootstrap/lib/components/BreadcrumbItemIterate.astro", void 0);

const $$Astro$U = createAstro();
const $$Breadcrumb = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$U, $$props, $$slots);
  Astro2.self = $$Breadcrumb;
  const {
    id,
    class: className,
    itemClass,
    "aria-label": ariaLabel = "Breadcrumb"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav${addAttribute(ariaLabel, "aria-label")}${addAttribute(id, "id")}> <ol class="breadcrumb"${addAttribute(className, "class")}> ${renderSlot($$result, $$slots["default"], renderTemplate` ${renderComponent($$result, "BreadcrumbItemIterate", $$BreadcrumbItemIterate, { "class": itemClass })} `)} </ol> </nav>`;
}, "C:/gitrepos/luya_shop_frontend/node_modules/astro-bootstrap/lib/components/Breadcrumb.astro", void 0);

const $$Astro$T = createAstro();
const $$BreadcrumbItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$T, $$props, $$slots);
  Astro2.self = $$BreadcrumbItem;
  const { class: className, active } = Astro2.props;
  const ariaCurrent = active ? "page" : void 0;
  return renderTemplate`${maybeRenderHead()}<li${addAttribute(["breadcrumb-item", className, { active }], "class:list")}${addAttribute(ariaCurrent, "aria-current")}> ${renderSlot($$result, $$slots["default"])} </li>`;
}, "C:/gitrepos/luya_shop_frontend/node_modules/astro-bootstrap/lib/components/BreadcrumbItem.astro", void 0);

const Breadcrumb = Object.assign($$Breadcrumb, { Item: $$BreadcrumbItem });

const $$Astro$S = createAstro();
const $$Button = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$S, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    class: className,
    dropdown = false,
    variant,
    text,
    size,
    modalClose = false
  } = Astro2.props;
  let props = {};
  if (dropdown) {
    props = { "data-bs-toggle": "dropdown", "aria-expanded": "false" };
  } else if (modalClose) {
    props = { "data-bs-dismiss": "modal" };
  }
  return renderTemplate`${maybeRenderHead()}<button${addAttribute([
    "btn",
    `btn-${variant}`,
    className,
    {
      "dropdown-toggle": dropdown,
      "btn-sm": size === "sm",
      "btn-lg": size === "lg"
    }
  ], "class:list")} type="button"${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"], renderTemplate`${text}`)} </button>`;
}, "C:/gitrepos/luya_shop_frontend/node_modules/astro-bootstrap/lib/components/Button.astro", void 0);

const $$Astro$R = createAstro();
const $$Carousel = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$R, $$props, $$slots);
  Astro2.self = $$Carousel;
  const { id, class: className, dark, fade } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(id, "id")}${addAttribute([
    "carousel",
    "slide",
    className,
    { "carousel-dark": dark, "carousel-fade": fade }
  ], "class:list")} data-bs-ride="carousel"> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "C:/gitrepos/luya_shop_frontend/node_modules/astro-bootstrap/lib/components/Carousel.astro", void 0);

const $$Astro$Q = createAstro();
const $$CarouselControl = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$Q, $$props, $$slots);
  Astro2.self = $$CarouselControl;
  const { class: className, id, direction } = Astro2.props;
  const text = direction == "prev" ? "Previous" : "Next";
  return renderTemplate`${maybeRenderHead()}<button${addAttribute([className, `carousel-control-${direction}`], "class:list")} type="button"${addAttribute(`#${id}`, "data-bs-target")}${addAttribute(direction, "data-bs-slide")}> <span${addAttribute(`carousel-control-${direction}-icon`, "class")} aria-hidden="true"></span> <span class="visually-hidden">${text}</span> </button>`;
}, "C:/gitrepos/luya_shop_frontend/node_modules/astro-bootstrap/lib/components/CarouselControl.astro", void 0);

const $$Astro$P = createAstro();
const $$CarouselControls = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$P, $$props, $$slots);
  Astro2.self = $$CarouselControls;
  const { class: className, id } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "CarouselControl", $$CarouselControl, { "id": id, "direction": "prev", "class": className })} ${renderComponent($$result, "CarouselControl", $$CarouselControl, { "id": id, "direction": "next", "class": className })}`;
}, "C:/gitrepos/luya_shop_frontend/node_modules/astro-bootstrap/lib/components/CarouselControls.astro", void 0);

const $$Astro$O = createAstro();
const $$CarouselIndicator = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$O, $$props, $$slots);
  Astro2.self = $$CarouselIndicator;
  const {
    class: className,
    id,
    index,
    active,
    "aria-current": ariaCurrent,
    "aria-label": ariaLabel
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button type="button"${addAttribute(`#${id}`, "data-bs-target")}${addAttribute(index, "data-bs-slide-to")}${addAttribute([className, { active }], "class:list")}${addAttribute(ariaCurrent, "aria-current")}${addAttribute(ariaLabel, "aria-label")}></button>`;
}, "C:/gitrepos/luya_shop_frontend/node_modules/astro-bootstrap/lib/components/CarouselIndicator.astro", void 0);

const $$Astro$N = createAstro();
const $$CarouselIndicators = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$N, $$props, $$slots);
  Astro2.self = $$CarouselIndicators;
  const { slides, class: className, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="carousel-indicators"> ${slides.map((slide, index) => {
    const ariaCurrent = slide.active ? "page" : void 0;
    return renderTemplate`${renderComponent($$result, "Carousel.Indicator", Carousel.Indicator, { "id": id, "index": index, "class": className, "aria-current": ariaCurrent, "aria-label": slide.alt, "active": slide.active })}`;
  })} </div>`;
}, "C:/gitrepos/luya_shop_frontend/node_modules/astro-bootstrap/lib/components/CarouselIndicators.astro", void 0);

const $$Astro$M = createAstro();
const $$CarouselInner = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$M, $$props, $$slots);
  Astro2.self = $$CarouselInner;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["carousel-inner", className], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/gitrepos/luya_shop_frontend/node_modules/astro-bootstrap/lib/components/CarouselInner.astro", void 0);

const $$Astro$L = createAstro();
const $$CarouselItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$L, $$props, $$slots);
  Astro2.self = $$CarouselItem;
  const { class: className, active } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["carousel-item", className, { active }], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/gitrepos/luya_shop_frontend/node_modules/astro-bootstrap/lib/components/CarouselItem.astro", void 0);

const Carousel = Object.assign($$Carousel, {
  Controls: $$CarouselControls,
  Control: $$CarouselControl,
  Indicator: $$CarouselIndicator,
  Indicators: $$CarouselIndicators,
  Inner: $$CarouselInner,
  Item: $$CarouselItem
});

const $$Astro$K = createAstro();
const $$DropdownDivider = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$K, $$props, $$slots);
  Astro2.self = $$DropdownDivider;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<hr${addAttribute(["dropdown-divider", className], "class:list")}>`;
}, "C:/gitrepos/luya_shop_frontend/node_modules/astro-bootstrap/lib/components/DropdownDivider.astro", void 0);

const $$Astro$J = createAstro();
const $$ActiveLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$J, $$props, $$slots);
  Astro2.self = $$ActiveLink;
  const {
    href,
    class: className,
    disabled = false,
    activeClass = "active",
    disabledClass = "disabled",
    text,
    parent,
    ...props
  } = Astro2.props;
  let active = href === Astro2.url.pathname;
  const ariaCurrent = active ? "page" : void 0;
  const activeClassStr = active ? `${activeClass}` : void 0;
  const disabledClassStr = disabled ? disabledClass : void 0;
  const classCompiled = clsx([activeClassStr, disabledClassStr, className]);
  if (parent) {
    if (Astro2.url.pathname.includes(href)) {
      active = true;
    }
  }
  return renderTemplate`${renderComponent($$result, "VanishLink", $$VanishLink, { "href": disabled ? void 0 : href, "class": classCompiled, "aria-current": ariaCurrent, ...props }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"], renderTemplate`${text}`)} ` })}`;
}, "C:/gitrepos/luya_shop_frontend/node_modules/astro-bootstrap/lib/utils/ActiveLink.astro", void 0);

const $$Astro$I = createAstro();
const $$DropdownItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$I, $$props, $$slots);
  Astro2.self = $$DropdownItem;
  const { href, text, class: className, ...props } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "ActiveLink", $$ActiveLink, { "href": href, "class": ["dropdown-item", className], ...props }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"], renderTemplate`${text}`)} ` })}`;
}, "C:/gitrepos/luya_shop_frontend/node_modules/astro-bootstrap/lib/components/DropdownItem.astro", void 0);

const $$Astro$H = createAstro();
const $$DropdownHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$H, $$props, $$slots);
  Astro2.self = $$DropdownHeader;
  const { text, class: className, nav = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(["dropdown-toggle", className, { "nav-link": nav }], "class:list")} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> ${renderSlot($$result, $$slots["default"], renderTemplate`${text}`)} </a>`;
}, "C:/gitrepos/luya_shop_frontend/node_modules/astro-bootstrap/lib/components/DropdownHeader.astro", void 0);

const $$Astro$G = createAstro();
const $$DropdownMenu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$G, $$props, $$slots);
  Astro2.self = $$DropdownMenu;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(["dropdown-menu", className], "class:list")}> ${renderSlot($$result, $$slots["default"])} </ul>`;
}, "C:/gitrepos/luya_shop_frontend/node_modules/astro-bootstrap/lib/components/DropdownMenu.astro", void 0);

const $$Astro$F = createAstro();
const $$Dropdown = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$F, $$props, $$slots);
  Astro2.self = $$Dropdown;
  const { class: className, nav = false } = Astro2.props;
  const Tag = nav ? "li" : "div";
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class:list": ["dropdown", className, { "nav-item": nav }] }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} `;
}, "C:/gitrepos/luya_shop_frontend/node_modules/astro-bootstrap/lib/components/Dropdown.astro", void 0);

const Dropdown = Object.assign($$Dropdown, { Divider: $$DropdownDivider, Item: $$DropdownItem, Header: $$DropdownHeader, Menu: $$DropdownMenu });

const $$Astro$E = createAstro();
const $$Modal = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$E, $$props, $$slots);
  Astro2.self = $$Modal;
  const { id, class: className, fade } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["modal", className, { fade }], "class:list")}${addAttribute(id, "id")} tabindex="-1"${addAttribute(`${id}-label`, "aria-labelledby")} aria-hidden="true"> <div class="modal-dialog"> <div class="modal-content"> ${renderSlot($$result, $$slots["default"])} </div> </div> </div> `;
}, "C:/gitrepos/luya_shop_frontend/node_modules/astro-bootstrap/lib/components/Modal.astro", void 0);

const $$Astro$D = createAstro();
const $$ModalBody = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$D, $$props, $$slots);
  Astro2.self = $$ModalBody;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["modal-body", className], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/gitrepos/luya_shop_frontend/node_modules/astro-bootstrap/lib/components/ModalBody.astro", void 0);

const $$Astro$C = createAstro();
const $$ModalClose = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$C, $$props, $$slots);
  Astro2.self = $$ModalClose;
  const { class: className, variant, text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button type="button"${addAttribute(["btn", `btn-${variant}`, className], "class:list")} data-bs-dismiss="modal"> ${renderSlot($$result, $$slots["default"], renderTemplate`${text}`)} </button>`;
}, "C:/gitrepos/luya_shop_frontend/node_modules/astro-bootstrap/lib/components/ModalClose.astro", void 0);

const $$Astro$B = createAstro();
const $$ModalFooter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$B, $$props, $$slots);
  Astro2.self = $$ModalFooter;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["modal-footer", className], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/gitrepos/luya_shop_frontend/node_modules/astro-bootstrap/lib/components/ModalFooter.astro", void 0);

const $$Astro$A = createAstro();
const $$ModalHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$A, $$props, $$slots);
  Astro2.self = $$ModalHeader;
  const { parent: id, h = 5, class: className } = Astro2.props;
  const Heading = `h${h}`;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["modal-header", className], "class:list")}> ${renderComponent($$result, "Heading", Heading, { "class": "modal-title", "id": `${id}-label` }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })} <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> </div>`;
}, "C:/gitrepos/luya_shop_frontend/node_modules/astro-bootstrap/lib/components/ModalHeader.astro", void 0);

Object.assign($$Modal, { Body: $$ModalBody, Close: $$ModalClose, Footer: $$ModalFooter, Header: $$ModalHeader });

const $$Astro$z = createAstro();
const $$Nav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$z, $$props, $$slots);
  Astro2.self = $$Nav;
  const { class: className, tabs, pills, justified, fill } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(["nav", className, { "nav-tabs": tabs, "nav-pills": pills, "nav-justified": justified, "nav-fill": fill }], "class:list")}> ${renderSlot($$result, $$slots["default"])} </ul>`;
}, "C:/gitrepos/luya_shop_frontend/node_modules/astro-bootstrap/lib/components/Nav.astro", void 0);

const $$Astro$y = createAstro();
const $$NavLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$y, $$props, $$slots);
  Astro2.self = $$NavLink;
  const { href, class: className, disabled, text } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "ActiveLink", $$ActiveLink, { "href": href, "class": ["nav-link", className], "disabled": disabled }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"], renderTemplate`${text}`)} ` })}`;
}, "C:/gitrepos/luya_shop_frontend/node_modules/astro-bootstrap/lib/components/NavLink.astro", void 0);

const $$Astro$x = createAstro();
const $$NavItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$x, $$props, $$slots);
  Astro2.self = $$NavItem;
  const { class: className, href, disabled, text, linkClass, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li${addAttribute(["nav-item", className], "class:list")}> ${renderComponent($$result, "Nav.Link", Nav.Link, { "class": linkClass, "disabled": disabled, "href": href, ...props }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"], renderTemplate`${text}`)}` })} </li>`;
}, "C:/gitrepos/luya_shop_frontend/node_modules/astro-bootstrap/lib/components/NavItem.astro", void 0);

const Nav = Object.assign($$Nav, { Link: $$NavLink, Item: $$NavItem });

const $$Astro$w = createAstro();
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$w, $$props, $$slots);
  Astro2.self = $$Navbar;
  const { class: className, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav${addAttribute(["navbar", className], "class:list")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </nav>`;
}, "C:/gitrepos/luya_shop_frontend/node_modules/astro-bootstrap/lib/components/Navbar.astro", void 0);

const $$Astro$v = createAstro();
const $$NavbarCollapse = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$v, $$props, $$slots);
  Astro2.self = $$NavbarCollapse;
  const { id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="collapse navbar-collapse"${addAttribute(id, "id")}> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "C:/gitrepos/luya_shop_frontend/node_modules/astro-bootstrap/lib/components/NavbarCollapse.astro", void 0);

const $$Astro$u = createAstro();
const $$NavbarItems = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$u, $$props, $$slots);
  Astro2.self = $$NavbarItems;
  const { items, class: className } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Navbar.Nav", Navbar.Nav, { "class": className }, { "default": ($$result2) => renderTemplate`${items.map(
    (item) => item.subItems ? renderTemplate`${renderComponent($$result2, "Dropdown", Dropdown, { "nav": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Dropdown.Header", Dropdown.Header, { "nav": true }, { "default": ($$result4) => renderTemplate`${item.text}` })} ${renderComponent($$result3, "Dropdown.Menu", Dropdown.Menu, {}, { "default": ($$result4) => renderTemplate`${item.subItems.map(
      (subItem) => subItem.divider ? renderTemplate`${renderComponent($$result4, "Dropdown.Divider", Dropdown.Divider, {})}` : renderTemplate`${renderComponent($$result4, "Dropdown.Item", Dropdown.Item, { ...subItem })}`
    )}` })} ` })}` : renderTemplate`${renderComponent($$result2, "Nav.Item", Nav.Item, { ...item })}`
  )}` })}`;
}, "C:/gitrepos/luya_shop_frontend/node_modules/astro-bootstrap/lib/components/NavbarItems.astro", void 0);

const $$Astro$t = createAstro();
const $$NavbarNav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$t, $$props, $$slots);
  Astro2.self = $$NavbarNav;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(["navbar-nav", className], "class:list")}> ${renderSlot($$result, $$slots["default"])} </ul>`;
}, "C:/gitrepos/luya_shop_frontend/node_modules/astro-bootstrap/lib/components/NavbarNav.astro", void 0);

const $$Astro$s = createAstro();
const $$NavbarToggler = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$s, $$props, $$slots);
  Astro2.self = $$NavbarToggler;
  const { controls } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button class="navbar-toggler" type="button" data-bs-toggle="collapse"${addAttribute(`#${controls}`, "data-bs-target")}${addAttribute(controls, "aria-controls")} aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>`;
}, "C:/gitrepos/luya_shop_frontend/node_modules/astro-bootstrap/lib/components/NavbarToggler.astro", void 0);

const Navbar = Object.assign($$Navbar, {
  Collapse: $$NavbarCollapse,
  Nav: $$NavbarNav,
  Items: $$NavbarItems,
  Toggler: $$NavbarToggler
});

const getRange = (start, end) => {
  return Array(end - start + 1).fill(void 0).map((v, i) => i + start);
};
const createPageNumbers = (currentPage, pageCount) => {
  let delta;
  if (pageCount <= 7) {
    delta = 7;
  } else {
    delta = currentPage > 4 && currentPage < pageCount - 3 ? 2 : 4;
  }
  const range = {
    start: Math.round(currentPage - delta / 2),
    end: Math.round(currentPage + delta / 2)
  };
  if (range.start - 1 === 1 || range.end + 1 === pageCount) {
    range.start += 1;
    range.end += 1;
  }
  let pages = currentPage > delta ? getRange(
    Math.min(range.start, pageCount - delta),
    Math.min(range.end, pageCount)
  ) : getRange(1, Math.min(pageCount, delta + 1));
  const withDots = (value, pair) => pages.length + 1 !== pageCount ? pair : [value];
  if (pages[0] !== 1) {
    pages = withDots(1, [1, "..."]).concat(pages);
  }
  if (pages[pages.length - 1] < pageCount) {
    pages = pages.concat(withDots(pageCount, ["...", pageCount]));
  }
  return pages;
};
const createComponentData = (page, pathname) => {
  const { currentPage, lastPage, url } = page;
  const { prev, next } = url;
  const pageNums = createPageNumbers(currentPage, lastPage);
  let baseURL = pathname.replace(/\d+$/, "");
  baseURL = baseURL.replace(/\/$/, "");
  const pages = [
    {
      disabled: prev == null,
      href: prev,
      page: "Previous"
    }
  ];
  pageNums.forEach((page2) => {
    pages.push({
      disabled: false,
      href: page2 === "..." ? void 0 : page2 === 1 ? `${baseURL}` : `${baseURL}/${page2}`,
      page: page2.toString()
    });
  });
  pages.push({
    disabled: next == null,
    href: next,
    page: "Next"
  });
  return pages;
};

const $$Astro$r = createAstro();
const $$Pagination = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$Pagination;
  const {
    page,
    "aria-label": ariaLabel = "Page pagination control",
    class: className,
    itemClass,
    linkClass,
    size
  } = Astro2.props;
  const { pathname } = Astro2.url;
  const pages = createComponentData(page, pathname);
  return renderTemplate`${maybeRenderHead()}<nav${addAttribute(ariaLabel, "aria-label")}> <ul${addAttribute([
    "pagination",
    className,
    { "pagination-sm": size === "sm", "pagination-lg": size === "lg" }
  ], "class:list")}> ${renderSlot($$result, $$slots["default"], renderTemplate` ${pages && pages.map(({ href, disabled, page: page2 }) => renderTemplate`${renderComponent($$result, "Pagination.Item", Pagination.Item, { "class": itemClass, "disabled": disabled }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Pagination.Link", Pagination.Link, { "href": href, "class": linkClass }, { "default": ($$result3) => renderTemplate`${page2}` })} ` })}`)} `)} </ul> </nav>`;
}, "C:/gitrepos/luya_shop_frontend/node_modules/astro-bootstrap/lib/components/Pagination.astro", void 0);

const $$Astro$q = createAstro();
const $$PaginationItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$PaginationItem;
  const { disabled = false, class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li${addAttribute(["page-item", className, { disabled }], "class:list")}> ${renderSlot($$result, $$slots["default"])} </li>`;
}, "C:/gitrepos/luya_shop_frontend/node_modules/astro-bootstrap/lib/components/PaginationItem.astro", void 0);

const $$Astro$p = createAstro();
const $$PaginationLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$PaginationLink;
  const { href, class: className = "" } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "ActiveLink", $$ActiveLink, { "href": href, "class": `page-link ${className}` }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} <!-- class:list={['page-link', className]} -->`;
}, "C:/gitrepos/luya_shop_frontend/node_modules/astro-bootstrap/lib/components/PaginationLink.astro", void 0);

const Pagination = Object.assign($$Pagination, { Item: $$PaginationItem, Link: $$PaginationLink });

const $$Astro$o = createAstro();
const $$TabList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$TabList;
  const { id, class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(["nav nav-tabs", className], "class:list")}${addAttribute(`${id}-tabs`, "id")} role="tablist"> ${renderSlot($$result, $$slots["default"])} </ul> `;
}, "C:/gitrepos/luya_shop_frontend/node_modules/astro-bootstrap/lib/components/TabList.astro", void 0);

const $$Astro$n = createAstro();
const $$TabItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$TabItem;
  const {
    index,
    active = false,
    id,
    class: className,
    linkClass
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li${addAttribute(["nav-item", className], "class:list")} role="presentation"> <button${addAttribute(["nav-link", linkClass, { active }], "class:list")}${addAttribute(`${id}-tab-${index}`, "id")} data-bs-toggle="tab"${addAttribute(`#${id}-tab-pane-${index}`, "data-bs-target")} type="button" role="tab"${addAttribute(`${id}-tab-pane-${index}`, "aria-controls")}${addAttribute(index === 0, "aria-selected")}> ${renderSlot($$result, $$slots["default"])} </button> </li>`;
}, "C:/gitrepos/luya_shop_frontend/node_modules/astro-bootstrap/lib/components/TabItem.astro", void 0);

const $$Astro$m = createAstro();
const $$TabContent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$TabContent;
  const { class: className = "", id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["tab-content", className], "class:list")}${addAttribute(`${id}-tab-content`, "id")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/gitrepos/luya_shop_frontend/node_modules/astro-bootstrap/lib/components/TabContent.astro", void 0);

const $$Astro$l = createAstro();
const $$TabPane = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$TabPane;
  const {
    index,
    class: className,
    active = false,
    fade = false,
    id
  } = Astro2.props;
  const show = fade && active;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["tab-pane", className, { fade, show, active }], "class:list")}${addAttribute(`${id}-tab-pane-${index}`, "id")} role="tabpanel"${addAttribute(`${id}-tab-${index}`, "aria-labelledby")} tabindex="0"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/gitrepos/luya_shop_frontend/node_modules/astro-bootstrap/lib/components/TabPane.astro", void 0);

const Tab = Object.assign({ List: $$TabList, Item: $$TabItem, Content: $$TabContent, Pane: $$TabPane });

const $$Astro$k = createAstro();
const $$Tabs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$Tabs;
  const {
    tabs,
    id: userId,
    listClass,
    itemClass,
    linkClass,
    contentClass,
    paneClass,
    fade = false
  } = Astro2.props;
  const id = userId || `tabs-${nanoid(8)}`;
  return renderTemplate`${renderComponent($$result, "Tab.List", Tab.List, { "id": id, "class": listClass }, { "default": ($$result2) => renderTemplate`${tabs && tabs.map((tab, index) => renderTemplate`${renderComponent($$result2, "Tab.Item", Tab.Item, { "index": index, "id": id, "active": tab.active, "class": itemClass, "linkClass": linkClass }, { "default": ($$result3) => renderTemplate`${tab.title}` })}`)}` })} ${renderComponent($$result, "Tab.Content", Tab.Content, { "class": contentClass, "id": id }, { "default": ($$result2) => renderTemplate`${tabs && tabs.map((tab, index) => renderTemplate`${renderComponent($$result2, "Tab.Pane", Tab.Pane, { "index": index, "fade": fade, "id": id, "active": tab.active, "class": paneClass }, { "default": ($$result3) => renderTemplate`${tab.body}` })}`)}` })}`;
}, "C:/gitrepos/luya_shop_frontend/node_modules/astro-bootstrap/lib/components/Tabs.astro", void 0);

const $$Astro$j = createAstro();
const $$Toast = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Toast;
  const { id, class: className, animation = true, autohide = true, delay = 5e3 } = Astro2.props;
  const config = { delay, animation, autohide };
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(id, "id")}${addAttribute(["toast", className], "class:list")} role="alert" aria-live="assertive" aria-atomic="true"${addAttribute(JSON.stringify(config), "data-bs-config")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/gitrepos/luya_shop_frontend/node_modules/astro-bootstrap/lib/components/Toast.astro", void 0);

const $$Astro$i = createAstro();
const $$ToastBody = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$ToastBody;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["toast-body", className], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/gitrepos/luya_shop_frontend/node_modules/astro-bootstrap/lib/components/ToastBody.astro", void 0);

const $$Astro$h = createAstro();
const $$ToastClose = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$ToastClose;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button type="button"${addAttribute(["btn-close", className], "class:list")} data-bs-dismiss="toast" aria-label="Close"></button>`;
}, "C:/gitrepos/luya_shop_frontend/node_modules/astro-bootstrap/lib/components/ToastClose.astro", void 0);

const $$Astro$g = createAstro();
const $$ToastContainer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$ToastContainer;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["toast-container", className], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/gitrepos/luya_shop_frontend/node_modules/astro-bootstrap/lib/components/ToastContainer.astro", void 0);

const $$Astro$f = createAstro();
const $$ToastHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$ToastHeader;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["toast-header", className], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/gitrepos/luya_shop_frontend/node_modules/astro-bootstrap/lib/components/ToastHeader.astro", void 0);

Object.assign($$Toast, { Body: $$ToastBody, Close: $$ToastClose, Container: $$ToastContainer, Header: $$ToastHeader });

const $$Astro$e = createAstro();
const $$Tooltip = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Tooltip;
  const {
    title,
    placement,
    animation,
    delay,
    html,
    trigger,
    customClass
  } = Astro2.props;
  const config = { title, placement, animation, delay, html, trigger, customClass };
  return renderTemplate`${renderComponent($$result, "tooltip-wrapper", "tooltip-wrapper", {}, { "default": () => renderTemplate` ${maybeRenderHead()}<span data-bs-toggle="tooltip"${addAttribute(JSON.stringify(config), "data-bs-config")}> ${renderSlot($$result, $$slots["default"])} </span> ` })} `;
}, "C:/gitrepos/luya_shop_frontend/node_modules/astro-bootstrap/lib/components/Tooltip.astro", void 0);

const $$Astro$d = createAstro();
const $$Marked = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Marked;
  const { inline = false } = Astro2.props;
  const slot = await Astro2.slots.render("default");
  return renderTemplate`${Astro2.slots.has("default") && (inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(marked.parseInline(slot))}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(marked.parse(slot))}` })}`)}`;
}, "C:/gitrepos/luya_shop_frontend/node_modules/astro-bootstrap/lib/utils/Marked.astro", void 0);

const $$Astro$c = createAstro();
const $$InlineCode = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$InlineCode;
  const { code } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Marked", $$Marked, { "inline": true }, { "default": ($$result2) => renderTemplate`\`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(code)}` })}\`` })}`;
}, "C:/gitrepos/luya_shop_frontend/node_modules/astro-bootstrap/lib/utils/InlineCode.astro", void 0);

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main$h = {
  __name: 'ViewAllCategories',
  props: ["catData"],
  setup(__props, { expose: __expose }) {
  __expose();



const __returned__ = { get ActiveLink() { return $$ActiveLink } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($props.catData) {
    _push(`<div${ssrRenderAttrs(_attrs)}><section class="bg-white p_100"><div class="container"><div class="flex justify-center align-middle flex-col md:flex-row"><!--[-->`);
    ssrRenderList($props.catData, (nodes) => {
      _push(`<!--[--><!--[-->`);
      ssrRenderList(nodes, (category) => {
        _push(`<!--[-->`);
        if (category.slug !== undefined) {
          _push(`<div><a class="text-black cursor-pointer hover:underline"${
            ssrRenderAttr("href", `/category/${category.slug}`)
          }><div class="cursor-pointer ml-4 mt-[5rem] md:mt-[20rem] w-full md:w-64 flex-row"><div class="p-4 min-w-[10rem] flex items-center justify-center w-full h-16 text-center border border-gray-300 rounded-lg shadow hover:shadow-outline"><p class="text-lg">${
            ssrInterpolate(category.name)
          }</p></div></div></a></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--><!--]-->`);
    });
    _push(`<!--]--></div></div></section></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Category/ViewAllCategories.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : undefined
};
const ViewAllCategories = /*#__PURE__*/_export_sfc(_sfc_main$h, [['ssrRender',_sfc_ssrRender$h]]);

const $$Astro$b = createAstro();
const $$Categories = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Categories;
  const variables = { limit: 99 };
  const { data, loading } = await client.query({
    query: gql`
     {
      productCategories(first: 20) {
        nodes {
          id
          databaseId
          name
          slug
        }
      }
    }  
`,
    variables
  });
  console.log(data.productCategories);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Categories" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ViewAllCategories", ViewAllCategories, { "catData": data.productCategories, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/gitrepos/luya_shop_frontend/src/components/Category/ViewAllCategories.vue", "client:component-export": "default" })} ` })}`;
}, "C:/gitrepos/luya_shop_frontend/src/pages/categories.astro", void 0);

const $$file$a = "C:/gitrepos/luya_shop_frontend/src/pages/categories.astro";
const $$url$a = "/categories";

const categories = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Categories,
  file: $$file$a,
  url: $$url$a
}, Symbol.toStringTag, { value: 'Module' }));

/**
 * Checks if the given data object has any variations by accessing the product's variations nodes array.
 *
 * @param {Object} data - The data object to check for variations
 * @return {Boolean} Returns true if there are any variations, false otherwise.
 */
function hasVariations(data) {
  // Use optional chaining to access the nodes array safely, and nullish coalescing to default to an empty array
  const variationsNodes = data?.product?.variations?.nodes ?? [];
  return variationsNodes.length > 0;
}

/**
 * Formats a given price into a string with a currency symbol and locale.
 *
 * @param {string} price - The price to format.
 * @param {string} currency - The currency to use. Defaults to "NOK".
 * @param {string} currencyLocale - The locale to use for the currency symbol. Defaults to "nb-NO".
 * @return {string} The formatted price as a string with the currency symbol and locale.
 */
function formatPrice(price, currency, currencyLocale) {
  // Set default values
  const currencyPrice = currency || "NOK";
  const currencySymbol = currencyLocale || "nb-NO";

  if (!price) {
    return;
  }

  // Convert the price string to a numerical float value
  const numericPrice = parseFloat(price.replace(/[^\d.]/g, ""));

  return new Intl.NumberFormat(currencySymbol, {
    style: "currency",
    currency: currencyPrice,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(numericPrice);
}

/**
 * Filter variant price. Changes "kr198.00 - kr299.00" to kr299.00 or kr198 depending on the side variable
 * @param {String} side Which side of the string to return (which side of the "-" symbol)
 * @param {String} price The inputted price that we need to convert
 */
const filteredVariantPrice = (price, side) => {
  if (side === "right") {
    return price.substring(price.length, price.indexOf("-")).replace("-", "");
  }
  return price.substring(0, price.indexOf("-")).replace("-", "");
};

const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "ButtonComponent",
  props: {
    type: {},
    variant: {},
    size: {},
    disabled: { type: Boolean }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    type: $props.type ?? "button",
    class: [
      "btn",
      {
        "btn--primary": $props.variant === "primary",
        "btn--secondary": $props.variant === "secondary",
        "btn--sm": $props.size === "sm",
        "btn--md": $props.size === "md",
        "btn--lg": $props.size === "lg"
      }
    ],
    disabled: $props.disabled
  }, _attrs))} data-v-442194c8>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/UI/ButtonComponent.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const ButtonComponent = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$g], ["__scopeId", "data-v-442194c8"]]);

const FormatToVND = (price) => {
  return price.toLocaleString("rs", { style: "currency", currency: "INR" });
};

const _sfc_main$f = {
  __name: 'ShowAllProductsCategory',
  props: ["allProducts"],
  setup(__props, { expose: __expose }) {
  __expose();




const productImage = product =>
  product.image ? product.image.sourceUrl : process.env.placeholderSmallImage;


const __returned__ = { productImage, get filteredVariantPrice() { return filteredVariantPrice }, ButtonComponent, get FormatToVND() { return FormatToVND } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "container mt-100" }, _attrs))}><div class="flex flex-wrap items-center"><!--[-->`);
  ssrRenderList($props.allProducts, (product) => {
    _push(`<!--[-->`);
    if (product.slug) {
      _push(`<div class="flex flex-col mt-6 sm:w1/2 md:w-1/3 lg:1/4 xl:w-1/4"><a${
        ssrRenderAttr("href", '/products/' + product.slug + '/')
      }><img id="product-image" class="container mx-auto transition duration-700 ease-in-out transform cursor-pointer lg:w-64 xl:w-64 sm:p-4 hover:scale-95"${
        ssrRenderAttr("alt", product.name)
      }${
        ssrRenderAttr("src", $setup.productImage(product))
      }></a><div class="flex justify-center pt-3"><p class="text-xl font-bold text-center cursor-pointer">${
        ssrInterpolate(product.name)
      }</p></div>`);
      if (product.onSale) {
        _push(`<div class="flex justify-center mt-2"><div class="text-lg text-gray-900 line-through">`);
        if (product.variations) {
          _push(`<span>${ssrInterpolate($setup.filteredVariantPrice(product.price, "right"))}</span>`);
        } else {
          _push(`<span>${ssrInterpolate(product.regularPrice)}</span>`);
        }
        _push(`</div><div class="ml-4 text-xl text-gray-900">`);
        if (product.variations) {
          _push(`<span>${ssrInterpolate($setup.filteredVariantPrice(product.price))}</span>`);
        } else {
          _push(`<span>${ssrInterpolate(product.salePrice)}</span>`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<div><p class="mt-2 text-xl text-center text-gray-900">${ssrInterpolate(product.price)}</p></div>`);
      }
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<!--]-->`);
  });
  _push(`<!--]--></div></section>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Products/ShowAllProductsCategory.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : undefined
};
const ShowAllProductsCategory = /*#__PURE__*/_export_sfc(_sfc_main$f, [['ssrRender',_sfc_ssrRender$f]]);

const _sfc_main$e = {
  __name: 'ShowProductsInCategory',
  props: ["allProducts"],
  setup(__props, { expose: __expose }) {
  __expose();




const __returned__ = { ShowAllProductsCategory };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "mt-100" }, _attrs))}><div class="container">`);
  if ($props.allProducts) {
    _push(`<div><h1 class="h-10 p-6 text-3xl font-bold text-center">${ssrInterpolate($props.allProducts.name)}</h1><br>`);
    _push(ssrRenderComponent($setup["ShowAllProductsCategory"], { allProducts: $props.allProducts }, null, _parent));
    if (!$props.allProducts.length) {
      _push(`<div class="mt-10"><h2 class="h-10 text-2xl font-bold text-center"> No products to display </h2></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></section>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Category/ShowProductsInCategory.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : undefined
};
const ShowProductsInCategory = /*#__PURE__*/_export_sfc(_sfc_main$e, [['ssrRender',_sfc_ssrRender$e]]);

async function fetchAxios(params) {
  Object.assign({"PUBLIC_GRAPHQL_URL_OL": "https://cakeoncall.in/cakery/graphql", "PUBLIC_GRAPHQL_URL": "http://crater.local/graphql", "PUBLIC_PLACEHOLDER_SMALL_IMAGE_URL": "https://via.placeholder.com/500", "PUBLIC_CURRENCY": "NOK", "PUBLIC_CURRENCY_LOCALE": "nb-NO", "PUBLIC_ALGOLIA_INDEX_NAME": "change me", "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}, { OS: process.env.OS, PUBLIC: process.env.PUBLIC });
  const url = "http://localhost:3030/api/page";
  const { data } = await axios.get(url, { params });
  return data.placeholders.content;
}

async function getAllCategories() {
  const variables = { limit: 99 };
const { data, loading } = await client.query({
  query: gql`
     {
      productCategories(first: 20) {
        nodes {
          id
          databaseId
          name
          slug
        }
      }
    }  
`,variables});

return data.productCategories;
}

async function getProductsFromCategory(tag) {
  console.log(typeof(tag));
  const categoryVariables = { slug: tag };
  const { data: allCategoryProducts } = await client.query({
    query: gql`
      query ProductsFromCategory($slug:String!) {
        productCategory(id: $slug, idType: SLUG) {
          id
          name
          products(where: { slug: $slug }) {
            nodes {
              id
              productId: databaseId
              averageRating
              slug
              description
              name
              image {
                id
                uri
                title
                srcSet
                sourceUrl
              }
              ... on SimpleProduct {
                price
                regularPrice
                id
              }
              ... on VariableProduct {
                price
                regularPrice
                id
              }
              ... on ExternalProduct {
                price
                id
                regularPrice
                externalUrl
              }
              ... on GroupProduct {
                products {
                  nodes {
                    ... on SimpleProduct {
                      id
                      regularPrice
                      price
                    }
                  }
                }
                id
              }
            }
          }
        }
      }
    `,
    variables: categoryVariables,
  });
  return allCategoryProducts;
}

async function getAllProductPaths() {
    const groups = await getAllCategories();
    const paths = [];
 
    for (const group of groups.nodes) {
      console.log("loop");
      console.log(group.slug);
      const catProducts = await getProductsFromCategory(group.slug);
      console.log(([group.slug,catProducts.productCategory.products.nodes.length]).join(" and "));
      paths.push({ params: { slug: group.slug }, props: { catProducts } });
    }
  
    return paths;
  }

const $$Astro$a = createAstro();
async function getStaticPaths() {
  const paths = await getAllProductPaths();
  console.log(paths);
  return paths;
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$slug;
  Object.assign({"PUBLIC_GRAPHQL_URL_OL": "https://cakeoncall.in/cakery/graphql", "PUBLIC_GRAPHQL_URL": "http://crater.local/graphql", "PUBLIC_PLACEHOLDER_SMALL_IMAGE_URL": "https://via.placeholder.com/500", "PUBLIC_CURRENCY": "NOK", "PUBLIC_CURRENCY_LOCALE": "nb-NO", "PUBLIC_ALGOLIA_INDEX_NAME": "change me", "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}, { Path: process.env.Path, PUBLIC: process.env.PUBLIC });
  Astro2.params;
  const { catProducts } = Astro2.props;
  console.log(catProducts.productCategory?.products?.nodes.length);
  const products = catProducts.productCategory?.products?.nodes || [];
  return renderTemplate`<!--
<Layout title="Categories">
    <ViewAllCategories catData={groups} client:load />
</Layout>
 -->${renderComponent($$result, "Layout", $$Layout, { "title": "Products" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <h1 class="text-3xl text-center font-bold p-6">Products page</h1> ${renderComponent($$result2, "ShowProductsInCategory", ShowProductsInCategory, { "allProducts": products, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/gitrepos/luya_shop_frontend/src/components/Category/ShowProductsInCategory.vue", "client:component-export": "default" })} </main> ` })}`;
}, "C:/gitrepos/luya_shop_frontend/src/pages/category/[slug].astro", void 0);
const $$file$9 = "C:/gitrepos/luya_shop_frontend/src/pages/category/[slug].astro";
const $$url$9 = "/category/[slug]";

const _slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file$9,
  getStaticPaths,
  url: $$url$9
}, Symbol.toStringTag, { value: 'Module' }));

async function getCart() {
  const data = await fetchAxios(`
  {
    cart {
      contents {
        nodes {
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
              srcSet
              altText
              title
            }
            galleryImages {
              nodes {
                id
                sourceUrl
                srcSet
                altText
                title
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
              srcSet
              altText
              title
            }
            attributes {
              nodes {
                id
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
      appliedCoupons {
        nodes {
          id
          databaseId
          discountType
          amount
          dateExpiry
          products {
            nodes {
              id
            }
          }
          productCategories {
            nodes {
              id
            }
          }
        }
      }
      subtotal
      subtotalTax
      shippingTax
      shippingTotal
      total
      totalTax
      feeTax
      feeTotal
      discountTax
      discountTotal
    }
  }
    `);

  return data?.cart;
}

async function updateCart(product) {
  const data = await fetchAxios(
    `
    mutation ($input: UpdateItemQuantitiesInput!) {
        updateItemQuantities(input: $input) {
          items {
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
          removed {
            key
            product {
              id
              databaseId
            }
            variation {
              id
              databaseId
            }
          }
          updated {
            key
            product {
              id
              databaseId
            }
            variation {
              id
              databaseId
            }
          }
        }
      }    

    `);

  return data?.items;
}

const _sfc_main$d = {
  __name: 'CartCheckoutButton',
  props: ["type"],
  setup(__props, { expose: __expose }) {
  __expose();

const props = __props;

const __returned__ = { props };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<a${
    ssrRenderAttrs(mergeProps({ href: "/checkout" }, _attrs))
  }><button class="w-48 h-12 px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-800 ease-in-out duration-300"${
    ssrRenderAttr("type", $setup.props.type)
  }> Checkout </button></a>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Cart/CartCheckoutButton.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : undefined
};
const CartCheckoutButton = /*#__PURE__*/_export_sfc(_sfc_main$d, [['ssrRender',_sfc_ssrRender$d]]);

const _sfc_main$c = {};

function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    id: "xsvg",
    xmlns: "https://www.w3.org/2000/svg",
    width: "40",
    height: "40",
    viewBox: "0 0 20 20",
    fill: "none",
    stroke: "red",
    strokeWidth: "1",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    class: "cursor-pointer"
  }, _attrs))}><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/UI/BaseXSVG.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : undefined
};
const BaseXSVG = /*#__PURE__*/_export_sfc(_sfc_main$c, [['ssrRender',_sfc_ssrRender$c]]);

const _sfc_main$b = {
  __name: 'Cart',
  props: ["showCheckoutButton"],
  setup(__props, { expose: __expose }) {
  __expose();

let cartContent = ref();
let subTotal = ref();
let cartLength = ref(0);



const handleProductRemove = (product) => {
  let updatedItems = [];
  updatedItems.push({
    key: product.key,
    quantity: 0,
  });

  updateCart().then(() => window.location.reload());
};

onBeforeMount(async () => {
  const cart = await getCart();

  if (cart && cart.contents.nodes[0]) {
    cartContent.value = cart.contents.nodes;
    cartLength.value = cart.contents.nodes[0].quantity;
    subTotal.value = cart.contents.nodes[0].total;
  }
});

const __returned__ = { get cartContent() { return cartContent }, set cartContent(v) { cartContent = v; }, get subTotal() { return subTotal }, set subTotal(v) { subTotal = v; }, get cartLength() { return cartLength }, set cartLength(v) { cartLength = v; }, handleProductRemove, ref, onBeforeMount, get getCart() { return getCart }, get updateCart() { return updateCart }, CartCheckoutButton, BaseXSVG };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($setup.cartContent) {
    _push(`<div${ssrRenderAttrs(_attrs)} data-v-c0110599><!--[-->`);
    ssrRenderList($setup.cartContent, (products) => {
      _push(`<div class="mx-auto mt-4 flex-container" data-v-c0110599>`);
      if ($props.showCheckoutButton) {
        _push(`<div class="item" data-v-c0110599><span class="block mt-2 font-extrabold" data-v-c0110599>Remove: <br data-v-c0110599></span><span class="item-content" data-v-c0110599><button data-v-c0110599>`);
        _push(ssrRenderComponent($setup["BaseXSVG"], null, null, _parent));
        _push(`</button></span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="item" data-v-c0110599><span class="block mt-2 font-extrabold" data-v-c0110599>Name: <br data-v-c0110599></span><span class="item-content" data-v-c0110599>${
        ssrInterpolate(products.product.name)
      }</span></div><div class="item" data-v-c0110599><span class="block mt-2 font-extrabold" data-v-c0110599>Quantity: <br data-v-c0110599></span><span class="item-content" data-v-c0110599>${
        ssrInterpolate(products.quantity)
      }</span></div><div class="item" data-v-c0110599><span class="block mt-2 font-extrabold" data-v-c0110599>Subtotal: <br data-v-c0110599></span><span class="item-content" data-v-c0110599>${
        ssrInterpolate(products.total)
      }</span></div></div>`);
    });
    _push(`<!--]-->`);
    if ($props.showCheckoutButton) {
      _push(`<div class="container mx-auto flex justify-end mt-2 max-w-[1380px]" data-v-c0110599>`);
      _push(ssrRenderComponent($setup["CartCheckoutButton"], null, null, _parent));
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<div${ssrRenderAttrs(_attrs)} data-v-c0110599><h2 class="m-4 text-3xl text-center" data-v-c0110599>Cart is currently empty</h2></div>`);
  }
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Cart/Cart.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : undefined
};
const Cart = /*#__PURE__*/_export_sfc(_sfc_main$b, [['ssrRender',_sfc_ssrRender$b],['__scopeId',"data-v-c0110599"]]);

const _sfc_main$a = {
  __name: 'BaseButton',
  props: ["type"],
  setup(__props, { expose: __expose }) {
  __expose();

const props = __props;

const __returned__ = { props };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    class: "px-4 py-2 font-bold bg-white border border-gray-400 border-solid rounded hover:bg-gray-400 ease-in-out duration-300",
    type: $setup.props.type
  }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/UI/BaseButton.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : undefined
};
const BaseButton = /*#__PURE__*/_export_sfc(_sfc_main$a, [['ssrRender',_sfc_ssrRender$a]]);

const BILLING_FIELDS = [
  {
    inputId: "firstName",
    label: "First name",
  },
  {
    inputId: "lastName",
    label: "Last name",
  },
  {
    inputId: "address1",
    label: "Address",
  },
  {
    inputId: "postcode",
    label: "Postcode",
  },
  {
    inputId: "city",
    label: "City",
  },
  {
    inputId: "email",
    label: "Email",
  },
  {
    inputId: "phone",
    label: "Phone",
  },
];

const BILLING_SCHEMA = object().shape({
  firstName: string().required(),
  lastName: string().required(),
  address1: string().required(),
  postcode: number().required().moreThan(1111),
  city: string().required(),
  email: string().required().email(),
  phone: number().required().moreThan(11111111),
});

async function checkoutOrder(order) {
  const data = await fetchAxios(
    `
    mutation CHECKOUT_MUTATION($input: CheckoutInput!) {
        checkout(input: $input) {
          result
          redirect
          order {
            databaseId
          }
        }
      }
    `);

  return data?.checkout.result;
}

const _sfc_main$9 = {
  __name: "Checkout",
  setup(__props, { expose: __expose }) {
    __expose();
    const upperCaseFirstChar = (input) => input.charAt(0).toUpperCase() + input.slice(1);
    const handleSubmit = (values) => {
      const paymentMethod = "cod";
      const billing = {
        firstName: values.firstName,
        lastName: values.lastName,
        address1: values.address1,
        address2: values.address2,
        city: values.city,
        country: values.country,
        state: values.state,
        postcode: values.postcode,
        email: values.email,
        phone: values.phone,
        company: values.company
      };
      const checkoutData = {
        //clientMutationId: uid(),
        clientMutationId: "12345678abcdef",
        billing,
        shipping: billing,
        shipToDifferentAddress: false,
        paymentMethod,
        isPaid: false,
        transactionId: "hjkhjkhsdsdiui"
      };
      try {
        checkoutOrder(checkoutData).then((result) => {
          if (result === "success") {
            location.href = "/success";
          } else {
            location.href = "/error";
          }
        });
      } catch (e) {
      }
    };
    const __returned__ = { upperCaseFirstChar, handleSubmit, get Form() {
      return Form;
    }, get Field() {
      return Field;
    }, get ErrorMessage() {
      return ErrorMessage;
    }, BaseButton, get BILLING_FIELDS() {
      return BILLING_FIELDS;
    }, get BILLING_SCHEMA() {
      return BILLING_SCHEMA;
    }, get checkoutOrder() {
      return checkoutOrder;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "text-gray-700 container p-4 py-2 mx-auto" }, _attrs))}>`);
  _push(ssrRenderComponent($setup["Form"], {
    "validation-schema": $setup.BILLING_SCHEMA,
    onSubmit: $setup.handleSubmit
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="mx-auto lg:w-1/2 flex flex-wrap"${_scopeId}><!--[-->`);
        ssrRenderList($setup.BILLING_FIELDS, (field) => {
          _push2(`<div class="w-1/2 p-2"${_scopeId}><label${ssrRenderAttr("for", field.inputId)}${_scopeId}>${ssrInterpolate(field.label)}</label>`);
          _push2(ssrRenderComponent($setup["Field"], {
            name: field.inputId
          }, {
            default: withCtx(({ field: field2, meta }, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<input${ssrRenderAttrs(mergeProps(field2, {
                  class: ["w-full px-4 py-2 mt-2 text-base bg-white border border-gray-400 rounded focus:outline-none focus:border-black", [
                    meta.valid ? "border-green-700 border-2" : "border-red-500 border-2"
                  ]]
                }))}${_scopeId2}>`);
              } else {
                return [
                  createVNode("input", mergeProps(field2, {
                    class: ["w-full px-4 py-2 mt-2 text-base bg-white border border-gray-400 rounded focus:outline-none focus:border-black", [
                      meta.valid ? "border-green-700 border-2" : "border-red-500 border-2"
                    ]]
                  }), null, 16)
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(ssrRenderComponent($setup["ErrorMessage"], {
            name: field.inputId
          }, {
            default: withCtx(({ message }, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<span class="text-lg text-red-500 font-bold"${_scopeId2}>${ssrInterpolate($setup.upperCaseFirstChar(message))}</span>`);
              } else {
                return [
                  createVNode("span", { class: "text-lg text-red-500 font-bold" }, toDisplayString($setup.upperCaseFirstChar(message)), 1)
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(`</div>`);
        });
        _push2(`<!--]--><div class="w-full flex justify-center mt-6"${_scopeId}>`);
        _push2(ssrRenderComponent($setup["BaseButton"], { type: "submit" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Submit`);
            } else {
              return [
                createTextVNode("Submit")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div>`);
      } else {
        return [
          createVNode("div", { class: "mx-auto lg:w-1/2 flex flex-wrap" }, [
            (openBlock(true), createBlock(Fragment$1, null, renderList($setup.BILLING_FIELDS, (field) => {
              return openBlock(), createBlock("div", {
                key: field.inputId,
                class: "w-1/2 p-2"
              }, [
                createVNode("label", {
                  for: field.inputId
                }, toDisplayString(field.label), 9, ["for"]),
                createVNode($setup["Field"], {
                  name: field.inputId
                }, {
                  default: withCtx(({ field: field2, meta }) => [
                    createVNode("input", mergeProps(field2, {
                      class: ["w-full px-4 py-2 mt-2 text-base bg-white border border-gray-400 rounded focus:outline-none focus:border-black", [
                        meta.valid ? "border-green-700 border-2" : "border-red-500 border-2"
                      ]]
                    }), null, 16)
                  ]),
                  _: 2
                }, 1032, ["name"]),
                createVNode($setup["ErrorMessage"], {
                  name: field.inputId
                }, {
                  default: withCtx(({ message }) => [
                    createVNode("span", { class: "text-lg text-red-500 font-bold" }, toDisplayString($setup.upperCaseFirstChar(message)), 1)
                  ]),
                  _: 2
                }, 1032, ["name"])
              ]);
            }), 128)),
            createVNode("div", { class: "w-full flex justify-center mt-6" }, [
              createVNode($setup["BaseButton"], { type: "submit" }, {
                default: withCtx(() => [
                  createTextVNode("Submit")
                ]),
                _: 1
              })
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</section>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Checkout/Checkout.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const Checkout = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9]]);

const $$Astro$9 = createAstro();
const $$Checkout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Checkout;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Checkout" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <h1 class="text-center text-3xl font-bold p-4">Checkout</h1> ${renderComponent($$result2, "Cart", Cart, { "showCheckoutButton": false, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/gitrepos/luya_shop_frontend/src/components/Cart/Cart.vue", "client:component-export": "default" })} ${renderComponent($$result2, "Checkout", Checkout, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/gitrepos/luya_shop_frontend/src/components/Checkout/Checkout.vue", "client:component-export": "default" })} </main> ` })}`;
}, "C:/gitrepos/luya_shop_frontend/src/pages/checkout.astro", void 0);

const $$file$8 = "C:/gitrepos/luya_shop_frontend/src/pages/checkout.astro";
const $$url$8 = "/checkout";

const checkout = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Checkout,
  file: $$file$8,
  url: $$url$8
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$8 = createAstro();
const $$Error = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Error;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Error page" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <h1>Error page</h1> <ul role="list">There was an error processing the order</ul> </main> ` })}`;
}, "C:/gitrepos/luya_shop_frontend/src/pages/error.astro", void 0);

const $$file$7 = "C:/gitrepos/luya_shop_frontend/src/pages/error.astro";
const $$url$7 = "/error";

const error = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Error,
  file: $$file$7,
  url: $$url$7
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$7 = createAstro();
const $$Menu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Menu;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Search" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <h1 class="text-center text-3xl font-bold p-4">Search</h1> <div id="app"> ${renderComponent($$result2, "router-view", "router-view", {})} </div> </main> ` })} `;
}, "C:/gitrepos/luya_shop_frontend/src/pages/menu.astro", void 0);

const $$file$6 = "C:/gitrepos/luya_shop_frontend/src/pages/menu.astro";
const $$url$6 = "/menu";

const menu = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Menu,
  file: $$file$6,
  url: $$url$6
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$6 = createAstro();
const $$Pricelist = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Pricelist;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Menu" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <!--================End Main Header Area =================--> <section class="banner_area" style="margin-top:135px;"> <div class="container"> <div class="banner_text"> <h3>Menu &#128073; &#127874; &#x20B9;</h3> <ul> <li><a href="index.html">Home</a></li> <li><a href="menu.html">Menu</a></li> </ul> </div> </div> </section> <!--================End Main Header Area =================--> <!--================Recipe Menu list Area =================--> <section class="price_list_area p_100"> <div class="container"> <div class="price_list_inner"> <div class="single_pest_title"> <h2>Our Price List</h2> <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p> </div> <div class="row"> <div class="col-lg-6"> <div class="discover_item_inner"> <div class="discover_item"> <h4>Double Chocolate Pie</h4> <p>Chocolate puding, vanilla, fruite rasberry jam milk <span>&#x20B9;8.99</span></p> </div> <div class="discover_item"> <h4>Zabaglione Cake</h4> <p>Chocolate puding, vanilla, fruite rasberry jam evporate milk <span>&#x20B9;12.99</span></p> </div> <div class="discover_item"> <h4>Blueberry Muffin</h4> <p>Chocolate puding, vanilla, fruite rasberry jam milk <span>&#x20B9;8.99</span></p> </div> <div class="discover_item"> <h4>Box of Delight</h4> <p>Chocolate puding, vanilla, fruite rasberry jam evporate milk <span>&#x20B9;7.99</span></p> </div> <div class="discover_item"> <h4>Classic French Croissant</h4> <p>Chocolate puding, vanilla, fruite rasberry jam evporate milk <span>&#x20B9;6.79</span></p> </div> <div class="discover_item"> <h4>Macarons & Tea</h4> <p>Chocolate puding, vanilla, fruite rasberry jam evporate milk <span>&#x20B9;5.99</span></p> </div> <div class="discover_item"> <h4>Strawberry Sweet Cake</h4> <p>Chocolate puding, vanilla, fruite rasberry jam evporate milk <span>&#x20B9;12.99</span></p> </div> <div class="discover_item"> <h4>Cupcake of Vanela</h4> <p>Chocolate puding, vanilla, fruite rasberry jam evporate milk <span>&#x20B9;20.00</span></p> </div> </div> </div> <div class="col-lg-6"> <div class="discover_item_inner"> <div class="discover_item"> <h4>Fried Egg Sandwich</h4> <p>Chocolate puding, vanilla, fruite rasberry jam milk <span>&#x20B9;8.99</span></p> </div> <div class="discover_item"> <h4>Multigrain Hot Cake</h4> <p>Chocolate puding, vanilla, fruite rasberry jam evporate milk <span>&#x20B9;12.99</span></p> </div> <div class="discover_item"> <h4>Branch Special Cake</h4> <p>Chocolate puding, vanilla, fruite rasberry jam milk <span>&#x20B9;8.99</span></p> </div> <div class="discover_item"> <h4>Bialy Egg Sandwich with Cake</h4> <p>Chocolate puding, vanilla, fruite rasberry jam milk <span>&#x20B9;7.99</span></p> </div> <div class="discover_item"> <h4>Strawberry Sweet Cake</h4> <p>Chocolate puding, vanilla, fruite rasberry jam evporate milk <span>&#x20B9;6.79</span></p> </div> <div class="discover_item"> <h4>Double Chocolate Pie</h4> <p>Chocolate puding, vanilla, fruite rasberry jam evporate milk <span>&#x20B9;5.99</span></p> </div> <div class="discover_item"> <h4>Blueberry Muffin</h4> <p>Chocolate puding, vanilla, fruite rasberry jam evporate milk <span>&#x20B9;12.99</span></p> </div> <div class="discover_item"> <h4>Classic Chocolate Cake</h4> <p>Chocolate puding, vanilla, fruite rasberry jam evporate milk <span>&#x20B9;20.00</span></p> </div> </div> </div> </div> <div class="row our_bakery_image"> <div class="col-md-4 col-6"> <img class="img-fluid" src="/images/our-bakery/bakery-1.jpg" alt=""> </div> <div class="col-md-4 col-6"> <img class="img-fluid" src="/images/our-bakery/bakery-2.jpg" alt=""> </div> <div class="col-md-4 col-6"> <img class="img-fluid" src="/images/our-bakery/bakery-3.jpg" alt=""> </div> </div> </div> </div> </section> <!--================End Main Header Area =================--> <!--================Newsletter Area =================--> <section class="newsletter_area"> <div class="container"> <div class="row newsletter_inner"> <div class="col-lg-6"> <div class="news_left_text"> <h4>Join our Newsletter list to get all the latest offers, discounts and other benefits</h4> </div> </div> <div class="col-lg-6"> <div class="newsletter_form"> <div class="input-group"> <input type="text" class="form-control" placeholder="Enter your email address"> <div class="input-group-append"> <button class="btn btn-outline-secondary" type="button">Subscribe Now</button> </div> </div> </div> </div> </div> </div> </section> <!--================End Newsletter Area =================--> </main> ` })}`;
}, "C:/gitrepos/luya_shop_frontend/src/pages/pricelist.astro", void 0);

const $$file$5 = "C:/gitrepos/luya_shop_frontend/src/pages/pricelist.astro";
const $$url$5 = "/pricelist";

const pricelist = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Pricelist,
  file: $$file$5,
  url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$5 = createAstro();
const $$Detail = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Detail;
  const { id } = Astro2.params;
  return renderTemplate`${maybeRenderHead()}<h1>Product Detail: ${{ id }}</h1>`;
}, "C:/gitrepos/luya_shop_frontend/src/pages/products/detail.astro", void 0);

const $$file$4 = "C:/gitrepos/luya_shop_frontend/src/pages/products/detail.astro";
const $$url$4 = "/products/detail";

const detail = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Detail,
  file: $$file$4,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const _sfc_main$8 = {
  __name: "ProductImage",
  props: {
    alt: { type: String, required: true },
    src: { type: String, required: true },
    width: { type: String, required: false },
    height: { type: String, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const { PUBLIC_PLACEHOLDER_SMALL_IMAGE_URL } = Object.assign({"PUBLIC_GRAPHQL_URL_OL": "https://cakeoncall.in/cakery/graphql", "PUBLIC_GRAPHQL_URL": "http://crater.local/graphql", "PUBLIC_PLACEHOLDER_SMALL_IMAGE_URL": "https://via.placeholder.com/500", "PUBLIC_CURRENCY": "NOK", "PUBLIC_CURRENCY_LOCALE": "nb-NO", "PUBLIC_ALGOLIA_INDEX_NAME": "change me", "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}, { PUBLIC: process.env.PUBLIC });
    const displayedImage = computed(() => {
      return props.src || PUBLIC_PLACEHOLDER_SMALL_IMAGE_URL;
    });
    const __returned__ = { props, PUBLIC_PLACEHOLDER_SMALL_IMAGE_URL, displayedImage, computed };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<img${ssrRenderAttrs(mergeProps({
    id: "product-image",
    class: "h-auto p-8 transition duration-500 ease-in-out transform md:p-0 hover:shadow-lg hover:scale-95",
    alt: $props.alt,
    src: $setup.displayedImage,
    width: $props.width,
    height: $props.height
  }, _attrs))}>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Products/ProductImage.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const ProductImage = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8]]);

const _sfc_main$7 = {
  __name: 'ProductPrice',
  props: {
  product: Object,
  priceFontSize: String,
  shouldCenterPrice: Boolean,
},
  setup(__props, { expose: __expose }) {
  __expose();

/**
 * Displays the price of a product, with support for sale prices and variations.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.product - The product to display the price for.
 * @param {string} [props.priceFontSize="normal"] - The font size for the price display.
 * @param {boolean} [props.shouldCenterPrice=false] - Whether to center the price display.
 */
const props = __props;

const onSale = computed(() => props.product.onSale);

const productHasVariations = computed(() => hasVariations(props.product));

const basePrice = computed(() => {
  if (productHasVariations.value) {
    return filteredVariantPrice(props.product.price);
  } else {
    return props.product.regularPrice;
  }
});

const displayPrice = computed(() => {
  if (onSale.value) {
    return productHasVariations.value
      ? filteredVariantPrice(props.product.price)
      : props.product.salePrice;
  } else {
    return props.product.price;
  }
});

const getFontSizeClass = computed(() => {
  switch (props.priceFontSize) {
    case "small":
      return "text-lg";
    case "normal":
      return "text-2xl";
    case "big":
      return "text-2xl";
    default:
      return "text-xl";
  }
});

const getSaleFontSizeClass = computed(() => {
  switch (props.priceFontSize) {
    case "small":
      return "text-lg";
    case "normal":
      return "text-xl";
    case "big":
      return "text-xl";
    default:
      return "text-xl";
  }
});

const __returned__ = { props, onSale, productHasVariations, basePrice, displayPrice, getFontSizeClass, getSaleFontSizeClass, computed, get formatPrice() { return formatPrice }, get filteredVariantPrice() { return filteredVariantPrice }, get hasVariations() { return hasVariations } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  if ($setup.onSale) {
    _push(`<div class="${
      ssrRenderClass([$props.shouldCenterPrice ? 'justify-center' : '', "flex"])
    }"><p class="${
      ssrRenderClass([$setup.getFontSizeClass, "pt-1 mt-4 text-gray-900"])
    }">${
      ssrInterpolate($setup.formatPrice($setup.displayPrice))
    }</p><p class="${
      ssrRenderClass([$setup.getSaleFontSizeClass, "pt-1 pl-4 mt-4 text-gray-900 line-through"])
    }">${
      ssrInterpolate($setup.formatPrice($setup.basePrice))
    }</p></div>`);
  } else {
    _push(`<p class="${
      ssrRenderClass([$props.shouldCenterPrice ? 'justify-center' : '', "flex pt-1 mt-4 text-2xl text-gray-900"])
    }">${
      ssrInterpolate($setup.formatPrice($setup.displayPrice))
    }</p>`);
  }
  _push(`</div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Products/ProductPrice.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : undefined
};
const ProductPrice = /*#__PURE__*/_export_sfc(_sfc_main$7, [['ssrRender',_sfc_ssrRender$7]]);

const _sfc_main$6 = {
  __name: "ShowAllProducts",
  props: ["allProducts"],
  setup(__props, { expose: __expose }) {
    __expose();
    const { PUBLIC_PLACEHOLDER_SMALL_IMAGE_URL } = Object.assign({"PUBLIC_GRAPHQL_URL_OL": "https://cakeoncall.in/cakery/graphql", "PUBLIC_GRAPHQL_URL": "http://crater.local/graphql", "PUBLIC_PLACEHOLDER_SMALL_IMAGE_URL": "https://via.placeholder.com/500", "PUBLIC_CURRENCY": "NOK", "PUBLIC_CURRENCY_LOCALE": "nb-NO", "PUBLIC_ALGOLIA_INDEX_NAME": "change me", "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}, { PUBLIC: process.env.PUBLIC });
    const productLink = (product) => {
      return {
        path: "/product/" + product.slug,
        query: { id: product.databaseId }
      };
    };
    const productImage = (product) => product.image ? product.image.sourceUrl : PUBLIC_PLACEHOLDER_SMALL_IMAGE_URL;
    const __returned__ = { PUBLIC_PLACEHOLDER_SMALL_IMAGE_URL, productLink, productImage, computed, ProductImage, ProductPrice };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "mt-100" }, _attrs))}><div id="product-container" class="container"><!--[-->`);
  ssrRenderList($props.allProducts, (product) => {
    _push(`<div class="flex flex-col mt-6 sm:w-1/2 md:w-1/3 lg:w-1/4 lg:mr-4"><a class="text-black cursor-pointer hover:underline" href="productLink(product)">`);
    _push(ssrRenderComponent($setup["ProductImage"], {
      alt: product.name,
      src: $setup.productImage(product)
    }, null, _parent));
    _push(`<div class="flex justify-center pt-3"><p class="text-2xl font-bold text-center cursor-pointer">${ssrInterpolate(product.name)}</p></div></a>`);
    _push(ssrRenderComponent($setup["ProductPrice"], {
      product,
      priceFontSize: "normal",
      shouldCenterPrice: true
    }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></section>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Products/ShowAllProducts.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const ShowAllProducts = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);

const $$Astro$4 = createAstro();
const $$Products = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Products;
  Object.assign({"PUBLIC_GRAPHQL_URL_OL": "https://cakeoncall.in/cakery/graphql", "PUBLIC_GRAPHQL_URL": "http://crater.local/graphql", "PUBLIC_PLACEHOLDER_SMALL_IMAGE_URL": "https://via.placeholder.com/500", "PUBLIC_CURRENCY": "NOK", "PUBLIC_CURRENCY_LOCALE": "nb-NO", "PUBLIC_ALGOLIA_INDEX_NAME": "change me", "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}, { PUBLIC: process.env.PUBLIC });
  Astro2.props;
  const productVariables = { limit: 99 };
  const { data: allProducts } = await client.query({
    query: gql`
    {
      products(first: 24) {
        nodes {
          databaseId
          name
          onSale
          slug
          image {
            sourceUrl
          }
          ... on SimpleProduct {
            databaseId
            price
            regularPrice
            salePrice
          }
          ... on VariableProduct {
            databaseId
            price
            regularPrice
            salePrice
            variations {
              nodes {
                price
                regularPrice
                salePrice
              }
            }
          }
        }
      }
    }
  `,
    variables: productVariables
  });
  const categoryVariables = { id: "dGVybToyMA==" };
  await client.query({
    query: gql`
    query ProductsFromCategory($id: ID!) {
      productCategory(id: $id, idType: ID) {
        id
        name
        products(first: 50) {
          nodes {
            id
            databaseId
            onSale
            averageRating
            slug
            description
            image {
              id
              uri
              title
              srcSet
              sourceUrl
            }
            name
            ... on SimpleProduct {
              salePrice
              regularPrice
              onSale
              price
              id
            }
            ... on VariableProduct {
              salePrice
              regularPrice
              onSale
              price
              id
            }
            ... on ExternalProduct {
              price
              id
              externalUrl
            }
            ... on GroupProduct {
              products {
                nodes {
                  ... on SimpleProduct {
                    id
                    price
                  }
                }
              }
              id
            }
          }
        }
      }
    }
  `,
    variables: categoryVariables
  });
  const products = (
    //  allCategoryProducts.productCategory?.products?.nodes ||
    allProducts.products?.nodes || []
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Products" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mt-100"> <h1 class="text-3xl text-center font-bold p-6">Products page</h1> ${renderComponent($$result2, "ShowAllProducts", ShowAllProducts, { "allProducts": products, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/gitrepos/luya_shop_frontend/src/components/Products/ShowAllProducts.vue", "client:component-export": "default" })} <p>The remark and rehype pipelines only run when your content is rendered, which explains why remarkPluginFrontmatter is only available after you call render() on your content entry. In contrast, getCollection() and getEntry() cannot return these values directly because they do not render your content.</p> </section> ` })}`;
}, "C:/gitrepos/luya_shop_frontend/src/pages/products.astro", void 0);
const $$file$3 = "C:/gitrepos/luya_shop_frontend/src/pages/products.astro";
const $$url$3 = "/products";

const products = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Products,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro();
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Search;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Search" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <h1 class="text-center text-3xl font-bold p-4">Search</h1>
SEARCH
</main> ` })}`;
}, "C:/gitrepos/luya_shop_frontend/src/pages/search.astro", void 0);

const $$file$2 = "C:/gitrepos/luya_shop_frontend/src/pages/search.astro";
const $$url$2 = "/search";

const search = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Search,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$Success = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Success;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Order placed" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <h1 class="text-center text-3xl font-bold p-4">Order placed</h1> </main> ` })}`;
}, "C:/gitrepos/luya_shop_frontend/src/pages/success.astro", void 0);

const $$file$1 = "C:/gitrepos/luya_shop_frontend/src/pages/success.astro";
const $$url$1 = "/success";

const success = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Success,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

reactive({
    count: 0,
    increment() {
      this.count++;
    }
});

const _sfc_main$5 = {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      onSlideChange: () => {},
      modules: [Autoplay],
    };
  },
  methods: {
    onSwiper(swiper) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            swiper.autoplay.start();
            observer.disconnect();
          }
        },
        { threshold: 0 }
      );
      observer.observe(swiper.el);
    },
  },
};

function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");

  _push(ssrRenderComponent(_component_swiper, mergeProps({
    modules: $setup.modules,
    "slides-per-view": 1.5,
    "space-between": 15,
    onActiveIndexChange: $setup.onSlideChange,
    onSwiper: $options.onSwiper
  }, _attrs), {
    default: withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(ssrRenderComponent(_component_swiper_slide, null, {
          default: withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<img src="/images/cakebanner1.jpg"${_scopeId}>`);
            } else {
              return [
                createVNode("img", { src: "/images/cakebanner1.jpg" })
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId));
        _push(ssrRenderComponent(_component_swiper_slide, null, {
          default: withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<img src="/images/cakebanner2.jpg"${_scopeId}>`);
            } else {
              return [
                createVNode("img", { src: "/images/cakebanner2.jpg" })
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId));
        _push(ssrRenderComponent(_component_swiper_slide, null, {
          default: withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<img src="/images/cakebanner3.jpg"${_scopeId}>`);
            } else {
              return [
                createVNode("img", { src: "/images/cakebanner3.jpg" })
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId));
      } else {
        return [
          createVNode(_component_swiper_slide, null, {
            default: withCtx(() => [
              createVNode("img", { src: "/images/cakebanner1.jpg" })
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, null, {
            default: withCtx(() => [
              createVNode("img", { src: "/images/cakebanner2.jpg" })
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, null, {
            default: withCtx(() => [
              createVNode("img", { src: "/images/cakebanner3.jpg" })
            ]),
            _: 1
          })
        ]
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Index/HomeCarousel.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : undefined
};
const HomeSlider = /*#__PURE__*/_export_sfc(_sfc_main$5, [['ssrRender',_sfc_ssrRender$5]]);

const _sfc_main$4 = {
  props: {
    block: Object,
  },
};

function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    ssrRenderAttrs(_attrs)
  }>${
    $props.block.values.html
  }</div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Index/LuyaCmsFrontendBlocksHtmlBlock.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : undefined
};
const HtmlBlock = /*#__PURE__*/_export_sfc(_sfc_main$4, [['ssrRender',_sfc_ssrRender$4]]);

const _sfc_main$3 = {
  props: {
    block: Object,
  },
};

function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<img${ssrRenderAttrs(mergeProps({
    src: $props.block.extras.image.source
  }, _attrs))}>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Index/LuyaBootstrap4BlocksImageBlock.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : undefined
};
const ImageBlock = /*#__PURE__*/_export_sfc(_sfc_main$3, [['ssrRender',_sfc_ssrRender$3]]);

// Import Swiper styles

const _sfc_main$2 = {
  props: {
    block: Object,
  },
};

function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "swiper" }, _attrs))}><div class="swiper-wrapper"><div class="swiper-slide">Slide 1</div><div class="swiper-slide">Slide 2</div><div class="swiper-slide">Slide 3</div> ... </div><div class="swiper-pagination"></div><div class="swiper-button-prev"></div><div class="swiper-button-next"></div><div class="swiper-scrollbar"></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Index/LuyaBootstrap4BlocksCarouselBlock.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined
};
const CarouselBlock = /*#__PURE__*/_export_sfc(_sfc_main$2, [['ssrRender',_sfc_ssrRender$2]]);

const _sfc_main$1 = {
  props: {
    block: Object,
  },
};

function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "row service_main_item_inner" }, _attrs))}><!--[-->`);
  ssrRenderList($props.block.extras.elements.categories, (category) => {
    _push(`<div class="col-lg-4 col-sm-6"><div class="service_m_item"><a${
      ssrRenderAttr("href", `/category/${category.id}/${category.slug}`)
    }><div class="service_img_inner"><img class="rounded-circle"${
      ssrRenderAttr("src", category.imageSrc.source)
    }${
      ssrRenderAttr("alt", category.alt)
    }></div><div class="service_text"><h4>${
      ssrInterpolate(category.name)
    }</h4></div><p class="category__item-description">${
      ssrInterpolate(category.text)
    }</p></a></div></div>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Index/SiripraviEcommerceFrontendBlocksCategoryBlock.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined
};
const CategoryBlock = /*#__PURE__*/_export_sfc(_sfc_main$1, [['ssrRender',_sfc_ssrRender$1]]);

axios.create({
  baseURL: "http://localhost:3030/api",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const _sfc_main = {
  components: { HtmlBlock, ImageBlock, CarouselBlock, CategoryBlock },

  data: () => ({
    isLoaded: false,
    response: null,
  }),
  computed: {
    contentPlaceholder() {
      return this.isLoaded ? this.response.placeholders.content : [];
    },
  },
  async mounted() {
    const url = "http://localhost:3030/api/page?id=1";
    //const { data } = await this.$axios('page?id=' + this.$route.params.slug)
    const { data } = await axios(url);
    // axios.get(url).then((response) => {
    this.response = data;
    this.isLoaded = true;
    console.log("rsp:", this.response);
    //});
  },

  // this.response = data
};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if (_ctx.isLoaded) {
    _push(`<div${ssrRenderAttrs(_attrs)}><h3>Data Loaded Successfully</h3><!--[-->`);
    ssrRenderList($options.contentPlaceholder, (item) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.block_name), {
        key: item.id,
        block: item
      }, null), _parent);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Index/LuyaHtmlBlockList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const HtmlBlockList = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender]]);

const $$Astro$1 = createAstro();
const $$FigureDesctiption = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FigureDesctiption;
  return renderTemplate`${maybeRenderHead()}<h1 data-astro-cid-z5imlbxh>Astronaut Figurine</h1> <p class="limited-edition-badge" data-astro-cid-z5imlbxh>Limited Edition</p> <p data-astro-cid-z5imlbxh>
The limited edition Astronaut Figurine is the perfect gift for any Astro contributor. This
	fully-poseable action figurine comes equipped with:
</p> <ul data-astro-cid-z5imlbxh> <li data-astro-cid-z5imlbxh>A fabric space suit with adjustible straps</li> <li data-astro-cid-z5imlbxh>Boots lightly dusted by the lunar surface *</li> <li data-astro-cid-z5imlbxh>An adjustable space visor</li> </ul> <p data-astro-cid-z5imlbxh> <sub data-astro-cid-z5imlbxh>* Dust not actually from the lunar surface</sub> </p> `;
}, "C:/gitrepos/luya_shop_frontend/src/components/FigureDesctiption.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const item = {
    id: "astronaut-figurine",
    name: "Astronaut Figurine",
    imageSrc: "/images/chococake.jpg"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Index", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> <!-- <Hero />  --> ${renderComponent($$result2, "HomeSlider", HomeSlider, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/gitrepos/luya_shop_frontend/src/components/Index/HomeCarousel.vue", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} <h1 class="text-center text-3xl font-bold p-4" data-astro-cid-j7pv25f6>Categories</h1> <!--   <ShowAllCategories categories={categories} client:load />  --> <!--  <ShowAllProducts allProducts={allProducts} />  --> ${renderComponent($$result2, "HtmlBlockList", HtmlBlockList, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/gitrepos/luya_shop_frontend/src/components/Index/LuyaHtmlBlockList.vue", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} <div class="product-layout" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6> ${renderComponent($$result2, "FigureDescription", $$FigureDesctiption, { "data-astro-cid-j7pv25f6": true })} <!--	<AddToCartForm item={item} client:load>
					<button type="submit">Add to cart</button>
				</AddToCartForm>  --> </div> <img${addAttribute(item.imageSrc, "src")}${addAttribute(item.name, "alt")} data-astro-cid-j7pv25f6> </div> <section id="banner" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Up to <span data-astro-cid-j7pv25f6>30% Off</span> on All Cakes &amp; Decoratives</h2> <button class="button-normal" data-astro-cid-j7pv25f6>EXPLORE MORE</button> </section> <form id="example-form" hx-post="/test" data-astro-cid-j7pv25f6> <input name="example" title="example" placeholder="Type" onkeyup="this.setCustomValidity('') // reset the validation on keyup" hx-on:htmx:validation:validate="if(this.value != \'foo\') {
                      this.setCustomValidity('Please enter the value foo')
                      htmx.find(\'#foo-form\').reportValidity()
                  }" data-astro-cid-j7pv25f6> </form> <button hx-get="http://localhost:3030/api/page?id=4&slug=8" hx-target="#joke-container" data-astro-cid-j7pv25f6>
Make me laugh!
</button> <label data-astro-cid-j7pv25f6>Keyword:
<input type="text" placeholder="Enter a keyword..." hx-trigger="keyup" hx-get="https://v2.jokeapi.dev/joke/Any?format=txt&safe-mode" hx-get="https://dicr.org/proxer/api/load" hx-target="#joke-container" hx-indicator=".loader" name="contains" data-astro-cid-j7pv25f6> </label> <span class="loader htmx-indicator" data-astro-cid-j7pv25f6></span> <button hx-get="https://v2.jokeapi.dev/joke/Any?format=txt&safe-mode" hx-swap="innerHTML transition:true" hx-target="#joke-container" data-astro-cid-j7pv25f6>
Load new joke
</button> <div id="joke-container" class="bounce-it" data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>Initial joke content goes here...</p> </div> <form hx-post="http://localhost:3030/contact" data-astro-cid-j7pv25f6> <div hx-target="this" hx-swap="outerHTML" data-astro-cid-j7pv25f6> <label data-astro-cid-j7pv25f6>Email:
<input type="email" name="email" required hx-post="http://localhost:3030/contact/email" data-astro-cid-j7pv25f6> </label> </div> <button data-astro-cid-j7pv25f6>Submit</button> </form> </main> ` })} `;
}, "C:/gitrepos/luya_shop_frontend/src/pages/index.astro", void 0);

const $$file = "C:/gitrepos/luya_shop_frontend/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _404 as _, cart as a, categories as b, checkout$1 as c, _slug_ as d, checkout as e, error as f, graphql as g, detail as h, products as i, success as j, index as k, menu as m, pricelist as p, search as s };
