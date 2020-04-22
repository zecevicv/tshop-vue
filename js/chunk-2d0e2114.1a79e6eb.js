(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e2114"],{"7cb4":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("app-header",{attrs:{headerClass:"header--white"}}),s("div",{staticClass:"checkout"},[s("div",{staticClass:"container"},[t._m(0),s("div",{staticClass:"checkout__body"},[s("div",{staticClass:"checkout__shipping"},[s("h3",[t._v("Shipping Information")]),s("form",{staticClass:"checkout__inputs"},[s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.checkoutForm.firstName,expression:"checkoutForm.firstName"}],ref:"firstName",staticClass:"input input--bordered",attrs:{type:"text",placeholder:"First Name"},domProps:{value:t.checkoutForm.firstName},on:{input:[function(e){e.target.composing||t.$set(t.checkoutForm,"firstName",e.target.value)},t.removeInvalidClass]}}),s("span",{staticClass:"checkout__input-message"},[t._v("Not a valid first name")])]),s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.checkoutForm.lastName,expression:"checkoutForm.lastName"}],ref:"lastName",staticClass:"input input--bordered",attrs:{type:"text",placeholder:"Last Name"},domProps:{value:t.checkoutForm.lastName},on:{input:[function(e){e.target.composing||t.$set(t.checkoutForm,"lastName",e.target.value)},t.removeInvalidClass]}}),s("span",{staticClass:"checkout__input-message"},[t._v("Not a valid last name")])]),s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.checkoutForm.email,expression:"checkoutForm.email"}],ref:"email",staticClass:"input input--bordered",attrs:{type:"text",placeholder:"Email"},domProps:{value:t.checkoutForm.email},on:{input:[function(e){e.target.composing||t.$set(t.checkoutForm,"email",e.target.value)},t.removeInvalidClass]}}),s("span",{staticClass:"checkout__input-message"},[t._v("Not a valid email")])]),s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.checkoutForm.phone,expression:"checkoutForm.phone"}],ref:"phone",staticClass:"input input--bordered",attrs:{type:"text",placeholder:"Phone Number"},domProps:{value:t.checkoutForm.phone},on:{input:[function(e){e.target.composing||t.$set(t.checkoutForm,"phone",e.target.value)},t.removeInvalidClass]}}),s("span",{staticClass:"checkout__input-message"},[t._v("Not a valid phone number")])]),s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.checkoutForm.address,expression:"checkoutForm.address"}],ref:"address",staticClass:"input input--bordered",attrs:{type:"text",placeholder:"Address"},domProps:{value:t.checkoutForm.address},on:{input:[function(e){e.target.composing||t.$set(t.checkoutForm,"address",e.target.value)},t.removeInvalidClass]}}),s("span",{staticClass:"checkout__input-message"},[t._v("Not a valid address")])]),s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.checkoutForm.city,expression:"checkoutForm.city"}],ref:"city",staticClass:"input input--bordered",attrs:{type:"text",placeholder:"City"},domProps:{value:t.checkoutForm.city},on:{input:[function(e){e.target.composing||t.$set(t.checkoutForm,"city",e.target.value)},t.removeInvalidClass]}}),s("span",{staticClass:"checkout__input-message"},[t._v("Not a valid city")])]),s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.checkoutForm.zipCode,expression:"checkoutForm.zipCode"}],ref:"zipCode",staticClass:"input input--bordered",attrs:{type:"text",placeholder:"Postal Code / ZIP",id:"zipCode"},domProps:{value:t.checkoutForm.zipCode},on:{input:[function(e){e.target.composing||t.$set(t.checkoutForm,"zipCode",e.target.value)},t.removeInvalidClass]}}),s("span",{staticClass:"checkout__input-message"},[t._v("Not a valid zip code")])]),s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.checkoutForm.country,expression:"checkoutForm.country"}],ref:"country",staticClass:"input input--bordered",attrs:{type:"text",placeholder:"Country",id:"country"},domProps:{value:t.checkoutForm.country},on:{input:[function(e){e.target.composing||t.$set(t.checkoutForm,"country",e.target.value)},t.removeInvalidClass]}}),s("span",{staticClass:"checkout__input-message"},[t._v("Not a valid country")])])])]),s("div",{staticClass:"checkout__cart"},[s("h3",[t._v("Your Cart")]),s("div",{staticClass:"checkout__products"},t._l(t.shoppingCart,(function(e){return s("div",{key:e.product.id,staticClass:"checkout__product"},[s("img",{attrs:{src:e.product.images[0],alt:"product-img"}}),s("h4",[t._v(t._s(e.product.name))]),s("div",{staticClass:"checkout__product-quantity"},[t._v("x"+t._s(e.quantity))]),s("div",{staticClass:"checkout__product-price"},[t._v("$"+t._s(e.product.price))])])})),0),s("div",{staticClass:"checkout__total-price"},[s("p",[t._v("Total Cost:")]),s("div",{staticClass:"price"},[t._v("$"+t._s(t.shoppingCartTotal))])])])]),s("div",{staticClass:"checkout__footer"},[s("router-link",{staticClass:"checkout__continue",attrs:{to:"/cart",tag:"a"}},[s("img",{attrs:{src:"img/icons/arrow-black.svg",alt:"black-arrow"}}),t._v(" Return to Cart ")]),s("a",{staticClass:"btn btn--orange ml-auto",on:{click:t.submitCheckoutForm}},[t._v("Order Products")])],1)])])],1)},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"checkout__heading"},[s("h1",[t._v("Checkout")]),s("img",{staticClass:"checkout__icons",attrs:{src:"img/icons/checkout-icons-2.svg",alt:"checkout-icons"}})])}],i=s("0418"),c={data:function(){return{checkoutForm:{firstName:"",lastName:"",email:"",phone:"",address:"",city:"",zipCode:"",country:""}}},components:{"app-header":i["a"]},computed:{shoppingCart:function(){return this.$store.getters.shoppingCart},shoppingCartTotal:function(){return this.$store.getters.shoppingCartTotal}},methods:{removeInvalidClass:function(t){t.target.closest(".input-group").classList.remove("invalid")},submitCheckoutForm:function(){var t=0;this.checkoutForm.firstName||(this.$refs.firstName.closest(".input-group").classList.add("invalid"),t++),this.checkoutForm.lastName||(this.$refs.lastName.closest(".input-group").classList.add("invalid"),t++),this.checkoutForm.email&&this.validateEmail(this.checkoutForm.email)||(this.$refs.email.closest(".input-group").classList.add("invalid"),t++),this.checkoutForm.phone||(this.$refs.phone.closest(".input-group").classList.add("invalid"),t++),this.checkoutForm.address||(this.$refs.address.closest(".input-group").classList.add("invalid"),t++),this.checkoutForm.city||(this.$refs.city.closest(".input-group").classList.add("invalid"),t++),this.checkoutForm.zipCode||(this.$refs.zipCode.closest(".input-group").classList.add("invalid"),t++),this.checkoutForm.country||(this.$refs.country.closest(".input-group").classList.add("invalid"),t++),!t>0&&this.shoppingCart.length>0&&(this.$store.dispatch("removeAll","remove"),this.$router.push("/thank-you"))},validateEmail:function(t){var e=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(String(t).toLowerCase())}}},r=c,u=s("2877"),n=Object(u["a"])(r,a,o,!1,null,null,null);e["default"]=n.exports}}]);
//# sourceMappingURL=chunk-2d0e2114.1a79e6eb.js.map