"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[458],{458:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var r=t(5029),a=t(9434),l=t(1413),i="register-form_form__bzcga",u=t(158),o={name:"",email:"",password:""},s=t(4553),c={name:{type:"text",name:"name",required:!0,label:"User name",placeholder:"User name"},email:{type:"email",name:"email",required:!0,label:"User email",placeholder:"User email"},password:{type:"password",name:"password",required:!0,label:"User password",placeholder:"User password"}},d=t(5126),m=t(184),p=function(e){var n=e.onSubmit,t=(0,u.Z)({initialState:o,onSubmit:n}),r=t.state,a=t.handleChange,p=t.handleSubmit,h=r.name,f=r.email,b=r.password;return(0,m.jsxs)("form",{onSubmit:p,className:i,children:[(0,m.jsx)(s.Z,(0,l.Z)({value:h,handleChange:a},c.name)),(0,m.jsx)(s.Z,(0,l.Z)({value:f,handleChange:a},c.email)),(0,m.jsx)(s.Z,(0,l.Z)({value:b,handleChange:a},c.password)),(0,m.jsx)(d.Z,{children:"Register"})]})},h=t(4554),f=function(){var e=(0,a.I0)();return(0,m.jsx)(h.Z,{sx:{justifyContent:"center",alignItems:"center",display:"flex",marginTop:"40px"},children:(0,m.jsx)(p,{onSubmit:function(n){e((0,r.su)(n))}})})}},5126:function(e,n,t){t.d(n,{Z:function(){return l}});var r="button_btn__uXPTj",a=t(184),l=function(e){var n=e.children,t=e.type,l=void 0===t?"submit":t;return(0,a.jsx)("button",{type:l,className:r,children:n})}},4553:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(1413),a=t(3366);var l=t(2791),i="text-field_wrapper__Y6TVN",u="text-field_field__q+3UI",o=t(184),s=["label","handleChange"],c=function(e){var n=e.label,t=e.handleChange,c=function(e,n){if(null==e)return{};var t,r,l=(0,a.Z)(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}(e,s),d=(0,l.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+((n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_")}),"")}()}),[]);return(0,o.jsxs)("div",{className:i,children:[(0,o.jsx)("label",{htmlFor:d,children:n}),(0,o.jsx)("input",(0,r.Z)({className:u,id:d,onChange:t},c))]})}},158:function(e,n,t){var r=t(4942),a=t(1413),l=t(9439),i=t(2791);n.Z=function(e){var n=e.initialState,t=e.onSubmit,u=(0,i.useState)((0,a.Z)({},n)),o=(0,l.Z)(u,2),s=o[0],c=o[1];return{state:s,setState:c,handleChange:function(e){var n=e.target;c((function(e){var t=n.name,l=n.value,i=n.checked,u="checkbox"===n.type?i:l;return(0,a.Z)((0,a.Z)({},e),{},(0,r.Z)({},t,u))}))},handleSubmit:function(e){e.preventDefault(),t((0,a.Z)({},s)),c((0,a.Z)({},n))}}}}}]);
//# sourceMappingURL=458.8a1fc593.chunk.js.map