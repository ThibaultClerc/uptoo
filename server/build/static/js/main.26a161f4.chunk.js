(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{272:function(e,t,n){},281:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(25),r=n.n(a),i=(n(184),n(170)),o=n(27),s=n(39),l=n.n(s),u=n(55),j=n(40),d=n(284),b=n(31),p=n(177),O=n(288),f=n(89),x=n(8),h=O.a.Title,m=function(){return Object(x.jsx)(f.a,{justify:"center",children:Object(x.jsx)(h,{style:{fontSize:"6em",color:"lightslategray"},children:"Items Collection"})})},v=n(291),y=n(285),g=n(293),k=n(166),C=n.n(k).a.create({baseURL:"http://uptoo.herokuapp.com/api/items"}),w=n(90),I=n(290),T=n(53),S=n(286),z=n(283),_=function(e,t){var n=Object(c.useRef)(!1);Object(c.useEffect)((function(){n.current?e():n.current=!0}),t)},F=n(287),R=n(289),q=function(e){var t=e.item,n=e.handleIsCreating,c=e.handleItemData,a=function(){var e=Object(u.a)(l.a.mark((function e(a){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={title:t.title,description:t.description,data:{key:a.key,value:a.value}},e.next=3,C.put("/".concat(t._id),r);case 3:console.log(r.data),n(!1),c(r.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)(F.a,{name:"basic",onFinish:a,onFinishFailed:function(e){console.log("Failed:",e)},children:[Object(x.jsx)(F.a.Item,{label:"Cl\xe9",name:"key",rules:[{required:!0,message:"Rentrez la cl\xe9 de votre donn\xe9e"}],children:Object(x.jsx)(R.a,{})}),Object(x.jsx)(F.a.Item,{label:"Valeur",name:"value",rules:[{required:!0,message:"Rentrez la valeur de votre donn\xe9e"}],children:Object(x.jsx)(R.a,{})}),Object(x.jsx)(F.a.Item,{children:Object(x.jsx)(b.a,{type:"primary",htmlType:"submit",children:"Cr\xe9er"})})]})},A=O.a.Title,D=O.a.Paragraph,E=function(e){var t=e.item,n=e.visible,a=e.onCancel,r=Object(c.useState)(t.title),i=Object(j.a)(r,2),o=i[0],s=i[1],d=Object(c.useState)(t.description),O=Object(j.a)(d,2),h=O[0],m=O[1],y=Object(c.useState)(t.data),k=Object(j.a)(y,2),F=k[0],R=k[1],E=Object(c.useState)(!1),K=Object(j.a)(E,2),P=K[0],L=K[1];_((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.put("/".concat(t._id),{title:o,description:h,data:Object(w.a)(F)});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[o,h,F]);return Object(x.jsxs)(I.a,{visible:n,footer:null,onCancel:a,children:[Object(x.jsx)(A,{editable:{onChange:s},level:1,children:o}),Object(x.jsx)(D,{editable:{onChange:m,autoSize:{maxRows:5,minRows:3}},children:h}),Object(x.jsxs)("div",{children:[Object(x.jsx)(A,{level:3,style:{display:"inline-block"},children:"Data :"}),Object(x.jsx)(b.a,{icon:Object(x.jsx)(p.a,{style:{color:"#1890ff"}}),shape:"circle",style:{position:"relative",marginLeft:"20px",bottom:"2px"},onClick:function(){return L(!P)}})]}),P&&Object(x.jsx)(q,{item:t,handleIsCreating:function(e){return L(e)},handleItemData:function(e){return R([].concat(Object(w.a)(F),[e]))}}),Object(x.jsx)(f.a,{gutter:[16,16],children:F.map((function(e){return Object(x.jsxs)(T.a,{span:12,children:[Object(x.jsx)(v.a,{placement:"top",title:"Etes-vous certain de vouloir supprimer cette donn\xe9e ?",onConfirm:function(){return function(e){var t=F.findIndex((function(t){return t._id===e}));F.splice(t,1),R(Object(w.a)(F))}(e._id)},okText:"Oui",cancelText:"Non",children:Object(x.jsx)(b.a,{danger:!0,size:"small",shape:"circle",icon:Object(x.jsx)(g.a,{style:{color:"red"}}),style:{position:"relative",left:"214px",top:"14px",zIndex:"1"}})}),Object(x.jsxs)(S.a,{style:{width:"inherit"},children:[Object(x.jsx)(A,{level:5,children:"Cl\xe9:"}),Object(x.jsx)(D,{editable:{onChange:function(t){return function(e,t){var n=F.findIndex((function(e){return e._id===t}));F[n].key=e,R(Object(w.a)(F))}(t,e._id)}},ellipsis:!0,children:e.key}),Object(x.jsx)(z.a,{}),Object(x.jsx)(A,{level:5,children:"Valeur:"}),Object(x.jsx)(D,{editable:{onChange:function(t){return function(e,t){var n=F.findIndex((function(e){return e._id===t}));F[n].value=e,R(Object(w.a)(F))}(t,e._id)}},ellipsis:!0,children:e.value})]})]},e._id)}))})]})},K=(n(272),function(e){var t=e.items,n=e.deleteHandler,a=e.itemUpdated,r=Object(c.useState)(!1),i=Object(j.a)(r,2),o=i[0],s=i[1],d=Object(c.useState)(null),p=Object(j.a)(d,2),O=p[0],h=p[1],m=function(){var e=Object(u.a)(l.a.mark((function e(c,a){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.stopPropagation(),e.prev=1,e.next=4,C.delete("/".concat(a));case 4:r=t.filter((function(e){return e._id!==a})),n(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}(),k=[{title:"Titre",dataIndex:"title",key:"title",ellipsis:!0},{title:"Description",dataIndex:"description",key:"description",ellipsis:!0},{title:"Action",key:"delete",render:function(e){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(v.a,{placement:"top",title:"Etes-vous certain de vouloir supprimer cet item ?",onConfirm:function(t){return m(t,e._id)},onCancel:function(e){return e.stopPropagation()},okText:"Oui",cancelText:"Non",children:Object(x.jsx)(b.a,{danger:!0,shape:"circle",style:{margin:"auto",display:"block"},icon:Object(x.jsx)(g.a,{style:{color:"red"}}),onClick:function(e){return e.stopPropagation()}})})})}}];return Object(x.jsxs)(f.a,{justify:"center",children:[t&&Object(x.jsx)(y.a,{columns:k,dataSource:t,onRow:function(e){return{onClick:function(){!function(e){s(!0),h(e)}(e)}}},style:{width:"50vw"},rowKey:function(e){return e._id},className:"myTable",pagination:{pageSize:5}}),o&&Object(x.jsx)(E,{visible:!0,onCancel:function(e){e.stopPropagation(),s(!1),a(!0)},item:O})]})}),P=n(102),L=n(292),U=n(294),H=R.a.TextArea,N=function(e){var t=e.visible,n=e.onCreate,c=e.onCancel,a=F.a.useForm(),r=Object(j.a)(a,1)[0];return Object(x.jsx)(I.a,{title:"Ajouter un nouvel item",visible:t,okText:"Cr\xe9er",cancelText:"Annuler",onCancel:c,onOk:function(){r.validateFields().then((function(e){r.resetFields(),n(e)})).catch((function(e){console.log("La validation a \xe9chou\xe9e:",e)}))},children:Object(x.jsxs)(F.a,{form:r,layout:"vertical",name:"basic",children:[Object(x.jsx)(F.a.Item,{label:"Titre",name:"title",rules:[{required:!0,message:"Rentrez le titre du nouvel item"}],children:Object(x.jsx)(R.a,{})}),Object(x.jsx)(F.a.Item,{label:"Description",name:"description",rules:[{required:!0,message:"Rentrez la description de votre item"}],children:Object(x.jsx)(H,{rows:4})}),Object(x.jsx)(F.a.List,{name:"data",children:function(e,t){var n=t.add,c=t.remove;return Object(x.jsxs)(x.Fragment,{children:[e.map((function(e){return Object(x.jsxs)(L.b,{style:{display:"flex",marginBottom:8},align:"baseline",children:[Object(x.jsx)(F.a.Item,Object(P.a)(Object(P.a)({},e),{},{name:[e.name,"key"],fieldKey:[e.fieldKey,"key"],rules:[{required:!0,message:"Rentrez la cl\xe9 de votre donn\xe9e"}],children:Object(x.jsx)(R.a,{placeholder:"Cl\xe9"})})),Object(x.jsx)(F.a.Item,Object(P.a)(Object(P.a)({},e),{},{name:[e.name,"value"],fieldKey:[e.fieldKey,"value"],rules:[{required:!0,message:"Rentrez la valeur de votre donn\xe9e"}],children:Object(x.jsx)(R.a,{placeholder:"Valeur"})})),Object(x.jsx)(U.a,{onClick:function(){return c(e.name)}})]},e.key)})),Object(x.jsx)(F.a.Item,{children:Object(x.jsx)(b.a,{type:"dashed",onClick:function(){return n()},block:!0,icon:Object(x.jsx)(p.a,{}),children:"Ajouter des donn\xe9es"})})]})}})]})})},V=d.a.Footer,J=function(){var e=Object(c.useState)(!1),t=Object(j.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)([]),i=Object(j.a)(r,2),o=i[0],s=i[1],O=Object(c.useState)(!1),f=Object(j.a)(O,2),h=f[0],v=f[1],y=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.get("/");case 3:t=e.sent,s(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,C.post("/",{title:t.title,description:t.description,data:t.data});case 3:a(!1),y();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){h&&(y(),v(!1))}),[h]),Object(c.useEffect)((function(){y()}),[]),Object(x.jsx)(x.Fragment,{children:o&&Object(x.jsxs)(d.a,{style:{padding:"5vw 10vw 0",height:"100vh",minHeight:"calc(100vh - 70px)"},children:[Object(x.jsx)(m,{}),Object(x.jsx)(b.a,{shape:"round",type:"primary",size:"large",onClick:function(){return a(!0)},icon:Object(x.jsx)(p.a,{}),style:{width:"fit-content",margin:"10px auto 50px"},children:"Ajouter un Item"}),Object(x.jsx)(N,{visible:n,onCreate:g,onCancel:function(){a(!1)}}),Object(x.jsx)(K,{items:o,deleteHandler:function(e){return s(e)},itemUpdated:function(e){return v(e)}}),Object(x.jsx)(V,{style:{textAlign:"center",padding:"3vw",color:"lightslategray",height:"50px"},children:"Test Technique Uptoo"})]})})},B=function(){return Object(x.jsx)(i.a,{children:Object(x.jsx)(o.c,{children:Object(x.jsx)(o.a,{exact:!0,path:"/",component:J})})})};r.a.render(Object(x.jsx)(B,{}),document.querySelector("#root"))}},[[281,1,2]]]);
//# sourceMappingURL=main.26a161f4.chunk.js.map