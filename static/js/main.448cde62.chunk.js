(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{12:function(e,t,a){e.exports={ImageGalleryItem:"Image_ImageGalleryItem__Kqd4l",ImageGalleryItem_image:"Image_ImageGalleryItem_image__2Uxv6"}},13:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2KXiU",Modal:"Modal_Modal__Gf3JJ"}},24:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__3V9HV"}},25:function(e,t,a){e.exports={Button:"Button_Button__2UFZa"}},5:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1DizO",SearchForm:"Searchbar_SearchForm__2l68T",SearchForm_button:"Searchbar_SearchForm_button__PS4sH",SearchForm_button_label:"Searchbar_SearchForm_button_label__1zo9a",SearchForm_input:"Searchbar_SearchForm_input__3cOon"}},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(9),c=a.n(n),r=a(14),o=a(4),i=a(0),l=a.n(i),u=a(5),s=a.n(u),m=a(1),b=function(e){var t=e.onSubmit,a=Object(i.useState)(""),n=Object(o.a)(a,2),c=n[0],r=n[1];return Object(m.jsx)("header",{className:s.a.Searchbar,children:Object(m.jsxs)("form",{className:s.a.SearchForm,onSubmit:function(e){e.preventDefault(),t(c),r("")},children:[Object(m.jsx)("button",{type:"submit",className:s.a.SearchForm_button,children:Object(m.jsx)("span",{className:s.a.SearchForm_button_label,children:"Search"})}),Object(m.jsx)("input",{className:s.a.SearchForm_input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){r(e.target.value)},value:c})]})})},j=a(23),h=a.n(j),O="https://pixabay.com/api/",g="23745072-b1ce4d1935f2990f41ff03e07",f=a(12),_=a.n(f),d=function(e){var t=e.image,a=e.largeImg,n=e.onPictureOpen;return Object(m.jsx)("li",{className:_.a.ImageGalleryItem,onClick:function(){n(a)},children:Object(m.jsx)("img",{src:t,alt:"#",className:_.a.ImageGalleryItem_image})})},p=a(24),S=a.n(p),x=function(e){var t=e.gallery,a=e.onPictureOpen;return Object(m.jsx)("ul",{className:S.a.ImageGallery,children:t.map((function(e){return Object(m.jsx)(d,{image:e.webformatURL,largeImg:e.largeImageURL,onPictureOpen:a},e.id)}))})},y=a(13),v=a.n(y),I=document.querySelector("#modal"),F=function(e){var t=e.onClose,a=e.largeImage,c=function(e){"Escape"===e.code&&t()};return Object(i.useEffect)((function(){return window.addEventListener("keydown",c),function(){window.removeEventListener("keydown",c)}})),Object(n.createPortal)(Object(m.jsx)("div",{className:v.a.Overlay,onClick:function(e){e.currentTarget===e.target&&t()},children:Object(m.jsx)("div",{className:v.a.Modal,children:Object(m.jsx)("img",{src:a,alt:"#"})})}),I)},w=a(25),k=a.n(w),G=function(e){var t=e.getPhoto;return Object(m.jsx)("button",{type:"button",onClick:t,className:k.a.Button,children:"Load more"})},N=a(26),C=a(27),P=a(30),E=a(29),M=a(28),B=a.n(M),L=function(e){Object(P.a)(a,e);var t=Object(E.a)(a);function a(){return Object(N.a)(this,a),t.apply(this,arguments)}return Object(C.a)(a,[{key:"render",value:function(){return Object(m.jsx)(B.a,{type:"threeDots",color:"blue",height:70,width:100,timeout:4e3})}}]),a}(l.a.Component),U=(a(74),function(){var e=Object(i.useState)(""),t=Object(o.a)(e,2),a=t[0],n=t[1],c=Object(i.useState)([]),l=Object(o.a)(c,2),u=l[0],s=l[1],j=Object(i.useState)(1),f=Object(o.a)(j,2),_=f[0],d=f[1],p=Object(i.useState)(0),S=Object(o.a)(p,2),y=S[0],v=S[1],I=Object(i.useState)({}),w=Object(o.a)(I,2),k=w[0],N=w[1],C=Object(i.useState)(!1),P=Object(o.a)(C,2),E=P[0],M=P[1],B=Object(i.useState)(!1),U=Object(o.a)(B,2),J=U[0],T=U[1];Object(i.useEffect)((function(){a&&(s([]),q())}),[a]);var q=function(){T(!0),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return h.a.get("".concat(O,"?q=").concat(e,"&page=").concat(t,"&key=").concat(g,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data}))}(a,_).then((function(e){var t=e.hits,a=e.total;s([].concat(Object(r.a)(u),Object(r.a)(t))),d(_+1),v(a),1!==_&&z(),0===t.length&&alert("There are no pictures")})).catch((function(e){return alert(e.message)})).finally((function(){return T(!1)}))},z=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},D=function(){M(!E)};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(b,{onSubmit:function(e){s([]),n(e),d(1)}}),0!==u.length&&Object(m.jsx)(x,{gallery:u,onPictureOpen:function(e){N(e),D()}}),E&&Object(m.jsx)(F,{onClose:D,largeImage:k}),J&&Object(m.jsx)(L,{}),Math.ceil(y/12)!==_-1&&0!==y&&Object(m.jsx)(G,{getPhoto:q})]})});a(75);c.a.render(Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(U,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.448cde62.chunk.js.map