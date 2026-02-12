import{g as u,H as m,k as p,j as f,I as d,J as V,L as T,M as n,N as l,d as y,l as w,O as N}from"./targets.Ch0TkwgG.js";import{s as U}from"./timer.BnERl5BE.js";import{J as v,c as J}from"./animation.CYjtRj_b.js";/**
 * Anime.js - utils - ESM
 * @version v4.2.2
 * @license MIT
 * @copyright 2025 - Julian Garnier
 */function A(t,e,o){const a=f(t);if(!a.length)return;const[s]=a,c=d(s,e),g=U(e,s,c);let i=V(s,g);if(u(o))return i;if(T(i,n),n.t===l.NUMBER||n.t===l.UNIT){const r=J(s,n,o,!1);return`${y(r.n,w.precision)}${r.u}`}}const I=(t,e)=>{if(!u(e))return e.duration=m,e.composition=p(e.composition,N.none),new v(t,e,null,0,!0).resume()};export{A as g,I as s};
