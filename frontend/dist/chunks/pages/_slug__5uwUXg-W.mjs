import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../astro_DBE5qgVg.mjs';
import 'kleur/colors';
import { g as getSingleProduct, $ as $$Layout } from './__DcT6BTZo.mjs';

const $$Astro = createAstro("http://localhost:4321");
const prerender = false;
async function getStaticPaths() {
  const paths = [
    //  {params: {id:'vanilla-cake',slug: 'vanilla-cake'}},
    //  {params: {id:'29',slug: 'butter-cookies'}},
    // {params: {id:'three',slug: 'spot'}},
  ];
  return paths;
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { id, slug } = Astro2.params;
  await getSingleProduct(slug);
  return renderTemplate`<!--
<Layout title="Welcome to Single Products">
  <main>
    <h1 class="text-3xl text-center font-bold p-6">Single Product page</h1>
   <ShowSingleProduct product={productData} client:load /> 
  </main>
</Layout>
 -->${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Single Products" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <h1 class="text-3xl text-center font-bold p-6">Single Product page</h1> <div>Good dog, ${slug}!</div> </main> ` })}`;
}, "C:/gitrepos/luya_shop_admin/frontend/src/pages/products/[id]/[slug].astro", void 0);

const $$file = "C:/gitrepos/luya_shop_admin/frontend/src/pages/products/[id]/[slug].astro";
const $$url = "/products/[id]/[slug]";

export { $$slug as default, $$file as file, getStaticPaths, prerender, $$url as url };
