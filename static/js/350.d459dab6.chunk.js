"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[350],{1350:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var r=t(5029),a=t(9434),i=t(1413),l="login-form_form__TdBdP",u=t(158),o={email:"",password:""},s=t(6051),c={email:{type:"email",name:"email",required:!0,label:"User email",placeholder:"User email"},password:{type:"password",name:"password",required:!0,label:"User password",placeholder:"User password"}},d=t(5126),f=t(184),m=function(e){var n=e.onSubmit,t=(0,u.Z)({initialState:o,onSubmit:n}),r=t.state,a=t.handleChange,m=t.handleSubmit,h=r.email,p=r.password;return(0,f.jsxs)("form",{onSubmit:m,className:l,children:[(0,f.jsx)(s.Z,(0,i.Z)({value:h,handleChange:a},c.email)),(0,f.jsx)(s.Z,(0,i.Z)({value:p,handleChange:a},c.password)),(0,f.jsx)(d.Z,{children:"Login"})]})},h=function(){var e=(0,a.I0)();return(0,f.jsxs)("div",{children:[(0,f.jsx)("h1",{children:"Login page"}),(0,f.jsx)(m,{onSubmit:function(n){e((0,r.x4)(n))}})]})}},5126:function(e,n,t){t.d(n,{Z:function(){return i}});var r="button_btn__uXPTj",a=t(184),i=function(e){var n=e.children,t=e.type,i=void 0===t?"submit":t;return(0,a.jsx)("button",{type:i,className:r,children:n})}},6051:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(1413);function a(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=t(2791),l="text-field_wrapper__Y6TVN",u="text-field_field__q+3UI",o=t(184),s=["label","handleChange"],c=function(e){var n=e.label,t=e.handleChange,c=a(e,s),d=(0,i.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+((n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_")}),"")}()}),[]);return(0,o.jsxs)("div",{className:l,children:[(0,o.jsx)("label",{htmlFor:d,children:n}),(0,o.jsx)("input",(0,r.Z)({className:u,id:d,onChange:t},c))]})}},158:function(e,n,t){var r=t(4942),a=t(1413),i=t(9439),l=t(2791);n.Z=function(e){var n=e.initialState,t=e.onSubmit,u=(0,l.useState)((0,a.Z)({},n)),o=(0,i.Z)(u,2),s=o[0],c=o[1],d=(0,l.useCallback)((function(e){var n=e.target,t=n.name,i=n.value;c((function(e){return(0,a.Z)((0,a.Z)({},e),{},(0,r.Z)({},t,i))}))}),[c]);return{state:s,setState:c,handleChange:d,handleSubmit:function(e){e.preventDefault(),t((0,a.Z)({},s)),c((0,a.Z)({},n))}}}}}]);
//# sourceMappingURL=350.d459dab6.chunk.js.map