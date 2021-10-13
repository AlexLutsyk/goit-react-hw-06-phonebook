(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{13:function(t,e,n){t.exports={contactItemsList:"ContactList_contactItemsList__2f5kD",contactItem:"ContactList_contactItem__1zDKP",contactDelete:"ContactList_contactDelete__1NDJf"}},18:function(t,e,n){t.exports={filter:"Filter_filter__I7JrZ",filterInput:"Filter_filterInput__JLEr5"}},27:function(t,e,n){},28:function(t,e,n){},45:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(9),o=n.n(r),i=(n(27),n(28),n(3)),s=n(19),l=n(4),u=n(11),b=n.n(u),m={addContact:Object(l.b)("contacts/addContact",(function(t){var e=t.name,n=t.number;return{payload:{id:b.a.generate(),name:e,number:n}}})),deleteContact:Object(l.b)("contacts/deleteContact"),changeFilter:Object(l.b)("contacts/changeFilter")},d=n(6),j=n.n(d),f=n(1);var O=function(t){var e=t.contactList,n=Object(a.useState)(""),c=Object(s.a)(n,2),r=c[0],o=c[1],l=Object(a.useState)(""),u=Object(s.a)(l,2),b=u[0],d=u[1],O=Object(i.c)();console.log(e);var p=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":o(a);break;case"number":d(a);break;default:return}};return Object(f.jsxs)("form",{className:j.a.form,onSubmit:function(t){t.preventDefault();var n=r.trim();if(e.find((function(t){return r===t.name})))return alert("".concat(r," is already in contacts"));n&&(O(m.addContact({name:r,number:b})),o(""),d(""))},children:[Object(f.jsxs)("label",{className:j.a.formLabel,children:["Name",Object(f.jsx)("input",{className:j.a.formInput,type:"text",name:"name",value:r,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:p})]}),Object(f.jsxs)("label",{className:j.a.formLabel,children:["Number",Object(f.jsx)("input",{className:j.a.formInput,type:"text",name:"number",value:b,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:p})]}),Object(f.jsx)("button",{className:j.a.formButton,type:"submit",children:"Add contact"})]})},p=n(13),h=n.n(p),C=function(){var t=Object(i.d)((function(t){return function(t){var e=t.contacts,n=e.items,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))}(t)})),e=Object(i.c)();return Object(f.jsx)("ul",{className:h.a.contactItemsList,children:t.map((function(t){var n=t.name,a=t.number,c=t.id;return Object(f.jsxs)("li",{className:h.a.contactItem,children:[Object(f.jsxs)("p",{children:[n,": ",a]}),Object(f.jsx)("button",{type:"button",className:h.a.contactDelete,onClick:function(){return function(t){return e(m.deleteContact(t))}(c)},children:"Delete contact"})]},b.a.generate())}))})},x=n(18),v=n.n(x);var g=Object(i.b)((function(t){return{value:t.contacts.filter}}),(function(t){return{onChange:function(e){return t(m.changeFilter(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(f.jsx)("div",{children:Object(f.jsx)("label",{className:v.a.filter,children:Object(f.jsx)("input",{className:v.a.filterInput,type:"text",value:e,onChange:n})})})}));var _,L=Object(i.b)()((function(){var t=Object(i.d)((function(t){return t.contacts.items}));return Object(f.jsxs)("div",{className:"wrapper",children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(O,{contactList:t}),Object(f.jsx)("h2",{children:"Contacts"}),Object(f.jsx)(g,{}),Object(f.jsx)(C,{})]})})),I=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),r(t),o(t)}))},N=n(12),F=n(14),k=n(2),y={items:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},w=Object(l.c)(y.items,(_={},Object(F.a)(_,m.addContact,(function(t,e){var n=e.payload;return[].concat(Object(N.a)(t),[n])})),Object(F.a)(_,m.deleteContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),_)),D=Object(l.c)(y.filter,Object(F.a)({},m.changeFilter,(function(t,e){return e.payload}))),A=Object(k.b)({items:w,filter:D}),z=n(20),B=n.n(z),J=n(5),S=n(21),P=n.n(S),T=[].concat(Object(N.a)(Object(l.d)({serializableCheck:{ignoredActions:[J.a,J.f,J.b,J.c,J.d,J.e]}})),[B.a]),Z={key:"name",blacklist:["filter","persist"],storage:P.a},E=Object(l.a)({reducer:{contacts:Object(J.g)(Z,A)},middleware:T,devTools:!1}),H={store:E,persistor:Object(J.h)(E)},R=n(22);o.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(i.a,{store:H.store,children:Object(f.jsx)(R.a,{loading:null,persistor:H.persistor,children:Object(f.jsx)(L,{})})})}),document.getElementById("root")),I()},6:function(t,e,n){t.exports={form:"ContactForm_form__3HJB-",formLabel:"ContactForm_formLabel__2RceG",formInput:"ContactForm_formInput__3LRHs",formButton:"ContactForm_formButton__1W7Lz"}}},[[45,1,2]]]);
//# sourceMappingURL=main.f82319cc.chunk.js.map