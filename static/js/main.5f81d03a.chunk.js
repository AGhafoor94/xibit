(this.webpackJsonpxibit=this.webpackJsonpxibit||[]).push([[0],{188:function(e,t,a){},202:function(e,t,a){e.exports=a(426)},207:function(e,t,a){},408:function(e,t,a){},426:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),c=a.n(l),o=(a(207),a(32)),i=a(31),s=a(34),u=Object(n.createContext)(),m=a(29),p=a.n(m),d=a(41),E=a(42),b=a.n(E),g="https://agile-earth-49843.herokuapp.com",f=a(109),h=a.n(f),y=a(50),x=a.n(y),v=a(63),k=a.n(v),O=a(68),j=a.n(O),w=Object(n.forwardRef)((function(e,t){var a=e.onSubmit;e.error;return r.a.createElement("div",{ref:t,className:"formComponent"},r.a.createElement(h.a,{className:"titleComponent",style:{color:"#FEA000"}},"Log In"),r.a.createElement(x.a,{name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:a},r.a.createElement(x.a.Item,{name:"email",rules:[{required:!0,message:"Please input your Username!"}]},r.a.createElement(k.a,{placeholder:"Username",style:{padding:"10px"}})),r.a.createElement(x.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}]},r.a.createElement(k.a,{type:"password",placeholder:"Password",style:{padding:"10px"}})),r.a.createElement(x.a.Item,null,r.a.createElement(j.a,{type:"primary",htmlType:"submit",className:"login-form-button",style:{width:"100%",backgroundColor:"#669900",border:"#669900",height:"50px",fontSize:"1.5rem"}},"Submit"),r.a.createElement(i.c,{to:"/register",style:{width:"80%",height:"50px",display:"block",textAlign:"center",margin:"0 auto",fontSize:"1.2rem"}},"Don't have an account? Click here to Register"))))})),S=a(69),C=a.n(S),N=a(55),I=a.n(N),P=a(112),A=a.n(P),z=(a(188),function(){var e=Object(s.g)(),t=Object(n.useContext)(u).setUser,a=Object(n.useState)(""),l=Object(o.a)(a,2),c=(l[0],l[1]),i=function(){var a=Object(d.a)(p.a.mark((function a(n){var r,l,o,i,s,u;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r=n.email,l=n.password,a.prev=1,a.next=4,b.a.post("".concat(g,"/auth/login"),{email:r,password:l});case 4:o=a.sent,i=o.data,s=i.token,u={email:r,token:s},localStorage.setItem("user",JSON.stringify(u)),t({email:r,token:s}),e.replace("/"),a.next=16;break;case 13:a.prev=13,a.t0=a.catch(1),c(a.t0.message);case 16:case"end":return a.stop()}}),a,null,[[1,13]])})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(A.a,null,r.a.createElement(C.a,{type:"flex",style:{height:"100vh"}},r.a.createElement(I.a,{className:"gutter-row display",span:12,style:{backgroundColor:"#FEA000"}}),r.a.createElement(I.a,{style:{display:"flex",justifyContent:"center",alignItems:"center"},className:" gutter-row ",span:12},r.a.createElement("div",{style:{display:"inline-block",verticalAlign:"middle"}},r.a.createElement(w,{onSubmit:i,error:c}))))))}),F=Object(n.createContext)(),q=a(199),B=(a(408),a(40)),D=a.n(B),R=a(88),U=a.n(R),L=a(435),_=a(117),T=function(){var e=Object(n.useContext)(u),t=e.user,a=e.setUser,l=Object(n.useContext)(F),c=l.plans,o=l.setPlans,s=l.selectedPlan,m=l.setSelectedPlan;Object(n.useEffect)((function(){(function(){var e=Object(d.a)(p.a.mark((function e(){var a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("".concat(g,"/api/plans"),{headers:{authorization:"Bearer ".concat(t.token)}});case 2:a=e.sent,n=a.data,o(n.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t.token,o]);var E=r.a.createElement(D.a,null,c.length?c.map((function(e,t){return r.a.createElement(D.a.Item,{key:t,onClick:function(){m(e)}},e.title)})):r.a.createElement(D.a.Item,null,'"No Plans"'));return r.a.createElement(D.a,{theme:"dark",mode:"horizontal"},r.a.createElement(D.a.Item,{key:"app"},r.a.createElement(i.c,{to:"/"},"Xibit")),r.a.createElement(D.a.Item,{key:"dashboard"},r.a.createElement(i.c,{to:"/xibits"},"Dashboard")),r.a.createElement(D.a.Item,{key:"plans"},r.a.createElement(i.c,{to:"/xibits/plans"},"Plans")),r.a.createElement(D.a.Item,{key:"search"},r.a.createElement(i.c,{to:"/xibits/search"},"Search")),r.a.createElement(D.a.Item,{key:"add-plan"},r.a.createElement(U.a,{placeholder:"Add a plan",enterButton:"Add",size:"large",onSearch:function(){var e=Object(d.a)(p.a.mark((function e(a){var n,r,l;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.post("".concat(g,"/api/plans"),{title:a,createdAt:Date.now()},{headers:{authorization:"Bearer ".concat(t.token)}});case 2:n=e.sent,r=n.data,l=[].concat(Object(q.a)(c),[r.data]),o(l);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()})),r.a.createElement(D.a.Item,null,r.a.createElement("label",null,"Selected plan: "),r.a.createElement(L.a,{overlay:E,placement:"bottomCenter",arrow:!0},r.a.createElement(_.a,null,s?s.title:"None"))),r.a.createElement(D.a.Item,{key:"logout",style:{float:"right"},onClick:function(){return a({})}},"Logout"))},X=a(85),J=a(53),K=a(433),M=a(66),V=a.n(M),G=function(){var e=Object(n.useContext)(F).selectedPlan,t=Object(n.useState)([]),a=Object(o.a)(t,2),l=(a[0],a[1]);return r.a.createElement("div",null,r.a.createElement(T,null),r.a.createElement("div",{className:"site-card-wrapper",style:{width:"80%",display:"block",margin:"20px auto 0 auto"}}),r.a.createElement("div",{className:"site-card-wrapper container"},r.a.createElement(X.a,{style:{width:"70%",display:"block",margin:"10px auto"}},e?r.a.createElement(_.a,{style:{width:"100%",display:"block",margin:"10px auto"},type:"primary",danger:!0,size:"large"},"Submit"):null,r.a.createElement(J.a,null,e?e.xibits.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(K.a,{title:e.name,style:{margin:"10px auto",border:"2px solid #FEA000"},bordered:!0},r.a.createElement("p",null,e.address),r.a.createElement("label",null,"Type in Order"),r.a.createElement(V.a,{onChange:function(t){var a=t.target;l({id:e._id,index:a.value})}})))})):r.a.createElement("h2",{style:{textAlign:"center"}},"Please select a plan")))))},H=function(){return Object(n.useContext)(u).user.token?r.a.createElement(T,null):r.a.createElement(D.a,{theme:"dark",mode:"horizontal"},r.a.createElement(D.a.Item,{key:"app"},r.a.createElement(i.c,{to:"/"},r.a.createElement("img",{className:"ant-menu-item",alt:"logo"}))),r.a.createElement(D.a.Item,{key:"login",style:{float:"right"}},r.a.createElement(i.c,{to:"/login"},"Login")))},Q=a(197),W=a.n(Q),Y=a(107),Z=a.n(Y),$=function(e){var t=e.cardId,a=e.cardTitle,l=e.cardContent,c=(e.photoRef,Object(n.useContext)(F).selectedPlan),i=Object(n.useContext)(u).user,s=Object(n.useState)(),m=Object(o.a)(s,2),E=m[0],f=m[1],h=function(){var e=Object(d.a)(p.a.mark((function e(){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={placeId:t,name:a,address:l,createdAt:Date.now()},e.next=3,b.a.put("".concat(g,"/api/plans/").concat(c._id),n,{headers:{authorization:"Bearer ".concat(i.token)}});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"site-card-wrapper"},r.a.createElement(C.a,{style:{width:"70%",display:"block",margin:"10px auto"}},r.a.createElement(I.a,null,r.a.createElement(W.a,{title:a,style:{margin:"10px auto",border:"2px solid #FEA000"},bordered:!0},l),c?r.a.createElement(_.a,{onClick:h,type:"primary",size:"large"},"Add to Plan"):r.a.createElement(_.a,{type:"primary",size:"large"},"Please Select A Plan to Add"),r.a.createElement(_.a,{onClick:function(){f(!0)},type:"primary",danger:!0,size:"large",style:{float:"right"}},"View")),r.a.createElement(Z.a,{title:a,visible:E,onOk:function(){f(!1)},onCancel:function(){f(!1)}},r.a.createElement("p",null,l),r.a.createElement("p",null,a))))},ee=function(){var e=Object(n.useContext)(u).user,t=Object(n.useContext)(F).selectedXibit,a=Object(n.useState)([]),l=Object(o.a)(a,2),c=l[0],i=l[1];Object(n.useEffect)((function(){(function(){var a=Object(d.a)(p.a.mark((function a(){var n,r;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,b.a.get("".concat(g,"/api/xibits/").concat(t,"s"),{headers:{authorization:"Bearer ".concat(e.token)}});case 2:n=a.sent,r=n.data,i(r.queryResults);case 5:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}),[t,e.token]);return r.a.createElement("div",null,r.a.createElement(H,null),c?c.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement($,{cardTitle:e.name,cardContent:e.address,cardId:e.id,cardIndex:t,photoRef:e.photos[0].photo_reference}))})):r.a.createElement("p",null,"Loading..."))},te=a(434),ae=function(e){var t=e.header,a=(Object(n.useContext)(u).user,Object(n.useContext)(F).setSelectXibit);return r.a.createElement("div",null,r.a.createElement("div",{style:{display:"inline-block",width:"100%",margin:"0 auto",left:"20px"}},r.a.createElement(_.a,{type:"primary",style:{margin:"10px 10px 0 0",display:"block",float:"right",backgroundColor:"#449D44",border:"#449D44"}},r.a.createElement(i.b,{to:"/register"},"Sign Up")),r.a.createElement(_.a,{type:"primary",style:{margin:"10px 10px 0 0",display:"block",float:"right",backgroundColor:"#669900",border:"#669900"}},r.a.createElement(i.b,{to:"/login"},"Sign In"))),r.a.createElement("div",{style:{margin:"0 auto"},className:"rightComponent"},r.a.createElement("h1",{style:{textAlign:"center",fontSize:"7rem",color:"#FEA000"}},t),r.a.createElement(_.a,{type:"primary",style:{margin:"10px auto",display:"block",width:"80%",height:"150px",backgroundColor:"#1F4366",fontSize:"2.5rem",border:"#1F4366"},onClick:function(){a("aquarium")}},r.a.createElement(i.b,{to:"/xibits/aquarium"},"Aquariums")),r.a.createElement(_.a,{type:"primary",style:{margin:"0 auto",display:"block",width:"80%",height:"150px",backgroundColor:"#FEA000",border:"#FEA000",fontSize:"2.5rem"},onClick:function(){a("safari")}},r.a.createElement(i.b,{to:"/xibits/safari"},"Safaris"))))},ne=function(){return r.a.createElement("div",null,r.a.createElement(te.a,null,r.a.createElement(X.a,{style:{height:"100vh"}},r.a.createElement(J.a,{className:"leftContainer gutter-row",span:12,style:{backgroundColor:"#1F4366"}}),r.a.createElement(J.a,{className:"rightComponent gutter-row ",span:12},r.a.createElement(ae,{header:"Xibit"})))))},re=Object(n.forwardRef)((function(e,t){var a=e.onSubmit;e.error;return r.a.createElement("div",{ref:t,className:"formComponent"},r.a.createElement(h.a,{className:"titleComponent",style:{color:"#FEA000"}},"Register"),r.a.createElement(x.a,{name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:a},r.a.createElement(x.a.Item,{name:"firstName",rules:[{required:!0,message:"Please input your Firstname!"}]},r.a.createElement(k.a,{placeholder:"First Name",style:{padding:"10px"}})),r.a.createElement(x.a.Item,{name:"lastName",rules:[{required:!0,message:"Please input your Lastname!"}]},r.a.createElement(k.a,{placeholder:"Last Name",style:{padding:"10px"}})),r.a.createElement(x.a.Item,{name:"email",rules:[{required:!0,message:"Please input your Username!"}]},r.a.createElement(k.a,{placeholder:"Username",style:{padding:"10px"}})),r.a.createElement(x.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}]},r.a.createElement(k.a,{type:"password",placeholder:"Password",style:{padding:"10px"}})),r.a.createElement(x.a.Item,null,r.a.createElement(j.a,{type:"primary",htmlType:"submit",className:"login-form-button",style:{width:"100%",backgroundColor:"#669900",border:"#669900",height:"50px",fontSize:"1.5rem"}},"Submit"),r.a.createElement(i.c,{to:"/login",style:{width:"80%",height:"50px",display:"block",textAlign:"center",margin:"0 auto",fontSize:"1.2rem"}},"Already have an account? Click here to Sign in"))))})),le=function(){var e=Object(s.g)(),t=Object(n.useContext)(u).setUser,a=Object(n.useState)(""),l=Object(o.a)(a,2),c=(l[0],l[1]),i=function(){var a=Object(d.a)(p.a.mark((function a(n){var r,l,o,i,s,u,m;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r=n.email,l=n.firstName,o=n.lastName,i=n.password,a.prev=1,a.next=4,b.a.post("".concat(g,"/auth/register"),{email:r,firstName:l,lastName:o,password:i});case 4:s=a.sent,u=s.data,m=u.token,t({email:r,token:m}),e.replace("/login"),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(1),c(a.t0.message);case 14:case"end":return a.stop()}}),a,null,[[1,11]])})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(A.a,null,r.a.createElement(C.a,{type:"flex",style:{height:"100vh"}},r.a.createElement(I.a,{className:"gutter-row display",span:12,style:{backgroundColor:"#FEA000"}}),r.a.createElement(I.a,{style:{display:"flex",justifyContent:"center",alignItems:"center"},className:" gutter-row ",span:12},r.a.createElement("div",{style:{display:"inline-block",verticalAlign:"middle"}},r.a.createElement(re,{onSubmit:i,error:c}))))))},ce=a(432);function oe(e){var t=e.onMount,a=e.className,l=e.onMountProps,c=e.lat,i=e.lng,s=Object(n.useRef)(),u=Object(n.useState)(),m=Object(o.a)(u,2),p=m[0],d=m[1],E=Object(n.useContext)(F).apiKey;return Object(n.useEffect)((function(){var e=function(){return d(new window.google.maps.Map(s.current,{center:{lat:c,lng:i},zoom:15}))};if(!window.google){var t=document.createElement("script");return t.src="https://maps.googleapis.com/maps/api/js?key=".concat(E),document.head.append(t),t.addEventListener("load",e),function(){return t.removeEventListener("load",e)}}e()}),[c,i,E]),p&&"function"===typeof t&&t(p,l),r.a.createElement("div",Object.assign({style:{height:"60vh",margin:"1em 0",borderRadius:"0.5em"}},{ref:s,className:a}))}var ie=function(e){var t=e.lat,a=e.lng,n=e.data.data.candidates[0];return r.a.createElement("div",{className:"site-card-border-less-wrapper"},r.a.createElement(K.a,{title:n.name,bordered:!1,style:{width:300}},r.a.createElement("p",null,n.opening_hours.open_now?r.a.createElement("p",{style:{color:"#449D44"}},"It is open now"):r.a.createElement("p",{style:{color:"#8f0808"}},"It isn't open right now")),r.a.createElement("p",null,n.formatted_address),r.a.createElement("p",null,n.rating)),r.a.createElement(oe,{lat:t,lng:a}))},se=function(){var e=Object(n.useState)("safari"),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useContext)(u).user,i=Object(n.useState)(),s=Object(o.a)(i,2),m=s[0],E=s[1],f=Object(n.useState)(!1),h=Object(o.a)(f,2),y=h[0],x=h[1],v=Object(n.useContext)(F).setApiKey;Object(n.useEffect)((function(){(function(){var e=Object(d.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("".concat(g,"/api/key"),{headers:{authorization:"Bearer ".concat(c.token)}});case 2:t=e.sent,v(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[v,c.token]);return r.a.createElement("div",null,r.a.createElement(T,null),r.a.createElement("div",{className:"container",style:{width:"80%",display:"block",margin:"20px auto 0 auto"}},r.a.createElement(ce.a.Group,{options:[{label:"Search Safaris",value:"safari"},{label:"Search Aquariums",value:"aquarium"},{label:"Search by Postcode",value:"postcode"}],onChange:function(e){var t=e.target;l(t.value)},value:a,optionType:"button",buttonStyle:"solid"}),r.a.createElement(U.a,{placeholder:"Search",enterButton:"Search",size:"large",onSearch:function(){var e=Object(d.a)(p.a.mark((function e(t){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("".concat(g,"/api/xibit/").concat(a,"/search/").concat(t),{headers:{authorization:"Bearer ".concat(c.token)}});case 2:n=e.sent,r=n.data,E(r),x(!0);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),y?r.a.createElement(ie,{lat:m.lat,lng:m.lng,data:m}):r.a.createElement("p",null,"Please select search and type in query")))},ue=function(){var e=Object(n.useContext)(u).user;return r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/",exact:!0},r.a.createElement(ne,null)),r.a.createElement(s.b,{path:"/login",exact:!0},r.a.createElement(z,null)),r.a.createElement(s.b,{path:"/register",exact:!0},r.a.createElement(le,null)),r.a.createElement(s.b,{path:"/xibits",exact:!0},e.token?r.a.createElement(ne,null):r.a.createElement(s.a,{to:"/login"})),r.a.createElement(s.b,{path:"/xibits/aquarium",exact:!0},e.token?r.a.createElement(ee,null):r.a.createElement(s.a,{to:"/login"})),r.a.createElement(s.b,{path:"/xibits/safari",exact:!0},e.token?r.a.createElement(ee,null):r.a.createElement(s.a,{to:"/login"})),r.a.createElement(s.b,{path:"/xibits/plans",exact:!0},e.token?r.a.createElement(G,null):r.a.createElement(s.a,{to:"/login"})),r.a.createElement(s.b,{path:"/xibits/search",exact:!0},e.token?r.a.createElement(se,null):r.a.createElement(s.a,{to:"/login"})))))},me=function(){var e=localStorage.getItem("user"),t=JSON.parse(e),a=Object(n.useState)(t||{}),l=Object(o.a)(a,2),c=l[0],s=l[1],m=Object(n.useState)("aquariums"),p=Object(o.a)(m,2),d=p[0],E=p[1],b=Object(n.useState)([]),g=Object(o.a)(b,2),f=g[0],h=g[1],y=Object(n.useState)(),x=Object(o.a)(y,2),v=x[0],k=x[1],O=Object(n.useState)(),j=Object(o.a)(O,2),w=j[0],S=j[1],C=Object(n.useState)(),N=Object(o.a)(C,2),I=N[0],P=N[1];return r.a.createElement(i.a,null,r.a.createElement(u.Provider,{value:{user:c,setUser:s}},r.a.createElement(F.Provider,{value:{selectedXibit:d,setSelectXibit:E,plans:f,setPlans:h,selectedPlan:v,setSelectedPlan:k,planData:w,sePlanData:S,apiKey:I,setApiKey:P}},r.a.createElement(ue,null))))};a(425);c.a.render(r.a.createElement(me,null),document.getElementById("root"))}},[[202,1,2]]]);
//# sourceMappingURL=main.5f81d03a.chunk.js.map