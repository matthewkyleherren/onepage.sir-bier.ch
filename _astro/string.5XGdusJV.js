const h=o=>o.split(/(?=[A-Z])/).join("-").toLowerCase(),s=o=>{let t=0;for(let e=0;e<o.length;e++)t=(t<<5)-t+o.charCodeAt(e),t|=0;return t.toString(16)};export{s as h,h as t};
