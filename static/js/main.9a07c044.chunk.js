(this.webpackJsonpchat=this.webpackJsonpchat||[]).push([[0],{102:function(e,t,n){"use strict";n.r(t);var c,s=n(0),a=n.n(s),r=n(27),i=n.n(r),u=(n(64),n(65),n(5)),o=n(40),j=n(10),l=n(57),b=n.n(l)()("https://chat-back-test.herokuapp.com/"),h={socket:null,createConnection:function(){this.socket=b},subscribe:function(e,t,n,c){var s,a,r,i;null===(s=this.socket)||void 0===s||s.on("messages-init",e),null===(a=this.socket)||void 0===a||a.on("new-message-sent",t),null===(r=this.socket)||void 0===r||r.on("user-typing",n),null===(i=this.socket)||void 0===i||i.on("set_user",c)},destroyConnection:function(){var e;null===(e=this.socket)||void 0===e||e.disconnect(),this.socket=null},sentName:function(e){var t;null===(t=this.socket)||void 0===t||t.emit("client-name-sent",e)},sentMessage:function(e){var t;null===(t=this.socket)||void 0===t||t.emit("client-message-sent",e)},typeMessage:function(){var e;null===(e=this.socket)||void 0===e||e.emit("client-typed")}},O={messages:[],typingUsers:[],changeName:!1,initUser:null};!function(e){e.MESSAGES_RECEIVED="MESSAGES_RECEIVED",e.NEW_MESSAGE="NEW_MESSAGE",e.ADD_TYPING_USER="ADD_TYPING_USER",e.APP_CHANGE_NAME="APP_CHANGE_NAME",e.APP_INIT_USER="APP_INIT_USER"}(c||(c={}));var d=function(e){return{type:c.APP_CHANGE_NAME,changeName:e}},f=function(){return function(e){h.createConnection(),h.subscribe((function(t){e(function(e){return{type:c.MESSAGES_RECEIVED,messages:e}}(t))}),(function(t){e(function(e){return{type:c.NEW_MESSAGE,message:e}}(t))}),(function(t){e(function(e){return{type:c.ADD_TYPING_USER,user:e}}(t))}),(function(t){e(function(e){return{type:c.APP_INIT_USER,user:e}}(t))}))}},g=n(3),_=n(8),p=function(e){return e.chat.changeName},E=function(e){return e.chat.initUser},m=n(58),v=n.n(m),x=n(1),S=function(){var e=Object(u.b)(),t=Object(s.useState)(""),n=Object(_.a)(t,2),c=n[0],a=n[1],r=Object(s.useState)(!1),i=Object(_.a)(r,2),o=i[0],j=i[1],l=Object(s.useState)(null),b=Object(_.a)(l,2),O=b[0],f=b[1],E=Object(s.useState)(!1),m=Object(_.a)(E,2),S=m[0],N=m[1],T=Object(u.c)(p),C=Object(g.g)();return Object(s.useEffect)((function(){setTimeout((function(){T&&(N(!1),C.push("chat"))}),2e3)}),[T,C]),Object(x.jsxs)("div",{className:v.a.main,children:[Object(x.jsx)("h1",{children:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c"}),Object(x.jsxs)("div",{children:[Object(x.jsx)("span",{children:"\u041f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u044c\u0442\u0435\u0441\u044c"})," ",Object(x.jsx)("input",{value:c,onChange:function(e){""!==e.currentTarget.value.trim()&&(j(!1),f(null)),a(e.currentTarget.value)}}),Object(x.jsx)("button",{disabled:S,onClick:function(){""===c?(j(!0),f("\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435")):(N(!0),e(function(e){return function(t){h.sentName(e),t(d(!0))}}(c)),a(""))},children:"Save"}),o?Object(x.jsx)("span",{children:O}):null]})]})},N=n(16),T=n.n(N),C=n(39),A=n.n(C),y=function(){var e=Object(s.useState)(null),t=Object(_.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(!1),r=Object(_.a)(a,2),i=r[0],o=r[1],j=Object(s.useState)("hello"),l=Object(_.a)(j,2),b=l[0],O=l[1],d=Object(u.b)();return Object(x.jsxs)("div",{className:A.a.mainText,children:[Object(x.jsxs)("div",{className:A.a.wrapper,children:[Object(x.jsx)("textarea",{value:b,onChange:function(e){""!==e.currentTarget.value.trim()&&(o(!1),c(null)),O(e.currentTarget.value)},onKeyPress:function(){d((function(e){h.typeMessage()}))}}),Object(x.jsx)("button",{onClick:function(){var e;""===b?(o(!0),c("\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435")):(d((e=b,function(t){h.sentMessage(e)})),O(""))},children:"Send"})]}),Object(x.jsx)("div",{children:i?Object(x.jsx)("span",{children:n}):null})]})},P=function(){var e=Object(s.useState)(!0),t=Object(_.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(0),r=Object(_.a)(a,2),i=r[0],o=r[1],j=Object(u.c)((function(e){return e.chat.messages})),l=Object(u.c)((function(e){return e.chat.typingUsers})),b=Object(s.useRef)(null),h=Object(u.c)(p),O=Object(u.c)(E);return console.log(O),Object(s.useEffect)((function(){var e;n&&(null===(e=b.current)||void 0===e||e.scrollIntoView({behavior:"smooth"}))}),[j,n]),h?Object(x.jsx)("div",{className:T.a.chatMain,children:Object(x.jsxs)("div",{className:T.a.container,children:[Object(x.jsxs)("div",{className:T.a.windowChat,onScroll:function(e){return function(e){var t=e.currentTarget.scrollHeight-e.currentTarget.clientHeight,n=Math.abs(t-e.currentTarget.scrollTop);e.currentTarget.scrollTop>i&&n<10?c(!0):c(!1),o(e.currentTarget.scrollTop)}(e)},children:[j.map((function(e){return Object(x.jsxs)("div",{className:e.user.id===(null===O||void 0===O?void 0:O.id)?T.a.left:T.a.right,children:[Object(x.jsxs)("b",{children:[e.user.name," : "]})," ",e.message]},e.id)})),l.map((function(e){return Object(x.jsxs)("div",{children:[Object(x.jsxs)("b",{children:[e.name," : "]})," ",Object(x.jsx)("span",{className:T.a.typeng,children:"... \u043f\u0435\u0447\u0430\u0442\u0430\u0435\u0442"}),Object(x.jsx)("hr",{})]},e.id)})),Object(x.jsx)("div",{ref:b})]}),Object(x.jsx)(y,{})]})}):Object(x.jsx)(g.a,{to:"/"})};var M=function(){var e=Object(u.b)();return Object(s.useEffect)((function(){return e(f()),function(){e((function(e){h.destroyConnection(),e(d(!1))}))}}),[]),Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(g.d,{children:[Object(x.jsx)(g.b,{path:"/",exact:!0,render:function(){return Object(x.jsx)(S,{})}}),Object(x.jsx)(g.b,{path:"/chat",exact:!0,render:function(){return Object(x.jsx)(P,{})}})]})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,103)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))},U=n(19),k=n(59),w=Object(U.c)({chat:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.MESSAGES_RECEIVED:return Object(j.a)(Object(j.a)({},e),t.messages);case c.NEW_MESSAGE:return Object(j.a)(Object(j.a)({},e),{},{messages:[].concat(Object(o.a)(e.messages),[t.message]),typingUsers:e.typingUsers.filter((function(e){return e.id!==t.message.user.id}))});case c.ADD_TYPING_USER:return Object(j.a)(Object(j.a)({},e),{},{typingUsers:[].concat(Object(o.a)(e.typingUsers.filter((function(e){return e.id!==t.user.id}))),[t.user])});case c.APP_CHANGE_NAME:return Object(j.a)(Object(j.a)({},e),{},{changeName:t.changeName});case c.APP_INIT_USER:return Object(j.a)(Object(j.a)({},e),{},{initUser:t.user});default:return e}}}),G=Object(U.d)(w,Object(U.a)(k.a)),D=n(22);i.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(D.a,{children:Object(x.jsx)(u.a,{store:G,children:Object(x.jsx)(M,{})})})}),document.getElementById("root")),I()},16:function(e,t,n){e.exports={chatMain:"ChatLog_chatMain__McZJ_",container:"ChatLog_container__1PbzV",windowChat:"ChatLog_windowChat__w57Sc",left:"ChatLog_left__2UEES",right:"ChatLog_right__1q5-U",typeng:"ChatLog_typeng__1BqNj",opacityToggle:"ChatLog_opacityToggle__hmKNw"}},39:function(e,t,n){e.exports={mainText:"TextInput_mainText__2Bbva",wrapper:"TextInput_wrapper__2t3w7"}},58:function(e,t,n){e.exports={main:"Main_main__3spcO"}},64:function(e,t,n){},65:function(e,t,n){}},[[102,1,2]]]);
//# sourceMappingURL=main.9a07c044.chunk.js.map