"use strict";(self.webpackChunkcamper_rental=self.webpackChunkcamper_rental||[]).push([[610],{610:(e,i,s)=>{s.r(i),s.d(i,{default:()=>me});var a=s(43),t=s(3),r=s(780),c=s(579);const n=()=>(0,c.jsx)(r.LW,{height:"80",width:"80",color:"rgba(0, 0, 0, 0.75)",ariaLabel:"grid-loading",radius:"12.5",wrapperStyle:{margin:"auto"},visible:!0});var l=s(216),d=s(475);const o="LinkButton_link__f-vE5",h=e=>{let{path:i,title:s}=e;return(0,c.jsx)(d.N_,{to:i,className:o,children:s})};const m=s.p+"static/media/icons.bcafb591c2e78104395212a810cab248.svg",_="EquipmentList_list__AYjI0",p="EquipmentList_list-item__Rg+uW",x="EquipmentList_list-icon__m0UpT",j="EquipmentList_list-details__KJ4-D",u=e=>{let{items:i}=e;return(0,c.jsx)("ul",{className:_,children:i.map((e=>0!==e[1]&&(0,c.jsxs)("li",{className:p,children:[(0,c.jsx)("svg",{width:"20",height:"20",className:x,children:(0,c.jsx)("use",{href:"".concat(m,"#icon-").concat(e[0])})}),(0,c.jsxs)("ul",{className:j,children:[1!==e[1]&&(0,c.jsx)("li",{children:e[1]}),(0,c.jsx)("li",{children:e[0]})]})]},e[0])))})},v="CardCamper_card__+rjTR",f="CardCamper_card-img__tlKV8",N="CardCamper_card-information__aE18l",C="CardCamper_card-header__xNAx4",g="CardCamper_card-title__Mq5R2",b="CardCamper_card-price__xe6vB",w="CardCamper_card-favorite-btn__KhFRQ",F="CardCamper_card-icon-heart__9Fvif",y="CardCamper_card-icon-star__4PWoC",k="CardCamper_card-icon-location__QEPPN",L="CardCamper_card-reviews__VTzLa",E="CardCamper_card-location__UCI0x",q="CardCamper_card-description__BCPEP",S="CardCamper_card-equipment__7wPEt",T="CardCamper_card-equipment-buttons__rtZXj",K="CardCamper_card-equipment-btn__tKxeH",B=e=>{let{img:i,title:s,price:t,rating:r,reviews:n,description:d,details:o,id:_}=e;const p=Object.entries(o),[x,j]=(0,a.useState)(0),[B,P]=(0,a.useState)(6),A=p.slice(x,B);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:v,children:[(0,c.jsx)("img",{src:i,alt:"Camper",className:f}),(0,c.jsxs)("div",{className:N,children:[(0,c.jsxs)("div",{className:C,children:[(0,c.jsx)("h2",{className:g,children:s}),(0,c.jsxs)("span",{className:b,children:["\u20ac",t]}),(0,c.jsx)("button",{type:"button",className:w,children:(0,c.jsx)("svg",{width:"24",height:"24",className:F,children:(0,c.jsx)("use",{href:"".concat(m,"#icon-heart")})})})]}),(0,c.jsxs)("span",{className:L,children:[(0,c.jsx)("svg",{width:"16",height:"16",className:y,children:(0,c.jsx)("use",{href:"".concat(m,"#icon-star")})}),r,"(",n," Reviews)"]}),(0,c.jsxs)("span",{className:E,children:[(0,c.jsx)("svg",{width:"16",height:"16",className:k,children:(0,c.jsx)("use",{href:"".concat(m,"#icon-map-pin")})}),"Kyiv, Ukraine"]}),(0,c.jsx)("p",{className:q,children:d}),(0,c.jsxs)("div",{className:S,children:[(0,c.jsx)(u,{items:A}),(0,c.jsxs)("div",{className:T,children:[(0,c.jsx)("button",{onClick:()=>{B<=p.length&&(j(x+6),P(B+6))},type:"button",className:K,children:(0,c.jsx)("svg",{width:"20",height:"20",style:{fill:B>p.length&&"rgba(16, 24, 40, 0.2)"},children:(0,c.jsx)("use",{href:"".concat(m,"#icon-arrow-right")})})}),(0,c.jsx)("button",{onClick:()=>{B>6&&(j(x-6),P(B-6))},type:"button",className:K,children:(0,c.jsx)("svg",{width:"20",height:"20",style:{fill:B<=6&&"rgba(16, 24, 40, 0.2)"},children:(0,c.jsx)("use",{href:"".concat(m,"#icon-arrow-left")})})})]})]}),(0,c.jsx)(h,{path:"".concat(_,"/features"),title:"Show more"})]})]}),(0,c.jsx)(l.sv,{})]})};var P=s(356);const A=e=>e.campers.campers,I=e=>e.campers,V=e=>e.filter.search,W="MainContent_content__OGTEJ",J="MainContent_content-list__dzwXT",O="MainContent_content-btn__adWYq",R=()=>{const[e,i]=(0,a.useState)(4),s=(0,t.wA)();(0,a.useEffect)((()=>{s((0,P.K)())}),[s]);const r=(0,t.d4)(V).join(" "),l=(0,t.d4)(A),{isLoading:d,error:o}=(0,t.d4)(I),h=r.toLowerCase(),m=l.filter((e=>Object.keys(e.details).join(" ").toLowerCase().includes(h))),_=m.slice(0,e);return(0,c.jsxs)("div",{className:W,children:[d&&(0,c.jsx)(n,{}),o&&(0,c.jsxs)("p",{children:[(0,c.jsx)("b",{children:"Error: "}),o]}),(0,c.jsx)("ul",{className:J,children:_.map((e=>(0,c.jsx)(B,{img:e.gallery[0],title:e.name,price:e.price,rating:e.rating,reviews:e.reviews.length,description:e.description,details:e.details,id:e._id},e._id)))}),e<=m.length&&(0,c.jsx)("button",{onClick:()=>{i(e+e)},className:O,children:"Load more"})]})};var Z=s(877);const M={"visually-hidden":"FilterItem_visually-hidden__d9JeB","item-checkbox":"FilterItem_item-checkbox__Gej-t","item-label":"FilterItem_item-label__WYEZF","item-wrapper":"FilterItem_item-wrapper__HJ+3y","item-icon":"FilterItem_item-icon__DZbHG"},G=e=>{let{width:i,height:s,name:a,value:r,href:n,description:l}=e;const d=(0,t.wA)();return(0,c.jsxs)("li",{className:M.item,children:[(0,c.jsx)("input",{onChange:e=>{d((0,Z.$u)(e.currentTarget.value))},type:"checkbox",id:l,name:a,value:r,className:"".concat(M["item-checkbox"],"\n                     ").concat(M["visually-hidden"])}),(0,c.jsx)("label",{htmlFor:l,className:M["item-label"],children:(0,c.jsxs)("span",{className:M["item-wrapper"],children:[(0,c.jsx)("svg",{width:i,height:s,className:M["item-icon"],children:(0,c.jsx)("use",{href:n})}),(0,c.jsx)("div",{children:l})]})})]})},U=JSON.parse('[{"id":1,"value":"airConditioner","href":"#icon-wind","description":"AC"},{"id":2,"value":"automatic","href":"#icon-automatic","description":"Automatic"},{"id":3,"value":"kitchen","href":"#icon-kitchen","description":"Kitchen"},{"id":4,"value":"TV","href":"#icon-TV","description":"TV"},{"id":5,"value":"shower","href":"#icon-shower","description":"Shower/WC"}]'),D=JSON.parse('[{"id":6,"href":"#icon-van","description":"Van"},{"id":7,"href":"#icon-fully","description":"Fully Integrated"},{"id":8,"href":"#icon-alcove","description":"Alcove"}]'),H="Filter_filter__asygT",Y="Filter_filter-title__MPsKO",z="Filter_filter-subtitle__wK435",Q="Filter_filter-equipment__ymWTB",X="Filter_filter-type__9xovW",$="Filter_filter-list__BxZJ1",ee="Filter_filter-list-transparent__ywynb",ie="Filter_filter-btn__a5FPv",se=()=>{const e=(0,t.wA)();return(0,c.jsxs)("div",{className:H,children:[(0,c.jsx)("h2",{className:Y,children:"Filters"}),(0,c.jsxs)("form",{onSubmit:i=>{i.preventDefault(),e((0,Z.n0)())},children:[(0,c.jsxs)("div",{className:Q,children:[(0,c.jsx)("h3",{className:z,children:"Vehicle equipment"}),(0,c.jsx)("ul",{className:ee,children:U.map((e=>(0,c.jsx)(G,{width:32,height:32,name:"equipment",value:e.value,href:"".concat(m).concat(e.href),description:e.description},e.id)))})]}),(0,c.jsxs)("div",{className:X,children:[(0,c.jsx)("h3",{className:z,children:"Vehicle type"}),(0,c.jsx)("ul",{className:$,children:D.map((e=>(0,c.jsx)(G,{width:40,name:"type",height:28,href:"".concat(m).concat(e.href),description:e.description},e.id)))})]}),(0,c.jsx)("button",{type:"submit",className:ie,children:"Search"})]})]})},ae="FormLocation_form__0ok9u",te="FormLocation_form-label__ZrGoN",re="FormLocation_form-input__n1ft8",ce="FormLocation_form-input-wrapper__m39Pv",ne="FormLocation_form-icon__47+jB",le=()=>(0,c.jsxs)("form",{className:ae,children:[(0,c.jsx)("label",{htmlFor:"location",className:te,children:"Location"}),(0,c.jsxs)("div",{className:ce,children:[(0,c.jsx)("input",{type:"text",id:"location",placeholder:"Kyiv, Ukraine",className:re}),(0,c.jsx)("svg",{width:"20",height:"20",className:ne,children:(0,c.jsx)("use",{href:"".concat(m,"#icon-map-pin")})})]})]}),de="SideBar_side-bar__OfZvB",oe=()=>(0,c.jsxs)("div",{className:de,children:[(0,c.jsx)(le,{}),(0,c.jsx)(se,{})]}),he="Catalog_wrapper__j0ogR",me=()=>(0,c.jsxs)("div",{className:he,children:[(0,c.jsx)(oe,{}),(0,c.jsx)(R,{})]})}}]);
//# sourceMappingURL=610.1f7fb668.chunk.js.map