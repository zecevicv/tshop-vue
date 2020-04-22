(function(t){function e(e){for(var s,i,o=e[0],c=e[1],l=e[2],u=0,d=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);p&&p(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,i=1;i<a.length;i++){var o=a[i];0!==n[o]&&(s=!1)}s&&(r.splice(e--,1),t=c(c.s=a[0]))}return t}var s={},i={app:0},n={app:0},r=[];function o(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-2d0b21b9":"1f04f428","chunk-2d0e2114":"1a79e6eb","chunk-2d2102cc":"f673ee2a","chunk-2d21de4f":"10438475","chunk-851365e6":"b401e030"}[t]+".js"}function c(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={"chunk-851365e6":1};i[t]?e.push(i[t]):0!==i[t]&&a[t]&&e.push(i[t]=new Promise((function(e,a){for(var s="css/"+({}[t]||t)+"."+{"chunk-2d0b21b9":"31d6cfe0","chunk-2d0e2114":"31d6cfe0","chunk-2d2102cc":"31d6cfe0","chunk-2d21de4f":"31d6cfe0","chunk-851365e6":"a1a4ca0e"}[t]+".css",n=c.p+s,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var l=r[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===s||u===n))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],u=l.getAttribute("data-href");if(u===s||u===n)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var s=e&&e.target&&e.target.src||n,r=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=s,delete i[t],p.parentNode.removeChild(p),a(r)},p.href=n;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){i[t]=0})));var s=n[t];if(0!==s)if(s)e.push(s[2]);else{var r=new Promise((function(e,a){s=n[t]=[e,a]}));e.push(s[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(p);var a=n[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+s+": "+i+")",d.name="ChunkLoadError",d.type=s,d.request=i,a[1](d)}n[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=s,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(a,s,function(e){return t[e]}.bind(null,s));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var p=u;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("85ec"),i=a.n(s);i.a},"0418":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{ref:"header",staticClass:"header",class:t.headerClass},[a("div",{staticClass:"header-main"},[a("div",{staticClass:"container"},[a("router-link",{staticClass:"header__logo",attrs:{to:"/",tag:"a"}},[a("img",{attrs:{src:"/img/icons/logo.svg",alt:"logo-img"}}),a("p",[t._v("T-Shop")])]),a("router-link",{staticClass:"header__shop-link ml-auto",attrs:{to:"/shop",tag:"a"}},[t._v(" Shop ")]),a("router-link",{staticClass:"header__cart-link",attrs:{to:"/cart",tag:"a"}},[a("span",{staticClass:"header__icon header__icon--cart"},[a("span",{staticClass:"shopping-cart__number"},[t._v(t._s(t.shoppingCartNumber))])])])],1)])])},i=[],n={props:["headerClass"],methods:{animateHeaderOnScroll:function(){var t=this.$refs.header;window.addEventListener("scroll",(function(){window.scrollY>0?(t.classList.remove("header--transparent"),t.classList.add("header--white")):(t.classList.add("header--transparent"),t.classList.remove("header--white"))})),window.scrollY>0?(t.classList.remove("header--transparent"),t.classList.add("header--white")):(t.classList.add("header--transparent"),t.classList.remove("header--white"))},addBodyPadding:function(){var t=this.$refs.header,e=t.offsetHeight,a=document.querySelector("body");a.style.paddingTop=e+"px"}},computed:{shoppingCartNumber:function(){return this.$store.getters.shoppingCart.length}},mounted:function(){if("header--transparent"===this.headerClass){this.animateHeaderOnScroll();var t=document.querySelector("body");t.style.paddingTop=0}else this.addBodyPadding()}},r=n,o=(a("1303"),a("2877")),c=Object(o["a"])(r,s,i,!1,null,"141a2bd2",null);e["a"]=c.exports},1303:function(t,e,a){"use strict";var s=a("b3b9"),i=a.n(s);i.a},"353a":function(t,e,a){},"560e":function(t,e,a){"use strict";var s=a("d0dd"),i=a.n(s);i.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view"),a("app-footer")],1)},n=[],r=a("fd2d"),o={data:function(){return{shoppingCart:[]}},components:{"app-footer":r["a"]}},c=o,l=(a("034f"),a("2877")),u=Object(l["a"])(c,i,n,!1,null,null,null),d=u.exports,p=(a("d3b7"),a("8c4f")),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("app-header",{attrs:{headerClass:"header--transparent"}}),a("div",{staticClass:"hero"},[a("img",{staticClass:"hero__bg-img",attrs:{src:"img/home/hero.jpg",alt:"background-image"}}),a("div",{staticClass:"hero__content"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"heading-xl"},[t._v("Original Clothing For Original People")]),a("router-link",{attrs:{tag:"a",to:"/shop"}},[a("img",{attrs:{src:"img/icons/arrow-orange-rounded.svg",alt:"arrow-icon"}}),a("p",[t._v("Shop Now")])]),a("a",{attrs:{href:"products.html"}})],1)]),t._m(0)]),t._m(1),a("app-product-slider",[a("h2",{staticClass:"heading-lg"},[t._v(" Products on sale 📣 "),a("router-link",{staticClass:"btn btn--bordered",attrs:{tag:"a",to:"/shop"}},[t._v("Show More")])],1)]),a("div",{staticClass:"container"},[a("div",{staticClass:"why-choose-us"},[a("h2",{staticClass:"heading-lg center"},[t._v(" Why should you choose us? ")]),a("div",{ref:"choseUsSlider",staticClass:"swiper-container swiper-no-swapping"},[t._m(2),a("div",{staticClass:"swiper-pagination"})])])]),a("app-product-slider",[a("h2",{staticClass:"heading-lg center"},[t._v(" 🔥 Hot & Trending ")])]),a("app-subscription")],1)},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hero__features"},[a("div",{staticClass:"hero-feature"},[a("div",{staticClass:"hero-feature__img"},[a("img",{attrs:{src:"img/icons/shipping-orange.svg",alt:"shipping-icon"}})]),a("div",{staticClass:"feature__content"},[a("h4",[t._v("Free Shipping")]),a("p",[t._v("On purchases over $199")])])]),a("div",{staticClass:"hero-feature"},[a("div",{staticClass:"hero-feature__img"},[a("img",{attrs:{src:"img/icons/smile-orange.svg",alt:"smile-icon"}})]),a("div",{staticClass:"feature__content"},[a("h4",[t._v("99% Satisfied Customers")]),a("p",[t._v("Our clients' opinions speak for themselves")])])]),a("div",{staticClass:"hero-feature"},[a("div",{staticClass:"hero-feature__img"},[a("img",{attrs:{src:"img/icons/money-orange.svg",alt:"money-icon"}})]),a("div",{staticClass:"feature__content"},[a("h4",[t._v("Originality Guaranteed")]),a("p",[t._v("30 days warranty for each product from our store")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"banner"},[a("img",{staticClass:"banner__img",attrs:{src:"img/home/banner.jpg",alt:"banner-img"}}),a("h2",{staticClass:"banner__heading"},[t._v(" Seasonal Sale "),a("span",[t._v("Up To "),a("span",{staticClass:"text-orange"},[t._v("-30%")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"swiper-wrapper"},[a("div",{staticClass:"swiper-slide why-choose-us__feature"},[a("img",{attrs:{src:"img/icons/shipping-black.svg",alt:"shipping-icon"}}),a("h3",[t._v("Free Shipping")]),a("p",[t._v("All purchases over $199 are eligible for free shipping via USPS First Class Mail.")])]),a("div",{staticClass:"swiper-slide why-choose-us__feature"},[a("img",{attrs:{src:"img/icons/payments-orange.svg",alt:"payments-icon"}}),a("h3",[t._v("Easy Payments")]),a("p",[t._v("All payments are processed instantly over a secure payment protocol.")])]),a("div",{staticClass:"swiper-slide why-choose-us__feature"},[a("img",{attrs:{src:"img/icons/money-black.svg",alt:"money-back-icon"}}),a("h3",[t._v("Money-Back Guarantee")]),a("p",[t._v("If an item arrived damaged or you've changed your mind, you can send it back for a full refund.")])]),a("div",{staticClass:"swiper-slide why-choose-us__feature"},[a("img",{attrs:{src:"img/icons/quality-black.svg",alt:"quality-icon"}}),a("h3",[t._v("Finest Quality")]),a("p",[t._v("Designed to last, each of our products has been crafted with the finest materials.")])])])}],v=a("e405"),_=a("8d9b"),g=a("b619"),m=a("0418"),C={components:{"app-product-slider":v["a"],"app-subscription":_["a"],"app-header":m["a"]},methods:{initChooseUsSlider:function(){var t=this.$refs.choseUsSlider;if(t)new g["a"](t,{autoplay:{delay:5e3,disableOnInteraction:!0},pagination:{el:".swiper-pagination"},loop:!0,breakpoints:{0:{slidesPerView:1,spaceBetween:0,noSwiping:!1,allowSlidePrev:!0,allowSlideNext:!0},585:{slidesPerView:2,spaceBetween:40},991:{slidesPerView:4,spaceBetween:40,noSwiping:!0,allowSlidePrev:!1,allowSlideNext:!1,pagination:""}}})}},mounted:function(){this.initChooseUsSlider()}},b=C,w=Object(l["a"])(b,h,f,!1,null,null,null),y=w.exports;s["a"].use(p["a"]);var k=[{path:"/",name:"Home",component:y},{path:"/shop",name:"Shop",component:function(){return a.e("chunk-851365e6").then(a.bind(null,"0fa5"))}},{path:"/product/:id",name:"Product",component:function(){return a.e("chunk-2d21de4f").then(a.bind(null,"d2f1"))}},{path:"/cart",name:"Cart",component:function(){return a.e("chunk-2d2102cc").then(a.bind(null,"b789"))}},{path:"/checkout",name:"Checkout",component:function(){return a.e("chunk-2d0e2114").then(a.bind(null,"7cb4"))}},{path:"/thank-you",name:"ThankYou",component:function(){return a.e("chunk-2d0b21b9").then(a.bind(null,"2368"))}}],S=new p["a"]({routes:k,scrollBehavior:function(t,e,a){return{x:0,y:0}}}),P=S,x=(a("4de4"),a("4160"),a("b680"),a("159b"),a("2f62")),E=a("bfa9"),O=new E["a"]({storage:window.localStorage});s["a"].use(x["a"]);var j=new x["a"].Store({state:{shoppingCart:[],notification:""},mutations:{add:function(t,e){var a=t.shoppingCart.filter((function(t){return t.product.id===e.product.id}));0===a.length?(t.shoppingCart.push(e),t.notification="Product added to the cart"):t.notification="Product already in the cart"},remove:function(t,e){t.shoppingCart=t.shoppingCart.filter((function(t){return t.product.id!==e.product.id}))},removeAll:function(t,e){t.shoppingCart=[]},update:function(t,e){t.shoppingCart.forEach((function(t){t.product.id===e.product.id&&(t.quantity=e.quantity)}))}},actions:{add:function(t,e){t.commit("add",e)},remove:function(t,e){t.commit("remove",e)},removeAll:function(t,e){t.commit("removeAll",e)},update:function(t,e){t.commit("update",e)}},getters:{shoppingCart:function(t){return t.shoppingCart},notification:function(t){return t.notification},shoppingCartTotal:function(t){if(0!==t.shoppingCart.length){var e=0;return t.shoppingCart.forEach((function(t){e+=t.product.price*t.quantity})),e.toFixed(2)}return 0}},plugins:[O.plugin]}),$=a("1dce"),T=a.n($);s["a"].use(T.a),window.Event=new s["a"],s["a"].config.productionTip=!1,new s["a"]({router:P,store:j,render:function(t){return t(d)}}).$mount("#app")},"85ec":function(t,e,a){},"8d9b":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"subscription"},[a("img",{staticClass:"subscription__bg-img",attrs:{src:"/img/subscription/subscription.jpg",alt:"subscription-img"}}),a("div",{staticClass:"subscription__content"},[a("h3",{staticClass:"subscription__heading text-white d-none d-md-flex"},[t._v(" Subscribe to our newsletter and receive exclusive offers every week ")]),a("h3",{staticClass:"subscription__heading text-white d-md-none center"},[t._v(" Subscribe to our newsletter ")]),a("form",[a("input",{staticClass:"input",attrs:{type:"text",placeholder:"Enter your email"}}),a("button",{staticClass:"btn btn--orange"},[t._v("Subscribe")])])])])])}],n=a("2877"),r={},o=Object(n["a"])(r,s,i,!1,null,null,null);e["a"]=o.exports},b318:function(t,e,a){"use strict";var s=a("353a"),i=a.n(s);i.a},b3b9:function(t,e,a){},be6f:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-link",{staticClass:"product",class:t.sliderClass,attrs:{to:"/product/"+t.product.id,tag:"a"}},[a("figure",{staticClass:"product__img"},[a("img",{attrs:{src:t.product.images[0],alt:"product-img"}})]),a("div",{staticClass:"product__info"},[a("h3",{staticClass:"product__title"},[t._v(t._s(t.product.name))]),a("p",{staticClass:"product__price product__price--sale"},[t._v(" $"+t._s(t.product.price)+" ")])])])},i=[],n={props:["product","sliderClass"]},r=n,o=a("2877"),c=Object(o["a"])(r,s,i,!1,null,null,null);e["a"]=c.exports},d0dd:function(t,e,a){},e405:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"product-slider__wrapper"},[a("div",{staticClass:"container"},[t._t("default"),a("div",{ref:"productSlider",staticClass:"swiper-container product-slider"},[a("div",{staticClass:"swiper-wrapper"},t._l(t.products,(function(t){return a("app-product",{key:t.id,attrs:{product:t,sliderClass:"swiper-slide"}})})),1)])],2),t._m(0)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"swiper-navigation-btns"},[a("div",{staticClass:"container"},[a("div",{staticClass:"swiper-button-prev"}),a("div",{staticClass:"swiper-button-next"})])])}],n=a("bc3a"),r=a.n(n),o=a("b619"),c=a("be6f"),l={data:function(){return{products:[]}},components:{"app-product":c["a"]},methods:{loadProducts:function(){var t=this;0===this.products.length&&r.a.get("products.json").then((function(e){t.products=e.data.products})).then((function(){t.initProductSlider()}))},initProductSlider:function(){var t=this.$refs.productSlider;t&&new o["a"](t,{slidesPerView:4,spaceBetween:40,loop:!0,autoplay:{delay:5e3,disableOnInteraction:!0},breakpoints:{0:{slidesPerView:2,autoplay:!1,spaceBetween:15},767:{slidesPerView:3,autoplay:!1,spaceBetween:30},991:{autoplay:!0}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}},mounted:function(){this.loadProducts()}},u=l,d=(a("b318"),a("2877")),p=Object(d["a"])(u,s,i,!1,null,"73dcb2ea",null);e["a"]=p.exports},fd2d:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"container"},[a("div",{staticClass:"footer__main"},[a("div",{staticClass:"footer__left"},[a("a",{staticClass:"footer__logo",attrs:{href:"index.html"}},[a("img",{attrs:{src:"/img/icons/logo.svg",alt:"logo-img"}}),a("p",[t._v("T-Shop")])]),a("p",{staticClass:"footer__desc"},[t._v("T-Shop designs clothing for the young, the old & everyone in between – but most importantly, for the fashionable.")]),a("div",{staticClass:"footer__social"},[a("a",{staticClass:"social-link"},[a("img",{attrs:{src:"/img/icons/facebook-black.svg",alt:"facebook-icon"}})]),a("a",{staticClass:"social-link"},[a("img",{attrs:{src:"/img/icons/twitter-black.svg",alt:"twitter-icon"}})]),a("a",{staticClass:"social-link"},[a("img",{attrs:{src:"/img/icons/linkedin-black.svg",alt:"linkedin-icon"}})]),a("a",{staticClass:"social-link"},[a("img",{attrs:{src:"/img/icons/instagram-black.svg",alt:"instagram-icon"}})]),a("a",{staticClass:"social-link"},[a("img",{attrs:{src:"/img/icons/youtube-black.svg",alt:"youtube-icon"}})])])]),a("div",{staticClass:"footer__right"},[a("div",{staticClass:"footer__column"},[a("h4",{staticClass:"footer__heading"},[t._v("Shopping online")]),a("a",{staticClass:"footer__link"},[t._v("Order Status")]),a("a",{staticClass:"footer__link"},[t._v("Shipping and Delivery")]),a("a",{staticClass:"footer__link"},[t._v("Returns")]),a("a",{staticClass:"footer__link"},[t._v("Payment Options")]),a("a",{staticClass:"footer__link"},[t._v("Contact Us")])]),a("div",{staticClass:"footer__column"},[a("h4",{staticClass:"footer__heading"},[t._v("Information")]),a("a",{staticClass:"footer__link"},[t._v("Gift Cards")]),a("a",{staticClass:"footer__link"},[t._v("Find a store")]),a("a",{staticClass:"footer__link"},[t._v("Newsletter")]),a("a",{staticClass:"footer__link"},[t._v("Become a member")]),a("a",{staticClass:"footer__link"},[t._v("Site feedback")])]),a("div",{staticClass:"footer__column"},[a("h4",{staticClass:"footer__heading"},[t._v("Contact")]),a("a",{staticClass:"footer__link",attrs:{href:"mailto:support@gmail.com"}},[t._v("support@gmail.com")]),a("a",{staticClass:"footer__link",attrs:{href:"tel:+1-111-111-111"}},[t._v("+1 111 111 111 (click to call)")])])])])]),a("div",{staticClass:"copyright"},[a("div",{staticClass:"container"},[a("p",[t._v("Built by "),a("a",{attrs:{href:"https://www.upwork.com/freelancers/~0198a7c317861df7eb"}},[t._v("Vladimir Zecevic")]),t._v(" © 2020.")])])])])}],n=(a("560e"),a("2877")),r={},o=Object(n["a"])(r,s,i,!1,null,"4de43431",null);e["a"]=o.exports}});
//# sourceMappingURL=app.83ac8dcd.js.map