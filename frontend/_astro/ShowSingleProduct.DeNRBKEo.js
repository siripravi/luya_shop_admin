import{f as w,s as S}from"./functions.OUNtgacC.js";import{f as P}from"./axios.BaMOmLr1.js";/* empty css                        */import{_ as T}from"./_plugin-vue_export-helper.DlAUqK2U.js";import{J as h,o as c,c as u,a as l,z as k,B as m,w as B,E as V,G as A,C as x,K as C,t as f,F as L,r as M,H as b}from"./runtime-core.esm-bundler.BzkSQhur.js";import"./axios.Cm0UX6qg.js";let d=[],q=(r,o)=>{let e,t=[],n={lc:0,l:o||0,value:r,set(i){n.value=i,n.notify()},get(){return n.lc||n.listen(()=>{})(),n.value},notify(i){e=t;let s=!d.length;for(let a=0;a<e.length;a+=2)d.push(e[a],n.value,i,e[a+1]);if(s){for(let a=0;a<d.length;a+=4){let _=!1;for(let p=a+7;p<d.length;p+=4)if(d[p]<d[a+3]){_=!0;break}_?d.push(d[a],d[a+1],d[a+2],d[a+3]):d[a](d[a+1],d[a+2])}d.length=0}},listen(i,s){return t===e&&(t=t.slice()),n.lc=t.push(i,s||n.l)/2,()=>{t===e&&(t=t.slice());let a=t.indexOf(i);~a&&(t.splice(a,2),n.lc--,n.lc||n.off())}},subscribe(i,s){let a=n.listen(i,s);return i(n.value),a},off(){}};return n},H=(r={})=>{let o=q(r);return o.setKey=function(e,t){typeof t>"u"?e in o.value&&(o.value={...o.value},delete o.value[e],o.notify(e)):o.value[e]!==t&&(o.value={...o.value,[e]:t},o.notify(e))},o};const g=H({});function y({id:r,name:o,imageSrc:e}){const t=g.get()[r];t?g.setKey(r,{...t,quantity:t.quantity+1}):g.setKey(r,{id:r,name:o,imageSrc:e,quantity:1})}async function I(r){return(await P(`
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
    `))?.addToCart}const K={__name:"AddToCartButton",props:["product"],setup(r,{expose:o}){o();const e=h({loading:!1}),t=r,n={id:"astronaut-figurine",name:"Astronaut Figurine",imageSrc:"/images/astronaut-figurine.png"},s={state:e,props:t,hardcodedItemInfo:n,addProduct:a=>{e.loading=!0;const p={productId:a.databaseId?a.databaseId:a};try{I(p).then(v=>{e.loading=!1,v||localStorage.clear(),window.location.reload()}),y(n)}catch{e.loading=!1}},reactive:h,get addProductToCart(){return y},get addToCart(){return I}};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}},O=r=>(V("data-v-6f1eff71"),r=r(),A(),r),Q={key:0,class:"absolute -mt-6 -ml-2 animate-spin",width:"25",height:"25",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},j=O(()=>l("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM4.14355 13.5165C4.85219 17.2096 8.10023 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C8.0886 4 4.83283 6.80704 4.13728 10.5165L6.72824 10.5071C7.37819 8.20738 9.49236 6.52222 12.0001 6.52222C15.0254 6.52222 17.4779 8.9747 17.4779 12C17.4779 15.0253 15.0254 17.4778 12.0001 17.4778C9.49752 17.4778 7.3869 15.7995 6.73228 13.5071L4.14355 13.5165ZM9.52234 12C9.52234 13.3684 10.6317 14.4778 12.0001 14.4778C13.3685 14.4778 14.4779 13.3684 14.4779 12C14.4779 10.6316 13.3685 9.52222 12.0001 9.52222C10.6317 9.52222 9.52234 10.6316 9.52234 12Z",fill:"white"},null,-1)),D=[j];function E(r,o,e,t,n,i){return c(),u("div",null,[l("button",{class:B(["pest_btn",{disabled:t.state.loading}]),onClick:o[0]||(o[0]=s=>t.addProduct(t.props.product))},[k(" ADD TO CART "),t.state.loading?(c(),u("svg",Q,D)):m("",!0)],2)])}const F=T(K,[["render",E],["__scopeId","data-v-6f1eff71"]]),N={__name:"ShowSingleProduct",props:["product"],setup(r,{expose:o}){o();const e=r,t=x(18);C(()=>{if(e.product.variations){const s=e.product.variations.nodes[0].databaseId;t.value=s}});const i={props:e,selectedVariation:t,changeVariation:s=>{t.value=s.target.value},ref:x,onMounted:C,get filteredVariantPrice(){return w},get stripHTML(){return S},AddToCartButton:F};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}},U={key:0},Z={class:"container flex flex-wrap items-center pt-4 pb-12 mx-auto"},z={class:"grid grid-cols-1 gap-4 mt-8 lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-2"},R={class:"ml-8"},G={class:"text-3xl font-bold text-left"},J={class:"pt-1 mt-4 text-2xl text-gray-900"},W=l("br",null,null,-1),X={class:"pt-1 mt-4 text-2xl text-gray-900"},Y={key:0,class:"pt-1 mt-4 text-xl text-gray-900"},$=l("span",{class:"py-2"},"Variants",-1),tt=["value","selected"],et={class:"pt-1 mt-2"};function at(r,o,e,t,n,i){return e.product.extras.moduleContent.product?(c(),u("div",U,[l("section",null,[l("div",Z,[l("div",z,[l("div",R,[l("p",G,f(e.product.extras.moduleContent.product.name),1),l("p",J,f(e.product.extras.moduleContent.product.price_from),1),W,l("p",X,f(t.stripHTML(e.product.extras.moduleContent.model.text)),1),e.product.variations?(c(),u("p",Y,[$,l("select",{id:"variant",name:"variant",class:"block w-64 px-6 py-2 bg-white border border-gray-500 rounded-lg focus:outline-none focus:shadow-outline",onChange:o[0]||(o[0]=s=>t.changeVariation())},[(c(!0),u(L,null,M(e.product.variations.nodes,(s,a)=>(c(),u("option",{key:s.databaseId,value:s.databaseId,selected:a===0},f(s.name)+" ("+f(s.stockQuantity)+" in stock) ",9,tt))),128))],32)])):m("",!0),l("div",et,[e.product.variations?(c(),b(t.AddToCartButton,{key:0,product:t.selectedVariation,"client:visible":""},null,8,["product"])):(c(),b(t.AddToCartButton,{key:1,product:e.product,"client:visible":""},null,8,["product"]))])])])])])])):m("",!0)}const lt=T(N,[["render",at]]);export{lt as default};
