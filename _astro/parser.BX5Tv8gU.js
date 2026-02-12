import{C as t,y as F,D as b,s as S,E as w,A as f,h as B,i as I,F as m,G as k,P,H as x}from"./targets.Ch0TkwgG.js";/**
 * Anime.js - easings - ESM
 * @version v4.2.2
 * @license MIT
 * @copyright 2025 - Julian Garnier
 */const a=s=>s;/**
 * Anime.js - easings - ESM
 * @version v4.2.2
 * @license MIT
 * @copyright 2025 - Julian Garnier
 */const r=(s=1.68)=>n=>t(n,+s),d={in:s=>n=>s(n),out:s=>n=>1-s(1-n),inOut:s=>n=>n<.5?s(n*2)/2:1-s(n*-2+2)/2,outIn:s=>n=>n<.5?(1-s(1-n*2))/2:(s(n*2-1)+1)/2},C=P/2,h=P*2,y={[F]:r,Quad:r(2),Cubic:r(3),Quart:r(4),Quint:r(5),Sine:s=>1-w(s*C),Circ:s=>1-S(1-s*s),Expo:s=>s?t(2,10*s-10):0,Bounce:s=>{let n,e=4;for(;s<((n=t(2,--e))-1)/11;);return 1/t(4,3-e)-7.5625*t((n*3-2)/22-s,2)},Back:(s=1.7)=>n=>(+s+1)*n*n*n-+s*n*n,Elastic:(s=1,n=.3)=>{const e=m(+s,1,10),c=m(+n,x,2),i=c/h*k(1/e),u=h/c;return o=>o===0||o===1?o:-e*t(2,-10*(1-o))*b((1-o-i)*u)}},p=(()=>{const s={linear:a,none:a};for(let n in d)for(let e in y){const c=y[e],i=d[n];s[n+e]=e===F||e==="Back"||e==="Elastic"?(u,o)=>i(c(u,o)):i(c)}return s})(),l={linear:a,none:a},Q=s=>{if(l[s])return l[s];if(s.indexOf("(")<=-1){const e=d[s]||s.includes("Back")||s.includes("Elastic")?p[s]():p[s];return e?l[s]=e:a}else{const n=s.slice(0,-1).split("("),e=p[n[0]];return e?l[s]=e(...n[1].split(",")):a}},E=["steps(","irregular(","linear(","cubicBezier("],T=s=>{if(f(s)){for(let e=0,c=E.length;e<c;e++)if(B(s,E[e]))return console.warn(`String syntax for \`ease: "${s}"\` has been removed from the core and replaced by importing and passing the easing function directly: \`ease: ${s}\``),a}return I(s)?s:f(s)?Q(s):a};export{T as a,p as e,a as n,Q as p};
