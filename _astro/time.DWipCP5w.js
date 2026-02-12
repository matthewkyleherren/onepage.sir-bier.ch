import{n as i,l,i as u,g as m}from"./targets.Ch0TkwgG.js";import{T as p}from"./timer.BnERl5BE.js";/**
 * Anime.js - utils - ESM
 * @version v4.2.2
 * @license MIT
 * @copyright 2025 - Julian Garnier
 */const g=(s=i)=>new p({duration:1*l.timeScale,onComplete:s},null,0).resume(),v=s=>{let e;return(...c)=>{let o,t,n,a;e&&(o=e.currentIteration,t=e.iterationProgress,n=e.reversed,a=e._alternate,e.revert());const r=s(...c);return r&&!u(r)&&r.revert&&(e=r),m(t)||(e.currentIteration=o,e.iterationProgress=(a&&o%2?!n:n)?1-t:t),r||i}};export{v as k,g as s};
