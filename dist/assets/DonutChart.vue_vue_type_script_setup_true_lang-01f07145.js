import{A as a}from"./vue3-apexcharts.common-e48c5b43.js";import{d as r,L as i,j as c,o as m,f as p,p as u}from"./index-e9a339d5.js";import{a as f}from"./apexChartConfig-d2416661.js";const l={name:"DonetChart"},g=r({...l,props:["series","labels"],setup(t){const e=t,o=i(),n=c(()=>{const s=o.theme;return f(s,e==null?void 0:e.labels)});return(s,h)=>(m(),p(u(a),{type:"donut",height:"410",options:n.value,series:t.series},null,8,["options","series"]))}});export{g as _};
