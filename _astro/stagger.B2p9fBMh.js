import{g as i,a5 as y,a6 as G,y as H,j as K,i as Q,J as W,b as N,a7 as P,s as Z,d as _,w as v,B as A,A as ss,a8 as ts}from"./targets.Ch0TkwgG.js";import{a as os}from"./parser.BX5Tv8gU.js";import{p as es}from"./position.DOXOWIVY.js";/**
 * Anime.js - utils - ESM
 * @version v4.2.2
 * @license MIT
 * @copyright 2025 - Julian Garnier
 */const ns=(t=0,s=1,o=0)=>{const e=10**o;return Math.floor((Math.random()*(s-t+1/e)+t)*e)/e},rs=t=>{let s=t.length,o,e;for(;s;)e=ns(0,--s),o=t[s],t[s]=t[e],t[e]=o;return t};/**
 * Anime.js - utils - ESM
 * @version v4.2.2
 * @license MIT
 * @copyright 2025 - Julian Garnier
 */const us=(t,s={})=>{let o=[],e=0;const r=s.from,V=s.reversed,u=s.ease,I=!i(u),M=I&&!i(u.ease)?u.ease:I?os(u):null,a=s.grid,x=s.axis,R=s.total,$=i(r)||r===0||r==="first",h=r==="center",j=r==="last",q=r==="random",c=v(t),d=s.use,p=c?y(t[0]):y(t),B=c?y(t[1]):0,X=G.exec((c?t[1]:t)+H),Y=s.start||0+(c?p:0);let f=$?0:A(r)?r:0;return(C,w,D,b)=>{const[F]=K(C),l=i(R)?D:R,m=i(d)?!1:Q(d)?d(F,w,l):W(F,d),J=A(m)||ss(m)&&A(+m)?+m:w;if(h&&(f=(l-1)/2),j&&(f=l-1),!o.length){for(let n=0;n<l;n++){if(!a)o.push(N(f-n));else{const O=h?(a[0]-1)/2:f%a[0],U=h?(a[1]-1)/2:P(f/a[0]),k=n%a[0],z=P(n/a[0]),E=O-k,S=U-z;let T=Z(E*E+S*S);x==="x"&&(T=-E),x==="y"&&(T=-S),o.push(T)}e=ts(...o)}M&&(o=o.map(n=>M(n/e)*e)),V&&(o=o.map(n=>x?n<0?n*-1:-n:N(e-n))),q&&(o=rs(o))}const L=c?(B-p)/e:p;let g=(b?es(b,i(s.start)?b.iterationDuration:Y):Y)+(L*_(o[J],2)||0);return s.modifier&&(g=s.modifier(g)),X&&(g=`${g}${X[2]}`),g}};export{us as s};
