var e=Object.defineProperty,s=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,t=Object.prototype.propertyIsEnumerable,r=(s,o,t)=>o in s?e(s,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[o]=t;import{c as l,T as a}from"./mobile.e5855c5d.js";import{k as i,a as n,b as u,z as f,s as c,x as d,r as h,o as m,c as L,f as p,F as M,h as b,t as v,q as g}from"./vendor.f6cc4281.js";import"./index.77feaf28.js";const{createDemo:y}=l("infiniteloading");var w=y({props:{},setup(){const e=i(!0),l=i(!0),c=i(!0),d=n({defultList:[""],customList:[""],refreshList:[""]});return u((()=>{(()=>{for(let e=0;e<10;e++)d.defultList.push(`${e} -- 塑像本来就在石头里，我只是把不要的部分去掉`),d.customList.push(`${e} -- 塑像本来就在石头里，我只是把不要的部分去掉`),d.refreshList.push(`${e} -- 塑像本来就在石头里，我只是把不要的部分去掉`)})()})),((e,l)=>{for(var a in l||(l={}))s.call(l,a)&&r(e,a,l[a]);if(o)for(var a of o(l))t.call(l,a)&&r(e,a,l[a]);return e})({loadMore:s=>{setTimeout((()=>{const o=d.defultList.length;for(let e=o;e<o+10;e++)d.defultList.push(`${e} -- 塑像本来就在石头里，我只是把不要的部分去掉`);d.defultList.length>30&&(e.value=!1),s()}),500)},hasMore:e,customHasMore:l,customLoadMore:e=>{setTimeout((()=>{const s=d.customList.length;for(let e=s;e<s+10;e++)d.customList.push(`${e} -- 塑像本来就在石头里，我只是把不要的部分去掉`);d.customList.length>30&&(l.value=!1),e()}),500)},refreshHasMore:c,refreshLoadMore:e=>{setTimeout((()=>{const s=d.refreshList.length;for(let e=s;e<s+10;e++)d.refreshList.push(`${e} -- 塑像本来就在石头里，我只是把不要的部分去掉`);d.refreshList.length>30&&(c.value=!1),e()}),500)},refresh:e=>{setTimeout((()=>{a.success("刷新成功"),e()}),1e3)}},f(d))}});const _=g();c("data-v-535d9fb1");const j={class:"demo"},O=p("h2",null,"基础用法",-1),$={class:"infiniteUl",id:"scroll"},x=p("h2",null,"下拉刷新",-1),S={class:"infiniteUl",id:"refreshScroll"},T=p("h2",null,"自定义加载文案",-1),k={class:"infiniteUl",id:"customScroll"};d();const H=_(((e,s,o,t,r,l)=>{const a=h("nut-infiniteloading"),i=h("nut-cell");return m(),L("div",j,[O,p(i,null,{default:_((()=>[p("ul",$,[p(a,{"container-id":"scroll","use-window":!1,"has-more":e.hasMore,onLoadMore:e.loadMore},{default:_((()=>[(m(!0),L(M,null,b(e.defultList,((e,s)=>(m(),L("li",{class:"infiniteLi",key:s},v(e),1)))),128))])),_:1},8,["has-more","onLoadMore"])])])),_:1}),x,p(i,null,{default:_((()=>[p("ul",S,[p(a,{"pull-icon":"JD","container-id":"refreshScroll","use-window":!1,"is-open-refresh":!0,"has-more":e.refreshHasMore,onLoadMore:e.refreshLoadMore,onRefresh:e.refresh},{default:_((()=>[(m(!0),L(M,null,b(e.refreshList,((e,s)=>(m(),L("li",{class:"infiniteLi",key:s},v(e),1)))),128))])),_:1},8,["has-more","onLoadMore","onRefresh"])])])),_:1}),T,p(i,null,{default:_((()=>[p("ul",k,[p(a,{"load-txt":"loading","load-more-txt":"没有啦～","container-id":"customScroll","use-window":!1,"has-more":e.customHasMore,onLoadMore:e.customLoadMore},{default:_((()=>[(m(!0),L(M,null,b(e.customList,((e,s)=>(m(),L("li",{class:"infiniteLi",key:s},v(e),1)))),128))])),_:1},8,["has-more","onLoadMore"])])])),_:1})])}));w.render=H,w.__scopeId="data-v-535d9fb1";export default w;
