import{r as s,j as t,H as m}from"./index-72da0fa7.js";import{W as d,I as i,S as l}from"./DayCustom.styles-51fde49b.js";import{S as p}from"./SelectCustom-e1e96b5e.js";import{b as x}from"./date-8a8a165d.js";const C=({onCustom:r})=>{const[e,a]=s.useState(""),[o,u]=s.useState("");s.useEffect(()=>{(e||o)&&c({date:e,date2:o})},[e,o]);const c=s.useCallback(({date:n="",date2:j=""})=>{},[e,o]);return t.jsxs(d,{children:[t.jsxs(i,{children:[t.jsx("input",{type:"date",name:"",id:"",onChange:n=>a(n.target.value)}),t.jsx("input",{type:"date",name:"",id:"",onChange:n=>u(n.target.value)})]}),t.jsx(m,{onClick:r})]})},g=()=>{const[r,e]=s.useState(!1);return t.jsx(t.Fragment,{children:r?t.jsx(C,{onCustom:()=>e(a=>!a)}):t.jsx(l,{children:t.jsx(p,{onCustom:()=>e(a=>!a),date:x,activeData:"Today"})})})};export{g as C};
