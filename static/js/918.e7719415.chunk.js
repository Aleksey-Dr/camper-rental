"use strict";(self.webpackChunkcamper_rental=self.webpackChunkcamper_rental||[]).push([[918],{918:(e,i,s)=>{s.r(i),s.d(i,{default:()=>he});var t=s(43),a=s(3),r=s(780),c=s(579);const n=()=>(0,c.jsx)(r.LW,{height:"80",width:"80",color:"rgba(0, 0, 0, 0.75)",ariaLabel:"grid-loading",radius:"12.5",wrapperStyle:{margin:"auto"},visible:!0});var l=s(216),d=s(475);const o="LinkButton_link__f-vE5",h=e=>{let{path:i,title:s}=e;return(0,c.jsx)(d.N_,{to:i,className:o,children:s})};const _=s.p+"static/media/icons.bcafb591c2e78104395212a810cab248.svg",m="EquipmentList_list__AYjI0",p="EquipmentList_list-item__Rg+uW",x="EquipmentList_list-icon__m0UpT",j=e=>{let{items:i}=e;return(0,c.jsx)("ul",{className:m,children:i.map((e=>(0,c.jsxs)("li",{className:p,children:[(0,c.jsx)("svg",{width:"20",height:"20",className:x,children:(0,c.jsx)("use",{href:"".concat(_,"#icon-").concat(e)})}),(0,c.jsx)("span",{children:e})]},e)))})},u="CardCamper_card__+rjTR",f="CardCamper_card-img__tlKV8",C="CardCamper_card-information__aE18l",N="CardCamper_card-header__xNAx4",v="CardCamper_card-title__Mq5R2",g="CardCamper_card-price__xe6vB",b="CardCamper_card-favorite-btn__KhFRQ",w="CardCamper_card-icon-heart__9Fvif",y="CardCamper_card-icon-star__4PWoC",F="CardCamper_card-icon-location__QEPPN",k="CardCamper_card-reviews__VTzLa",L="CardCamper_card-location__UCI0x",E="CardCamper_card-description__BCPEP",T="CardCamper_card-equipment__7wPEt",q="CardCamper_card-equipment-buttons__rtZXj",B="CardCamper_card-equipment-btn__tKxeH",S=e=>{let{img:i,title:s,price:a,rating:r,reviews:n,description:d,details:o,id:m}=e;const p=Object.keys(o),[x,S]=(0,t.useState)(0),[K,W]=(0,t.useState)(6),I=p.slice(x,K);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:u,children:[(0,c.jsx)("img",{src:i,alt:"Camper",className:f}),(0,c.jsxs)("div",{className:C,children:[(0,c.jsxs)("div",{className:N,children:[(0,c.jsx)("h2",{className:v,children:s}),(0,c.jsxs)("span",{className:g,children:["\u20ac",a]}),(0,c.jsx)("button",{type:"button",className:b,children:(0,c.jsx)("svg",{width:"24",height:"24",className:w,children:(0,c.jsx)("use",{href:"".concat(_,"#icon-heart")})})})]}),(0,c.jsxs)("span",{className:k,children:[(0,c.jsx)("svg",{width:"16",height:"16",className:y,children:(0,c.jsx)("use",{href:"".concat(_,"#icon-star")})}),r,"(",n," Reviews)"]}),(0,c.jsxs)("span",{className:L,children:[(0,c.jsx)("svg",{width:"16",height:"16",className:F,children:(0,c.jsx)("use",{href:"".concat(_,"#icon-map-pin")})}),"Kyiv, Ukraine"]}),(0,c.jsx)("p",{className:E,children:d}),(0,c.jsxs)("div",{className:T,children:[(0,c.jsx)(j,{items:I}),(0,c.jsxs)("div",{className:q,children:[(0,c.jsx)("button",{onClick:()=>{K<=p.length&&(S(x+6),W(K+6))},type:"button",className:B,children:(0,c.jsx)("svg",{width:"20",height:"20",style:{fill:K>p.length&&"rgba(16, 24, 40, 0.2)"},children:(0,c.jsx)("use",{href:"".concat(_,"#icon-arrow-right")})})}),(0,c.jsx)("button",{onClick:()=>{K>6&&(S(x-6),W(K-6))},type:"button",className:B,children:(0,c.jsx)("svg",{width:"20",height:"20",style:{fill:K<=6&&"rgba(16, 24, 40, 0.2)"},children:(0,c.jsx)("use",{href:"".concat(_,"#icon-arrow-left")})})})]})]}),(0,c.jsx)(h,{path:"".concat(m,"/features"),title:"Show more"})]})]}),(0,c.jsx)(l.sv,{})]})};var K=s(356);const W=e=>e.campers.campers,I=e=>e.campers,P=e=>e.filter.value,O="MainContent_content__OGTEJ",V="MainContent_content-list__dzwXT",A="MainContent_content-btn__adWYq",J=()=>{const[e,i]=(0,t.useState)(4),s=(0,a.wA)();(0,t.useEffect)((()=>{s((0,K.Kr)())}),[s]);const r=(0,a.d4)(P),l=(0,a.d4)(W),{isLoading:d,error:o}=(0,a.d4)(I),h=r.toLowerCase(),_=l.filter((e=>e.name.toLowerCase().includes(h))),m=_.slice(0,e);return(0,c.jsxs)("div",{className:O,children:[d&&(0,c.jsx)(n,{}),o&&(0,c.jsxs)("p",{children:[(0,c.jsx)("b",{children:"Error: "}),o]}),(0,c.jsx)("ul",{className:V,children:m.map((e=>(0,c.jsx)(S,{img:e.gallery[0],title:e.name,price:e.price,rating:e.rating,reviews:e.reviews.length,description:e.description,details:e.details,id:e._id},e._id)))}),e<=_.length&&(0,c.jsx)("button",{onClick:()=>{i(e+e)},className:A,children:"Load more"})]})},R="Button_btn__W1TTO",Z=e=>{let{title:i,onClick:s}=e;return(0,c.jsx)("button",{onClick:s,type:"button",className:R,children:i})},M={"visually-hidden":"FilterItem_visually-hidden__d9JeB","item-checkbox":"FilterItem_item-checkbox__Gej-t","item-label":"FilterItem_item-label__WYEZF","item-wrapper":"FilterItem_item-wrapper__HJ+3y","item-icon":"FilterItem_item-icon__DZbHG"},G=e=>{let{width:i,height:s,href:t,description:a}=e;return(0,c.jsxs)("li",{className:M.item,children:[(0,c.jsx)("input",{type:"checkbox",id:a,className:"".concat(M["item-checkbox"],"\n                    ").concat(M["visually-hidden"])}),(0,c.jsx)("label",{htmlFor:a,className:M["item-label"],children:(0,c.jsxs)("span",{className:M["item-wrapper"],children:[(0,c.jsx)("svg",{width:i,height:s,className:M["item-icon"],children:(0,c.jsx)("use",{href:t})}),(0,c.jsx)("div",{children:a})]})})]})},U=JSON.parse('[{"id":1,"href":"#icon-wind","description":"AC"},{"id":2,"href":"#icon-automatic","description":"Automatic"},{"id":3,"href":"#icon-kitchen","description":"Kitchen"},{"id":4,"href":"#icon-TV","description":"TV"},{"id":5,"href":"#icon-shower","description":"Shower/WC"}]'),H=JSON.parse('[{"id":6,"href":"#icon-van","description":"Van"},{"id":7,"href":"#icon-fully","description":"Fully Integrated"},{"id":8,"href":"#icon-alcove","description":"Alcove"}]'),Y="Filter_filter__asygT",z="Filter_filter-title__MPsKO",Q="Filter_filter-subtitle__wK435",X="Filter_filter-equipment__ymWTB",D="Filter_filter-type__9xovW",$="Filter_filter-list__BxZJ1",ee="Filter_filter-list-transparent__ywynb",ie=()=>(0,c.jsxs)("div",{className:Y,children:[(0,c.jsx)("h2",{className:z,children:"Filters"}),(0,c.jsxs)("div",{className:X,children:[(0,c.jsx)("h3",{className:Q,children:"Vehicle equipment"}),(0,c.jsx)("ul",{className:ee,children:U.map((e=>(0,c.jsx)(G,{width:32,height:32,href:"".concat(_).concat(e.href),description:e.description},e.id)))})]}),(0,c.jsxs)("div",{className:D,children:[(0,c.jsx)("h3",{className:Q,children:"Vehicle type"}),(0,c.jsx)("ul",{className:$,children:H.map((e=>(0,c.jsx)(G,{width:40,height:28,href:"".concat(_).concat(e.href),description:e.description},e.id)))})]}),(0,c.jsx)(Z,{title:"Search"})]}),se="FormLocation_form__0ok9u",te="FormLocation_form-label__ZrGoN",ae="FormLocation_form-input__n1ft8",re="FormLocation_form-input-wrapper__m39Pv",ce="FormLocation_form-icon__47+jB",ne=()=>(0,c.jsxs)("form",{className:se,children:[(0,c.jsx)("label",{htmlFor:"location",className:te,children:"Location"}),(0,c.jsxs)("div",{className:re,children:[(0,c.jsx)("input",{type:"text",id:"location",placeholder:"Kyiv, Ukraine",className:ae}),(0,c.jsx)("svg",{width:"20",height:"20",className:ce,children:(0,c.jsx)("use",{href:"".concat(_,"#icon-map-pin")})})]})]}),le="SideBar_side-bar__OfZvB",de=()=>(0,c.jsxs)("div",{className:le,children:[(0,c.jsx)(ne,{}),(0,c.jsx)(ie,{})]}),oe="Catalog_wrapper__j0ogR",he=()=>(0,c.jsxs)("div",{className:oe,children:[(0,c.jsx)(de,{}),(0,c.jsx)(J,{})]})}}]);
//# sourceMappingURL=918.e7719415.chunk.js.map