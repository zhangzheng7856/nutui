import{c as e}from"./mobile.4165a21d.js";import{B as s,C as l,r as o,o as n,e as a,j as r,k as d,g as t,F as i,i as u,t as c}from"./vendor.6bc94963.js";import"./index.2d3e4af8.js";const{createDemo:f}=e("pullrefresh");var h=f({props:{},setup:()=>({refresh:e=>{console.log("上拉加载"),setTimeout((()=>{e()}),1e3)},downRefresh:e=>{console.log("下拉刷新"),setTimeout((()=>{e()}),1e3)}})});s("data-v-02779db4");const p={class:"demo full"},v=t("h2",null,"纵向",-1),m={class:"vertical"},R={class:"content",id:"pull"},w={class:"main"},_=t("h2",null,"横向",-1),D={class:"horizontal"},b={class:"contentH",id:"pullH"},j={class:"mainH"};l(),h.render=function(e,s,l,f,h,H){const g=o("nut-pullrefresh"),k=o("nut-cell");return n(),a("div",p,[v,r(k,null,{default:d((()=>[t("div",m,[r(g,{onRefresh:e.refresh,onDownRefresh:e.downRefresh,useWindow:!1,containerId:"pull"},{default:d((()=>[t("div",R,[t("div",w,[(n(),a(i,null,u([1,2,3,4,5,6,7,8,9],(e=>t("div",{class:"pull-data",key:e},"我是测试数据 "+c(e),1))),64))])])])),_:1},8,["onRefresh","onDownRefresh"])])])),_:1}),_,r(k,null,{default:d((()=>[t("div",D,[r(g,{onRefresh:e.refresh,onDownRefresh:e.downRefresh,useWindow:!1,containerId:"pullH",direction:"horizontal"},{default:d((()=>[t("div",b,[t("div",j,[(n(),a(i,null,u([1,2,3,4,5,6,7,8,9],(e=>t("div",{class:"pull-data",key:e},"我是测试数据 "+c(e),1))),64))])])])),_:1},8,["onRefresh","onDownRefresh"])])])),_:1})])},h.__scopeId="data-v-02779db4";export{h as default};
