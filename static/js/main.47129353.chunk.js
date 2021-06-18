(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={inputText:"Filter_inputText__2UEGS"}},18:function(t,e,n){},2:function(t,e,n){t.exports={taskEditor:"ContactForm_taskEditor__2BN9k",taskEditor_label:"ContactForm_taskEditor_label__1aoWH",taskEditor_input:"ContactForm_taskEditor_input__1V9dA",taskEditorinput:"ContactForm_taskEditorinput__zhDIq",taskEditor_button:"ContactForm_taskEditor_button__2FDrI"}},20:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n.n(a),c=n(11),s=n.n(c),o=(n(18),n(13)),r=n(3),u=n(5),l=n(6),d=n(8),b=n(7),m=n(22),h=n(9),_=n.n(h),j=n(0),p=function(t){var e=t.contacts,n=t.onRemoveContact;return Object(j.jsx)("ul",{className:_.a.taskList,children:e.map((function(t){return Object(j.jsxs)("li",{className:_.a.taskList_item,children:[t.name+":  "+t.number,Object(j.jsx)("button",{className:_.a.taskList_button,type:"button",name:"delete",onClick:function(){return n(t.id)},children:"Delete"})]},t.id)}))})},f=n(12),C=n.n(f);function k(t){var e=t.value,n=t.onChangeFilter;return Object(j.jsxs)("div",{children:["Find contact by name",Object(j.jsx)("input",{className:C.a.inputText,type:"text",value:e,onChange:function(t){return n(t.target.value)}})]})}var O=n(4),v=n(2),x=n.n(v),g=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,i=n.value;t.setState(Object(O.a)({},a,i))},t.handleSubmit=function(e){e.preventDefault(),t.props.onAddContact(Object(r.a)({},t.state)),t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(j.jsxs)("form",{className:x.a.taskEditor,onSubmit:this.handleSubmit,children:[Object(j.jsxs)("label",{className:x.a.taskEditor_label,children:["Name",Object(j.jsx)("input",{className:x.a.taskEditor_input,type:"text",name:"name",value:e,placeholder:"input name",onChange:this.handleChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(j.jsxs)("label",{className:x.a.taskEditor_label,children:["Number",Object(j.jsx)("input",{className:x.a.taskEditor_input,type:"tel",value:n,name:"number",placeholder:"input phone number",onChange:this.handleChange,required:!0})]}),Object(j.jsx)("button",{className:x.a.taskEditor_button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),L=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){if(t.state.contacts.map((function(t){return t.name})).includes(e.name))alert("".concat(e.name," is already in contacts"));else if(0===e.name.length)alert("Fields must be filled!");else{var n=Object(r.a)(Object(r.a)({},e),{},{id:Object(m.a)()});t.setState((function(t){return{contacts:[].concat(Object(o.a)(t.contacts),[n])}}))}},t.changeFilter=function(e){t.setState({filter:e})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t.removeContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(g,{onAddContact:this.addContact}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(k,{value:t,onChangeFilter:this.changeFilter}),Object(j.jsx)(p,{contacts:e,onRemoveContact:this.removeContact})]})}}]),n}(a.Component),E=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,c=e.getLCP,s=e.getTTFB;n(t),a(t),i(t),c(t),s(t)}))};s.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(L,{})}),document.getElementById("root")),E()},9:function(t,e,n){t.exports={taskList:"ContactList_taskList__2AOyJ",TaskList_item:"ContactList_TaskList_item__1c0eb",taskList_item:"ContactList_taskList_item__1H_44",completed:"ContactList_completed__1ZvY1",taskList_text:"ContactList_taskList_text__1uwd9",taskList_button:"ContactList_taskList_button__1P8SP"}}},[[20,1,2]]]);
//# sourceMappingURL=main.47129353.chunk.js.map