(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{36:function(e,t,a){e.exports=a.p+"static/media/menu.b3f49afd.svg"},37:function(e,t,a){e.exports=a.p+"static/media/close.2c5552a1.svg"},38:function(e,t,a){e.exports=a.p+"static/media/cart.8bf1af37.svg"},45:function(e,t,a){e.exports=a(80)},50:function(e,t,a){},75:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),o=a.n(c),l=(a(50),a(5)),u=a(2),i=a.n(u),s=a(4),m=a(1),d=a(3),p=a.n(d),b="https://qtshop-ecommerce.herokuapp.com";var f=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),o=Object(m.a)(c,2),l=o[0],u=o[1],d=Object(n.useState)(""),f=Object(m.a)(d,2),h=f[0],E=f[1],v=Object(n.useState)(""),g=Object(m.a)(v,2),O=g[0],j=g[1],y=Object(n.useState)(""),w=Object(m.a)(y,2),x=w[0],k=w[1],C=Object(n.useState)(1),P=Object(m.a)(C,2),A=P[0],_=P[1],N=Object(n.useState)(0),S=Object(m.a)(N,2),I=S[0],q=S[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("".concat(b,"/api/products/?").concat(O,"&page=").concat(A,"&limit=").concat(9*A,"&title=").concat(x,"&").concat(h));case 2:t=e.sent,r(t.data.products),q(t.data.result);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[l,h,O,x,A]),{products:[a,r],callback:[l,u],category:[h,E],sort:[O,j],search:[x,k],page:[A,_],result:[I,q]}},h=a(6),E=a(14);var v=function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(!1),l=Object(m.a)(o,2),u=l[0],d=l[1],f=Object(n.useState)([]),v=Object(m.a)(f,2),g=v[0],O=v[1],j=Object(n.useState)({}),y=Object(m.a)(j,2),w=y[0],x=y[1],k=Object(n.useState)([]),C=Object(m.a)(k,2),P=C[0],A=C[1];Object(n.useEffect)((function(){e&&function(){var t=Object(s.a)(i.a.mark((function t(){var a,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a="Bearer "+e,t.next=4,p.a.get("".concat(b,"/user/infor"),{headers:{Authorization:a}});case 4:n=t.sent,c(!0),2===n.data.role?d(!0):d(!1),O(n.data.cart),x(n.data),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),alert(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}()()}),[e]);var _=function(){var t=Object(s.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return",alert("Please login to continue buying"));case 2:if(console.log("cart:",g),!g.every((function(e){return console.log(e),e.product_id!==a.product_id}))){t.next=11;break}return O([].concat(Object(E.a)(g),[Object(h.a)(Object(h.a)({},a),{},{quantity:1})])),n="Bearer "+e,t.next=9,p.a.patch("".concat(b,"/user/addcart"),{cart:[].concat(Object(E.a)(g),[Object(h.a)(Object(h.a)({},a),{},{quantity:1})])},{headers:{Authorization:n}});case 9:t.next=12;break;case 11:alert("This product has been added to cart.");case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return{isLogged:[r,c],isAdmin:[u,d],cart:[g,O],user:[w,x],addCart:_,history:[P,A]}};var g=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),o=Object(m.a)(c,2),l=o[0],u=o[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("".concat(b,"/api/category"));case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[l]),{categories:[a,r],callback:[l,u]}},O=Object(n.createContext)(),j=function(e){var t=e.children,a=Object(n.useState)(!1),c=Object(m.a)(a,2),o=c[0],l=c[1];Object(n.useEffect)((function(){if(localStorage.getItem("firstLogin")){var e=function(){var t=Object(s.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("".concat(b,"/auth/refresh_token"),{credentials:"include"});case 2:a=t.sent,console.log(a),l(a.data.accesstoken),setTimeout((function(){e()}),6e5);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();e()}}),[]);var u={token:[o,l],productsAPI:f(),userAPI:v(o),categoriesAPI:g()};return r.a.createElement(O.Provider,{value:u},t)},y=a(36),w=a.n(y),x=a(37),k=a.n(x),C=a(38),P=a.n(C);var A=function(){var e=Object(n.useContext)(O),t=Object(m.a)(e.userAPI.isLogged,1)[0],a=Object(m.a)(e.userAPI.isAdmin,1)[0],c=Object(m.a)(e.userAPI.cart,1)[0],o=Object(n.useState)(!1),u=Object(m.a)(o,2),d=u[0],f=u[1],h=function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("".concat(b,"/auth/logout"));case 2:localStorage.removeItem("firstLogin"),window.location.href="/";case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E={left:d?0:"-100%"};return r.a.createElement("header",null,r.a.createElement("div",{className:"menu",onClick:function(){return f(!d)}},r.a.createElement("img",{src:w.a,alt:"",width:"30"})),r.a.createElement("div",{className:"logo"},r.a.createElement("h1",null,r.a.createElement(l.b,{to:"/"},a?"Admin":"QT STORE"))),r.a.createElement("ul",{style:E},r.a.createElement("li",null,r.a.createElement(l.b,{to:"/"},a?"Products":"Shop")),a&&r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement(l.b,{to:"/create_product"},"Create Product")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/category"},"Categories"))),t?r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement(l.b,{to:"/history"},"History")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/profile"},"Profile")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/",onClick:h},"Logout"))):r.a.createElement("li",null,r.a.createElement(l.b,{to:"/login"},"Login \u2725 Register")),r.a.createElement("li",{onClick:function(){return f(!d)}},r.a.createElement("img",{src:k.a,alt:"",width:"30",className:"menu"}))),a?"":r.a.createElement("div",{className:"cart-icon"},r.a.createElement("span",null,c.length),r.a.createElement(l.b,{to:"/cart"},r.a.createElement("img",{src:P.a,alt:"",width:"30"}))))},_=a(7);var N=function(e){var t=e.product,a=e.deleteProduct,c=Object(n.useContext)(O),o=Object(m.a)(c.userAPI.isAdmin,1)[0],u=c.userAPI.addCart;return r.a.createElement("div",{className:"row_btn"},o?r.a.createElement(r.a.Fragment,null,r.a.createElement(l.b,{id:"btn_buy",to:"#!",onClick:function(){return a(t._id,t.images.public_id)}},"Delete"),r.a.createElement(l.b,{id:"btn_view",to:"/edit_product/".concat(t._id)},"Edit")):r.a.createElement(r.a.Fragment,null,r.a.createElement(l.b,{id:"btn_buy",to:"#!",onClick:function(){return u(t)}},"Buy"),r.a.createElement(l.b,{id:"btn_view",to:"/detail/".concat(t._id)},"View")))};var S=function(e){var t=e.product,a=e.isAdmin,n=e.deleteProduct,c=e.handleCheck;return r.a.createElement("div",{className:"product_card"},a&&r.a.createElement("input",{type:"checkbox",checked:t.checked,onChange:function(){return c(t._id)}}),r.a.createElement("img",{src:t.images.url,alt:""}),r.a.createElement("div",{className:"product_box"},r.a.createElement("h2",{title:t.title},t.title),r.a.createElement("span",null,"$",t.price),r.a.createElement("p",null,t.description)),r.a.createElement(N,{product:t,deleteProduct:n}))};a(75);var I=function(){return r.a.createElement("div",{className:"position-fixed w-200 h-200 text-center loading",style:{background:"#0007",color:"white",top:0,left:0,zIndex:99}},r.a.createElement("svg",{width:"205",height:"250",viewBox:"0 0 40 50"},r.a.createElement("polygon",{stroke:"#fff",strokeWidth:"1",fill:"none",points:"20,1 40,40 1,40"}),r.a.createElement("text",{fill:"#fff",x:"5",y:"47"},"Loading")))};var q=function(){var e=Object(n.useContext)(O),t=Object(m.a)(e.categoriesAPI.categories,1)[0],a=Object(m.a)(e.productsAPI.category,2),c=a[0],o=a[1],l=Object(m.a)(e.productsAPI.sort,2),u=l[0],i=l[1],s=Object(m.a)(e.productsAPI.search,2),d=s[0],p=s[1];return r.a.createElement("div",{className:"filter_menu"},r.a.createElement("div",{className:"row"},r.a.createElement("span",null,"Filters: "),r.a.createElement("select",{name:"category",value:c,onChange:function(e){o(e.target.value),p("")}},r.a.createElement("option",{value:""},"All Products"),t.map((function(e){return r.a.createElement("option",{value:"category="+e._id,key:e._id},e.name)})))),r.a.createElement("input",{type:"text",value:d,placeholder:"Enter your search!",onChange:function(e){return p(e.target.value.toLowerCase())}}),r.a.createElement("div",{className:"row sort"},r.a.createElement("span",null,"Sort By: "),r.a.createElement("select",{value:u,onChange:function(e){return i(e.target.value)}},r.a.createElement("option",{value:"sort=-created_at"},"Newest"),r.a.createElement("option",{value:"sort=created_at"},"Oldest"),r.a.createElement("option",{value:"sort=-sold"},"Best sales"),r.a.createElement("option",{value:"sort=-price"},"Price: Hight-Low"),r.a.createElement("option",{value:"sort=price"},"Price: Low-Hight"))))};var L=function(){var e=Object(n.useContext)(O),t=Object(m.a)(e.productsAPI.page,2),a=t[0],c=t[1],o=Object(m.a)(e.productsAPI.result,1)[0];return r.a.createElement("div",{className:"load_more"},o<9*a?"":r.a.createElement("button",{onClick:function(){return c(a+1)}},"Load more"))};var z=function(){var e=Object(n.useContext)(O),t=Object(m.a)(e.productsAPI.products,2),a=t[0],c=t[1],o=Object(m.a)(e.userAPI.isAdmin,1)[0],l=Object(m.a)(e.token,1)[0],u=Object(m.a)(e.productsAPI.callback,2),d=u[0],f=u[1],h=Object(n.useState)(!1),v=Object(m.a)(h,2),g=v[0],j=v[1],y=Object(n.useState)(!1),w=Object(m.a)(y,2),x=w[0],k=w[1],C=function(e){a.forEach((function(t){t._id==e&&(t.checked=!t.checked)})),c(Object(E.a)(a))},P=function(){var e=Object(s.a)(i.a.mark((function e(t,a){var n,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),n="Bearer "+l,r=p.a.post("".concat(b,"/api/destroy"),{public_id:a},{headers:{Authorization:n}}),c=p.a.delete("".concat(b,"/api/products/").concat(t),{headers:{Authorization:n}}),e.next=7,r;case 7:return e.next=9,c;case 9:f(!d),j(!1),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),alert(e.t0.response.data.msg);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,a){return e.apply(this,arguments)}}();return g?r.a.createElement("div",null,r.a.createElement(I,null)):r.a.createElement(r.a.Fragment,null,r.a.createElement(q,null),o&&r.a.createElement("div",{className:"delete-all"},r.a.createElement("span",null,"Select all"),r.a.createElement("input",{type:"checkbox",checked:x,onChange:function(){a.forEach((function(e){e.checked=!x})),c(Object(E.a)(a)),k(!x)}}),r.a.createElement("button",{onClick:function(){a.forEach((function(e){e.checked&&P(e._id,e.images.public_id)}))}},"Delete ALL")),r.a.createElement("div",{className:"products"},a.map((function(e){return r.a.createElement(S,{key:e._id,product:e,isAdmin:o,deleteProduct:P,handleCheck:C})}))),r.a.createElement(L,null),0===a.length&&r.a.createElement(I,null))};var B=function(){var e=Object(_.g)(),t=Object(n.useContext)(O),a=Object(m.a)(t.productsAPI.products,1)[0],c=t.userAPI.addCart,o=Object(n.useState)([]),u=Object(m.a)(o,2),i=u[0],s=u[1];return Object(n.useEffect)((function(){e.id&&a.forEach((function(t){t._id==e.id&&s(t)}))}),[e.id,a]),0===i.length?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"detail"},r.a.createElement("img",{src:i.images.url,alt:""}),r.a.createElement("div",{className:"box-detail"},r.a.createElement("div",{className:"row"},r.a.createElement("h2",null,i.title),r.a.createElement("h6",null,"#id: ",i.product_id)),r.a.createElement("span",null,"$ ",i.price),r.a.createElement("p",null,i.description),r.a.createElement("p",null,i.content),r.a.createElement("p",null,"Sold: ",i.sold),r.a.createElement(l.b,{to:"/cart",className:"cart",onClick:function(){return c(i)}},"Buy Now"))),r.a.createElement("div",null,r.a.createElement("h2",null,"Related products"),r.a.createElement("div",{className:"products"},a.map((function(e){return e.category.name===i.category.name?r.a.createElement(S,{key:e._id,product:e}):null})))))},D=a(13);var F=function(){var e=Object(n.useState)({email:"",password:""}),t=Object(m.a)(e,2),a=t[0],c=t[1],o=function(e){var t=e.target,n=t.name,r=t.value;c(Object(h.a)(Object(h.a)({},a),{},Object(D.a)({},n,r)))},u=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,p.a.post("".concat(b,"/auth/login"),Object(h.a)({},a),{withCredentials:!0});case 4:localStorage.setItem("firstLogin",!0),window.location.href="/",e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),alert(e.t0.response.data.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"login-page"},r.a.createElement("form",{onSubmit:u},r.a.createElement("h2",null,"Login"),r.a.createElement("input",{type:"email",name:"email",required:!0,placeholder:"Email",value:a.email,onChange:o}),r.a.createElement("input",{type:"password",name:"password",required:!0,autoComplete:"on",placeholder:"Password",value:a.password,onChange:o}),r.a.createElement("div",{className:"row"},r.a.createElement("button",{type:"submit"},"Login"),r.a.createElement(l.b,{to:"/register"},"Register"))))};var T=function(){var e=Object(n.useState)({}),t=Object(m.a)(e,2),a=t[0],c=t[1],o=function(e){var t=e.target,n=t.name,r=t.value;c(Object(h.a)(Object(h.a)({},a),{},Object(D.a)({},n,r)))},u=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,p.a.post("".concat(b,"auth/register"),Object(h.a)({},a),{withCredentials:!0});case 4:localStorage.setItem("firstLogin",!0),alert("Your account is register, go to shop now."),window.location.href="/",e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),alert(e.t0.response.data.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"login-page"},r.a.createElement("form",{onSubmit:u},r.a.createElement("h2",null,"Register"),r.a.createElement("input",{type:"text",name:"name",required:!0,placeholder:"Name",value:a.name,onChange:o}),r.a.createElement("input",{type:"email",name:"email",required:!0,placeholder:"Email",value:a.email,onChange:o}),r.a.createElement("input",{type:"text",name:"phoneNumber",required:!0,placeholder:"phone number",value:a.phoneNumber,onChange:o}),r.a.createElement("input",{type:"password",name:"password",required:!0,autoComplete:"on",placeholder:"Password",value:a.password,onChange:o}),r.a.createElement("input",{type:"password",name:"confirmPassword",required:!0,autoComplete:"on",placeholder:"Confirm Password",value:a.confirmPassword,onChange:o}),r.a.createElement("div",{className:"row"},r.a.createElement("button",{type:"submit"},"Register"),r.a.createElement(l.b,{to:"/login"},"Login"))))};var Y=function(){var e=Object(n.useContext)(O),t=Object(m.a)(e.userAPI.history,2),a=t[0],c=t[1],o=Object(m.a)(e.userAPI.isAdmin,1)[0],u=Object(m.a)(e.token,1)[0];return Object(n.useEffect)((function(){u&&function(){var e=Object(s.a)(i.a.mark((function e(){var t,a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o){e.next=8;break}return t="Bearer "+u,e.next=4,p.a.get("".concat(b,"/api/payment"),{headers:{Authorization:t}});case 4:a=e.sent,c(a.data),e.next=13;break;case 8:return n="Bearer "+u,e.next=11,p.a.get("".concat(b,"/user/history"),{headers:{Authorization:n}});case 11:r=e.sent,c(r.data);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[u,o,c]),console.log(a),r.a.createElement("div",{className:"history-page"},r.a.createElement("h2",null,"History"),r.a.createElement("h4",null,"You have ",a.length," ordered"),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Payment ID"),r.a.createElement("th",null,"Date of Purchased"),r.a.createElement("th",null))),r.a.createElement("tbody",null,a.map((function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,e.paymentID),r.a.createElement("td",null,new Date(e.created_at).toLocaleDateString()),r.a.createElement("td",null,r.a.createElement(l.b,{to:"/history/".concat(e._id)},"View")))})))))};var R=function(){var e=Object(n.useContext)(O),t=Object(m.a)(e.userAPI.history,1)[0],a=Object(n.useState)([]),c=Object(m.a)(a,2),o=c[0],l=c[1],u=Object(_.g)();return Object(n.useEffect)((function(){u.id&&t.forEach((function(e){e._id==u.id&&l(e)}))}),[u.id,t]),0===o.length?null:(console.log(o),r.a.createElement("div",{className:"history-page"},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Address"),r.a.createElement("th",null,"Email"),r.a.createElement("th",null,"Phone"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,o.user.name),r.a.createElement("td",null,o.address),r.a.createElement("td",null,o.user.email),r.a.createElement("td",null,o.user.phoneNumber)))),r.a.createElement("table",{style:{margin:"30px 0px"}},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null,"Products"),r.a.createElement("th",null,"Quantity"),r.a.createElement("th",null,"Price"))),r.a.createElement("tbody",null,o.cart.map((function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,r.a.createElement("img",{src:e.product.images.url,alt:""})),r.a.createElement("td",null,e.product.title),r.a.createElement("td",null,e.quantity),r.a.createElement("td",null,"$ ",e.product.price*e.quantity))}))))))},U=a(40),H=a(41),$=a(44),Q=a(43),V=a(42),G=a.n(V),J=function(e){Object($.a)(a,e);var t=Object(Q.a)(a);function a(){return Object(U.a)(this,a),t.apply(this,arguments)}return Object(H.a)(a,[{key:"render",value:function(){var e=this,t=this.props.total;return r.a.createElement(G.a,{env:"sandbox",client:{sandbox:"AVgm19Tbq8zGwHmhorx4z92gq6G36xGlQX0wn1_7EFMY7NOVBwASoJxkpS2O3kUArKwQBu3tcNL87me8",production:"YOUR-PRODUCTION-APP-ID"},currency:"USD",total:t,onError:function(e){console.log("Error!",e)},onSuccess:function(t){console.log("The payment was succeeded!",t),e.props.tranSuccess(t)},onCancel:function(e){console.log("The payment was cancelled!",e)},style:{size:"small",color:"blue",shape:"rect",label:"checkout",tagline:!1}})}}]),a}(r.a.Component);var X=function(){var e=Object(n.useContext)(O),t=Object(m.a)(e.userAPI.cart,2),a=t[0],c=t[1],o=Object(m.a)(e.token,1)[0],l=Object(n.useState)(0),u=Object(m.a)(l,2),d=u[0],f=u[1];Object(n.useEffect)((function(){!function(){var e=a.reduce((function(e,t){return t.product?e+t.product.price*t.quantity:e+t.price*t.quantity}),0);f(e)}()}),[a]);var h=function(){var e=Object(s.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="Bearer "+o,e.next=3,p.a.patch("".concat(b,"/user/addcart"),{cart:t},{headers:{Authorization:a}});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(s.a)(i.a.mark((function e(t){var n,r,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.paymentID,r=t.address,l="Bearer "+o,e.next=4,p.a.post("".concat(b,"api/payment"),{cart:a,paymentID:n,address:r},{headers:{Authorization:l}});case 4:c([]),h([]),alert("You have successfully placed an order.");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return 0===a.length?r.a.createElement("h2",{style:{textAlign:"center",fontSize:"5rem"}},"Cart Empty"):(console.log(a),r.a.createElement("div",null,a.map((function(e){return r.a.createElement("div",{className:"detail cart"},r.a.createElement("img",{src:e.product?e.product.images.url:e.images.url,alt:""}),r.a.createElement("div",{className:"box-detail"},r.a.createElement("h2",null,e.product?e.product.title:e.title),r.a.createElement("h3",null,"$ ",e.product?e.product.price*e.quantity:1*e.price),r.a.createElement("p",null,e.product?e.product.description:e.description),r.a.createElement("p",null,e.product?e.product.content:e.content),r.a.createElement("div",{className:"amount"},r.a.createElement("button",{onClick:function(){return t=e._id,a.forEach((function(e){e._id==t&&(1==e.quantity?e.quantity=1:e.quantity-=1)})),c(Object(E.a)(a)),void h(a);var t}}," - "),r.a.createElement("span",null,e.quantity),r.a.createElement("button",{onClick:function(){return t=e._id,a.forEach((function(e){console.log(e._id,t),e._id==t&&(e.quantity+=1)})),c(Object(E.a)(a)),void h(a);var t}}," + ")),r.a.createElement("div",{className:"delete",onClick:function(){return t=e._id,void(window.confirm("Do you want to delete this product?")&&(a.forEach((function(e,n){e._id==t&&a.splice(n,1)})),c(Object(E.a)(a)),h(a)));var t}},"X")))})),r.a.createElement("div",{className:"total"},r.a.createElement("h3",null,"Total: $ ",d),r.a.createElement(J,{total:d,tranSuccess:v}))))};var M=function(){return r.a.createElement("div",null,"404 | Not Found")};var K=function(){var e=Object(n.useContext)(O),t=Object(m.a)(e.categoriesAPI.categories,1)[0],a=Object(n.useState)(""),c=Object(m.a)(a,2),o=c[0],l=c[1],u=Object(m.a)(e.token,1)[0],d=Object(m.a)(e.categoriesAPI.callback,2),f=d[0],h=d[1],E=Object(n.useState)(!1),v=Object(m.a)(E,2),g=v[0],j=v[1],y=Object(n.useState)(""),w=Object(m.a)(y,2),x=w[0],k=w[1],C=function(){var e=Object(s.a)(i.a.mark((function e(t){var a,n,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!g){e.next=10;break}return a="Bearer "+u,e.next=6,p.a.put("".concat(b,"/api/category/").concat(x),{name:o},{headers:{Authorization:a}});case 6:n=e.sent,alert(n.data),e.next=15;break;case 10:return r="Bearer "+u,e.next=13,p.a.post("".concat(b,"/api/category"),{name:o},{headers:{Authorization:r}});case 13:c=e.sent,alert(c.data);case 15:j(!1),l(""),h(!f),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(1),alert(e.t0.response.data.msg);case 23:case"end":return e.stop()}}),e,null,[[1,20]])})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(s.a)(i.a.mark((function e(t,a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k(t),l(a),j(!0);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),A=function(){var e=Object(s.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a="Bearer "+u,e.next=4,p.a.delete("".concat(b,"/api/category/").concat(t),{headers:{Authorization:a}});case 4:n=e.sent,alert(n.data.msg),h(!f),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),alert(e.t0.response.data.msg);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"categories"},r.a.createElement("form",{onSubmit:C},r.a.createElement("label",{htmlFor:"category"},"Category"),r.a.createElement("input",{type:"text",name:"category",value:o,required:!0,onChange:function(e){return l(e.target.value)}}),r.a.createElement("button",{type:"submit"},g?"Update":"Create")),r.a.createElement("div",{className:"col"},t.map((function(e){return r.a.createElement("div",{className:"row",key:e._id},r.a.createElement("p",null,e.name),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return P(e._id,e.name)}},"Edit"),r.a.createElement("button",{onClick:function(){return A(e._id)}},"Delete")))}))))},W={product_id:"",title:"",price:0,description:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",content:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",category:"",_id:""};var Z=function(){var e=Object(n.useContext)(O),t=Object(n.useState)(W),a=Object(m.a)(t,2),c=a[0],o=a[1],l=Object(m.a)(e.categoriesAPI.categories,1)[0],u=Object(n.useState)(!1),d=Object(m.a)(u,2),f=d[0],E=d[1],v=Object(n.useState)(!1),g=Object(m.a)(v,2),j=g[0],y=g[1],w=Object(m.a)(e.userAPI.isAdmin,1)[0],x=Object(m.a)(e.token,1)[0],k=Object(_.f)(),C=Object(_.g)(),P=Object(m.a)(e.productsAPI.products,1)[0],A=Object(n.useState)(!1),N=Object(m.a)(A,2),S=N[0],q=N[1],L=Object(m.a)(e.productsAPI.callback,2),z=L[0],B=L[1];Object(n.useEffect)((function(){C.id?(q(!0),P.forEach((function(e){e._id.toString()===C.id.toString()&&(o(e),E(e.images))}))):(q(!1),o(W),E(!1))}),[C.id,P]);var F=function(){var e=Object(s.a)(i.a.mark((function e(t){var a,n,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,w){e.next=4;break}return e.abrupt("return",alert("You're not an admin"));case 4:if(a=t.target.files[0]){e.next=7;break}return e.abrupt("return",alert("File not exist."));case 7:if(!(a.size>5242880)){e.next=9;break}return e.abrupt("return",alert("Size too large!"));case 9:if("image/jpeg"===a.type||"image/png"===a.type){e.next=11;break}return e.abrupt("return",alert("File format is incorrect."));case 11:return(n=new FormData).append("image",a),y(!0),r="Bearer "+x,e.next=17,p.a.post("".concat(b,"/api/upload"),n,{headers:{"content-type":"multipart/form-data",Authorization:r}});case 17:c=e.sent,y(!1),E(c.data),e.next=25;break;case 22:e.prev=22,e.t0=e.catch(1),alert(e.t0.response.data.msg);case 25:case"end":return e.stop()}}),e,null,[[1,22]])})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,w){e.next=3;break}return e.abrupt("return",alert("You're not an admin"));case 3:return y(!0),t="Bearer "+x,e.next=7,p.a.post("".concat(b,"/api/destroy"),{public_id:f.public_id},{headers:{Authorization:t}});case 7:y(!1),E(!1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),alert(e.t0.response.data.msg);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),Y=function(e){var t=e.target,a=t.name,n=t.value;o(Object(h.a)(Object(h.a)({},c),{},Object(D.a)({},a,n)))},R=function(){var e=Object(s.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,w){e.next=4;break}return e.abrupt("return",alert("You're not an admin"));case 4:if(f){e.next=6;break}return e.abrupt("return",alert("No Image Upload"));case 6:if(!S){e.next=12;break}return a="Bearer "+x,e.next=10,p.a.put("".concat(b,"/api/products/").concat(c._id),Object(h.a)(Object(h.a)({},c),{},{images:f}),{headers:{Authorization:a}});case 10:e.next=15;break;case 12:return n="Bearer "+x,e.next=15,p.a.post("".concat(b,"/api/products"),Object(h.a)(Object(h.a)({},c),{},{images:f._id}),{headers:{Authorization:n}});case 15:B(!z),k.push("/"),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(1),alert(e.t0.response.data.msg);case 22:case"end":return e.stop()}}),e,null,[[1,19]])})));return function(t){return e.apply(this,arguments)}}(),U={display:f?"block":"none"};return r.a.createElement("div",{className:"create_product"},r.a.createElement("div",{className:"upload"},r.a.createElement("input",{type:"file",name:"file",id:"file_up",onChange:F}),j?r.a.createElement("div",{id:"file_img"},r.a.createElement(I,null)):r.a.createElement("div",{id:"file_img",style:U},r.a.createElement("img",{src:f?f.url:"",alt:""}),r.a.createElement("span",{onClick:T},"X"))),r.a.createElement("form",{onSubmit:R},r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"product_id"},"Product ID"),r.a.createElement("input",{type:"text",name:"product_id",id:"product_id",required:!0,value:c.product_id,onChange:Y,disabled:S})),r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",name:"title",id:"title",required:!0,value:c.title,onChange:Y})),r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"price"},"Price"),r.a.createElement("input",{type:"number",name:"price",id:"price",required:!0,value:c.price,onChange:Y})),r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"description"},"Description"),r.a.createElement("textarea",{type:"text",name:"description",id:"description",required:!0,value:c.description,rows:"5",onChange:Y})),r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"content"},"Content"),r.a.createElement("textarea",{type:"text",name:"content",id:"content",required:!0,value:c.content,rows:"7",onChange:Y})),r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"categories"},"Categories: "),r.a.createElement("select",{name:"category",value:c.category,onChange:Y},r.a.createElement("option",{value:""},"Please select a category"),l.map((function(e){return r.a.createElement("option",{value:e._id,key:e._id},e.name)})))),r.a.createElement("button",{type:"submit"},S?"Update":"Create")))},ee=function(e){var t=Object(n.useState)({}),a=Object(m.a)(t,2),c=a[0],o=a[1],l=Object(n.useContext)(O),u=Object(m.a)(l.token,1)[0];Object(n.useEffect)((function(){u&&function(){var e=Object(s.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="Bearer "+u,e.next=4,p.a.get("".concat(b,"/user/infor"),{headers:{Authorization:t}});case 4:a=e.sent,o(a.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()()}),[u]);var d=function(e){var t=e.target,a=t.name,n=t.value;o(Object(h.a)(Object(h.a)({},c),{},Object(D.a)({},a,n)))},f=function(){var e=Object(s.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,a="Bearer "+u,e.next=5,p.a.put("".concat(b,"/user/update/").concat(c._id),{name:c.name,phoneNumber:c.phoneNumber,email:c.email},{headers:{Authorization:a}});case 5:localStorage.setItem("firstLogin",!0),alert("Your account is updated."),window.location.href="/",e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),alert(e.t0.response.data.message);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(s.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,a="Bearer "+u,e.next=5,p.a.put("".concat(b,"/user/password/").concat(c._id),{oldPassword:c.oldPassword,newPassword:c.newPassword,confirmPassword:c.confirmPassword},{headers:{Authorization:a}});case 5:localStorage.setItem("firstLogin",!0),alert("Your account is updated."),window.location.href="/",e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),alert(e.t0.response.data.message);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"login-page"},r.a.createElement("form",{onSubmit:f},r.a.createElement("h2",null,"Profile"),r.a.createElement("input",{type:"text",name:"name",required:!0,placeholder:"Name",value:c.name,onChange:d}),r.a.createElement("input",{type:"email",name:"email",required:!0,placeholder:"Email",value:c.email,onChange:d}),r.a.createElement("input",{type:"text",name:"phoneNumber",required:!0,placeholder:"phone number",value:c.phoneNumber,onChange:d}),r.a.createElement("div",{className:"row"},r.a.createElement("button",{type:"submit"},"Update"))),r.a.createElement("br",null),r.a.createElement("form",{onSubmit:E},r.a.createElement("h2",null,"Change Password"),r.a.createElement("input",{type:"password",name:"oldPassword",required:!0,autoComplete:"on",placeholder:"Old Password",value:c.oldPassword,onChange:d}),r.a.createElement("input",{type:"password",name:"newPassword",required:!0,placeholder:"New Password",value:c.newPassword,onChange:d}),r.a.createElement("input",{type:"password",name:"confirmPassword",required:!0,placeholder:"Confirm Password",value:c.confirmPassword,onChange:d}),r.a.createElement("div",{className:"row"},r.a.createElement("button",{type:"submit"},"Change"))))};var te=function(){var e=Object(n.useContext)(O),t=Object(m.a)(e.userAPI.isLogged,1)[0],a=Object(m.a)(e.userAPI.isAdmin,1)[0];return r.a.createElement(_.c,null,r.a.createElement(_.a,{path:"/",exact:!0,component:z}),r.a.createElement(_.a,{path:"/detail/:id",exact:!0,component:B}),r.a.createElement(_.a,{path:"/login",exact:!0,component:t?M:F}),r.a.createElement(_.a,{path:"/register",exact:!0,component:t?M:T}),r.a.createElement(_.a,{path:"/category",exact:!0,component:a?K:M}),r.a.createElement(_.a,{path:"/create_product",exact:!0,component:a?Z:M}),r.a.createElement(_.a,{path:"/edit_product/:id",exact:!0,component:a?Z:M}),r.a.createElement(_.a,{path:"/history",exact:!0,component:t?Y:M}),r.a.createElement(_.a,{path:"/profile",exact:!0,component:t?ee:M}),r.a.createElement(_.a,{path:"/history/:id",exact:!0,component:t?R:M}),r.a.createElement(_.a,{path:"/cart",exact:!0,component:X}),r.a.createElement(_.a,{path:"*",exact:!0,component:M}))};var ae=function(){return p.a.defaults.withCredentials=!0,p.a.defaults.xsrfCookieName="refreshtoken",r.a.createElement(j,null,r.a.createElement(l.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(A,null),r.a.createElement(te,null))))};o.a.render(r.a.createElement(ae,null),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.e89850b5.chunk.js.map