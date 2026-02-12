import{g as f,B as d,X as g,Y as h,h as b,e as x,H as m}from"./targets.Ch0TkwgG.js";/**
 * Anime.js - timeline - ESM
 * @version v4.2.2
 * @license MIT
 * @copyright 2025 - Julian Garnier
 */const N=(r,e)=>{if(b(e,"<")){const s=e[1]==="<",t=r._tail,a=t?t._offset+t._delay:0;return s?a:a+t.duration}},S=(r,e)=>{let s=r.iterationDuration;if(s===m&&(s=0),f(e))return s;if(d(+e))return+e;const t=e,a=r?r.labels:null,n=!x(a),l=N(r,t),c=!f(l),i=g.exec(t);if(i){const u=i[0],o=t.split(u),p=n&&o[0]?a[o[0]]:s,O=c?l:n?p:s,v=+o[1];return h(O,v,u[0])}else return c?l:n?f(a[t])?s:a[t]:s};export{S as p};
