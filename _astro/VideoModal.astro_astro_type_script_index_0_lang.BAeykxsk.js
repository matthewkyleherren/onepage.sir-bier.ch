import{H as _p,E as Il,C as Dr,a as Tp,M as Ap}from"./mixin.CMZY7Am2.js";import{i as yp}from"./component-manager.modern.DSG18_2G.js";import{M as kp}from"./Modal.CTl89jTL.js";import"./index.3whys8t3.js";import"./config.C_g47voF.js";import"./focus-trap.esm.ClxjYaXz.js";var O=_p,Y={VIDEO:"video",THUMBNAIL:"thumbnail",STORYBOARD:"storyboard",DRM:"drm"},M={NOT_AN_ERROR:0,NETWORK_OFFLINE:2000002,NETWORK_UNKNOWN_ERROR:2e6,NETWORK_NO_STATUS:2000001,NETWORK_INVALID_URL:24e5,NETWORK_NOT_FOUND:2404e3,NETWORK_NOT_READY:2412e3,NETWORK_GENERIC_SERVER_FAIL:25e5,NETWORK_TOKEN_MISSING:2403201,NETWORK_TOKEN_MALFORMED:2412202,NETWORK_TOKEN_EXPIRED:2403210,NETWORK_TOKEN_AUD_MISSING:2403221,NETWORK_TOKEN_AUD_MISMATCH:2403222,NETWORK_TOKEN_SUB_MISMATCH:2403232,ENCRYPTED_ERROR:5e6,ENCRYPTED_UNSUPPORTED_KEY_SYSTEM:5000001,ENCRYPTED_GENERATE_REQUEST_FAILED:5000002,ENCRYPTED_UPDATE_LICENSE_FAILED:5000003,ENCRYPTED_UPDATE_SERVER_CERT_FAILED:5000004,ENCRYPTED_CDM_ERROR:5000005,ENCRYPTED_OUTPUT_RESTRICTED:5000006,ENCRYPTED_MISSING_TOKEN:5000002},Ls=t=>t===Y.VIDEO?"playback":t,Mt=class Ba extends Error{constructor(e,i=Ba.MEDIA_ERR_CUSTOM,a,r){var n;super(e),this.name="MediaError",this.code=i,this.context=r,this.fatal=a??(i>=Ba.MEDIA_ERR_NETWORK&&i<=Ba.MEDIA_ERR_ENCRYPTED),this.message||(this.message=(n=Ba.defaultMessages[this.code])!=null?n:"")}};Mt.MEDIA_ERR_ABORTED=1,Mt.MEDIA_ERR_NETWORK=2,Mt.MEDIA_ERR_DECODE=3,Mt.MEDIA_ERR_SRC_NOT_SUPPORTED=4,Mt.MEDIA_ERR_ENCRYPTED=5,Mt.MEDIA_ERR_CUSTOM=100,Mt.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail.",3:"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",4:"An unsupported error occurred. The server or network failed, or your browser does not support this format.",5:"The media is encrypted and there are no keys to decrypt it."};var k=Mt,Sp=t=>t==null,Rl=(t,e)=>Sp(e)?!1:t in e,po={ANY:"any",MUTED:"muted"},B={ON_DEMAND:"on-demand",LIVE:"live",UNKNOWN:"unknown"},ot={MSE:"mse",NATIVE:"native"},Wa={HEADER:"header",QUERY:"query",NONE:"none"},rs=Object.values(Wa),Tt={M3U8:"application/vnd.apple.mpegurl",MP4:"video/mp4"},su={HLS:Tt.M3U8};[...Object.values(Tt)];var Ip="en",vo={code:Ip},ae=(t,e,i,a,r=t)=>{r.addEventListener(e,i,a),t.addEventListener("teardown",()=>{r.removeEventListener(e,i)},{once:!0})};function Rp(t,e,i){e&&i>e&&(i=e);for(let a=0;a<t.length;a++)if(t.start(a)<=i&&t.end(a)>=i)return!0;return!1}var Cl=t=>{let e=t.indexOf("?");if(e<0)return[t];let i=t.slice(0,e),a=t.slice(e);return[i,a]},ws=t=>{let{type:e}=t;if(e){let i=e.toUpperCase();return Rl(i,su)?su[i]:e}return Cp(t)},Oc=t=>t==="VOD"?B.ON_DEMAND:B.LIVE,xc=t=>t==="EVENT"?Number.POSITIVE_INFINITY:t==="VOD"?Number.NaN:0,Cp=t=>{let{src:e}=t;if(!e)return"";let i="";try{i=new URL(e).pathname}catch{console.error("invalid url")}let a=i.lastIndexOf(".");if(a<0)return Lp(t)?Tt.M3U8:"";let r=i.slice(a+1).toUpperCase();return Rl(r,Tt)?Tt[r]:""},Mp="mux.com",Lp=({src:t,customDomain:e=Mp})=>{let i;try{i=new URL(`${t}`)}catch{return!1}let a=i.protocol==="https:",r=i.hostname===`stream.${e}`.toLowerCase(),n=i.pathname.split("/"),s=n.length===2,d=!(n!=null&&n[1].includes("."));return a&&r&&s&&d},zi=t=>{let e=(t??"").split(".")[1];if(e)try{let i=e.replace(/-/g,"+").replace(/_/g,"/"),a=decodeURIComponent(atob(i).split("").map(function(r){return"%"+("00"+r.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(a)}catch{return}},wp=({exp:t},e=Date.now())=>!t||t*1e3<e,Dp=({sub:t},e)=>t!==e,Op=({aud:t},e)=>!t,xp=({aud:t},e)=>t!==e,Nc="en";function R(t,e=!0){var i,a;let r=e&&(a=(i=vo)==null?void 0:i[t])!=null?a:t,n=e?vo.code:Nc;return new Np(r,n)}var Np=class{constructor(e,i=(a=>(a=vo)!=null?a:Nc)()){this.message=e,this.locale=i}format(e){return this.message.replace(/\{(\w+)\}/g,(i,a)=>{var r;return(r=e[a])!=null?r:""})}toString(){return this.message}},Pp=Object.values(po),ou=t=>typeof t=="boolean"||typeof t=="string"&&Pp.includes(t),Up=(t,e,i)=>{let{autoplay:a}=t,r=!1,n=!1,s=ou(a)?a:!!a,d=()=>{r||ae(e,"playing",()=>{r=!0},{once:!0})};if(d(),ae(e,"loadstart",()=>{r=!1,d(),zs(e,s)},{once:!0}),ae(e,"loadstart",()=>{i||(t.streamType&&t.streamType!==B.UNKNOWN?n=t.streamType===B.LIVE:n=!Number.isFinite(e.duration)),zs(e,s)},{once:!0}),i&&i.once(O.Events.LEVEL_LOADED,(o,u)=>{var h;t.streamType&&t.streamType!==B.UNKNOWN?n=t.streamType===B.LIVE:n=(h=u.details.live)!=null?h:!1}),!s){let o=()=>{!n||Number.isFinite(t.startTime)||(i!=null&&i.liveSyncPosition?e.currentTime=i.liveSyncPosition:Number.isFinite(e.seekable.end(0))&&(e.currentTime=e.seekable.end(0)))};i&&ae(e,"play",()=>{e.preload==="metadata"?i.once(O.Events.LEVEL_UPDATED,o):o()},{once:!0})}return o=>{r||(s=ou(o)?o:!!o,zs(e,s))}},zs=(t,e)=>{if(!e)return;let i=t.muted,a=()=>t.muted=i;switch(e){case po.ANY:t.play().catch(()=>{t.muted=!0,t.play().catch(a)});break;case po.MUTED:t.muted=!0,t.play().catch(a);break;default:t.play().catch(()=>{});break}},$p=({preload:t,src:e},i,a)=>{let r=p=>{p!=null&&["","none","metadata","auto"].includes(p)?i.setAttribute("preload",p):i.removeAttribute("preload")};if(!a)return r(t),r;let n=!1,s=!1,d=a.config.maxBufferLength,o=a.config.maxBufferSize,u=p=>{r(p);let v=p??i.preload;s||v==="none"||(v==="metadata"?(a.config.maxBufferLength=1,a.config.maxBufferSize=1):(a.config.maxBufferLength=d,a.config.maxBufferSize=o),h())},h=()=>{!n&&e&&(n=!0,a.loadSource(e))};return ae(i,"play",()=>{s=!0,a.config.maxBufferLength=d,a.config.maxBufferSize=o,h()},{once:!0}),u(t),u};function Hp(t,e){var i;if(!("videoTracks"in t))return;let a=new WeakMap;e.on(O.Events.MANIFEST_PARSED,function(o,u){d();let h=t.addVideoTrack("main");h.selected=!0;for(let[p,v]of u.levels.entries()){let E=h.addRendition(v.url[0],v.width,v.height,v.videoCodec,v.bitrate);a.set(v,`${p}`),E.id=`${p}`}}),e.on(O.Events.AUDIO_TRACKS_UPDATED,function(o,u){s();for(let h of u.audioTracks){let p=h.default?"main":"alternative",v=t.addAudioTrack(p,h.name,h.lang);v.id=`${h.id}`,h.default&&(v.enabled=!0)}}),t.audioTracks.addEventListener("change",()=>{var o;let u=+((o=[...t.audioTracks].find(p=>p.enabled))==null?void 0:o.id),h=e.audioTracks.map(p=>p.id);u!=e.audioTrack&&h.includes(u)&&(e.audioTrack=u)}),e.on(O.Events.LEVELS_UPDATED,function(o,u){var h;let p=t.videoTracks[(h=t.videoTracks.selectedIndex)!=null?h:0];if(!p)return;let v=u.levels.map(E=>a.get(E));for(let E of t.videoRenditions)E.id&&!v.includes(E.id)&&p.removeRendition(E)});let r=o=>{let u=o.target.selectedIndex;u!=e.nextLevel&&(e.nextLevel=u)};(i=t.videoRenditions)==null||i.addEventListener("change",r);let n=()=>{for(let o of t.videoTracks)t.removeVideoTrack(o)},s=()=>{for(let o of t.audioTracks)t.removeAudioTrack(o)},d=()=>{n(),s()};e.once(O.Events.DESTROYING,d)}var Xs=t=>"time"in t?t.time:t.startTime;function Bp(t,e){e.on(O.Events.NON_NATIVE_TEXT_TRACKS_FOUND,(r,{tracks:n})=>{n.forEach(s=>{var d,o;let u=(d=s.subtitleTrack)!=null?d:s.closedCaptions,h=e.subtitleTracks.findIndex(({lang:v,name:E,type:g})=>v==u?.lang&&E===s.label&&g.toLowerCase()===s.kind),p=((o=s._id)!=null?o:s.default)?"default":`${s.kind}${h}`;Ml(t,s.kind,s.label,u?.lang,p,s.default)})});let i=()=>{if(!e.subtitleTracks.length)return;let r=Array.from(t.textTracks).find(d=>d.id&&d.mode==="showing"&&["subtitles","captions"].includes(d.kind));if(!r)return;let n=e.subtitleTracks[e.subtitleTrack],s=n?n.default?"default":`${e.subtitleTracks[e.subtitleTrack].type.toLowerCase()}${e.subtitleTrack}`:void 0;if(e.subtitleTrack<0||r?.id!==s){let d=e.subtitleTracks.findIndex(({lang:o,name:u,type:h,default:p})=>r.id==="default"&&p||o==r.language&&u===r.label&&h.toLowerCase()===r.kind);e.subtitleTrack=d}r?.id===s&&r.cues&&Array.from(r.cues).forEach(d=>{r.addCue(d)})};t.textTracks.addEventListener("change",i),e.on(O.Events.CUES_PARSED,(r,{track:n,cues:s})=>{let d=t.textTracks.getTrackById(n);if(!d)return;let o=d.mode==="disabled";o&&(d.mode="hidden"),s.forEach(u=>{var h;(h=d.cues)!=null&&h.getCueById(u.id)||d.addCue(u)}),o&&(d.mode="disabled")}),e.once(O.Events.DESTROYING,()=>{t.textTracks.removeEventListener("change",i),t.querySelectorAll("track[data-removeondestroy]").forEach(r=>{r.remove()})});let a=()=>{Array.from(t.textTracks).forEach(r=>{var n,s;if(!["subtitles","caption"].includes(r.kind)&&(r.label==="thumbnails"||r.kind==="chapters")){if(!((n=r.cues)!=null&&n.length)){let d="track";r.kind&&(d+=`[kind="${r.kind}"]`),r.label&&(d+=`[label="${r.label}"]`);let o=t.querySelector(d),u=(s=o?.getAttribute("src"))!=null?s:"";o?.removeAttribute("src"),setTimeout(()=>{o?.setAttribute("src",u)},0)}r.mode!=="hidden"&&(r.mode="hidden")}})};e.once(O.Events.MANIFEST_LOADED,a),e.once(O.Events.MEDIA_ATTACHED,a)}function Ml(t,e,i,a,r,n){let s=document.createElement("track");return s.kind=e,s.label=i,a&&(s.srclang=a),r&&(s.id=r),n&&(s.default=!0),s.track.mode=["subtitles","captions"].includes(e)?"disabled":"hidden",s.setAttribute("data-removeondestroy",""),t.append(s),s.track}function Wp(t,e){let i=Array.prototype.find.call(t.querySelectorAll("track"),a=>a.track===e);i?.remove()}function Mr(t,e,i){var a;return(a=Array.from(t.querySelectorAll("track")).find(r=>r.track.label===e&&r.track.kind===i))==null?void 0:a.track}async function Pc(t,e,i,a){let r=Mr(t,i,a);return r||(r=Ml(t,a,i),r.mode="hidden",await new Promise(n=>setTimeout(()=>n(void 0),0))),r.mode!=="hidden"&&(r.mode="hidden"),[...e].sort((n,s)=>Xs(s)-Xs(n)).forEach(n=>{var s,d;let o=n.value,u=Xs(n);if("endTime"in n&&n.endTime!=null)r?.addCue(new VTTCue(u,n.endTime,a==="chapters"?o:JSON.stringify(o??null)));else{let h=Array.prototype.findIndex.call(r?.cues,g=>g.startTime>=u),p=(s=r?.cues)==null?void 0:s[h],v=p?p.startTime:Number.isFinite(t.duration)?t.duration:Number.MAX_SAFE_INTEGER,E=(d=r?.cues)==null?void 0:d[h-1];E&&(E.endTime=u),r?.addCue(new VTTCue(u,v,a==="chapters"?o:JSON.stringify(o??null)))}}),t.textTracks.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),r}var Ll="cuepoints",Uc=Object.freeze({label:Ll});async function $c(t,e,i=Uc){return Pc(t,e,i.label,"metadata")}var Eo=t=>({time:t.startTime,value:JSON.parse(t.text)});function Fp(t,e={label:Ll}){let i=Mr(t,e.label,"metadata");return i!=null&&i.cues?Array.from(i.cues,a=>Eo(a)):[]}function Hc(t,e={label:Ll}){var i,a;let r=Mr(t,e.label,"metadata");if(!((i=r?.activeCues)!=null&&i.length))return;if(r.activeCues.length===1)return Eo(r.activeCues[0]);let{currentTime:n}=t,s=Array.prototype.find.call((a=r.activeCues)!=null?a:[],({startTime:d,endTime:o})=>d<=n&&o>n);return Eo(s||r.activeCues[0])}async function Kp(t,e=Uc){return new Promise(i=>{ae(t,"loadstart",async()=>{let a=await $c(t,[],e);ae(t,"cuechange",()=>{let r=Hc(t);if(r){let n=new CustomEvent("cuepointchange",{composed:!0,bubbles:!0,detail:r});t.dispatchEvent(n)}},{},a),i(a)})})}var wl="chapters",Bc=Object.freeze({label:wl}),bo=t=>({startTime:t.startTime,endTime:t.endTime,value:t.text});async function Wc(t,e,i=Bc){return Pc(t,e,i.label,"chapters")}function Vp(t,e={label:wl}){var i;let a=Mr(t,e.label,"chapters");return(i=a?.cues)!=null&&i.length?Array.from(a.cues,r=>bo(r)):[]}function Fc(t,e={label:wl}){var i,a;let r=Mr(t,e.label,"chapters");if(!((i=r?.activeCues)!=null&&i.length))return;if(r.activeCues.length===1)return bo(r.activeCues[0]);let{currentTime:n}=t,s=Array.prototype.find.call((a=r.activeCues)!=null?a:[],({startTime:d,endTime:o})=>d<=n&&o>n);return bo(s||r.activeCues[0])}async function Yp(t,e=Bc){return new Promise(i=>{ae(t,"loadstart",async()=>{let a=await Wc(t,[],e);ae(t,"cuechange",()=>{let r=Fc(t);if(r){let n=new CustomEvent("chapterchange",{composed:!0,bubbles:!0,detail:r});t.dispatchEvent(n)}},{},a),i(a)})})}function Gp(t,e){if(e){let i=e.playingDate;if(i!=null)return new Date(i.getTime()-t.currentTime*1e3)}return typeof t.getStartDate=="function"?t.getStartDate():new Date(NaN)}function qp(t,e){if(e&&e.playingDate)return e.playingDate;if(typeof t.getStartDate=="function"){let i=t.getStartDate();return new Date(i.getTime()+t.currentTime*1e3)}return new Date(NaN)}var or={VIDEO:"v",THUMBNAIL:"t",STORYBOARD:"s",DRM:"d"},Zp=t=>{if(t===Y.VIDEO)return or.VIDEO;if(t===Y.DRM)return or.DRM},Qp=(t,e)=>{var i,a;let r=Ls(t),n=`${r}Token`;return(i=e.tokens)!=null&&i[r]?(a=e.tokens)==null?void 0:a[r]:Rl(n,e)?e[n]:void 0},ns=(t,e,i,a,r=!1,n=!(s=>(s=globalThis.navigator)==null?void 0:s.onLine)())=>{var s,d;if(n){let A=R("Your device appears to be offline",r),w,S=k.MEDIA_ERR_NETWORK,P=new k(A,S,!1,w);return P.errorCategory=e,P.muxCode=M.NETWORK_OFFLINE,P.data=t,P}let o="status"in t?t.status:t.code,u=Date.now(),h=k.MEDIA_ERR_NETWORK;if(o===200)return;let p=Ls(e),v=Qp(e,i),E=Zp(e),[g]=Cl((s=i.playbackId)!=null?s:"");if(!o||!g)return;let f=zi(v);if(v&&!f){let A=R("The {tokenNamePrefix}-token provided is invalid or malformed.",r).format({tokenNamePrefix:p}),w=R("Compact JWT string: {token}",r).format({token:v}),S=new k(A,h,!0,w);return S.errorCategory=e,S.muxCode=M.NETWORK_TOKEN_MALFORMED,S.data=t,S}if(o>=500){let A=new k("",h,a??!0);return A.errorCategory=e,A.muxCode=M.NETWORK_UNKNOWN_ERROR,A}if(o===403)if(f){if(wp(f,u)){let A={timeStyle:"medium",dateStyle:"medium"},w=R("The video’s secured {tokenNamePrefix}-token has expired.",r).format({tokenNamePrefix:p}),S=R("Expired at: {expiredDate}. Current time: {currentDate}.",r).format({expiredDate:new Intl.DateTimeFormat("en",A).format((d=f.exp)!=null?d:0*1e3),currentDate:new Intl.DateTimeFormat("en",A).format(u)}),P=new k(w,h,!0,S);return P.errorCategory=e,P.muxCode=M.NETWORK_TOKEN_EXPIRED,P.data=t,P}if(Dp(f,g)){let A=R("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",r).format({tokenNamePrefix:p}),w=R("Specified playback ID: {playbackId} and the playback ID encoded in the {tokenNamePrefix}-token: {tokenPlaybackId}",r).format({tokenNamePrefix:p,playbackId:g,tokenPlaybackId:f.sub}),S=new k(A,h,!0,w);return S.errorCategory=e,S.muxCode=M.NETWORK_TOKEN_SUB_MISMATCH,S.data=t,S}if(Op(f)){let A=R("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:p}),w=R("The {tokenNamePrefix}-token has no aud value. aud value should be {expectedAud}.",r).format({tokenNamePrefix:p,expectedAud:E}),S=new k(A,h,!0,w);return S.errorCategory=e,S.muxCode=M.NETWORK_TOKEN_AUD_MISSING,S.data=t,S}if(xp(f,E)){let A=R("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:p}),w=R("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.",r).format({tokenNamePrefix:p,expectedAud:E,aud:f.aud}),S=new k(A,h,!0,w);return S.errorCategory=e,S.muxCode=M.NETWORK_TOKEN_AUD_MISMATCH,S.data=t,S}}else{let A=R("Authorization error trying to access this {category} URL. If this is a signed URL, you might need to provide a {tokenNamePrefix}-token.",r).format({tokenNamePrefix:p,category:e}),w=R("Specified playback ID: {playbackId}",r).format({playbackId:g}),S=new k(A,h,a??!0,w);return S.errorCategory=e,S.muxCode=M.NETWORK_TOKEN_MISSING,S.data=t,S}if(o===412){let A=R("This playback-id may belong to a live stream that is not currently active or an asset that is not ready.",r),w=R("Specified playback ID: {playbackId}",r).format({playbackId:g}),S=new k(A,h,a??!0,w);return S.errorCategory=e,S.muxCode=M.NETWORK_NOT_READY,S.streamType=i.streamType===B.LIVE?"live":i.streamType===B.ON_DEMAND?"on-demand":"unknown",S.data=t,S}if(o===404){let A=R("This URL or playback-id does not exist. You may have used an Asset ID or an ID from a different resource.",r),w=R("Specified playback ID: {playbackId}",r).format({playbackId:g}),S=new k(A,h,a??!0,w);return S.errorCategory=e,S.muxCode=M.NETWORK_NOT_FOUND,S.data=t,S}if(o===400){let A=R("The URL or playback-id was invalid. You may have used an invalid value as a playback-id."),w=R("Specified playback ID: {playbackId}",r).format({playbackId:g}),S=new k(A,h,a??!0,w);return S.errorCategory=e,S.muxCode=M.NETWORK_INVALID_URL,S.data=t,S}let _=new k("",h,a??!0);return _.errorCategory=e,_.muxCode=M.NETWORK_UNKNOWN_ERROR,_.data=t,_},lu=O.DefaultConfig.capLevelController,Kc=class Vc extends lu{constructor(e){super(e)}get levels(){var e;return(e=this.hls.levels)!=null?e:[]}getValidLevels(e){return this.levels.filter((i,a)=>this.isLevelAllowed(i)&&a<=e)}getMaxLevel(e){let i=super.getMaxLevel(e),a=this.getValidLevels(e);if(!a[i])return i;let r=Math.min(a[i].width,a[i].height),n=Vc.minMaxResolution;return r>=n?i:lu.getMaxLevelByMediaSize(a,n*(16/9),n)}};Kc.minMaxResolution=720;var zp=Kc,Xp=zp,Xr={FAIRPLAY:"fairplay",PLAYREADY:"playready",WIDEVINE:"widevine"},Jp=t=>{if(t.includes("fps"))return Xr.FAIRPLAY;if(t.includes("playready"))return Xr.PLAYREADY;if(t.includes("widevine"))return Xr.WIDEVINE},jp=t=>{let e=t.split(`
`).find((i,a,r)=>a&&r[a-1].startsWith("#EXT-X-STREAM-INF"));return fetch(e).then(i=>i.status!==200?Promise.reject(i):i.text())},ev=t=>{let e=t.split(`
`).filter(a=>a.startsWith("#EXT-X-SESSION-DATA"));if(!e.length)return{};let i={};for(let a of e){let r=iv(a),n=r["DATA-ID"];n&&(i[n]={...r})}return{sessionData:i}},tv=/([A-Z0-9-]+)="?(.*?)"?(?:,|$)/g;function iv(t){let e=[...t.matchAll(tv)];return Object.fromEntries(e.map(([,i,a])=>[i,a]))}var av=t=>{var e,i,a;let r=t.split(`
`),n=(i=((e=r.find(u=>u.startsWith("#EXT-X-PLAYLIST-TYPE")))!=null?e:"").split(":")[1])==null?void 0:i.trim(),s=Oc(n),d=xc(n),o;if(s===B.LIVE){let u=r.find(h=>h.startsWith("#EXT-X-PART-INF"));if(u)o=+u.split(":")[1].split("=")[1]*2;else{let h=r.find(v=>v.startsWith("#EXT-X-TARGETDURATION")),p=(a=h?.split(":"))==null?void 0:a[1];o=+(p??6)*3}}return{streamType:s,targetLiveWindow:d,liveEdgeStartOffset:o}},rv=async(t,e)=>{if(e===Tt.MP4)return{streamType:B.ON_DEMAND,targetLiveWindow:Number.NaN,liveEdgeStartOffset:void 0,sessionData:void 0};if(e===Tt.M3U8){let i=await fetch(t);if(!i.ok)return Promise.reject(i);let a=await i.text(),r=await jp(a);return{...ev(a),...av(r)}}return console.error(`Media type ${e} is an unrecognized or unsupported type for src ${t}.`),{streamType:void 0,targetLiveWindow:void 0,liveEdgeStartOffset:void 0,sessionData:void 0}},nv=async(t,e,i=ws({src:t}))=>{var a,r,n,s;let{streamType:d,targetLiveWindow:o,liveEdgeStartOffset:u,sessionData:h}=await rv(t,i),p=h?.["com.apple.hls.chapters"];(p!=null&&p.URI||p!=null&&p.VALUE.toLocaleLowerCase().startsWith("http"))&&Dl((a=p.URI)!=null?a:p.VALUE,e),((r=J.get(e))!=null?r:{}).liveEdgeStartOffset=u,((n=J.get(e))!=null?n:{}).targetLiveWindow=o,e.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),((s=J.get(e))!=null?s:{}).streamType=d,e.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},Dl=async(t,e)=>{var i,a;try{let r=await fetch(t);if(!r.ok)throw new Error(`Failed to fetch Mux metadata: ${r.status} ${r.statusText}`);let n=await r.json(),s={};if(!((i=n?.[0])!=null&&i.metadata))return;for(let o of n[0].metadata)o.key&&o.value&&(s[o.key]=o.value);((a=J.get(e))!=null?a:{}).metadata=s;let d=new CustomEvent("muxmetadata");e.dispatchEvent(d)}catch(r){console.error(r)}},sv=t=>{var e;let i=t.type,a=Oc(i),r=xc(i),n,s=!!((e=t.partList)!=null&&e.length);return a===B.LIVE&&(n=s?t.partTarget*2:t.targetduration*3),{streamType:a,targetLiveWindow:r,liveEdgeStartOffset:n,lowLatency:s}},ov=(t,e,i)=>{var a,r,n,s,d,o,u,h;let{streamType:p,targetLiveWindow:v,liveEdgeStartOffset:E,lowLatency:g}=sv(t);if(p===B.LIVE){g?(i.config.backBufferLength=(a=i.userConfig.backBufferLength)!=null?a:4,i.config.maxFragLookUpTolerance=(r=i.userConfig.maxFragLookUpTolerance)!=null?r:.001,i.config.abrBandWidthUpFactor=(n=i.userConfig.abrBandWidthUpFactor)!=null?n:i.config.abrBandWidthFactor):i.config.backBufferLength=(s=i.userConfig.backBufferLength)!=null?s:8;let f=Object.freeze({get length(){return e.seekable.length},start(_){return e.seekable.start(_)},end(_){var A;return _>this.length||_<0||Number.isFinite(e.duration)?e.seekable.end(_):(A=i.liveSyncPosition)!=null?A:e.seekable.end(_)}});((d=J.get(e))!=null?d:{}).seekable=f}((o=J.get(e))!=null?o:{}).liveEdgeStartOffset=E,((u=J.get(e))!=null?u:{}).targetLiveWindow=v,e.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),((h=J.get(e))!=null?h:{}).streamType=p,e.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},du,uu,lv=(uu=(du=globalThis?.navigator)==null?void 0:du.userAgent)!=null?uu:"",cu,hu,mu,dv=(mu=(hu=(cu=globalThis?.navigator)==null?void 0:cu.userAgentData)==null?void 0:hu.platform)!=null?mu:"",pu,vu,Eu,uv=(Eu=(vu=(pu=globalThis?.navigator)==null?void 0:pu.userAgentData)==null?void 0:vu.brands)!=null?Eu:[],cv=lv.toLowerCase().includes("android")||["x11","android"].some(t=>dv.toLowerCase().includes(t)),bu=uv.find(t=>t.brand==="Google Chrome"),hv=t=>{var e;return bu&&parseInt((e=bu.version)!=null?e:"0")>=141&&!!t.canPlayType("application/vnd.apple.mpegurl")},J=new WeakMap,At="mux.com",fu,gu,Yc=(gu=(fu=O).isSupported)==null?void 0:gu.call(fu),mv=t=>cv||hv(t),Gc=()=>Il.utils.now(),pv=Il.utils.generateUUID,fo=({playbackId:t,customDomain:e=At,maxResolution:i,minResolution:a,renditionOrder:r,programStartTime:n,programEndTime:s,assetStartTime:d,assetEndTime:o,playbackToken:u,tokens:{playback:h=u}={},extraSourceParams:p={}}={})=>{if(!t)return;let[v,E=""]=Cl(t),g=new URL(`https://stream.${e}/${v}.m3u8${E}`);return h||g.searchParams.has("token")?(g.searchParams.forEach((f,_)=>{_!="token"&&g.searchParams.delete(_)}),h&&g.searchParams.set("token",h)):(i&&g.searchParams.set("max_resolution",i),a&&(g.searchParams.set("min_resolution",a),i&&+i.slice(0,-1)<+a.slice(0,-1)&&console.error("minResolution must be <= maxResolution","minResolution",a,"maxResolution",i)),r&&g.searchParams.set("rendition_order",r),n&&g.searchParams.set("program_start_time",`${n}`),s&&g.searchParams.set("program_end_time",`${s}`),d&&g.searchParams.set("asset_start_time",`${d}`),o&&g.searchParams.set("asset_end_time",`${o}`),Object.entries(p).forEach(([f,_])=>{_!=null&&g.searchParams.set(f,_)})),g.toString()},Ds=t=>{if(!t)return;let[e]=t.split("?");return e||void 0},Ol=t=>{if(!t||!t.startsWith("https://stream."))return;let[e]=new URL(t).pathname.slice(1).split(/\.m3u8|\//);return e||void 0},vv=t=>{var e,i,a;return(e=t?.metadata)!=null&&e.video_id?t.metadata.video_id:eh(t)&&(a=(i=Ds(t.playbackId))!=null?i:Ol(t.src))!=null?a:t.src},qc=t=>{var e;return(e=J.get(t))==null?void 0:e.error},Ev=t=>{var e;return(e=J.get(t))==null?void 0:e.metadata},go=t=>{var e,i;return(i=(e=J.get(t))==null?void 0:e.streamType)!=null?i:B.UNKNOWN},bv=t=>{var e,i;return(i=(e=J.get(t))==null?void 0:e.targetLiveWindow)!=null?i:Number.NaN},xl=t=>{var e,i;return(i=(e=J.get(t))==null?void 0:e.seekable)!=null?i:t.seekable},fv=t=>{var e;let i=(e=J.get(t))==null?void 0:e.liveEdgeStartOffset;if(typeof i!="number")return Number.NaN;let a=xl(t);return a.length?a.end(a.length-1)-i:Number.NaN},Nl=.034,gv=(t,e,i=Nl)=>Math.abs(t-e)<=i,Zc=(t,e,i=Nl)=>t>e||gv(t,e,i),_v=(t,e=Nl)=>t.paused&&Zc(t.currentTime,t.duration,e),Qc=(t,e)=>{var i,a,r;if(!e||!t.buffered.length)return;if(t.readyState>2)return!1;let n=e.currentLevel>=0?(a=(i=e.levels)==null?void 0:i[e.currentLevel])==null?void 0:a.details:(r=e.levels.find(p=>!!p.details))==null?void 0:r.details;if(!n||n.live)return;let{fragments:s}=n;if(!(s!=null&&s.length))return;if(t.currentTime<t.duration-(n.targetduration+.5))return!1;let d=s[s.length-1];if(t.currentTime<=d.start)return!1;let o=d.start+d.duration/2,u=t.buffered.start(t.buffered.length-1),h=t.buffered.end(t.buffered.length-1);return o>u&&o<h},zc=(t,e)=>t.ended||t.loop?t.ended:e&&Qc(t,e)?!0:_v(t),Tv=(t,e,i)=>{Xc(e,i,t);let{metadata:a={}}=t,{view_session_id:r=pv()}=a,n=vv(t);a.view_session_id=r,a.video_id=n,t.metadata=a;let s=h=>{var p;(p=e.mux)==null||p.emit("hb",{view_drm_type:h})};t.drmTypeCb=s,J.set(e,{retryCount:0});let d=Av(t,e),o=$p(t,e,d);t!=null&&t.muxDataKeepSession&&e!=null&&e.mux&&!e.mux.deleted?d&&e.mux.addHLSJS({hlsjs:d,Hls:d?O:void 0}):Cv(t,e,d),Mv(t,e,d),Kp(e),Yp(e);let u=Up(t,e,d);return{engine:d,setAutoplay:u,setPreload:o}},Xc=(t,e,i)=>{let a=e?.engine;t!=null&&t.mux&&!t.mux.deleted&&(i!=null&&i.muxDataKeepSession?a&&t.mux.removeHLSJS():(t.mux.destroy(),delete t.mux)),a&&(a.detachMedia(),a.destroy()),t&&(t.hasAttribute("src")&&(t.removeAttribute("src"),t.load()),t.removeEventListener("error",ih),t.removeEventListener("error",_o),t.removeEventListener("durationchange",th),J.delete(t),t.dispatchEvent(new Event("teardown")))};function Jc(t,e){var i;let a=ws(t);if(a!==Tt.M3U8)return!0;let r=!a||((i=e.canPlayType(a))!=null?i:!0),{preferPlayback:n}=t,s=n===ot.MSE,d=n===ot.NATIVE,o=Yc&&(s||mv(e));return r&&(d||!o)}var Av=(t,e)=>{let{debug:i,streamType:a,startTime:r=-1,metadata:n,preferCmcd:s,_hlsConfig:d={}}=t,o=ws(t)===Tt.M3U8,u=Jc(t,e);if(o&&!u&&Yc){let h={backBufferLength:30,renderTextTracksNatively:!1,liveDurationInfinity:!0,capLevelToPlayerSize:!0,capLevelOnFPSDrop:!0},p=yv(a),v=kv(t),E=[Wa.QUERY,Wa.HEADER].includes(s)?{useHeaders:s===Wa.HEADER,sessionId:n?.view_session_id,contentId:n?.video_id}:void 0,g=d.capLevelToPlayerSize==null?{capLevelController:Xp}:{},f=new O({debug:i,startPosition:r,cmcd:E,xhrSetup:(_,A)=>{var w,S;if(s&&s!==Wa.QUERY)return;let P=new URL(A);if(!P.searchParams.has("CMCD"))return;let xe=((S=(w=P.searchParams.get("CMCD"))==null?void 0:w.split(","))!=null?S:[]).filter(St=>St.startsWith("sid")||St.startsWith("cid")).join(",");P.searchParams.set("CMCD",xe),_.open("GET",P)},...g,...h,...p,...v,...d});return f.on(O.Events.MANIFEST_PARSED,async function(_,A){var w,S;let P=(w=A.sessionData)==null?void 0:w["com.apple.hls.chapters"];(P!=null&&P.URI||P!=null&&P.VALUE.toLocaleLowerCase().startsWith("http"))&&Dl((S=P?.URI)!=null?S:P?.VALUE,e)}),f}},yv=t=>t===B.LIVE?{backBufferLength:8}:{},kv=t=>{let{tokens:{drm:e}={},playbackId:i,drmTypeCb:a}=t,r=Ds(i);return!e||!r?{}:{emeEnabled:!0,drmSystems:{"com.apple.fps":{licenseUrl:Jr(t,"fairplay"),serverCertificateUrl:jc(t,"fairplay")},"com.widevine.alpha":{licenseUrl:Jr(t,"widevine")},"com.microsoft.playready":{licenseUrl:Jr(t,"playready")}},requestMediaKeySystemAccessFunc:(n,s)=>(n==="com.widevine.alpha"&&(s=[...s.map(d=>{var o;let u=(o=d.videoCapabilities)==null?void 0:o.map(h=>({...h,robustness:"HW_SECURE_ALL"}));return{...d,videoCapabilities:u}}),...s]),navigator.requestMediaKeySystemAccess(n,s).then(d=>{let o=Jp(n);return a?.(o),d}))}},Sv=async t=>{let e=await fetch(t);return e.status!==200?Promise.reject(e):await e.arrayBuffer()},Iv=async(t,e)=>{let i=await fetch(e,{method:"POST",headers:{"Content-type":"application/octet-stream"},body:t});if(i.status!==200)return Promise.reject(i);let a=await i.arrayBuffer();return new Uint8Array(a)},Rv=(t,e)=>{ae(e,"encrypted",async i=>{try{let a=i.initDataType;if(a!=="skd"){console.error(`Received unexpected initialization data type "${a}"`);return}if(!e.mediaKeys){let o=await navigator.requestMediaKeySystemAccess("com.apple.fps",[{initDataTypes:[a],videoCapabilities:[{contentType:"application/vnd.apple.mpegurl",robustness:""}],distinctiveIdentifier:"not-allowed",persistentState:"not-allowed",sessionTypes:["temporary"]}]).then(h=>{var p;return(p=t.drmTypeCb)==null||p.call(t,Xr.FAIRPLAY),h}).catch(()=>{let h=R("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),p=new k(h,k.MEDIA_ERR_ENCRYPTED,!0);p.errorCategory=Y.DRM,p.muxCode=M.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM,we(e,p)});if(!o)return;let u=await o.createMediaKeys();try{let h=await Sv(jc(t,"fairplay")).catch(p=>{if(p instanceof Response){let v=ns(p,Y.DRM,t);return console.error("mediaError",v?.message,v?.context),v?Promise.reject(v):Promise.reject(new Error("Unexpected error in app cert request"))}return Promise.reject(p)});await u.setServerCertificate(h).catch(()=>{let p=R("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),v=new k(p,k.MEDIA_ERR_ENCRYPTED,!0);return v.errorCategory=Y.DRM,v.muxCode=M.ENCRYPTED_UPDATE_SERVER_CERT_FAILED,Promise.reject(v)})}catch(h){we(e,h);return}await e.setMediaKeys(u)}let r=i.initData;if(r==null){console.error(`Could not start encrypted playback due to missing initData in ${i.type} event`);return}let n=e.mediaKeys.createSession();n.addEventListener("keystatuseschange",()=>{n.keyStatuses.forEach(o=>{let u;if(o==="internal-error"){let h=R("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser.");u=new k(h,k.MEDIA_ERR_ENCRYPTED,!0),u.errorCategory=Y.DRM,u.muxCode=M.ENCRYPTED_CDM_ERROR}else if(o==="output-restricted"||o==="output-downscaled"){let h=R("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen.");u=new k(h,k.MEDIA_ERR_ENCRYPTED,!1),u.errorCategory=Y.DRM,u.muxCode=M.ENCRYPTED_OUTPUT_RESTRICTED}u&&we(e,u)})});let s=await Promise.all([n.generateRequest(a,r).catch(()=>{let o=R("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),u=new k(o,k.MEDIA_ERR_ENCRYPTED,!0);u.errorCategory=Y.DRM,u.muxCode=M.ENCRYPTED_GENERATE_REQUEST_FAILED,we(e,u)}),new Promise(o=>{n.addEventListener("message",u=>{o(u.message)},{once:!0})})]).then(([,o])=>o),d=await Iv(s,Jr(t,"fairplay")).catch(o=>{if(o instanceof Response){let u=ns(o,Y.DRM,t);return console.error("mediaError",u?.message,u?.context),u?Promise.reject(u):Promise.reject(new Error("Unexpected error in license key request"))}return Promise.reject(o)});await n.update(d).catch(()=>{let o=R("Failed to update DRM license. This may be an issue with the player or your protected content."),u=new k(o,k.MEDIA_ERR_ENCRYPTED,!0);return u.errorCategory=Y.DRM,u.muxCode=M.ENCRYPTED_UPDATE_LICENSE_FAILED,Promise.reject(u)})}catch(a){we(e,a);return}})},Jr=({playbackId:t,tokens:{drm:e}={},customDomain:i=At},a)=>{let r=Ds(t);return`https://license.${i.toLocaleLowerCase().endsWith(At)?i:At}/license/${a}/${r}?token=${e}`},jc=({playbackId:t,tokens:{drm:e}={},customDomain:i=At},a)=>{let r=Ds(t);return`https://license.${i.toLocaleLowerCase().endsWith(At)?i:At}/appcert/${a}/${r}?token=${e}`},eh=({playbackId:t,src:e,customDomain:i})=>{if(t)return!0;if(typeof e!="string")return!1;let a=window?.location.href,r=new URL(e,a).hostname.toLocaleLowerCase();return r.includes(At)||!!i&&r.includes(i.toLocaleLowerCase())},Cv=(t,e,i)=>{var a;let{envKey:r,disableTracking:n,muxDataSDK:s=Il,muxDataSDKOptions:d={}}=t,o=eh(t);if(!n&&(r||o)){let{playerInitTime:u,playerSoftwareName:h,playerSoftwareVersion:p,beaconCollectionDomain:v,debug:E,disableCookies:g}=t,f={...t.metadata,video_title:((a=t?.metadata)==null?void 0:a.video_title)||void 0},_=A=>typeof A.player_error_code=="string"?!1:typeof t.errorTranslator=="function"?t.errorTranslator(A):A;s.monitor(e,{debug:E,beaconCollectionDomain:v,hlsjs:i,Hls:i?O:void 0,automaticErrorTracking:!1,errorTranslator:_,disableCookies:g,...d,data:{...r?{env_key:r}:{},player_software_name:h,player_software:h,player_software_version:p,player_init_time:u,...f}})}},Mv=(t,e,i)=>{var a,r;let n=Jc(t,e),{src:s,customDomain:d=At}=t,o=()=>{e.ended||t.disablePseudoEnded||!zc(e,i)||(Qc(e,i)?e.currentTime=e.buffered.end(e.buffered.length-1):e.dispatchEvent(new Event("ended")))},u,h,p=()=>{let v=xl(e),E,g;v.length>0&&(E=v.start(0),g=v.end(0)),(h!==g||u!==E)&&e.dispatchEvent(new CustomEvent("seekablechange",{composed:!0})),u=E,h=g};if(ae(e,"durationchange",p),e&&n){let v=ws(t);if(typeof s=="string"){if(s.endsWith(".mp4")&&s.includes(d)){let f=Ol(s),_=new URL(`https://stream.${d}/${f}/metadata.json`);Dl(_.toString(),e)}let E=()=>{if(go(e)!==B.LIVE||Number.isFinite(e.duration))return;let f=setInterval(p,1e3);e.addEventListener("teardown",()=>{clearInterval(f)},{once:!0}),ae(e,"durationchange",()=>{Number.isFinite(e.duration)&&clearInterval(f)})},g=async()=>nv(s,e,v).then(E).catch(f=>{if(f instanceof Response){let _=ns(f,Y.VIDEO,t);if(_){we(e,_);return}}});if(e.preload==="none"){let f=()=>{g(),e.removeEventListener("loadedmetadata",_)},_=()=>{g(),e.removeEventListener("play",f)};ae(e,"play",f,{once:!0}),ae(e,"loadedmetadata",_,{once:!0})}else g();(a=t.tokens)!=null&&a.drm?Rv(t,e):ae(e,"encrypted",()=>{let f=R("Attempting to play DRM-protected content without providing a DRM token."),_=new k(f,k.MEDIA_ERR_ENCRYPTED,!0);_.errorCategory=Y.DRM,_.muxCode=M.ENCRYPTED_MISSING_TOKEN,we(e,_)},{once:!0}),e.setAttribute("src",s),t.startTime&&(((r=J.get(e))!=null?r:{}).startTime=t.startTime,e.addEventListener("durationchange",th,{once:!0}))}else e.removeAttribute("src");e.addEventListener("error",ih),e.addEventListener("error",_o),e.addEventListener("emptied",()=>{e.querySelectorAll("track[data-removeondestroy]").forEach(E=>{E.remove()})},{once:!0}),ae(e,"pause",o),ae(e,"seeked",o),ae(e,"play",()=>{e.ended||Zc(e.currentTime,e.duration)&&(e.currentTime=e.seekable.length?e.seekable.start(0):0)})}else i&&s?(i.once(O.Events.LEVEL_LOADED,(v,E)=>{ov(E.details,e,i),p(),go(e)===B.LIVE&&!Number.isFinite(e.duration)&&(i.on(O.Events.LEVEL_UPDATED,p),ae(e,"durationchange",()=>{Number.isFinite(e.duration)&&i.off(O.Events.LEVELS_UPDATED,p)}))}),i.on(O.Events.ERROR,(v,E)=>{var g,f;let _=Lv(E,t);if(_.muxCode===M.NETWORK_NOT_READY){let A=(g=J.get(e))!=null?g:{},w=(f=A.retryCount)!=null?f:0;if(w<6){let S=w===0?5e3:6e4,P=new k(`Retrying in ${S/1e3} seconds...`,_.code,_.fatal);Object.assign(P,_),we(e,P),setTimeout(()=>{A.retryCount=w+1,E.details==="manifestLoadError"&&E.url&&i.loadSource(E.url)},S);return}else{A.retryCount=0;let S=new k('Try again later or <a href="#" onclick="window.location.reload(); return false;" style="color: #4a90e2;">click here to retry</a>',_.code,_.fatal);Object.assign(S,_),we(e,S);return}}we(e,_)}),i.on(O.Events.MANIFEST_LOADED,()=>{let v=J.get(e);v&&v.error&&(v.error=null,v.retryCount=0,e.dispatchEvent(new Event("emptied")),e.dispatchEvent(new Event("loadstart")))}),e.addEventListener("error",_o),ae(e,"waiting",o),Hp(t,i),Bp(e,i),i.attachMedia(e)):console.error("It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.")};function th(t){var e;let i=t.target,a=(e=J.get(i))==null?void 0:e.startTime;if(a&&Rp(i.seekable,i.duration,a)){let r=i.preload==="auto";r&&(i.preload="none"),i.currentTime=a,r&&(i.preload="auto")}}async function ih(t){if(!t.isTrusted)return;t.stopImmediatePropagation();let e=t.target;if(!(e!=null&&e.error))return;let{message:i,code:a}=e.error,r=new k(i,a);if(e.src&&a===k.MEDIA_ERR_SRC_NOT_SUPPORTED&&e.readyState===HTMLMediaElement.HAVE_NOTHING){setTimeout(()=>{var n;let s=(n=qc(e))!=null?n:e.error;s?.code===k.MEDIA_ERR_SRC_NOT_SUPPORTED&&we(e,r)},500);return}if(e.src&&(a!==k.MEDIA_ERR_DECODE||a!==void 0))try{let{status:n}=await fetch(e.src);r.data={response:{code:n}}}catch{}we(e,r)}function we(t,e){var i;e.fatal&&(((i=J.get(t))!=null?i:{}).error=e,t.dispatchEvent(new CustomEvent("error",{detail:e})))}function _o(t){var e,i;if(!(t instanceof CustomEvent)||!(t.detail instanceof k))return;let a=t.target,r=t.detail;!r||!r.fatal||(((e=J.get(a))!=null?e:{}).error=r,(i=a.mux)==null||i.emit("error",{player_error_code:r.code,player_error_message:r.message,player_error_context:r.context}))}var Lv=(t,e)=>{var i,a,r;t.fatal?console.error("getErrorFromHlsErrorData()",t):e.debug&&console.warn("getErrorFromHlsErrorData() (non-fatal)",t);let n={[O.ErrorTypes.NETWORK_ERROR]:k.MEDIA_ERR_NETWORK,[O.ErrorTypes.MEDIA_ERROR]:k.MEDIA_ERR_DECODE,[O.ErrorTypes.KEY_SYSTEM_ERROR]:k.MEDIA_ERR_ENCRYPTED},s=h=>[O.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,O.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED].includes(h.details)?k.MEDIA_ERR_NETWORK:n[h.type],d=h=>{if(h.type===O.ErrorTypes.KEY_SYSTEM_ERROR)return Y.DRM;if(h.type===O.ErrorTypes.NETWORK_ERROR)return Y.VIDEO},o,u=s(t);if(u===k.MEDIA_ERR_NETWORK&&t.response){let h=(i=d(t))!=null?i:Y.VIDEO;o=(a=ns(t.response,h,e,t.fatal))!=null?a:new k("",u,t.fatal)}else if(u===k.MEDIA_ERR_ENCRYPTED)if(t.details===O.ErrorDetails.KEY_SYSTEM_NO_CONFIGURED_LICENSE){let h=R("Attempting to play DRM-protected content without providing a DRM token.");o=new k(h,k.MEDIA_ERR_ENCRYPTED,t.fatal),o.errorCategory=Y.DRM,o.muxCode=M.ENCRYPTED_MISSING_TOKEN}else if(t.details===O.ErrorDetails.KEY_SYSTEM_NO_ACCESS){let h=R("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser.");o=new k(h,k.MEDIA_ERR_ENCRYPTED,t.fatal),o.errorCategory=Y.DRM,o.muxCode=M.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM}else if(t.details===O.ErrorDetails.KEY_SYSTEM_NO_SESSION){let h=R("Failed to generate a DRM license request. This may be an issue with the player or your protected content.");o=new k(h,k.MEDIA_ERR_ENCRYPTED,!0),o.errorCategory=Y.DRM,o.muxCode=M.ENCRYPTED_GENERATE_REQUEST_FAILED}else if(t.details===O.ErrorDetails.KEY_SYSTEM_SESSION_UPDATE_FAILED){let h=R("Failed to update DRM license. This may be an issue with the player or your protected content.");o=new k(h,k.MEDIA_ERR_ENCRYPTED,t.fatal),o.errorCategory=Y.DRM,o.muxCode=M.ENCRYPTED_UPDATE_LICENSE_FAILED}else if(t.details===O.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED){let h=R("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate.");o=new k(h,k.MEDIA_ERR_ENCRYPTED,t.fatal),o.errorCategory=Y.DRM,o.muxCode=M.ENCRYPTED_UPDATE_SERVER_CERT_FAILED}else if(t.details===O.ErrorDetails.KEY_SYSTEM_STATUS_INTERNAL_ERROR){let h=R("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser.");o=new k(h,k.MEDIA_ERR_ENCRYPTED,t.fatal),o.errorCategory=Y.DRM,o.muxCode=M.ENCRYPTED_CDM_ERROR}else if(t.details===O.ErrorDetails.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED){let h=R("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen.");o=new k(h,k.MEDIA_ERR_ENCRYPTED,!1),o.errorCategory=Y.DRM,o.muxCode=M.ENCRYPTED_OUTPUT_RESTRICTED}else o=new k(t.error.message,k.MEDIA_ERR_ENCRYPTED,t.fatal),o.errorCategory=Y.DRM,o.muxCode=M.ENCRYPTED_ERROR;else o=new k("",u,t.fatal);return o.context||(o.context=`${t.url?`url: ${t.url}
`:""}${t.response&&(t.response.code||t.response.text)?`response: ${t.response.code}, ${t.response.text}
`:""}${t.reason?`failure reason: ${t.reason}
`:""}${t.level?`level: ${t.level}
`:""}${t.parent?`parent stream controller: ${t.parent}
`:""}${t.buffer?`buffer length: ${t.buffer}
`:""}${t.error?`error: ${t.error}
`:""}${t.event?`event: ${t.event}
`:""}${t.err?`error message: ${(r=t.err)==null?void 0:r.message}
`:""}`),o.data=t,o},ah=t=>{throw TypeError(t)},Pl=(t,e,i)=>e.has(t)||ah("Cannot "+i),me=(t,e,i)=>(Pl(t,e,"read from private field"),i?i.call(t):e.get(t)),Pe=(t,e,i)=>e.has(t)?ah("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),Ce=(t,e,i,a)=>(Pl(t,e,"write to private field"),e.set(t,i),i),Or=(t,e,i)=>(Pl(t,e,"access private method"),i),wv=()=>{try{return"0.28.1"}catch{}return"UNKNOWN"},Dv=wv(),Ov=()=>Dv,xv=`
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" part="logo" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 1600 500"><g fill="#fff"><path d="M994.287 93.486c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m0-93.486c-34.509 0-62.484 27.976-62.484 62.486v187.511c0 68.943-56.09 125.033-125.032 125.033s-125.03-56.09-125.03-125.033V62.486C681.741 27.976 653.765 0 619.256 0s-62.484 27.976-62.484 62.486v187.511C556.772 387.85 668.921 500 806.771 500c137.851 0 250.001-112.15 250.001-250.003V62.486c0-34.51-27.976-62.486-62.485-62.486M1537.51 468.511c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m-275.883-218.509-143.33 143.329c-24.402 24.402-24.402 63.966 0 88.368 24.402 24.402 63.967 24.402 88.369 0l143.33-143.329 143.328 143.329c24.402 24.4 63.967 24.402 88.369 0 24.403-24.402 24.403-63.966.001-88.368l-143.33-143.329.001-.004 143.329-143.329c24.402-24.402 24.402-63.965 0-88.367s-63.967-24.402-88.369 0L1349.996 161.63 1206.667 18.302c-24.402-24.401-63.967-24.402-88.369 0s-24.402 63.965 0 88.367l143.329 143.329v.004ZM437.511 468.521c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31M461.426 4.759C438.078-4.913 411.2.432 393.33 18.303L249.999 161.632 106.669 18.303C88.798.432 61.922-4.913 38.573 4.759 15.224 14.43-.001 37.214-.001 62.488v375.026c0 34.51 27.977 62.486 62.487 62.486 34.51 0 62.486-27.976 62.486-62.486V213.341l80.843 80.844c24.404 24.402 63.965 24.402 88.369 0l80.843-80.844v224.173c0 34.51 27.976 62.486 62.486 62.486s62.486-27.976 62.486-62.486V62.488c0-25.274-15.224-48.058-38.573-57.729" style="fill-rule:nonzero"/></g></svg>`,m={BEACON_COLLECTION_DOMAIN:"beacon-collection-domain",CUSTOM_DOMAIN:"custom-domain",DEBUG:"debug",DISABLE_TRACKING:"disable-tracking",DISABLE_COOKIES:"disable-cookies",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended",DRM_TOKEN:"drm-token",PLAYBACK_TOKEN:"playback-token",ENV_KEY:"env-key",MAX_RESOLUTION:"max-resolution",MIN_RESOLUTION:"min-resolution",RENDITION_ORDER:"rendition-order",PROGRAM_START_TIME:"program-start-time",PROGRAM_END_TIME:"program-end-time",ASSET_START_TIME:"asset-start-time",ASSET_END_TIME:"asset-end-time",METADATA_URL:"metadata-url",PLAYBACK_ID:"playback-id",PLAYER_SOFTWARE_NAME:"player-software-name",PLAYER_SOFTWARE_VERSION:"player-software-version",PLAYER_INIT_TIME:"player-init-time",PREFER_CMCD:"prefer-cmcd",PREFER_PLAYBACK:"prefer-playback",START_TIME:"start-time",STREAM_TYPE:"stream-type",TARGET_LIVE_WINDOW:"target-live-window",LIVE_EDGE_OFFSET:"live-edge-offset",TYPE:"type",LOGO:"logo"},Nv=Object.values(m),_u=Ov(),Tu="mux-video",qe,Fa,jr,Ka,en,tn,an,rn,nn,Va,yi,Ya,Pv=class extends Dr{constructor(){super(),Pe(this,yi),Pe(this,qe),Pe(this,Fa),Pe(this,jr),Pe(this,Ka,{}),Pe(this,en,{}),Pe(this,tn),Pe(this,an),Pe(this,rn),Pe(this,nn),Pe(this,Va,""),Ce(this,jr,Gc()),this.nativeEl.addEventListener("muxmetadata",e=>{var i;let a=Ev(this.nativeEl),r=(i=this.metadata)!=null?i:{};this.metadata={...a,...r},a?.["com.mux.video.branding"]==="mux-free-plan"&&(Ce(this,Va,"default"),this.updateLogo())})}static get NAME(){return Tu}static get VERSION(){return _u}static get observedAttributes(){var e;return[...Nv,...(e=Dr.observedAttributes)!=null?e:[]]}static getLogoHTML(e){return!e||e==="false"?"":e==="default"?xv:`<img part="logo" src="${e}" />`}static getTemplateHTML(e={}){var i;return`
      ${Dr.getTemplateHTML(e)}
      <style>
        :host {
          position: relative;
        }
        slot[name="logo"] {
          display: flex;
          justify-content: end;
          position: absolute;
          top: 1rem;
          right: 1rem;
          opacity: 0;
          transition: opacity 0.25s ease-in-out;
          z-index: 1;
        }
        slot[name="logo"]:has([part="logo"]) {
          opacity: 1;
        }
        slot[name="logo"] [part="logo"] {
          width: 5rem;
          pointer-events: none;
          user-select: none;
        }
      </style>
      <slot name="logo">
        ${this.getLogoHTML((i=e[m.LOGO])!=null?i:"")}
      </slot>
    `}get preferCmcd(){var e;return(e=this.getAttribute(m.PREFER_CMCD))!=null?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?rs.includes(e)?this.setAttribute(m.PREFER_CMCD,e):console.warn(`Invalid value for preferCmcd. Must be one of ${rs.join()}`):this.removeAttribute(m.PREFER_CMCD))}get playerInitTime(){return this.hasAttribute(m.PLAYER_INIT_TIME)?+this.getAttribute(m.PLAYER_INIT_TIME):me(this,jr)}set playerInitTime(e){e!=this.playerInitTime&&(e==null?this.removeAttribute(m.PLAYER_INIT_TIME):this.setAttribute(m.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return(e=me(this,rn))!=null?e:Tu}set playerSoftwareName(e){Ce(this,rn,e)}get playerSoftwareVersion(){var e;return(e=me(this,an))!=null?e:_u}set playerSoftwareVersion(e){Ce(this,an,e)}get _hls(){var e;return(e=me(this,qe))==null?void 0:e.engine}get mux(){var e;return(e=this.nativeEl)==null?void 0:e.mux}get error(){var e;return(e=qc(this.nativeEl))!=null?e:null}get errorTranslator(){return me(this,nn)}set errorTranslator(e){Ce(this,nn,e)}get src(){return this.getAttribute("src")}set src(e){e!==this.src&&(e==null?this.removeAttribute("src"):this.setAttribute("src",e))}get type(){var e;return(e=this.getAttribute(m.TYPE))!=null?e:void 0}set type(e){e!==this.type&&(e?this.setAttribute(m.TYPE,e):this.removeAttribute(m.TYPE))}get preload(){let e=this.getAttribute("preload");return e===""?"auto":["none","metadata","auto"].includes(e)?e:super.preload}set preload(e){e!=this.getAttribute("preload")&&(["","none","metadata","auto"].includes(e)?this.setAttribute("preload",e):this.removeAttribute("preload"))}get debug(){return this.getAttribute(m.DEBUG)!=null}set debug(e){e!==this.debug&&(e?this.setAttribute(m.DEBUG,""):this.removeAttribute(m.DEBUG))}get disableTracking(){return this.hasAttribute(m.DISABLE_TRACKING)}set disableTracking(e){e!==this.disableTracking&&this.toggleAttribute(m.DISABLE_TRACKING,!!e)}get disableCookies(){return this.hasAttribute(m.DISABLE_COOKIES)}set disableCookies(e){e!==this.disableCookies&&(e?this.setAttribute(m.DISABLE_COOKIES,""):this.removeAttribute(m.DISABLE_COOKIES))}get disablePseudoEnded(){return this.hasAttribute(m.DISABLE_PSEUDO_ENDED)}set disablePseudoEnded(e){e!==this.disablePseudoEnded&&(e?this.setAttribute(m.DISABLE_PSEUDO_ENDED,""):this.removeAttribute(m.DISABLE_PSEUDO_ENDED))}get startTime(){let e=this.getAttribute(m.START_TIME);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set startTime(e){e!==this.startTime&&(e==null?this.removeAttribute(m.START_TIME):this.setAttribute(m.START_TIME,`${e}`))}get playbackId(){var e;return this.hasAttribute(m.PLAYBACK_ID)?this.getAttribute(m.PLAYBACK_ID):(e=Ol(this.src))!=null?e:void 0}set playbackId(e){e!==this.playbackId&&(e?this.setAttribute(m.PLAYBACK_ID,e):this.removeAttribute(m.PLAYBACK_ID))}get maxResolution(){var e;return(e=this.getAttribute(m.MAX_RESOLUTION))!=null?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(m.MAX_RESOLUTION,e):this.removeAttribute(m.MAX_RESOLUTION))}get minResolution(){var e;return(e=this.getAttribute(m.MIN_RESOLUTION))!=null?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(m.MIN_RESOLUTION,e):this.removeAttribute(m.MIN_RESOLUTION))}get renditionOrder(){var e;return(e=this.getAttribute(m.RENDITION_ORDER))!=null?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(m.RENDITION_ORDER,e):this.removeAttribute(m.RENDITION_ORDER))}get programStartTime(){let e=this.getAttribute(m.PROGRAM_START_TIME);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set programStartTime(e){e==null?this.removeAttribute(m.PROGRAM_START_TIME):this.setAttribute(m.PROGRAM_START_TIME,`${e}`)}get programEndTime(){let e=this.getAttribute(m.PROGRAM_END_TIME);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set programEndTime(e){e==null?this.removeAttribute(m.PROGRAM_END_TIME):this.setAttribute(m.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){let e=this.getAttribute(m.ASSET_START_TIME);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set assetStartTime(e){e==null?this.removeAttribute(m.ASSET_START_TIME):this.setAttribute(m.ASSET_START_TIME,`${e}`)}get assetEndTime(){let e=this.getAttribute(m.ASSET_END_TIME);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set assetEndTime(e){e==null?this.removeAttribute(m.ASSET_END_TIME):this.setAttribute(m.ASSET_END_TIME,`${e}`)}get customDomain(){var e;return(e=this.getAttribute(m.CUSTOM_DOMAIN))!=null?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(m.CUSTOM_DOMAIN,e):this.removeAttribute(m.CUSTOM_DOMAIN))}get drmToken(){var e;return(e=this.getAttribute(m.DRM_TOKEN))!=null?e:void 0}set drmToken(e){e!==this.drmToken&&(e?this.setAttribute(m.DRM_TOKEN,e):this.removeAttribute(m.DRM_TOKEN))}get playbackToken(){var e,i,a,r;if(this.hasAttribute(m.PLAYBACK_TOKEN))return(e=this.getAttribute(m.PLAYBACK_TOKEN))!=null?e:void 0;if(this.hasAttribute(m.PLAYBACK_ID)){let[,n]=Cl((i=this.playbackId)!=null?i:"");return(a=new URLSearchParams(n).get("token"))!=null?a:void 0}if(this.src)return(r=new URLSearchParams(this.src).get("token"))!=null?r:void 0}set playbackToken(e){e!==this.playbackToken&&(e?this.setAttribute(m.PLAYBACK_TOKEN,e):this.removeAttribute(m.PLAYBACK_TOKEN))}get tokens(){let e=this.getAttribute(m.PLAYBACK_TOKEN),i=this.getAttribute(m.DRM_TOKEN);return{...me(this,en),...e!=null?{playback:e}:{},...i!=null?{drm:i}:{}}}set tokens(e){Ce(this,en,e??{})}get ended(){return zc(this.nativeEl,this._hls)}get envKey(){var e;return(e=this.getAttribute(m.ENV_KEY))!=null?e:void 0}set envKey(e){e!==this.envKey&&(e?this.setAttribute(m.ENV_KEY,e):this.removeAttribute(m.ENV_KEY))}get beaconCollectionDomain(){var e;return(e=this.getAttribute(m.BEACON_COLLECTION_DOMAIN))!=null?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(m.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(m.BEACON_COLLECTION_DOMAIN))}get streamType(){var e;return(e=this.getAttribute(m.STREAM_TYPE))!=null?e:go(this.nativeEl)}set streamType(e){e!==this.streamType&&(e?this.setAttribute(m.STREAM_TYPE,e):this.removeAttribute(m.STREAM_TYPE))}get targetLiveWindow(){return this.hasAttribute(m.TARGET_LIVE_WINDOW)?+this.getAttribute(m.TARGET_LIVE_WINDOW):bv(this.nativeEl)}set targetLiveWindow(e){e!=this.targetLiveWindow&&(e==null?this.removeAttribute(m.TARGET_LIVE_WINDOW):this.setAttribute(m.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e,i;if(this.hasAttribute(m.LIVE_EDGE_OFFSET)){let{liveEdgeOffset:a}=this,r=(e=this.nativeEl.seekable.end(0))!=null?e:0,n=(i=this.nativeEl.seekable.start(0))!=null?i:0;return Math.max(n,r-a)}return fv(this.nativeEl)}get liveEdgeOffset(){if(this.hasAttribute(m.LIVE_EDGE_OFFSET))return+this.getAttribute(m.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){e!=this.liveEdgeOffset&&(e==null?this.removeAttribute(m.LIVE_EDGE_OFFSET):this.setAttribute(m.LIVE_EDGE_OFFSET,`${+e}`))}get seekable(){return xl(this.nativeEl)}async addCuePoints(e){return $c(this.nativeEl,e)}get activeCuePoint(){return Hc(this.nativeEl)}get cuePoints(){return Fp(this.nativeEl)}async addChapters(e){return Wc(this.nativeEl,e)}get activeChapter(){return Fc(this.nativeEl)}get chapters(){return Vp(this.nativeEl)}getStartDate(){return Gp(this.nativeEl,this._hls)}get currentPdt(){return qp(this.nativeEl,this._hls)}get preferPlayback(){let e=this.getAttribute(m.PREFER_PLAYBACK);if(e===ot.MSE||e===ot.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===ot.MSE||e===ot.NATIVE?this.setAttribute(m.PREFER_PLAYBACK,e):this.removeAttribute(m.PREFER_PLAYBACK))}get metadata(){return{...this.getAttributeNames().filter(e=>e.startsWith("metadata-")&&![m.METADATA_URL].includes(e)).reduce((e,i)=>{let a=this.getAttribute(i);return a!=null&&(e[i.replace(/^metadata-/,"").replace(/-/g,"_")]=a),e},{}),...me(this,Ka)}}set metadata(e){Ce(this,Ka,e??{}),this.mux&&this.mux.emit("hb",me(this,Ka))}get _hlsConfig(){return me(this,tn)}set _hlsConfig(e){Ce(this,tn,e)}get logo(){var e;return(e=this.getAttribute(m.LOGO))!=null?e:me(this,Va)}set logo(e){e?this.setAttribute(m.LOGO,e):this.removeAttribute(m.LOGO)}load(){Ce(this,qe,Tv(this,this.nativeEl,me(this,qe)))}unload(){Xc(this.nativeEl,me(this,qe),this),Ce(this,qe,void 0)}attributeChangedCallback(e,i,a){var r,n;switch(Dr.observedAttributes.includes(e)&&!["src","autoplay","preload"].includes(e)&&super.attributeChangedCallback(e,i,a),e){case m.PLAYER_SOFTWARE_NAME:this.playerSoftwareName=a??void 0;break;case m.PLAYER_SOFTWARE_VERSION:this.playerSoftwareVersion=a??void 0;break;case"src":{let s=!!i,d=!!a;!s&&d?Or(this,yi,Ya).call(this):s&&!d?this.unload():s&&d&&(this.unload(),Or(this,yi,Ya).call(this));break}case"autoplay":if(a===i)break;(r=me(this,qe))==null||r.setAutoplay(this.autoplay);break;case"preload":if(a===i)break;(n=me(this,qe))==null||n.setPreload(a);break;case m.PLAYBACK_ID:this.src=fo(this);break;case m.DEBUG:{let s=this.debug;this.mux&&console.info("Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src."),this._hls&&(this._hls.config.debug=s);break}case m.METADATA_URL:a&&fetch(a).then(s=>s.json()).then(s=>this.metadata=s).catch(()=>console.error(`Unable to load or parse metadata JSON from metadata-url ${a}!`));break;case m.STREAM_TYPE:(a==null||a!==i)&&this.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}));break;case m.TARGET_LIVE_WINDOW:(a==null||a!==i)&&this.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0,detail:this.targetLiveWindow}));break;case m.LOGO:(a==null||a!==i)&&this.updateLogo();break;case m.DISABLE_TRACKING:{if(a==null||a!==i){let s=this.currentTime,d=this.paused;this.unload(),Or(this,yi,Ya).call(this).then(()=>{this.currentTime=s,d||this.play()})}break}case m.DISABLE_COOKIES:{(a==null||a!==i)&&this.disableCookies&&document.cookie.split(";").forEach(s=>{s.trim().startsWith("muxData")&&(document.cookie=s.replace(/^ +/,"").replace(/=.*/,"=;expires="+new Date().toUTCString()+";path=/"))});break}}}updateLogo(){if(!this.shadowRoot)return;let e=this.shadowRoot.querySelector('slot[name="logo"]');if(!e)return;let i=this.constructor.getLogoHTML(me(this,Va)||this.logo);e.innerHTML=i}connectedCallback(){var e;(e=super.connectedCallback)==null||e.call(this),this.nativeEl&&this.src&&!me(this,qe)&&Or(this,yi,Ya).call(this)}disconnectedCallback(){this.unload()}handleEvent(e){e.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(e.type,{composed:!0,detail:e.detail}))}};qe=new WeakMap,Fa=new WeakMap,jr=new WeakMap,Ka=new WeakMap,en=new WeakMap,tn=new WeakMap,an=new WeakMap,rn=new WeakMap,nn=new WeakMap,Va=new WeakMap,yi=new WeakSet,Ya=async function(){me(this,Fa)||(await Ce(this,Fa,Promise.resolve()),Ce(this,Fa,null),this.load())};var rh=t=>{throw TypeError(t)},nh=(t,e,i)=>e.has(t)||rh("Cannot "+i),Uv=(t,e,i)=>(nh(t,e,"read from private field"),i?i.call(t):e.get(t)),$v=(t,e,i)=>e.has(t)?rh("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),Hv=(t,e,i,a)=>(nh(t,e,"write to private field"),e.set(t,i),i),sh=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if(typeof DocumentFragment>"u"){class t extends sh{}globalThis.DocumentFragment=t}var Bv=class extends sh{},Wv={get(t){},define(t,e,i){},getName(t){return null},upgrade(t){},whenDefined(t){return Promise.resolve(Bv)}},Fv={customElements:Wv},Kv=typeof window>"u"||typeof globalThis.customElements>"u",Js=Kv?Fv:globalThis,sn,Au=class extends Tp(Ap(Pv)){constructor(){super(...arguments),$v(this,sn)}get autoplay(){let t=this.getAttribute("autoplay");return t===null?!1:t===""?!0:t}set autoplay(t){let e=this.autoplay;t!==e&&(t?this.setAttribute("autoplay",typeof t=="string"?t:""):this.removeAttribute("autoplay"))}get muxCastCustomData(){return{mux:{playbackId:this.playbackId,minResolution:this.minResolution,maxResolution:this.maxResolution,renditionOrder:this.renditionOrder,customDomain:this.customDomain,tokens:{drm:this.drmToken},envKey:this.envKey,metadata:this.metadata,disableCookies:this.disableCookies,disableTracking:this.disableTracking,beaconCollectionDomain:this.beaconCollectionDomain,startTime:this.startTime,preferCmcd:this.preferCmcd}}}get castCustomData(){var t;return(t=Uv(this,sn))!=null?t:this.muxCastCustomData}set castCustomData(t){Hv(this,sn,t)}};sn=new WeakMap;Js.customElements.get("mux-video")||(Js.customElements.define("mux-video",Au),Js.MuxVideoElement=Au);const y={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_LOOP_REQUEST:"medialooprequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},$={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},oh={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_LOOP:"mediaLoop",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_LANG:"mediaLang",MEDIA_WIDTH:"mediaWidth"},lh=Object.entries(oh),l=lh.reduce((t,[e,i])=>(t[e]=i.toLowerCase(),t),{}),Vv={USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"},yt=lh.reduce((t,[e,i])=>(t[e]=i.toLowerCase(),t),{...Vv});Object.entries(yt).reduce((t,[e,i])=>{const a=l[e];return a&&(t[i]=a),t},{userinactivechange:"userinactive"});const Yv=Object.entries(l).reduce((t,[e,i])=>{const a=yt[e];return a&&(t[i]=a),t},{userinactive:"userinactivechange"}),ut={SUBTITLES:"subtitles",CAPTIONS:"captions",CHAPTERS:"chapters",METADATA:"metadata"},Xi={DISABLED:"disabled",SHOWING:"showing"},js={MOUSE:"mouse",PEN:"pen",TOUCH:"touch"},_e={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},ft={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},Gv={FULLSCREEN:"fullscreen"};function qv(t){return t?.map(Qv).join(" ")}function Zv(t){return t?.split(/\s+/).map(zv)}function Qv(t){if(t){const{id:e,width:i,height:a}=t;return[e,i,a].filter(r=>r!=null).join(":")}}function zv(t){if(t){const[e,i,a]=t.split(":");return{id:e,width:+i,height:+a}}}function Xv(t){return t?.map(jv).join(" ")}function Jv(t){return t?.split(/\s+/).map(eE)}function jv(t){if(t){const{id:e,kind:i,language:a,label:r}=t;return[e,i,a,r].filter(n=>n!=null).join(":")}}function eE(t){if(t){const[e,i,a,r]=t.split(":");return{id:e,kind:i,language:a,label:r}}}function tE(t){return t.replace(/[-_]([a-z])/g,(e,i)=>i.toUpperCase())}function Ul(t){return typeof t=="number"&&!Number.isNaN(t)&&Number.isFinite(t)}function dh(t){return typeof t!="string"?!1:!isNaN(t)&&!isNaN(parseFloat(t))}const uh=t=>new Promise(e=>setTimeout(e,t)),yu=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],iE=(t,e)=>{const i=t===1?yu[e].singular:yu[e].plural;return`${t} ${i}`},lr=t=>{if(!Ul(t))return"";const e=Math.abs(t),i=e!==t,a=new Date(0,0,0,0,0,e,0);return`${[a.getHours(),a.getMinutes(),a.getSeconds()].map((d,o)=>d&&iE(d,o)).filter(d=>d).join(", ")}${i?" remaining":""}`};function Bt(t,e){let i=!1;t<0&&(i=!0,t=0-t),t=t<0?0:t;let a=Math.floor(t%60),r=Math.floor(t/60%60),n=Math.floor(t/3600);const s=Math.floor(e/60%60),d=Math.floor(e/3600);return(isNaN(t)||t===1/0)&&(n=r=a="0"),n=n>0||d>0?n+":":"",r=((n||s>=10)&&r<10?"0"+r:r)+":",a=a<10?"0"+a:a,(i?"-":"")+n+r+a}const aE={"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute",Loop:"Loop","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute","chapter: {chapterName}":"chapter: {chapterName}",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it."};var ku;const eo={en:aE};let To=((ku=globalThis.navigator)==null?void 0:ku.language)||"en";const rE=t=>{To=t},nE=t=>{var e,i,a;const[r]=To.split("-");return((e=eo[To])==null?void 0:e[t])||((i=eo[r])==null?void 0:i[t])||((a=eo.en)==null?void 0:a[t])||t},I=(t,e={})=>nE(t).replace(/\{(\w+)\}/g,(i,a)=>a in e?String(e[a]):`{${a}}`);class ch{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}}class hh extends ch{}let Su=class extends hh{constructor(){super(...arguments),this.role=null}};class sE{observe(){}unobserve(){}disconnect(){}}const mh={createElement:function(){return new vr.HTMLElement},createElementNS:function(){return new vr.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent(t){return!1}},vr={ResizeObserver:sE,document:mh,Node:hh,Element:Su,HTMLElement:class extends Su{constructor(){super(...arguments),this.innerHTML=""}get content(){return new vr.DocumentFragment}},DocumentFragment:class extends ch{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem(t){return null},setItem(t,e){},removeItem(t){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia(t){return{matches:!1,media:t}},DOMParser:class{parseFromString(e,i){return{body:{textContent:e}}}}},ph="global"in globalThis&&globalThis?.global===globalThis||typeof window>"u"||typeof window.customElements>"u",vh=Object.keys(vr).every(t=>t in globalThis),c=ph&&!vh?vr:globalThis,ne=ph&&!vh?mh:globalThis.document,Iu=new WeakMap,$l=t=>{let e=Iu.get(t);return e||Iu.set(t,e=new Set),e},Eh=new c.ResizeObserver(t=>{for(const e of t)for(const i of $l(e.target))i(e)});function na(t,e){$l(t).add(e),Eh.observe(t)}function sa(t,e){const i=$l(t);i.delete(e),i.size||Eh.unobserve(t)}function Se(t){const e={};for(const i of t)e[i.name]=i.value;return e}function fe(t){var e;return(e=Ao(t))!=null?e:ca(t,"media-controller")}function Ao(t){var e;const{MEDIA_CONTROLLER:i}=$,a=t.getAttribute(i);if(a)return(e=Os(t))==null?void 0:e.getElementById(a)}const bh=(t,e,i=".value")=>{const a=t.querySelector(i);a&&(a.textContent=e)},oE=(t,e)=>{const i=`slot[name="${e}"]`,a=t.shadowRoot.querySelector(i);return a?a.children:[]},fh=(t,e)=>oE(t,e)[0],kt=(t,e)=>!t||!e?!1:t?.contains(e)?!0:kt(t,e.getRootNode().host),ca=(t,e)=>{if(!t)return null;const i=t.closest(e);return i||ca(t.getRootNode().host,e)};function Hl(t=document){var e;const i=t?.activeElement;return i?(e=Hl(i.shadowRoot))!=null?e:i:null}function Os(t){var e;const i=(e=t?.getRootNode)==null?void 0:e.call(t);return i instanceof ShadowRoot||i instanceof Document?i:null}function gh(t,{depth:e=3,checkOpacity:i=!0,checkVisibilityCSS:a=!0}={}){if(t.checkVisibility)return t.checkVisibility({checkOpacity:i,checkVisibilityCSS:a});let r=t;for(;r&&e>0;){const n=getComputedStyle(r);if(i&&n.opacity==="0"||a&&n.visibility==="hidden"||n.display==="none")return!1;r=r.parentElement,e--}return!0}function lE(t,e,i,a){const r=a.x-i.x,n=a.y-i.y,s=r*r+n*n;if(s===0)return 0;const d=((t-i.x)*r+(e-i.y)*n)/s;return Math.max(0,Math.min(1,d))}function oe(t,e){const i=dE(t,a=>a===e);return i||Bl(t,e)}function dE(t,e){var i,a;let r;for(r of(i=t.querySelectorAll("style:not([media])"))!=null?i:[]){let n;try{n=(a=r.sheet)==null?void 0:a.cssRules}catch{continue}for(const s of n??[])if(e(s.selectorText))return s}}function Bl(t,e){var i,a;const r=(i=t.querySelectorAll("style:not([media])"))!=null?i:[],n=r?.[r.length-1];return n?.sheet?(n?.sheet.insertRule(`${e}{}`,n.sheet.cssRules.length),(a=n.sheet.cssRules)==null?void 0:a[n.sheet.cssRules.length-1]):(console.warn("Media Chrome: No style sheet found on style tag of",t),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}})}function G(t,e,i=Number.NaN){const a=t.getAttribute(e);return a!=null?+a:i}function j(t,e,i){const a=+i;if(i==null||Number.isNaN(a)){t.hasAttribute(e)&&t.removeAttribute(e);return}G(t,e,void 0)!==a&&t.setAttribute(e,`${a}`)}function x(t,e){return t.hasAttribute(e)}function N(t,e,i){if(i==null){t.hasAttribute(e)&&t.removeAttribute(e);return}x(t,e)!=i&&t.toggleAttribute(e,i)}function q(t,e,i=null){var a;return(a=t.getAttribute(e))!=null?a:i}function Z(t,e,i){if(i==null){t.hasAttribute(e)&&t.removeAttribute(e);return}const a=`${i}`;q(t,e,void 0)!==a&&t.setAttribute(e,a)}var _h=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},It=(t,e,i)=>(_h(t,e,"read from private field"),i?i.call(t):e.get(t)),uE=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},xr=(t,e,i,a)=>(_h(t,e,"write to private field"),e.set(t,i),i),Ee;function cE(t){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `}class xs extends c.HTMLElement{constructor(){if(super(),uE(this,Ee,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=Se(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[$.MEDIA_CONTROLLER,l.MEDIA_PAUSED]}attributeChangedCallback(e,i,a){var r,n,s,d,o;e===$.MEDIA_CONTROLLER&&(i&&((n=(r=It(this,Ee))==null?void 0:r.unassociateElement)==null||n.call(r,this),xr(this,Ee,null)),a&&this.isConnected&&(xr(this,Ee,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(o=(d=It(this,Ee))==null?void 0:d.associateElement)==null||o.call(d,this)))}connectedCallback(){var e,i,a,r;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),xr(this,Ee,hE(this)),this.getAttribute($.MEDIA_CONTROLLER)&&((i=(e=It(this,Ee))==null?void 0:e.associateElement)==null||i.call(e,this)),(a=It(this,Ee))==null||a.addEventListener("pointerdown",this),(r=It(this,Ee))==null||r.addEventListener("click",this)}disconnectedCallback(){var e,i,a,r;this.getAttribute($.MEDIA_CONTROLLER)&&((i=(e=It(this,Ee))==null?void 0:e.unassociateElement)==null||i.call(e,this)),(a=It(this,Ee))==null||a.removeEventListener("pointerdown",this),(r=It(this,Ee))==null||r.removeEventListener("click",this),xr(this,Ee,null)}handleEvent(e){var i;const a=(i=e.composedPath())==null?void 0:i[0];if(["video","media-controller"].includes(a?.localName)){if(e.type==="pointerdown")this._pointerType=e.pointerType;else if(e.type==="click"){const{clientX:n,clientY:s}=e,{left:d,top:o,width:u,height:h}=this.getBoundingClientRect(),p=n-d,v=s-o;if(p<0||v<0||p>u||v>h||u===0&&h===0)return;const E=this._pointerType||"mouse";if(this._pointerType=void 0,E===js.TOUCH){this.handleTap(e);return}else if(E===js.MOUSE||E===js.PEN){this.handleMouseClick(e);return}}}}get mediaPaused(){return x(this,l.MEDIA_PAUSED)}set mediaPaused(e){N(this,l.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){const i=this.mediaPaused?y.MEDIA_PLAY_REQUEST:y.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new c.CustomEvent(i,{composed:!0,bubbles:!0}))}}Ee=new WeakMap;xs.shadowRootOptions={mode:"open"};xs.getTemplateHTML=cE;function hE(t){var e;const i=t.getAttribute($.MEDIA_CONTROLLER);return i?(e=t.getRootNode())==null?void 0:e.getElementById(i):ca(t,"media-controller")}c.customElements.get("media-gesture-receiver")||c.customElements.define("media-gesture-receiver",xs);var Ru=xs,Wl=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},ke=(t,e,i)=>(Wl(t,e,"read from private field"),i?i.call(t):e.get(t)),Te=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},qt=(t,e,i,a)=>(Wl(t,e,"write to private field"),e.set(t,i),i),De=(t,e,i)=>(Wl(t,e,"access private method"),i),ss,ki,Er,Yi,on,yo,Th,Ga,ln,ko,Ah,So,yh,br,Ns,Ps,Fl,oa,fr;const C={AUDIO:"audio",AUTOHIDE:"autohide",BREAKPOINTS:"breakpoints",GESTURES_DISABLED:"gesturesdisabled",KEYBOARD_CONTROL:"keyboardcontrol",NO_AUTOHIDE:"noautohide",USER_INACTIVE:"userinactive",AUTOHIDE_OVER_CONTROLS:"autohideovercontrols"};function mE(t){return`
    <style>
      
      :host([${l.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
        overflow: hidden;
      }

      :host(:not([${C.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        pointer-events: none;
        background: none;
      }

      slot[name=media] {
        display: var(--media-slot-display, contents);
      }

      
      :host([${C.AUDIO}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${C.AUDIO}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${C.AUDIO}])[${C.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${C.AUDIO}])[${C.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${C.AUDIO}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${C.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${C.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
        align-self: stretch;
        flex-grow: 1;
      }

      slot[name=middle-chrome] {
        display: inline;
        flex-grow: 1;
        pointer-events: none;
        background: none;
      }

      
      ::slotted([slot=media]),
      ::slotted([slot=poster]) {
        width: 100%;
        height: 100%;
      }

      
      :host(:not([${C.AUDIO}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${C.NO_AUTOHIDE}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${C.USER_INACTIVE}]:not([${l.MEDIA_PAUSED}]):not([${l.MEDIA_IS_AIRPLAYING}]):not([${l.MEDIA_IS_CASTING}]):not([${C.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${C.NO_AUTOHIDE}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${C.USER_INACTIVE}]:not([${C.NO_AUTOHIDE}]):not([${l.MEDIA_PAUSED}]):not([${l.MEDIA_IS_CASTING}]):not([${C.AUDIO}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${C.USER_INACTIVE}][${C.AUTOHIDE_OVER_CONTROLS}]:not([${C.NO_AUTOHIDE}]):not([${l.MEDIA_PAUSED}]):not([${l.MEDIA_IS_CASTING}]):not([${C.AUDIO}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      :host(:not([${C.AUDIO}])[${l.MEDIA_HAS_PLAYED}]) slot[name=poster] {
        display: none;
      }

      ::slotted([role=dialog]) {
        width: 100%;
        height: 100%;
        align-self: center;
      }

      ::slotted([role=menu]) {
        align-self: end;
      }
    </style>

    <slot name="media" part="layer media-layer"></slot>
    <slot name="poster" part="layer poster-layer"></slot>
    <slot name="gestures-chrome" part="layer gesture-layer">
      <media-gesture-receiver slot="gestures-chrome">
        <template shadowrootmode="${Ru.shadowRootOptions.mode}">
          ${Ru.getTemplateHTML({})}
        </template>
      </media-gesture-receiver>
    </slot>
    <span part="layer vertical-layer">
      <slot name="top-chrome" part="top chrome"></slot>
      <slot name="middle-chrome" part="middle chrome"></slot>
      <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
      
      <slot part="bottom chrome"></slot>
    </span>
    <slot name="dialog" part="layer dialog-layer"></slot>
  `}const pE=Object.values(l),vE="sm:384 md:576 lg:768 xl:960";function EE(t){kh(t.target,t.contentRect.width)}function kh(t,e){var i;if(!t.isConnected)return;const a=(i=t.getAttribute(C.BREAKPOINTS))!=null?i:vE,r=bE(a),n=fE(r,e);let s=!1;if(Object.keys(r).forEach(d=>{if(n.includes(d)){t.hasAttribute(`breakpoint${d}`)||(t.setAttribute(`breakpoint${d}`,""),s=!0);return}t.hasAttribute(`breakpoint${d}`)&&(t.removeAttribute(`breakpoint${d}`),s=!0)}),s){const d=new CustomEvent(yt.BREAKPOINTS_CHANGE,{detail:n});t.dispatchEvent(d)}t.breakpointsComputed||(t.breakpointsComputed=!0,t.dispatchEvent(new CustomEvent(yt.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}function bE(t){const e=t.split(/\s+/);return Object.fromEntries(e.map(i=>i.split(":")))}function fE(t,e){return Object.keys(t).filter(i=>e>=parseInt(t[i]))}class Us extends c.HTMLElement{constructor(){if(super(),Te(this,yo),Te(this,ko),Te(this,So),Te(this,br),Te(this,Ps),Te(this,oa),Te(this,ss,0),Te(this,ki,null),Te(this,Er,null),Te(this,Yi,void 0),this.breakpointsComputed=!1,Te(this,on,new MutationObserver(De(this,yo,Th).bind(this))),Te(this,Ga,!1),Te(this,ln,i=>{ke(this,Ga)||(setTimeout(()=>{EE(i),qt(this,Ga,!1)},0),qt(this,Ga,!0))}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const i=Se(this.attributes),a=this.constructor.getTemplateHTML(i);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(a):this.shadowRoot.innerHTML=a}const e=this.querySelector(":scope > slot[slot=media]");e&&e.addEventListener("slotchange",()=>{if(!e.assignedElements({flatten:!0}).length){ke(this,ki)&&this.mediaUnsetCallback(ke(this,ki));return}this.handleMediaUpdated(this.media)})}static get observedAttributes(){return[C.AUTOHIDE,C.GESTURES_DISABLED].concat(pE).filter(e=>![l.MEDIA_RENDITION_LIST,l.MEDIA_AUDIO_TRACK_LIST,l.MEDIA_CHAPTERS_CUES,l.MEDIA_WIDTH,l.MEDIA_HEIGHT,l.MEDIA_ERROR,l.MEDIA_ERROR_MESSAGE].includes(e))}attributeChangedCallback(e,i,a){e.toLowerCase()==C.AUTOHIDE&&(this.autohide=a)}get media(){let e=this.querySelector(":scope > [slot=media]");return e?.nodeName=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(qt(this,ki,e),e.localName.includes("-")&&await c.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;ke(this,on).observe(this,{childList:!0,subtree:!0}),na(this,ke(this,ln));const i=this.getAttribute(C.AUDIO)!=null,a=I(i?"audio player":"video player");this.setAttribute("role","region"),this.setAttribute("aria-label",a),this.handleMediaUpdated(this.media),this.setAttribute(C.USER_INACTIVE,""),kh(this,this.getBoundingClientRect().width),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),(e=c.window)==null||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;ke(this,on).disconnect(),sa(this,ke(this,ln)),this.media&&this.mediaUnsetCallback(this.media),(e=c.window)==null||e.removeEventListener("mouseup",this)}mediaSetCallback(e){}mediaUnsetCallback(e){qt(this,ki,null)}handleEvent(e){switch(e.type){case"pointerdown":qt(this,ss,e.timeStamp);break;case"pointermove":De(this,ko,Ah).call(this,e);break;case"pointerup":De(this,So,yh).call(this,e);break;case"mouseleave":De(this,br,Ns).call(this);break;case"mouseup":this.removeAttribute(C.KEYBOARD_CONTROL);break;case"keyup":De(this,oa,fr).call(this),this.setAttribute(C.KEYBOARD_CONTROL,"");break}}set autohide(e){const i=Number(e);qt(this,Yi,isNaN(i)?0:i)}get autohide(){return(ke(this,Yi)===void 0?2:ke(this,Yi)).toString()}get breakpoints(){return q(this,C.BREAKPOINTS)}set breakpoints(e){Z(this,C.BREAKPOINTS,e)}get audio(){return x(this,C.AUDIO)}set audio(e){N(this,C.AUDIO,e)}get gesturesDisabled(){return x(this,C.GESTURES_DISABLED)}set gesturesDisabled(e){N(this,C.GESTURES_DISABLED,e)}get keyboardControl(){return x(this,C.KEYBOARD_CONTROL)}set keyboardControl(e){N(this,C.KEYBOARD_CONTROL,e)}get noAutohide(){return x(this,C.NO_AUTOHIDE)}set noAutohide(e){N(this,C.NO_AUTOHIDE,e)}get autohideOverControls(){return x(this,C.AUTOHIDE_OVER_CONTROLS)}set autohideOverControls(e){N(this,C.AUTOHIDE_OVER_CONTROLS,e)}get userInteractive(){return x(this,C.USER_INACTIVE)}set userInteractive(e){N(this,C.USER_INACTIVE,e)}}ss=new WeakMap;ki=new WeakMap;Er=new WeakMap;Yi=new WeakMap;on=new WeakMap;yo=new WeakSet;Th=function(t){const e=this.media;for(const i of t){if(i.type!=="childList")continue;const a=i.removedNodes;for(const r of a){if(r.slot!="media"||i.target!=this)continue;let n=i.previousSibling&&i.previousSibling.previousElementSibling;if(!n||!e)this.mediaUnsetCallback(r);else{let s=n.slot!=="media";for(;(n=n.previousSibling)!==null;)n.slot=="media"&&(s=!1);s&&this.mediaUnsetCallback(r)}}if(e)for(const r of i.addedNodes)r===e&&this.handleMediaUpdated(e)}};Ga=new WeakMap;ln=new WeakMap;ko=new WeakSet;Ah=function(t){if(t.pointerType!=="mouse"&&t.timeStamp-ke(this,ss)<250)return;De(this,Ps,Fl).call(this),clearTimeout(ke(this,Er));const e=this.hasAttribute(C.AUTOHIDE_OVER_CONTROLS);([this,this.media].includes(t.target)||e)&&De(this,oa,fr).call(this)};So=new WeakSet;yh=function(t){if(t.pointerType==="touch"){const e=!this.hasAttribute(C.USER_INACTIVE);[this,this.media].includes(t.target)&&e?De(this,br,Ns).call(this):De(this,oa,fr).call(this)}else t.composedPath().some(e=>["media-play-button","media-fullscreen-button"].includes(e?.localName))&&De(this,oa,fr).call(this)};br=new WeakSet;Ns=function(){if(ke(this,Yi)<0||this.hasAttribute(C.USER_INACTIVE))return;this.setAttribute(C.USER_INACTIVE,"");const t=new c.CustomEvent(yt.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(t)};Ps=new WeakSet;Fl=function(){if(!this.hasAttribute(C.USER_INACTIVE))return;this.removeAttribute(C.USER_INACTIVE);const t=new c.CustomEvent(yt.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(t)};oa=new WeakSet;fr=function(){De(this,Ps,Fl).call(this),clearTimeout(ke(this,Er));const t=parseInt(this.autohide);t<0||qt(this,Er,setTimeout(()=>{De(this,br,Ns).call(this)},t*1e3))};Us.shadowRootOptions={mode:"open"};Us.getTemplateHTML=mE;c.customElements.get("media-container")||c.customElements.define("media-container",Us);var Sh=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},ue=(t,e,i)=>(Sh(t,e,"read from private field"),i?i.call(t):e.get(t)),La=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Nr=(t,e,i,a)=>(Sh(t,e,"write to private field"),e.set(t,i),i),Si,Ii,os,ai,vt,Lt;class Kl{constructor(e,i,{defaultValue:a}={defaultValue:void 0}){La(this,vt),La(this,Si,void 0),La(this,Ii,void 0),La(this,os,void 0),La(this,ai,new Set),Nr(this,Si,e),Nr(this,Ii,i),Nr(this,os,new Set(a))}[Symbol.iterator](){return ue(this,vt,Lt).values()}get length(){return ue(this,vt,Lt).size}get value(){var e;return(e=[...ue(this,vt,Lt)].join(" "))!=null?e:""}set value(e){var i;e!==this.value&&(Nr(this,ai,new Set),this.add(...(i=e?.split(" "))!=null?i:[]))}toString(){return this.value}item(e){return[...ue(this,vt,Lt)][e]}values(){return ue(this,vt,Lt).values()}forEach(e,i){ue(this,vt,Lt).forEach(e,i)}add(...e){var i,a;e.forEach(r=>ue(this,ai).add(r)),!(this.value===""&&!((i=ue(this,Si))!=null&&i.hasAttribute(`${ue(this,Ii)}`)))&&((a=ue(this,Si))==null||a.setAttribute(`${ue(this,Ii)}`,`${this.value}`))}remove(...e){var i;e.forEach(a=>ue(this,ai).delete(a)),(i=ue(this,Si))==null||i.setAttribute(`${ue(this,Ii)}`,`${this.value}`)}contains(e){return ue(this,vt,Lt).has(e)}toggle(e,i){return typeof i<"u"?i?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,i){return this.remove(e),this.add(i),e===i}}Si=new WeakMap;Ii=new WeakMap;os=new WeakMap;ai=new WeakMap;vt=new WeakSet;Lt=function(){return ue(this,ai).size?ue(this,ai):ue(this,os)};const gE=(t="")=>t.split(/\s+/),Ih=(t="")=>{const[e,i,a]=t.split(":"),r=a?decodeURIComponent(a):void 0;return{kind:e==="cc"?ut.CAPTIONS:ut.SUBTITLES,language:i,label:r}},$s=(t="",e={})=>gE(t).map(i=>{const a=Ih(i);return{...e,...a}}),Rh=t=>t?Array.isArray(t)?t.map(e=>typeof e=="string"?Ih(e):e):typeof t=="string"?$s(t):[t]:[],Io=({kind:t,label:e,language:i}={kind:"subtitles"})=>e?`${t==="captions"?"cc":"sb"}:${i}:${encodeURIComponent(e)}`:i,gr=(t=[])=>Array.prototype.map.call(t,Io).join(" "),_E=(t,e)=>i=>i[t]===e,Ch=t=>{const e=Object.entries(t).map(([i,a])=>_E(i,a));return i=>e.every(a=>a(i))},dr=(t,e=[],i=[])=>{const a=Rh(i).map(Ch),r=n=>a.some(s=>s(n));Array.from(e).filter(r).forEach(n=>{n.mode=t})},Hs=(t,e=()=>!0)=>{if(!t?.textTracks)return[];const i=typeof e=="function"?e:Ch(e);return Array.from(t.textTracks).filter(i)},Mh=t=>{var e;return!!((e=t.mediaSubtitlesShowing)!=null&&e.length)||t.hasAttribute(l.MEDIA_SUBTITLES_SHOWING)},TE=t=>{var e;const{media:i,fullscreenElement:a}=t;try{const r=a&&"requestFullscreen"in a?"requestFullscreen":a&&"webkitRequestFullScreen"in a?"webkitRequestFullScreen":void 0;if(r){const n=(e=a[r])==null?void 0:e.call(a);if(n instanceof Promise)return n.catch(()=>{})}else i?.webkitEnterFullscreen?i.webkitEnterFullscreen():i?.requestFullscreen&&i.requestFullscreen()}catch(r){console.error(r)}},Cu="exitFullscreen"in ne?"exitFullscreen":"webkitExitFullscreen"in ne?"webkitExitFullscreen":"webkitCancelFullScreen"in ne?"webkitCancelFullScreen":void 0,AE=t=>{var e;const{documentElement:i}=t;if(Cu){const a=(e=i?.[Cu])==null?void 0:e.call(i);if(a instanceof Promise)return a.catch(()=>{})}},qa="fullscreenElement"in ne?"fullscreenElement":"webkitFullscreenElement"in ne?"webkitFullscreenElement":void 0,yE=t=>{const{documentElement:e,media:i}=t,a=e?.[qa];return!a&&"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i&&i.webkitDisplayingFullscreen&&i.webkitPresentationMode===Gv.FULLSCREEN?i:a},kE=t=>{var e;const{media:i,documentElement:a,fullscreenElement:r=i}=t;if(!i||!a)return!1;const n=yE(t);if(!n)return!1;if(n===r||n===i)return!0;if(n.localName.includes("-")){let s=n.shadowRoot;if(!(qa in s))return kt(n,r);for(;s?.[qa];){if(s[qa]===r)return!0;s=(e=s[qa])==null?void 0:e.shadowRoot}}return!1},SE="fullscreenEnabled"in ne?"fullscreenEnabled":"webkitFullscreenEnabled"in ne?"webkitFullscreenEnabled":void 0,IE=t=>{const{documentElement:e,media:i}=t;return!!e?.[SE]||i&&"webkitSupportsFullscreen"in i};let Pr;const Vl=()=>{var t,e;return Pr||(Pr=(e=(t=ne)==null?void 0:t.createElement)==null?void 0:e.call(t,"video"),Pr)},RE=async(t=Vl())=>{if(!t)return!1;const e=t.volume;t.volume=e/2+.1;const i=new AbortController,a=await Promise.race([CE(t,i.signal),ME(t,e)]);return i.abort(),a},CE=(t,e)=>new Promise(i=>{t.addEventListener("volumechange",()=>i(!0),{signal:e})}),ME=async(t,e)=>{for(let i=0;i<10;i++){if(t.volume===e)return!1;await uh(10)}return t.volume!==e},LE=/.*Version\/.*Safari\/.*/.test(c.navigator.userAgent),Lh=(t=Vl())=>c.matchMedia("(display-mode: standalone)").matches&&LE?!1:typeof t?.requestPictureInPicture=="function",wh=(t=Vl())=>IE({documentElement:ne,media:t}),wE=wh(),DE=Lh(),OE=!!c.WebKitPlaybackTargetAvailabilityEvent,xE=!!c.chrome,ls=t=>Hs(t.media,e=>[ut.SUBTITLES,ut.CAPTIONS].includes(e.kind)).sort((e,i)=>e.kind>=i.kind?1:-1),Dh=t=>Hs(t.media,e=>e.mode===Xi.SHOWING&&[ut.SUBTITLES,ut.CAPTIONS].includes(e.kind)),Oh=(t,e)=>{const i=ls(t),a=Dh(t),r=!!a.length;if(i.length){if(e===!1||r&&e!==!0)dr(Xi.DISABLED,i,a);else if(e===!0||!r&&e!==!1){let n=i[0];const{options:s}=t;if(!s?.noSubtitlesLangPref){const h=globalThis.localStorage.getItem("media-chrome-pref-subtitles-lang"),p=h?[h,...globalThis.navigator.languages]:globalThis.navigator.languages,v=i.filter(E=>p.some(g=>E.language.toLowerCase().startsWith(g.split("-")[0]))).sort((E,g)=>{const f=p.findIndex(A=>E.language.toLowerCase().startsWith(A.split("-")[0])),_=p.findIndex(A=>g.language.toLowerCase().startsWith(A.split("-")[0]));return f-_});v[0]&&(n=v[0])}const{language:d,label:o,kind:u}=n;dr(Xi.DISABLED,i,a),dr(Xi.SHOWING,i,[{language:d,label:o,kind:u}])}}},Yl=(t,e)=>t===e?!0:t==null||e==null||typeof t!=typeof e?!1:typeof t=="number"&&Number.isNaN(t)&&Number.isNaN(e)?!0:typeof t!="object"?!1:Array.isArray(t)?NE(t,e):Object.entries(t).every(([i,a])=>i in e&&Yl(a,e[i])),NE=(t,e)=>{const i=Array.isArray(t),a=Array.isArray(e);return i!==a?!1:i||a?t.length!==e.length?!1:t.every((r,n)=>Yl(r,e[n])):!0},PE=Object.values(ft);let ds;const UE=RE().then(t=>(ds=t,ds)),$E=async(...t)=>{await Promise.all(t.filter(e=>e).map(async e=>{if(!("localName"in e&&e instanceof c.HTMLElement))return;const i=e.localName;if(!i.includes("-"))return;const a=c.customElements.get(i);a&&e instanceof a||(await c.customElements.whenDefined(i),c.customElements.upgrade(e))}))},HE=new c.DOMParser,BE=t=>t&&(HE.parseFromString(t,"text/html").body.textContent||t),Za={mediaError:{get(t,e){const{media:i}=t;if(e?.type!=="playing")return i?.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(t,e){var i;const{media:a}=t;if(e?.type!=="playing")return(i=a?.error)==null?void 0:i.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(t,e){var i,a;const{media:r}=t;if(e?.type!=="playing")return(a=(i=r?.error)==null?void 0:i.message)!=null?a:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(t){var e;const{media:i}=t;return(e=i?.videoWidth)!=null?e:0},mediaEvents:["resize"]},mediaHeight:{get(t){var e;const{media:i}=t;return(e=i?.videoHeight)!=null?e:0},mediaEvents:["resize"]},mediaPaused:{get(t){var e;const{media:i}=t;return(e=i?.paused)!=null?e:!0},set(t,e){var i;const{media:a}=e;a&&(t?a.pause():(i=a.play())==null||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(t,e){const{media:i}=t;return i?e?e.type==="playing":!i.paused:!1},mediaEvents:["playing","emptied"]},mediaEnded:{get(t){var e;const{media:i}=t;return(e=i?.ended)!=null?e:!1},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(t){var e;const{media:i}=t;return(e=i?.playbackRate)!=null?e:1},set(t,e){const{media:i}=e;i&&Number.isFinite(+t)&&(i.playbackRate=+t)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(t){var e;const{media:i}=t;return(e=i?.muted)!=null?e:!1},set(t,e){const{media:i,options:{noMutedPref:a}={}}=e;if(i){i.muted=t;try{const r=c.localStorage.getItem("media-chrome-pref-muted")!==null,n=i.hasAttribute("muted");if(a){r&&c.localStorage.removeItem("media-chrome-pref-muted");return}if(n&&!r)return;c.localStorage.setItem("media-chrome-pref-muted",t?"true":"false")}catch(r){console.debug("Error setting muted pref",r)}}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(t,e)=>{const{options:{noMutedPref:i}}=e,{media:a}=e;if(!(!a||a.muted||i))try{const r=c.localStorage.getItem("media-chrome-pref-muted")==="true";Za.mediaMuted.set(r,e),t(r)}catch(r){console.debug("Error getting muted pref",r)}}]},mediaLoop:{get(t){const{media:e}=t;return e?.loop},set(t,e){const{media:i}=e;i&&(i.loop=t)},mediaEvents:["medialooprequest"]},mediaVolume:{get(t){var e;const{media:i}=t;return(e=i?.volume)!=null?e:1},set(t,e){const{media:i,options:{noVolumePref:a}={}}=e;if(i){try{t==null?c.localStorage.removeItem("media-chrome-pref-volume"):!i.hasAttribute("muted")&&!a&&c.localStorage.setItem("media-chrome-pref-volume",t.toString())}catch(r){console.debug("Error setting volume pref",r)}Number.isFinite(+t)&&(i.volume=+t)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(t,e)=>{const{options:{noVolumePref:i}}=e;if(!i)try{const{media:a}=e;if(!a)return;const r=c.localStorage.getItem("media-chrome-pref-volume");if(r==null)return;Za.mediaVolume.set(+r,e),t(+r)}catch(a){console.debug("Error getting volume pref",a)}}]},mediaVolumeLevel:{get(t){const{media:e}=t;return typeof e?.volume>"u"?"high":e.muted||e.volume===0?"off":e.volume<.5?"low":e.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(t){var e;const{media:i}=t;return(e=i?.currentTime)!=null?e:0},set(t,e){const{media:i}=e;!i||!Ul(t)||(i.currentTime=t)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(t){const{media:e,options:{defaultDuration:i}={}}=t;return i&&(!e||!e.duration||Number.isNaN(e.duration)||!Number.isFinite(e.duration))?i:Number.isFinite(e?.duration)?e.duration:Number.NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(t){const{media:e}=t;return e?.readyState<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(t){var e;const{media:i}=t;if(!((e=i?.seekable)!=null&&e.length))return;const a=i.seekable.start(0),r=i.seekable.end(i.seekable.length-1);if(!(!a&&!r))return[Number(a.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(t){var e;const{media:i}=t,a=(e=i?.buffered)!=null?e:[];return Array.from(a).map((r,n)=>[Number(a.start(n).toFixed(3)),Number(a.end(n).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(t){const{media:e,options:{defaultStreamType:i}={}}=t,a=[ft.LIVE,ft.ON_DEMAND].includes(i)?i:void 0;if(!e)return a;const{streamType:r}=e;if(PE.includes(r))return r===ft.UNKNOWN?a:r;const n=e.duration;return n===1/0?ft.LIVE:Number.isFinite(n)?ft.ON_DEMAND:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(t){const{media:e}=t;if(!e)return Number.NaN;const{targetLiveWindow:i}=e,a=Za.mediaStreamType.get(t);return(i==null||Number.isNaN(i))&&a===ft.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(t){const{media:e,options:{liveEdgeOffset:i=10}={}}=t;if(!e)return!1;if(typeof e.liveEdgeStart=="number")return Number.isNaN(e.liveEdgeStart)?!1:e.currentTime>=e.liveEdgeStart;if(!(Za.mediaStreamType.get(t)===ft.LIVE))return!1;const r=e.seekable;if(!r)return!0;if(!r.length)return!1;const n=r.end(r.length-1)-i;return e.currentTime>=n},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get(t){return ls(t).map(({kind:e,label:i,language:a})=>({kind:e,label:i,language:a}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get(t){return Dh(t).map(({kind:e,label:i,language:a})=>({kind:e,label:i,language:a}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(t,e)=>{var i,a;const{media:r,options:n}=e;if(!r)return;const s=d=>{var o;!n.defaultSubtitles||d&&![ut.CAPTIONS,ut.SUBTITLES].includes((o=d?.track)==null?void 0:o.kind)||Oh(e,!0)};return r.addEventListener("loadstart",s),(i=r.textTracks)==null||i.addEventListener("addtrack",s),(a=r.textTracks)==null||a.addEventListener("removetrack",s),()=>{var d,o;r.removeEventListener("loadstart",s),(d=r.textTracks)==null||d.removeEventListener("addtrack",s),(o=r.textTracks)==null||o.removeEventListener("removetrack",s)}}]},mediaChaptersCues:{get(t){var e;const{media:i}=t;if(!i)return[];const[a]=Hs(i,{kind:ut.CHAPTERS});return Array.from((e=a?.cues)!=null?e:[]).map(({text:r,startTime:n,endTime:s})=>({text:BE(r),startTime:n,endTime:s}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(t,e)=>{var i;const{media:a}=e;if(!a)return;const r=a.querySelector('track[kind="chapters"][default][src]'),n=(i=a.shadowRoot)==null?void 0:i.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return r?.addEventListener("load",t),n?.addEventListener("load",t),()=>{r?.removeEventListener("load",t),n?.removeEventListener("load",t)}}]},mediaIsPip:{get(t){var e,i;const{media:a,documentElement:r}=t;if(!a||!r||!r.pictureInPictureElement)return!1;if(r.pictureInPictureElement===a)return!0;if(r.pictureInPictureElement instanceof HTMLMediaElement)return(e=a.localName)!=null&&e.includes("-")?kt(a,r.pictureInPictureElement):!1;if(r.pictureInPictureElement.localName.includes("-")){let n=r.pictureInPictureElement.shadowRoot;for(;n?.pictureInPictureElement;){if(n.pictureInPictureElement===a)return!0;n=(i=n.pictureInPictureElement)==null?void 0:i.shadowRoot}}return!1},set(t,e){const{media:i}=e;if(i)if(t){if(!ne.pictureInPictureEnabled){console.warn("MediaChrome: Picture-in-picture is not enabled");return}if(!i.requestPictureInPicture){console.warn("MediaChrome: The current media does not support picture-in-picture");return}const a=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(r=>{if(r.code===11){if(!i.src){console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");return}if(i.readyState===0&&i.preload==="none"){const n=()=>{i.removeEventListener("loadedmetadata",s),i.preload="none"},s=()=>{i.requestPictureInPicture().catch(a),n()};i.addEventListener("loadedmetadata",s),i.preload="metadata",setTimeout(()=>{i.readyState===0&&a(),n()},1e3)}else throw r}else throw r})}else ne.pictureInPictureElement&&ne.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(t){var e;const{media:i}=t;return[...(e=i?.videoRenditions)!=null?e:[]].map(a=>({...a}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(t){var e,i,a;const{media:r}=t;return(a=(i=r?.videoRenditions)==null?void 0:i[(e=r.videoRenditions)==null?void 0:e.selectedIndex])==null?void 0:a.id},set(t,e){const{media:i}=e;if(!i?.videoRenditions){console.warn("MediaController: Rendition selection not supported by this media.");return}const a=t,r=Array.prototype.findIndex.call(i.videoRenditions,n=>n.id==a);i.videoRenditions.selectedIndex!=r&&(i.videoRenditions.selectedIndex=r)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(t){var e;const{media:i}=t;return[...(e=i?.audioTracks)!=null?e:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(t){var e,i;const{media:a}=t;return(i=[...(e=a?.audioTracks)!=null?e:[]].find(r=>r.enabled))==null?void 0:i.id},set(t,e){const{media:i}=e;if(!i?.audioTracks){console.warn("MediaChrome: Audio track selection not supported by this media.");return}const a=t;for(const r of i.audioTracks)r.enabled=a==r.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get(t){return kE(t)},set(t,e,i){var a;t?(TE(e),i.detail&&((a=e.media)==null||a.focus())):AE(e)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(t){var e;const{media:i}=t;return!i?.remote||((e=i.remote)==null?void 0:e.state)==="disconnected"?!1:!!i.remote.state},set(t,e){var i,a;const{media:r}=e;if(r&&!(t&&((i=r.remote)==null?void 0:i.state)!=="disconnected")&&!(!t&&((a=r.remote)==null?void 0:a.state)!=="connected")){if(typeof r.remote.prompt!="function"){console.warn("MediaChrome: Casting is not supported in this environment");return}r.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get(){return!1},set(t,e){const{media:i}=e;if(i){if(!(i.webkitShowPlaybackTargetPicker&&c.WebKitPlaybackTargetAvailabilityEvent)){console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");return}i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(t){const{media:e}=t;if(!wE||!wh(e))return _e.UNSUPPORTED}},mediaPipUnavailable:{get(t){const{media:e}=t;if(!DE||!Lh(e))return _e.UNSUPPORTED;if(e?.disablePictureInPicture)return _e.UNAVAILABLE}},mediaVolumeUnavailable:{get(t){const{media:e}=t;if(ds===!1||e?.volume==null)return _e.UNSUPPORTED},stateOwnersUpdateHandlers:[t=>{ds==null&&UE.then(e=>t(e?void 0:_e.UNSUPPORTED))}]},mediaCastUnavailable:{get(t,{availability:e="not-available"}={}){var i;const{media:a}=t;if(!xE||!((i=a?.remote)!=null&&i.state))return _e.UNSUPPORTED;if(!(e==null||e==="available"))return _e.UNAVAILABLE},stateOwnersUpdateHandlers:[(t,e)=>{var i;const{media:a}=e;return a?(a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||(i=a?.remote)==null||i.watchAvailability(n=>{t({availability:n?"available":"not-available"})}).catch(n=>{n.name==="NotSupportedError"?t({availability:null}):t({availability:"not-available"})}),()=>{var n;(n=a?.remote)==null||n.cancelWatchAvailability().catch(()=>{})}):void 0}]},mediaAirplayUnavailable:{get(t,e){if(!OE)return _e.UNSUPPORTED;if(e?.availability==="not-available")return _e.UNAVAILABLE},mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(t,e)=>{var i;const{media:a}=e;return a?(a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||(i=a?.remote)==null||i.watchAvailability(n=>{t({availability:n?"available":"not-available"})}).catch(n=>{n.name==="NotSupportedError"?t({availability:null}):t({availability:"not-available"})}),()=>{var n;(n=a?.remote)==null||n.cancelWatchAvailability().catch(()=>{})}):void 0}]},mediaRenditionUnavailable:{get(t){var e;const{media:i}=t;if(!i?.videoRenditions)return _e.UNSUPPORTED;if(!((e=i.videoRenditions)!=null&&e.length))return _e.UNAVAILABLE},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(t){var e,i;const{media:a}=t;if(!a?.audioTracks)return _e.UNSUPPORTED;if(((i=(e=a.audioTracks)==null?void 0:e.length)!=null?i:0)<=1)return _e.UNAVAILABLE},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaLang:{get(t){const{options:{mediaLang:e}={}}=t;return e??"en"}}},WE={[y.MEDIA_PREVIEW_REQUEST](t,e,{detail:i}){var a,r,n;const{media:s}=e,d=i??void 0;let o,u;if(s&&d!=null){const[E]=Hs(s,{kind:ut.METADATA,label:"thumbnails"}),g=Array.prototype.find.call((a=E?.cues)!=null?a:[],(f,_,A)=>_===0?f.endTime>d:_===A.length-1?f.startTime<=d:f.startTime<=d&&f.endTime>d);if(g){const f=/'^(?:[a-z]+:)?\/\//i.test(g.text)||(r=s?.querySelector('track[label="thumbnails"]'))==null?void 0:r.src,_=new URL(g.text,f);u=new URLSearchParams(_.hash).get("#xywh").split(",").map(w=>+w),o=_.href}}const h=t.mediaDuration.get(e);let v=(n=t.mediaChaptersCues.get(e).find((E,g,f)=>g===f.length-1&&h===E.endTime?E.startTime<=d&&E.endTime>=d:E.startTime<=d&&E.endTime>d))==null?void 0:n.text;return i!=null&&v==null&&(v=""),{mediaPreviewTime:d,mediaPreviewImage:o,mediaPreviewCoords:u,mediaPreviewChapter:v}},[y.MEDIA_PAUSE_REQUEST](t,e){t["mediaPaused"].set(!0,e)},[y.MEDIA_PLAY_REQUEST](t,e){var i,a,r,n;const s="mediaPaused",o=t.mediaStreamType.get(e)===ft.LIVE,u=!((i=e.options)!=null&&i.noAutoSeekToLive),h=t.mediaTargetLiveWindow.get(e)>0;if(o&&u&&!h){const p=(a=t.mediaSeekable.get(e))==null?void 0:a[1];if(p){const v=(n=(r=e.options)==null?void 0:r.seekToLiveOffset)!=null?n:0,E=p-v;t.mediaCurrentTime.set(E,e)}}t[s].set(!1,e)},[y.MEDIA_PLAYBACK_RATE_REQUEST](t,e,{detail:i}){const a="mediaPlaybackRate",r=i;t[a].set(r,e)},[y.MEDIA_MUTE_REQUEST](t,e){t["mediaMuted"].set(!0,e)},[y.MEDIA_UNMUTE_REQUEST](t,e){const i="mediaMuted";t.mediaVolume.get(e)||t.mediaVolume.set(.25,e),t[i].set(!1,e)},[y.MEDIA_LOOP_REQUEST](t,e,{detail:i}){const a="mediaLoop",r=!!i;return t[a].set(r,e),{mediaLoop:r}},[y.MEDIA_VOLUME_REQUEST](t,e,{detail:i}){const a="mediaVolume",r=i;r&&t.mediaMuted.get(e)&&t.mediaMuted.set(!1,e),t[a].set(r,e)},[y.MEDIA_SEEK_REQUEST](t,e,{detail:i}){const a="mediaCurrentTime",r=i;t[a].set(r,e)},[y.MEDIA_SEEK_TO_LIVE_REQUEST](t,e){var i,a,r;const n="mediaCurrentTime",s=(i=t.mediaSeekable.get(e))==null?void 0:i[1];if(Number.isNaN(Number(s)))return;const d=(r=(a=e.options)==null?void 0:a.seekToLiveOffset)!=null?r:0,o=s-d;t[n].set(o,e)},[y.MEDIA_SHOW_SUBTITLES_REQUEST](t,e,{detail:i}){var a;const{options:r}=e,n=ls(e),s=Rh(i),d=(a=s[0])==null?void 0:a.language;d&&!r.noSubtitlesLangPref&&c.localStorage.setItem("media-chrome-pref-subtitles-lang",d),dr(Xi.SHOWING,n,s)},[y.MEDIA_DISABLE_SUBTITLES_REQUEST](t,e,{detail:i}){const a=ls(e),r=i??[];dr(Xi.DISABLED,a,r)},[y.MEDIA_TOGGLE_SUBTITLES_REQUEST](t,e,{detail:i}){Oh(e,i)},[y.MEDIA_RENDITION_REQUEST](t,e,{detail:i}){const a="mediaRenditionSelected",r=i;t[a].set(r,e)},[y.MEDIA_AUDIO_TRACK_REQUEST](t,e,{detail:i}){const a="mediaAudioTrackEnabled",r=i;t[a].set(r,e)},[y.MEDIA_ENTER_PIP_REQUEST](t,e){const i="mediaIsPip";t.mediaIsFullscreen.get(e)&&t.mediaIsFullscreen.set(!1,e),t[i].set(!0,e)},[y.MEDIA_EXIT_PIP_REQUEST](t,e){t["mediaIsPip"].set(!1,e)},[y.MEDIA_ENTER_FULLSCREEN_REQUEST](t,e,i){const a="mediaIsFullscreen";t.mediaIsPip.get(e)&&t.mediaIsPip.set(!1,e),t[a].set(!0,e,i)},[y.MEDIA_EXIT_FULLSCREEN_REQUEST](t,e){t["mediaIsFullscreen"].set(!1,e)},[y.MEDIA_ENTER_CAST_REQUEST](t,e){const i="mediaIsCasting";t.mediaIsFullscreen.get(e)&&t.mediaIsFullscreen.set(!1,e),t[i].set(!0,e)},[y.MEDIA_EXIT_CAST_REQUEST](t,e){t["mediaIsCasting"].set(!1,e)},[y.MEDIA_AIRPLAY_REQUEST](t,e){t["mediaIsAirplaying"].set(!0,e)}},FE=({media:t,fullscreenElement:e,documentElement:i,stateMediator:a=Za,requestMap:r=WE,options:n={},monitorStateOwnersOnlyWithSubscriptions:s=!0})=>{const d=[],o={options:{...n}};let u=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0});const h=f=>{f!=null&&(Yl(f,u)||(u=Object.freeze({...u,...f}),d.forEach(_=>_(u))))},p=()=>{const f=Object.entries(a).reduce((_,[A,{get:w}])=>(_[A]=w(o),_),{});h(f)},v={};let E;const g=async(f,_)=>{var A,w,S,P,xe,St,Ea,ba,fa,ga,_a,Ta,Aa,ya,ka,Sa;const Lr=!!E;if(E={...o,...E??{},...f},Lr)return;await $E(...Object.values(f));const ht=d.length>0&&_===0&&s,Ia=o.media!==E.media,Ra=((A=o.media)==null?void 0:A.textTracks)!==((w=E.media)==null?void 0:w.textTracks),Ca=((S=o.media)==null?void 0:S.videoRenditions)!==((P=E.media)==null?void 0:P.videoRenditions),Vd=((xe=o.media)==null?void 0:xe.audioTracks)!==((St=E.media)==null?void 0:St.audioTracks),Yd=((Ea=o.media)==null?void 0:Ea.remote)!==((ba=E.media)==null?void 0:ba.remote),Gd=o.documentElement!==E.documentElement,qd=!!o.media&&(Ia||ht),Zd=!!((fa=o.media)!=null&&fa.textTracks)&&(Ra||ht),Qd=!!((ga=o.media)!=null&&ga.videoRenditions)&&(Ca||ht),zd=!!((_a=o.media)!=null&&_a.audioTracks)&&(Vd||ht),Xd=!!((Ta=o.media)!=null&&Ta.remote)&&(Yd||ht),Jd=!!o.documentElement&&(Gd||ht),Qs=qd||Zd||Qd||zd||Xd||Jd,vi=d.length===0&&_===1&&s,jd=!!E.media&&(Ia||vi),eu=!!((Aa=E.media)!=null&&Aa.textTracks)&&(Ra||vi),tu=!!((ya=E.media)!=null&&ya.videoRenditions)&&(Ca||vi),iu=!!((ka=E.media)!=null&&ka.audioTracks)&&(Vd||vi),au=!!((Sa=E.media)!=null&&Sa.remote)&&(Yd||vi),ru=!!E.documentElement&&(Gd||vi),nu=jd||eu||tu||iu||au||ru;if(!(Qs||nu)){Object.entries(E).forEach(([F,Ma])=>{o[F]=Ma}),p(),E=void 0;return}Object.entries(a).forEach(([F,{get:Ma,mediaEvents:mp=[],textTracksEvents:pp=[],videoRenditionsEvents:vp=[],audioTracksEvents:Ep=[],remoteEvents:bp=[],rootEvents:fp=[],stateOwnersUpdateHandlers:gp=[]}])=>{v[F]||(v[F]={});const ge=Q=>{const te=Ma(o,Q);h({[F]:te})};let le;le=v[F].mediaEvents,mp.forEach(Q=>{le&&qd&&(o.media.removeEventListener(Q,le),v[F].mediaEvents=void 0),jd&&(E.media.addEventListener(Q,ge),v[F].mediaEvents=ge)}),le=v[F].textTracksEvents,pp.forEach(Q=>{var te,Ne;le&&Zd&&((te=o.media.textTracks)==null||te.removeEventListener(Q,le),v[F].textTracksEvents=void 0),eu&&((Ne=E.media.textTracks)==null||Ne.addEventListener(Q,ge),v[F].textTracksEvents=ge)}),le=v[F].videoRenditionsEvents,vp.forEach(Q=>{var te,Ne;le&&Qd&&((te=o.media.videoRenditions)==null||te.removeEventListener(Q,le),v[F].videoRenditionsEvents=void 0),tu&&((Ne=E.media.videoRenditions)==null||Ne.addEventListener(Q,ge),v[F].videoRenditionsEvents=ge)}),le=v[F].audioTracksEvents,Ep.forEach(Q=>{var te,Ne;le&&zd&&((te=o.media.audioTracks)==null||te.removeEventListener(Q,le),v[F].audioTracksEvents=void 0),iu&&((Ne=E.media.audioTracks)==null||Ne.addEventListener(Q,ge),v[F].audioTracksEvents=ge)}),le=v[F].remoteEvents,bp.forEach(Q=>{var te,Ne;le&&Xd&&((te=o.media.remote)==null||te.removeEventListener(Q,le),v[F].remoteEvents=void 0),au&&((Ne=E.media.remote)==null||Ne.addEventListener(Q,ge),v[F].remoteEvents=ge)}),le=v[F].rootEvents,fp.forEach(Q=>{le&&Jd&&(o.documentElement.removeEventListener(Q,le),v[F].rootEvents=void 0),ru&&(E.documentElement.addEventListener(Q,ge),v[F].rootEvents=ge)});const wr=v[F].stateOwnersUpdateHandlers;if(wr&&Qs&&(Array.isArray(wr)?wr:[wr]).forEach(te=>{typeof te=="function"&&te()}),nu){const Q=gp.map(te=>te(ge,E)).filter(te=>typeof te=="function");v[F].stateOwnersUpdateHandlers=Q.length===1?Q[0]:Q}else Qs&&(v[F].stateOwnersUpdateHandlers=void 0)}),Object.entries(E).forEach(([F,Ma])=>{o[F]=Ma}),p(),E=void 0};return g({media:t,fullscreenElement:e,documentElement:i,options:n}),{dispatch(f){const{type:_,detail:A}=f;if(r[_]&&u.mediaErrorCode==null){h(r[_](a,o,f));return}_==="mediaelementchangerequest"?g({media:A}):_==="fullscreenelementchangerequest"?g({fullscreenElement:A}):_==="documentelementchangerequest"?g({documentElement:A}):_==="optionschangerequest"&&(Object.entries(A??{}).forEach(([w,S])=>{o.options[w]=S}),p())},getState(){return u},subscribe(f){return g({},d.length+1),d.push(f),f(u),()=>{const _=d.indexOf(f);_>=0&&(g({},d.length-1),d.splice(_,1))}}}};var Gl=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},L=(t,e,i)=>(Gl(t,e,"read from private field"),i?i.call(t):e.get(t)),Ue=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Et=(t,e,i,a)=>(Gl(t,e,"write to private field"),e.set(t,i),i),rt=(t,e,i)=>(Gl(t,e,"access private method"),i),$t,Qa,H,ri,za,Ze,dn,un,Ro,li,Ji,cn,Co,Mo,xh;const Nh=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Enter"," ","f","m","k","c","l","j",">","<","p"],Mu=10,Lu=.025,wu=.25,KE=.25,VE=2,T={DEFAULT_SUBTITLES:"defaultsubtitles",DEFAULT_STREAM_TYPE:"defaultstreamtype",DEFAULT_DURATION:"defaultduration",FULLSCREEN_ELEMENT:"fullscreenelement",HOTKEYS:"hotkeys",KEYBOARD_BACKWARD_SEEK_OFFSET:"keyboardbackwardseekoffset",KEYBOARD_FORWARD_SEEK_OFFSET:"keyboardforwardseekoffset",KEYBOARD_DOWN_VOLUME_STEP:"keyboarddownvolumestep",KEYBOARD_UP_VOLUME_STEP:"keyboardupvolumestep",KEYS_USED:"keysused",LANG:"lang",LOOP:"loop",LIVE_EDGE_OFFSET:"liveedgeoffset",NO_AUTO_SEEK_TO_LIVE:"noautoseektolive",NO_DEFAULT_STORE:"nodefaultstore",NO_HOTKEYS:"nohotkeys",NO_MUTED_PREF:"nomutedpref",NO_SUBTITLES_LANG_PREF:"nosubtitleslangpref",NO_VOLUME_PREF:"novolumepref",SEEK_TO_LIVE_OFFSET:"seektoliveoffset"};class Ph extends Us{constructor(){super(),Ue(this,un),Ue(this,li),Ue(this,cn),Ue(this,Mo),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,Ue(this,$t,new Kl(this,T.HOTKEYS)),Ue(this,Qa,void 0),Ue(this,H,void 0),Ue(this,ri,null),Ue(this,za,void 0),Ue(this,Ze,void 0),Ue(this,dn,i=>{var a;(a=L(this,H))==null||a.dispatch(i)}),this.associateElement(this);let e={};Et(this,za,i=>{Object.entries(i).forEach(([a,r])=>{if(a in e&&e[a]===r)return;this.propagateMediaState(a,r);const n=a.toLowerCase(),s=new c.CustomEvent(Yv[n],{composed:!0,detail:r});this.dispatchEvent(s)}),e=i}),this.hasAttribute(T.NO_HOTKEYS)?this.disableHotkeys():this.enableHotkeys()}static get observedAttributes(){return super.observedAttributes.concat(T.NO_HOTKEYS,T.HOTKEYS,T.DEFAULT_STREAM_TYPE,T.DEFAULT_SUBTITLES,T.DEFAULT_DURATION,T.NO_MUTED_PREF,T.NO_VOLUME_PREF,T.LANG,T.LOOP)}get mediaStore(){return L(this,H)}set mediaStore(e){var i,a;if(L(this,H)&&((i=L(this,Ze))==null||i.call(this),Et(this,Ze,void 0)),Et(this,H,e),!L(this,H)&&!this.hasAttribute(T.NO_DEFAULT_STORE)){rt(this,un,Ro).call(this);return}Et(this,Ze,(a=L(this,H))==null?void 0:a.subscribe(L(this,za)))}get fullscreenElement(){var e;return(e=L(this,Qa))!=null?e:this}set fullscreenElement(e){var i;this.hasAttribute(T.FULLSCREEN_ELEMENT)&&this.removeAttribute(T.FULLSCREEN_ELEMENT),Et(this,Qa,e),(i=L(this,H))==null||i.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return x(this,T.DEFAULT_SUBTITLES)}set defaultSubtitles(e){N(this,T.DEFAULT_SUBTITLES,e)}get defaultStreamType(){return q(this,T.DEFAULT_STREAM_TYPE)}set defaultStreamType(e){Z(this,T.DEFAULT_STREAM_TYPE,e)}get defaultDuration(){return G(this,T.DEFAULT_DURATION)}set defaultDuration(e){j(this,T.DEFAULT_DURATION,e)}get noHotkeys(){return x(this,T.NO_HOTKEYS)}set noHotkeys(e){N(this,T.NO_HOTKEYS,e)}get keysUsed(){return q(this,T.KEYS_USED)}set keysUsed(e){Z(this,T.KEYS_USED,e)}get liveEdgeOffset(){return G(this,T.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){j(this,T.LIVE_EDGE_OFFSET,e)}get noAutoSeekToLive(){return x(this,T.NO_AUTO_SEEK_TO_LIVE)}set noAutoSeekToLive(e){N(this,T.NO_AUTO_SEEK_TO_LIVE,e)}get noVolumePref(){return x(this,T.NO_VOLUME_PREF)}set noVolumePref(e){N(this,T.NO_VOLUME_PREF,e)}get noMutedPref(){return x(this,T.NO_MUTED_PREF)}set noMutedPref(e){N(this,T.NO_MUTED_PREF,e)}get noSubtitlesLangPref(){return x(this,T.NO_SUBTITLES_LANG_PREF)}set noSubtitlesLangPref(e){N(this,T.NO_SUBTITLES_LANG_PREF,e)}get noDefaultStore(){return x(this,T.NO_DEFAULT_STORE)}set noDefaultStore(e){N(this,T.NO_DEFAULT_STORE,e)}attributeChangedCallback(e,i,a){var r,n,s,d,o,u,h,p,v,E,g,f;if(super.attributeChangedCallback(e,i,a),e===T.NO_HOTKEYS)a!==i&&a===""?(this.hasAttribute(T.HOTKEYS)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):a!==i&&a===null&&this.enableHotkeys();else if(e===T.HOTKEYS)L(this,$t).value=a;else if(e===T.DEFAULT_SUBTITLES&&a!==i)(r=L(this,H))==null||r.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(T.DEFAULT_SUBTITLES)}});else if(e===T.DEFAULT_STREAM_TYPE)(s=L(this,H))==null||s.dispatch({type:"optionschangerequest",detail:{defaultStreamType:(n=this.getAttribute(T.DEFAULT_STREAM_TYPE))!=null?n:void 0}});else if(e===T.LIVE_EDGE_OFFSET)(d=L(this,H))==null||d.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(T.LIVE_EDGE_OFFSET)?+this.getAttribute(T.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(T.SEEK_TO_LIVE_OFFSET)?void 0:+this.getAttribute(T.LIVE_EDGE_OFFSET)}});else if(e===T.SEEK_TO_LIVE_OFFSET)(o=L(this,H))==null||o.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(T.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(T.SEEK_TO_LIVE_OFFSET):void 0}});else if(e===T.NO_AUTO_SEEK_TO_LIVE)(u=L(this,H))==null||u.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(T.NO_AUTO_SEEK_TO_LIVE)}});else if(e===T.FULLSCREEN_ELEMENT){const _=a?(h=this.getRootNode())==null?void 0:h.getElementById(a):void 0;Et(this,Qa,_),(p=L(this,H))==null||p.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}else e===T.LANG&&a!==i?(rE(a),(v=L(this,H))==null||v.dispatch({type:"optionschangerequest",detail:{mediaLang:a}})):e===T.LOOP&&a!==i?(E=L(this,H))==null||E.dispatch({type:y.MEDIA_LOOP_REQUEST,detail:a!=null}):e===T.NO_VOLUME_PREF&&a!==i?(g=L(this,H))==null||g.dispatch({type:"optionschangerequest",detail:{noVolumePref:this.hasAttribute(T.NO_VOLUME_PREF)}}):e===T.NO_MUTED_PREF&&a!==i&&((f=L(this,H))==null||f.dispatch({type:"optionschangerequest",detail:{noMutedPref:this.hasAttribute(T.NO_MUTED_PREF)}}))}connectedCallback(){var e,i;!L(this,H)&&!this.hasAttribute(T.NO_DEFAULT_STORE)&&rt(this,un,Ro).call(this),(e=L(this,H))==null||e.dispatch({type:"documentelementchangerequest",detail:ne}),super.connectedCallback(),L(this,H)&&!L(this,Ze)&&Et(this,Ze,(i=L(this,H))==null?void 0:i.subscribe(L(this,za))),this.hasAttribute(T.NO_HOTKEYS)?this.disableHotkeys():this.enableHotkeys()}disconnectedCallback(){var e,i,a,r;(e=super.disconnectedCallback)==null||e.call(this),L(this,H)&&((i=L(this,H))==null||i.dispatch({type:"documentelementchangerequest",detail:void 0}),(a=L(this,H))==null||a.dispatch({type:y.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})),L(this,Ze)&&((r=L(this,Ze))==null||r.call(this),Et(this,Ze,void 0))}mediaSetCallback(e){var i;super.mediaSetCallback(e),(i=L(this,H))==null||i.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var i;super.mediaUnsetCallback(e),(i=L(this,H))==null||i.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,i){xu(this.mediaStateReceivers,e,i)}associateElement(e){if(!e)return;const{associatedElementSubscriptions:i}=this;if(i.has(e))return;const a=this.registerMediaStateReceiver.bind(this),r=this.unregisterMediaStateReceiver.bind(this),n=zE(e,a,r);Object.values(y).forEach(s=>{e.addEventListener(s,L(this,dn))}),i.set(e,n)}unassociateElement(e){if(!e)return;const{associatedElementSubscriptions:i}=this;if(!i.has(e))return;i.get(e)(),i.delete(e),Object.values(y).forEach(r=>{e.removeEventListener(r,L(this,dn))})}registerMediaStateReceiver(e){if(!e)return;const i=this.mediaStateReceivers;i.indexOf(e)>-1||(i.push(e),L(this,H)&&Object.entries(L(this,H).getState()).forEach(([r,n])=>{xu([e],r,n)}))}unregisterMediaStateReceiver(e){const i=this.mediaStateReceivers,a=i.indexOf(e);a<0||i.splice(a,1)}enableHotkeys(){this.addEventListener("keydown",rt(this,cn,Co))}disableHotkeys(){this.removeEventListener("keydown",rt(this,cn,Co)),this.removeEventListener("keyup",rt(this,li,Ji))}get hotkeys(){return q(this,T.HOTKEYS)}set hotkeys(e){Z(this,T.HOTKEYS,e)}keyboardShortcutHandler(e){var i,a,r,n,s,d,o,u,h;const p=e.target;if(((r=(a=(i=p.getAttribute(T.KEYS_USED))==null?void 0:i.split(" "))!=null?a:p?.keysUsed)!=null?r:[]).map(A=>A==="Space"?" ":A).filter(Boolean).includes(e.key))return;let E,g,f;if(!(L(this,$t).contains(`no${e.key.toLowerCase()}`)||e.key===" "&&L(this,$t).contains("nospace")||e.shiftKey&&(e.key==="/"||e.key==="?")&&L(this,$t).contains("noshift+/")))switch(e.key){case" ":case"k":E=L(this,H).getState().mediaPaused?y.MEDIA_PLAY_REQUEST:y.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new c.CustomEvent(E,{composed:!0,bubbles:!0}));break;case"m":E=this.mediaStore.getState().mediaVolumeLevel==="off"?y.MEDIA_UNMUTE_REQUEST:y.MEDIA_MUTE_REQUEST,this.dispatchEvent(new c.CustomEvent(E,{composed:!0,bubbles:!0}));break;case"f":E=this.mediaStore.getState().mediaIsFullscreen?y.MEDIA_EXIT_FULLSCREEN_REQUEST:y.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new c.CustomEvent(E,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new c.CustomEvent(y.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":case"j":{const A=this.hasAttribute(T.KEYBOARD_BACKWARD_SEEK_OFFSET)?+this.getAttribute(T.KEYBOARD_BACKWARD_SEEK_OFFSET):Mu;g=Math.max(((n=this.mediaStore.getState().mediaCurrentTime)!=null?n:0)-A,0),f=new c.CustomEvent(y.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:g}),this.dispatchEvent(f);break}case"ArrowRight":case"l":{const A=this.hasAttribute(T.KEYBOARD_FORWARD_SEEK_OFFSET)?+this.getAttribute(T.KEYBOARD_FORWARD_SEEK_OFFSET):Mu;g=Math.max(((s=this.mediaStore.getState().mediaCurrentTime)!=null?s:0)+A,0),f=new c.CustomEvent(y.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:g}),this.dispatchEvent(f);break}case"ArrowUp":{const A=this.hasAttribute(T.KEYBOARD_UP_VOLUME_STEP)?+this.getAttribute(T.KEYBOARD_UP_VOLUME_STEP):Lu;g=Math.min(((d=this.mediaStore.getState().mediaVolume)!=null?d:1)+A,1),f=new c.CustomEvent(y.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:g}),this.dispatchEvent(f);break}case"ArrowDown":{const A=this.hasAttribute(T.KEYBOARD_DOWN_VOLUME_STEP)?+this.getAttribute(T.KEYBOARD_DOWN_VOLUME_STEP):Lu;g=Math.max(((o=this.mediaStore.getState().mediaVolume)!=null?o:1)-A,0),f=new c.CustomEvent(y.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:g}),this.dispatchEvent(f);break}case"<":{const A=(u=this.mediaStore.getState().mediaPlaybackRate)!=null?u:1;g=Math.max(A-wu,KE).toFixed(2),f=new c.CustomEvent(y.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:g}),this.dispatchEvent(f);break}case">":{const A=(h=this.mediaStore.getState().mediaPlaybackRate)!=null?h:1;g=Math.min(A+wu,VE).toFixed(2),f=new c.CustomEvent(y.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:g}),this.dispatchEvent(f);break}case"/":case"?":{e.shiftKey&&rt(this,Mo,xh).call(this);break}case"p":{E=this.mediaStore.getState().mediaIsPip?y.MEDIA_EXIT_PIP_REQUEST:y.MEDIA_ENTER_PIP_REQUEST,f=new c.CustomEvent(E,{composed:!0,bubbles:!0}),this.dispatchEvent(f);break}}}}$t=new WeakMap;Qa=new WeakMap;H=new WeakMap;ri=new WeakMap;za=new WeakMap;Ze=new WeakMap;dn=new WeakMap;un=new WeakSet;Ro=function(){var t;this.mediaStore=FE({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(T.DEFAULT_SUBTITLES),defaultDuration:this.hasAttribute(T.DEFAULT_DURATION)?+this.getAttribute(T.DEFAULT_DURATION):void 0,defaultStreamType:(t=this.getAttribute(T.DEFAULT_STREAM_TYPE))!=null?t:void 0,liveEdgeOffset:this.hasAttribute(T.LIVE_EDGE_OFFSET)?+this.getAttribute(T.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(T.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(T.SEEK_TO_LIVE_OFFSET):this.hasAttribute(T.LIVE_EDGE_OFFSET)?+this.getAttribute(T.LIVE_EDGE_OFFSET):void 0,noAutoSeekToLive:this.hasAttribute(T.NO_AUTO_SEEK_TO_LIVE),noVolumePref:this.hasAttribute(T.NO_VOLUME_PREF),noMutedPref:this.hasAttribute(T.NO_MUTED_PREF),noSubtitlesLangPref:this.hasAttribute(T.NO_SUBTITLES_LANG_PREF)}})};li=new WeakSet;Ji=function(t){const{key:e,shiftKey:i}=t;if(!(i&&(e==="/"||e==="?")||Nh.includes(e))){this.removeEventListener("keyup",rt(this,li,Ji));return}this.keyboardShortcutHandler(t)};cn=new WeakSet;Co=function(t){var e;const{metaKey:i,altKey:a,key:r,shiftKey:n}=t,s=n&&(r==="/"||r==="?");if(s&&((e=L(this,ri))!=null&&e.open)){this.removeEventListener("keyup",rt(this,li,Ji));return}if(i||a||!s&&!Nh.includes(r)){this.removeEventListener("keyup",rt(this,li,Ji));return}const d=t.target,o=d instanceof HTMLElement&&(d.tagName.toLowerCase()==="media-volume-range"||d.tagName.toLowerCase()==="media-time-range");[" ","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(r)&&!(L(this,$t).contains(`no${r.toLowerCase()}`)||r===" "&&L(this,$t).contains("nospace"))&&!o&&t.preventDefault(),this.addEventListener("keyup",rt(this,li,Ji),{once:!0})};Mo=new WeakSet;xh=function(){L(this,ri)||(Et(this,ri,ne.createElement("media-keyboard-shortcuts-dialog")),this.appendChild(L(this,ri))),L(this,ri).open=!0};const YE=Object.values(l),GE=Object.values(oh),Uh=t=>{var e,i,a,r;let{observedAttributes:n}=t.constructor;!n&&((e=t.nodeName)!=null&&e.includes("-"))&&(c.customElements.upgrade(t),{observedAttributes:n}=t.constructor);const s=(r=(a=(i=t?.getAttribute)==null?void 0:i.call(t,$.MEDIA_CHROME_ATTRIBUTES))==null?void 0:a.split)==null?void 0:r.call(a,/\s+/);return Array.isArray(n||s)?(n||s).filter(d=>YE.includes(d)):[]},qE=t=>{var e,i;return(e=t.nodeName)!=null&&e.includes("-")&&c.customElements.get((i=t.nodeName)==null?void 0:i.toLowerCase())&&!(t instanceof c.customElements.get(t.nodeName.toLowerCase()))&&c.customElements.upgrade(t),GE.some(a=>a in t)},Lo=t=>qE(t)||!!Uh(t).length,Du=t=>{var e;return(e=t?.join)==null?void 0:e.call(t,":")},Ou={[l.MEDIA_SUBTITLES_LIST]:gr,[l.MEDIA_SUBTITLES_SHOWING]:gr,[l.MEDIA_SEEKABLE]:Du,[l.MEDIA_BUFFERED]:t=>t?.map(Du).join(" "),[l.MEDIA_PREVIEW_COORDS]:t=>t?.join(" "),[l.MEDIA_RENDITION_LIST]:qv,[l.MEDIA_AUDIO_TRACK_LIST]:Xv},ZE=async(t,e,i)=>{var a,r;if(t.isConnected||await uh(0),typeof i=="boolean"||i==null)return N(t,e,i);if(typeof i=="number")return j(t,e,i);if(typeof i=="string")return Z(t,e,i);if(Array.isArray(i)&&!i.length)return t.removeAttribute(e);const n=(r=(a=Ou[e])==null?void 0:a.call(Ou,i))!=null?r:i;return t.setAttribute(e,n)},QE=t=>{var e;return!!((e=t.closest)!=null&&e.call(t,'*[slot="media"]'))},Zt=(t,e)=>{if(QE(t))return;const i=(r,n)=>{var s,d;Lo(r)&&n(r);const{children:o=[]}=r??{},u=(d=(s=r?.shadowRoot)==null?void 0:s.children)!=null?d:[];[...o,...u].forEach(p=>Zt(p,n))},a=t?.nodeName.toLowerCase();if(a.includes("-")&&!Lo(t)){c.customElements.whenDefined(a).then(()=>{i(t,e)});return}i(t,e)},xu=(t,e,i)=>{t.forEach(a=>{if(e in a){a[e]=i;return}const r=Uh(a),n=e.toLowerCase();r.includes(n)&&ZE(a,n,i)})},zE=(t,e,i)=>{Zt(t,e);const a=h=>{var p;const v=(p=h?.composedPath()[0])!=null?p:h.target;e(v)},r=h=>{var p;const v=(p=h?.composedPath()[0])!=null?p:h.target;i(v)};t.addEventListener(y.REGISTER_MEDIA_STATE_RECEIVER,a),t.addEventListener(y.UNREGISTER_MEDIA_STATE_RECEIVER,r);const n=h=>{h.forEach(p=>{const{addedNodes:v=[],removedNodes:E=[],type:g,target:f,attributeName:_}=p;g==="childList"?(Array.prototype.forEach.call(v,A=>Zt(A,e)),Array.prototype.forEach.call(E,A=>Zt(A,i))):g==="attributes"&&_===$.MEDIA_CHROME_ATTRIBUTES&&(Lo(f)?e(f):i(f))})};let s=[];const d=h=>{const p=h.target;p.name!=="media"&&(s.forEach(v=>Zt(v,i)),s=[...p.assignedElements({flatten:!0})],s.forEach(v=>Zt(v,e)))};t.addEventListener("slotchange",d);const o=new MutationObserver(n);return o.observe(t,{childList:!0,attributes:!0,subtree:!0}),()=>{Zt(t,i),t.removeEventListener("slotchange",d),o.disconnect(),t.removeEventListener(y.REGISTER_MEDIA_STATE_RECEIVER,a),t.removeEventListener(y.UNREGISTER_MEDIA_STATE_RECEIVER,r)}};c.customElements.get("media-controller")||c.customElements.define("media-controller",Ph);var XE=Ph;const Ei={PLACEMENT:"placement",BOUNDS:"bounds"};function JE(t){return`
    <style>
      :host {
        --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
        --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
        --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
        --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
        --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
        position: relative;
        pointer-events: none;
        display: var(--media-tooltip-display, inline-flex);
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        z-index: var(--media-tooltip-z-index, 1);
        background: var(--_tooltip-background);
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        font: var(--media-font,
          var(--media-font-weight, 400)
          var(--media-font-size, 13px) /
          var(--media-text-content-height, var(--media-control-height, 18px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        padding: var(--media-tooltip-padding, .35em .7em);
        border: var(--media-tooltip-border, none);
        border-radius: var(--media-tooltip-border-radius, 5px);
        filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
        white-space: var(--media-tooltip-white-space, nowrap);
      }

      :host([hidden]) {
        display: none;
      }

      img, svg {
        display: inline-block;
      }

      #arrow {
        position: absolute;
        width: 0px;
        height: 0px;
        border-style: solid;
        display: var(--media-tooltip-arrow-display, block);
      }

      :host(:not([placement])),
      :host([placement="top"]) {
        position: absolute;
        bottom: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host(:not([placement])) #arrow,
      :host([placement="top"]) #arrow {
        top: 100%;
        left: 50%;
        border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
        border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="right"]) {
        position: absolute;
        left: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="right"]) #arrow {
        top: 50%;
        right: 100%;
        border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
        border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
        transform: translate(0, -50%);
      }

      :host([placement="bottom"]) {
        position: absolute;
        top: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host([placement="bottom"]) #arrow {
        bottom: 100%;
        left: 50%;
        border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
        border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="left"]) {
        position: absolute;
        right: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="left"]) #arrow {
        top: 50%;
        left: 100%;
        border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
        border-color: transparent transparent transparent var(--_tooltip-arrow-background);
        transform: translate(0, -50%);
      }
      
      :host([placement="none"]) #arrow {
        display: none;
      }
    </style>
    <slot></slot>
    <div id="arrow"></div>
  `}class Bs extends c.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var e;if(!gh(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;const i=this.placement;if(i==="left"||i==="right"){this.style.removeProperty("--media-tooltip-offset-x");return}const a=getComputedStyle(this),r=(e=ca(this,"#"+this.bounds))!=null?e:fe(this);if(!r)return;const{x:n,width:s}=r.getBoundingClientRect(),{x:d,width:o}=this.getBoundingClientRect(),u=d+o,h=n+s,p=a.getPropertyValue("--media-tooltip-offset-x"),v=p?parseFloat(p.replace("px","")):0,E=a.getPropertyValue("--media-tooltip-container-margin"),g=E?parseFloat(E.replace("px","")):0,f=d-n+v-g,_=u-h+v+g;if(f<0){this.style.setProperty("--media-tooltip-offset-x",`${f}px`);return}if(_>0){this.style.setProperty("--media-tooltip-offset-x",`${_}px`);return}this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=Se(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){const e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[Ei.PLACEMENT,Ei.BOUNDS]}get placement(){return q(this,Ei.PLACEMENT)}set placement(e){Z(this,Ei.PLACEMENT,e)}get bounds(){return q(this,Ei.BOUNDS)}set bounds(e){Z(this,Ei.BOUNDS,e)}}Bs.shadowRootOptions={mode:"open"};Bs.getTemplateHTML=JE;c.customElements.get("media-tooltip")||c.customElements.define("media-tooltip",Bs);var Nu=Bs,ql=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},ie=(t,e,i)=>(ql(t,e,"read from private field"),i?i.call(t):e.get(t)),bi=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ur=(t,e,i,a)=>(ql(t,e,"write to private field"),e.set(t,i),i),jE=(t,e,i)=>(ql(t,e,"access private method"),i),Qe,Gi,Ht,Ri,hn,wo,$h;const Rt={TOOLTIP_PLACEMENT:"tooltipplacement",DISABLED:"disabled",NO_TOOLTIP:"notooltip"};function e0(t,e={}){return`
    <style>
      :host {
        position: relative;
        font: var(--media-font,
          var(--media-font-weight, bold)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        padding: var(--media-button-padding, var(--media-control-padding, 10px));
        justify-content: var(--media-button-justify-content, center);
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        transition: background .15s linear;
        pointer-events: auto;
        cursor: var(--media-cursor, pointer);
        -webkit-tap-highlight-color: transparent;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }
      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgba(50 50 70 / .7));
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-button-icon-width);
        height: var(--media-button-icon-height, var(--media-control-height, 24px));
        transform: var(--media-button-icon-transform);
        transition: var(--media-button-icon-transition);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
      }

      media-tooltip {
        
        max-width: 0;
        overflow-x: clip;
        opacity: 0;
        transition: opacity .3s, max-width 0s 9s;
      }

      :host(:hover) media-tooltip,
      :host(:focus-visible) media-tooltip {
        max-width: 100vw;
        opacity: 1;
        transition: opacity .3s;
      }

      :host([notooltip]) slot[name="tooltip"] {
        display: none;
      }
    </style>

    ${this.getSlotTemplateHTML(t,e)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${Nu.shadowRootOptions.mode}">
          ${Nu.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(t)}
        </slot>
      </media-tooltip>
    </slot>
  `}function t0(t,e){return`
    <slot></slot>
  `}function i0(){return""}class ce extends c.HTMLElement{constructor(){if(super(),bi(this,wo),bi(this,Qe,void 0),this.preventClick=!1,this.tooltipEl=null,bi(this,Gi,e=>{this.preventClick||this.handleClick(e),setTimeout(ie(this,Ht),0)}),bi(this,Ht,()=>{var e,i;(i=(e=this.tooltipEl)==null?void 0:e.updateXOffset)==null||i.call(e)}),bi(this,Ri,e=>{const{key:i}=e;if(!this.keysUsed.includes(i)){this.removeEventListener("keyup",ie(this,Ri));return}this.preventClick||this.handleClick(e)}),bi(this,hn,e=>{const{metaKey:i,altKey:a,key:r}=e;if(i||a||!this.keysUsed.includes(r)){this.removeEventListener("keyup",ie(this,Ri));return}this.addEventListener("keyup",ie(this,Ri),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=Se(this.attributes),i=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(i):this.shadowRoot.innerHTML=i}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",Rt.TOOLTIP_PLACEMENT,$.MEDIA_CONTROLLER,l.MEDIA_LANG]}enable(){this.addEventListener("click",ie(this,Gi)),this.addEventListener("keydown",ie(this,hn)),this.tabIndex=0}disable(){this.removeEventListener("click",ie(this,Gi)),this.removeEventListener("keydown",ie(this,hn)),this.removeEventListener("keyup",ie(this,Ri)),this.tabIndex=-1}attributeChangedCallback(e,i,a){var r,n,s,d,o;e===$.MEDIA_CONTROLLER?(i&&((n=(r=ie(this,Qe))==null?void 0:r.unassociateElement)==null||n.call(r,this),Ur(this,Qe,null)),a&&this.isConnected&&(Ur(this,Qe,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(o=(d=ie(this,Qe))==null?void 0:d.associateElement)==null||o.call(d,this))):e==="disabled"&&a!==i?a==null?this.enable():this.disable():e===Rt.TOOLTIP_PLACEMENT&&this.tooltipEl&&a!==i?this.tooltipEl.placement=a:e===l.MEDIA_LANG&&(this.shadowRoot.querySelector('slot[name="tooltip-content"]').innerHTML=this.constructor.getTooltipContentHTML()),ie(this,Ht).call(this)}connectedCallback(){var e,i,a;const{style:r}=oe(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");const n=this.getAttribute($.MEDIA_CONTROLLER);n&&(Ur(this,Qe,(e=this.getRootNode())==null?void 0:e.getElementById(n)),(a=(i=ie(this,Qe))==null?void 0:i.associateElement)==null||a.call(i,this)),c.customElements.whenDefined("media-tooltip").then(()=>jE(this,wo,$h).call(this))}disconnectedCallback(){var e,i;this.disable(),(i=(e=ie(this,Qe))==null?void 0:e.unassociateElement)==null||i.call(e,this),Ur(this,Qe,null),this.removeEventListener("mouseenter",ie(this,Ht)),this.removeEventListener("focus",ie(this,Ht)),this.removeEventListener("click",ie(this,Gi))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return q(this,Rt.TOOLTIP_PLACEMENT)}set tooltipPlacement(e){Z(this,Rt.TOOLTIP_PLACEMENT,e)}get mediaController(){return q(this,$.MEDIA_CONTROLLER)}set mediaController(e){Z(this,$.MEDIA_CONTROLLER,e)}get disabled(){return x(this,Rt.DISABLED)}set disabled(e){N(this,Rt.DISABLED,e)}get noTooltip(){return x(this,Rt.NO_TOOLTIP)}set noTooltip(e){N(this,Rt.NO_TOOLTIP,e)}handleClick(e){}}Qe=new WeakMap;Gi=new WeakMap;Ht=new WeakMap;Ri=new WeakMap;hn=new WeakMap;wo=new WeakSet;$h=function(){this.addEventListener("mouseenter",ie(this,Ht)),this.addEventListener("focus",ie(this,Ht)),this.addEventListener("click",ie(this,Gi));const t=this.tooltipPlacement;t&&this.tooltipEl&&(this.tooltipEl.placement=t)};ce.shadowRootOptions={mode:"open"};ce.getTemplateHTML=e0;ce.getSlotTemplateHTML=t0;ce.getTooltipContentHTML=i0;c.customElements.get("media-chrome-button")||c.customElements.define("media-chrome-button",ce);const Pu=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`;function a0(t){return`
    <style>
      :host([${l.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${l.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${l.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${l.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${Pu}</slot>
      <slot name="exit">${Pu}</slot>
    </slot>
  `}function r0(){return`
    <slot name="tooltip-enter">${I("start airplay")}</slot>
    <slot name="tooltip-exit">${I("stop airplay")}</slot>
  `}const Uu=t=>{const e=t.mediaIsAirplaying?I("stop airplay"):I("start airplay");t.setAttribute("aria-label",e)};class Zl extends ce{static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_IS_AIRPLAYING,l.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Uu(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===l.MEDIA_IS_AIRPLAYING&&Uu(this)}get mediaIsAirplaying(){return x(this,l.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){N(this,l.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return q(this,l.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){Z(this,l.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){const e=new c.CustomEvent(y.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}}Zl.getSlotTemplateHTML=a0;Zl.getTooltipContentHTML=r0;c.customElements.get("media-airplay-button")||c.customElements.define("media-airplay-button",Zl);const n0=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,s0=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`;function o0(t){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-checked="true"]) slot[name=tooltip-enable],
      :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${n0}</slot>
      <slot name="off">${s0}</slot>
    </slot>
  `}function l0(){return`
    <slot name="tooltip-enable">${I("Enable captions")}</slot>
    <slot name="tooltip-disable">${I("Disable captions")}</slot>
  `}const $u=t=>{t.setAttribute("aria-checked",Mh(t).toString())};class Ql extends ce{static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_SUBTITLES_LIST,l.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","switch"),this.setAttribute("aria-label",I("closed captions")),$u(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===l.MEDIA_SUBTITLES_SHOWING&&$u(this)}get mediaSubtitlesList(){return Hu(this,l.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){Bu(this,l.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return Hu(this,l.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){Bu(this,l.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new c.CustomEvent(y.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}Ql.getSlotTemplateHTML=o0;Ql.getTooltipContentHTML=l0;const Hu=(t,e)=>{const i=t.getAttribute(e);return i?$s(i):[]},Bu=(t,e,i)=>{if(!i?.length){t.removeAttribute(e);return}const a=gr(i);t.getAttribute(e)!==a&&t.setAttribute(e,a)};c.customElements.get("media-captions-button")||c.customElements.define("media-captions-button",Ql);const d0='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg>',u0='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg>';function c0(t){return`
    <style>
      :host([${l.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${l.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${l.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${l.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${d0}</slot>
      <slot name="exit">${u0}</slot>
    </slot>
  `}function h0(){return`
    <slot name="tooltip-enter">${I("Start casting")}</slot>
    <slot name="tooltip-exit">${I("Stop casting")}</slot>
  `}const Wu=t=>{const e=t.mediaIsCasting?I("stop casting"):I("start casting");t.setAttribute("aria-label",e)};class zl extends ce{static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_IS_CASTING,l.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Wu(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===l.MEDIA_IS_CASTING&&Wu(this)}get mediaIsCasting(){return x(this,l.MEDIA_IS_CASTING)}set mediaIsCasting(e){N(this,l.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return q(this,l.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){Z(this,l.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){const e=this.mediaIsCasting?y.MEDIA_EXIT_CAST_REQUEST:y.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new c.CustomEvent(e,{composed:!0,bubbles:!0}))}}zl.getSlotTemplateHTML=c0;zl.getTooltipContentHTML=h0;c.customElements.get("media-cast-button")||c.customElements.define("media-cast-button",zl);var Xl=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},di=(t,e,i)=>(Xl(t,e,"read from private field"),e.get(t)),mt=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Jl=(t,e,i,a)=>(Xl(t,e,"write to private field"),e.set(t,i),i),Vt=(t,e,i)=>(Xl(t,e,"access private method"),i),us,_r,pi,mn,Do,Oo,Hh,xo,Bh,No,Wh,Po,Fh,Uo,Kh;function m0(t){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(t)}
  `}function p0(t){return`
    <slot id="content"></slot>
  `}const wa={OPEN:"open",ANCHOR:"anchor"};class ha extends c.HTMLElement{constructor(){super(),mt(this,mn),mt(this,Oo),mt(this,xo),mt(this,No),mt(this,Po),mt(this,Uo),mt(this,us,!1),mt(this,_r,null),mt(this,pi,null),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}static get observedAttributes(){return[wa.OPEN,wa.ANCHOR]}get open(){return x(this,wa.OPEN)}set open(e){N(this,wa.OPEN,e)}handleEvent(e){switch(e.type){case"invoke":Vt(this,No,Wh).call(this,e);break;case"focusout":Vt(this,Po,Fh).call(this,e);break;case"keydown":Vt(this,Uo,Kh).call(this,e);break}}connectedCallback(){Vt(this,mn,Do).call(this),this.role||(this.role="dialog")}attributeChangedCallback(e,i,a){Vt(this,mn,Do).call(this),e===wa.OPEN&&a!==i&&(this.open?Vt(this,Oo,Hh).call(this):Vt(this,xo,Bh).call(this))}focus(){Jl(this,_r,Hl());const e=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),i=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(e||i)return;const a=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');a?.focus()}get keysUsed(){return["Escape","Tab"]}}us=new WeakMap;_r=new WeakMap;pi=new WeakMap;mn=new WeakSet;Do=function(){if(!di(this,us)&&(Jl(this,us,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);const t=Se(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(t),queueMicrotask(()=>{const{style:e}=oe(this.shadowRoot,":host");e.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}};Oo=new WeakSet;Hh=function(){var t;(t=di(this,pi))==null||t.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})};xo=new WeakSet;Bh=function(){var t;(t=di(this,pi))==null||t.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))};No=new WeakSet;Wh=function(t){Jl(this,pi,t.relatedTarget),kt(this,t.relatedTarget)||(this.open=!this.open)};Po=new WeakSet;Fh=function(t){var e;kt(this,t.relatedTarget)||((e=di(this,_r))==null||e.focus(),di(this,pi)&&di(this,pi)!==t.relatedTarget&&this.open&&(this.open=!1))};Uo=new WeakSet;Kh=function(t){var e,i,a,r,n;const{key:s,ctrlKey:d,altKey:o,metaKey:u}=t;d||o||u||this.keysUsed.includes(s)&&(t.preventDefault(),t.stopPropagation(),s==="Tab"?(t.shiftKey?(i=(e=this.previousElementSibling)==null?void 0:e.focus)==null||i.call(e):(r=(a=this.nextElementSibling)==null?void 0:a.focus)==null||r.call(a),this.blur()):s==="Escape"&&((n=di(this,_r))==null||n.focus(),this.open=!1))};ha.shadowRootOptions={mode:"open"};ha.getTemplateHTML=m0;ha.getSlotTemplateHTML=p0;c.customElements.get("media-chrome-dialog")||c.customElements.define("media-chrome-dialog",ha);var jl=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},z=(t,e,i)=>(jl(t,e,"read from private field"),i?i.call(t):e.get(t)),he=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},wt=(t,e,i,a)=>(jl(t,e,"write to private field"),e.set(t,i),i),He=(t,e,i)=>(jl(t,e,"access private method"),i),ze,Ws,pn,vn,Be,cs,En,bn,fn,ed,Vh,gn,$o,_n,Ho,hs,td,Bo,Yh,Wo,Gh,Fo,qh,Ko,Zh;function v0(t){return`
    <style>
      :host {
        --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

        box-shadow: var(--_focus-visible-box-shadow, none);
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
        display: inline-flex;
        align-items: center;
        
        vertical-align: middle;
        box-sizing: border-box;
        position: relative;
        width: 100px;
        transition: background .15s linear;
        cursor: var(--media-cursor, pointer);
        pointer-events: auto;
        touch-action: none; 
      }

      
      input[type=range]:focus {
        outline: 0;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgb(50 50 70 / .7));
      }

      #leftgap {
        padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      }

      #rightgap {
        padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      }

      #startpoint,
      #endpoint {
        position: absolute;
      }

      #endpoint {
        right: 0;
      }

      #container {
        
        width: var(--media-range-track-width, 100%);
        transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        min-width: 40px;
      }

      #range {
        
        display: var(--media-time-range-hover-display, block);
        bottom: var(--media-time-range-hover-bottom, -7px);
        height: var(--media-time-range-hover-height, max(100% + 7px, 25px));
        width: 100%;
        position: absolute;
        cursor: var(--media-cursor, pointer);

        -webkit-appearance: none; 
        -webkit-tap-highlight-color: transparent;
        background: transparent; 
        margin: 0;
        z-index: 1;
      }

      @media (hover: hover) {
        #range {
          bottom: var(--media-time-range-hover-bottom, -5px);
          height: var(--media-time-range-hover-height, max(100% + 5px, 20px));
        }
      }

      
      
      #range::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: transparent;
        width: .1px;
        height: .1px;
      }

      
      #range::-moz-range-thumb {
        background: transparent;
        border: transparent;
        width: .1px;
        height: .1px;
      }

      #appearance {
        height: var(--media-range-track-height, 4px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        position: absolute;
        
        will-change: transform;
      }

      #track {
        background: var(--media-range-track-background, rgb(255 255 255 / .2));
        border-radius: var(--media-range-track-border-radius, 1px);
        border: var(--media-range-track-border, none);
        outline: var(--media-range-track-outline);
        outline-offset: var(--media-range-track-outline-offset);
        backdrop-filter: var(--media-range-track-backdrop-filter);
        -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
        box-shadow: var(--media-range-track-box-shadow, none);
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      #progress,
      #pointer {
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #progress {
        background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
        transition: var(--media-range-track-transition);
      }

      #pointer {
        background: var(--media-range-track-pointer-background);
        border-right: var(--media-range-track-pointer-border-right);
        transition: visibility .25s, opacity .25s;
        visibility: hidden;
        opacity: 0;
      }

      @media (hover: hover) {
        :host(:hover) #pointer {
          transition: visibility .5s, opacity .5s;
          visibility: visible;
          opacity: 1;
        }
      }

      #thumb,
      ::slotted([slot=thumb]) {
        width: var(--media-range-thumb-width, 10px);
        height: var(--media-range-thumb-height, 10px);
        transition: var(--media-range-thumb-transition);
        transform: var(--media-range-thumb-transform, none);
        opacity: var(--media-range-thumb-opacity, 1);
        translate: -50%;
        position: absolute;
        left: 0;
        cursor: var(--media-cursor, pointer);
      }

      #thumb {
        border-radius: var(--media-range-thumb-border-radius, 10px);
        background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
        box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
        border: var(--media-range-thumb-border, none);
      }

      :host([disabled]) #thumb {
        background-color: #777;
      }

      .segments #appearance {
        height: var(--media-range-segment-hover-height, 7px);
      }

      #track {
        clip-path: url(#segments-clipping);
      }

      #segments {
        --segments-gap: var(--media-range-segments-gap, 2px);
        position: absolute;
        width: 100%;
        height: 100%;
      }

      #segments-clipping {
        transform: translateX(calc(var(--segments-gap) / 2));
      }

      #segments-clipping:empty {
        display: none;
      }

      #segments-clipping rect {
        height: var(--media-range-track-height, 4px);
        y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
        transition: var(--media-range-segment-transition, transform .1s ease-in-out);
        transform: var(--media-range-segment-transform, scaleY(1));
        transform-origin: center;
      }
    </style>
    <div id="leftgap"></div>
    <div id="container">
      <div id="startpoint"></div>
      <div id="endpoint"></div>
      <div id="appearance">
        <div id="track" part="track">
          <div id="pointer"></div>
          <div id="progress" part="progress"></div>
        </div>
        <slot name="thumb">
          <div id="thumb" part="thumb"></div>
        </slot>
        <svg id="segments"><clipPath id="segments-clipping"></clipPath></svg>
      </div>
      <input id="range" type="range" min="0" max="1" step="any" value="0">
    </div>
    <div id="rightgap"></div>
  `}class ma extends c.HTMLElement{constructor(){if(super(),he(this,ed),he(this,gn),he(this,_n),he(this,hs),he(this,Bo),he(this,Wo),he(this,Fo),he(this,Ko),he(this,ze,void 0),he(this,Ws,void 0),he(this,pn,void 0),he(this,vn,void 0),he(this,Be,{}),he(this,cs,[]),he(this,En,()=>{if(this.range.matches(":focus-visible")){const{style:e}=oe(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),he(this,bn,()=>{const{style:e}=oe(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),he(this,fn,()=>{const e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=Se(this.attributes),i=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(i):this.shadowRoot.innerHTML=i}this.container=this.shadowRoot.querySelector("#container"),wt(this,pn,this.shadowRoot.querySelector("#startpoint")),wt(this,vn,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",$.MEDIA_CONTROLLER]}attributeChangedCallback(e,i,a){var r,n,s,d,o;e===$.MEDIA_CONTROLLER?(i&&((n=(r=z(this,ze))==null?void 0:r.unassociateElement)==null||n.call(r,this),wt(this,ze,null)),a&&this.isConnected&&(wt(this,ze,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(o=(d=z(this,ze))==null?void 0:d.associateElement)==null||o.call(d,this))):(e==="disabled"||e==="aria-disabled"&&i!==a)&&(a==null?(this.range.removeAttribute(e),He(this,gn,$o).call(this)):(this.range.setAttribute(e,a),He(this,_n,Ho).call(this)))}connectedCallback(){var e,i,a;const{style:r}=oe(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),z(this,Be).pointer=oe(this.shadowRoot,"#pointer"),z(this,Be).progress=oe(this.shadowRoot,"#progress"),z(this,Be).thumb=oe(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),z(this,Be).activeSegment=oe(this.shadowRoot,"#segments-clipping rect:nth-child(0)");const n=this.getAttribute($.MEDIA_CONTROLLER);n&&(wt(this,ze,(e=this.getRootNode())==null?void 0:e.getElementById(n)),(a=(i=z(this,ze))==null?void 0:i.associateElement)==null||a.call(i,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",z(this,En)),this.shadowRoot.addEventListener("focusout",z(this,bn)),He(this,gn,$o).call(this),na(this.container,z(this,fn))}disconnectedCallback(){var e,i;He(this,_n,Ho).call(this),(i=(e=z(this,ze))==null?void 0:e.unassociateElement)==null||i.call(e,this),wt(this,ze,null),this.shadowRoot.removeEventListener("focusin",z(this,En)),this.shadowRoot.removeEventListener("focusout",z(this,bn)),sa(this.container,z(this,fn))}updatePointerBar(e){var i;(i=z(this,Be).pointer)==null||i.style.setProperty("width",`${this.getPointerRatio(e)*100}%`)}updateBar(){var e,i;const a=this.range.valueAsNumber*100;(e=z(this,Be).progress)==null||e.style.setProperty("width",`${a}%`),(i=z(this,Be).thumb)==null||i.style.setProperty("left",`${a}%`)}updateSegments(e){const i=this.shadowRoot.querySelector("#segments-clipping");if(i.textContent="",this.container.classList.toggle("segments",!!e?.length),!e?.length)return;const a=[...new Set([+this.range.min,...e.flatMap(n=>[n.start,n.end]),+this.range.max])];wt(this,cs,[...a]);const r=a.pop();for(const[n,s]of a.entries()){const[d,o]=[n===0,n===a.length-1],u=d?"calc(var(--segments-gap) / -1)":`${s*100}%`,p=`calc(${((o?r:a[n+1])-s)*100}%${d||o?"":" - var(--segments-gap)"})`,v=ne.createElementNS("http://www.w3.org/2000/svg","rect"),E=Bl(this.shadowRoot,`#segments-clipping rect:nth-child(${n+1})`);E.style.setProperty("x",u),E.style.setProperty("width",p),i.append(v)}}getPointerRatio(e){return lE(e.clientX,e.clientY,z(this,pn).getBoundingClientRect(),z(this,vn).getBoundingClientRect())}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":He(this,Ko,Zh).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":He(this,Bo,Yh).call(this,e);break;case"pointerdown":He(this,hs,td).call(this,e);break;case"pointerup":He(this,Wo,Gh).call(this);break;case"pointerleave":He(this,Fo,qh).call(this);break}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}ze=new WeakMap;Ws=new WeakMap;pn=new WeakMap;vn=new WeakMap;Be=new WeakMap;cs=new WeakMap;En=new WeakMap;bn=new WeakMap;fn=new WeakMap;ed=new WeakSet;Vh=function(t){const e=z(this,Be).activeSegment;if(!e)return;const i=this.getPointerRatio(t),r=`#segments-clipping rect:nth-child(${z(this,cs).findIndex((n,s,d)=>{const o=d[s+1];return o!=null&&i>=n&&i<=o})+1})`;(e.selectorText!=r||!e.style.transform)&&(e.selectorText=r,e.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))};gn=new WeakSet;$o=function(){this.hasAttribute("disabled")||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))};_n=new WeakSet;Ho=function(){var t,e;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),(t=c.window)==null||t.removeEventListener("pointerup",this),(e=c.window)==null||e.removeEventListener("pointermove",this)};hs=new WeakSet;td=function(t){var e;wt(this,Ws,t.composedPath().includes(this.range)),(e=c.window)==null||e.addEventListener("pointerup",this)};Bo=new WeakSet;Yh=function(t){var e;t.pointerType!=="mouse"&&He(this,hs,td).call(this,t),this.addEventListener("pointerleave",this),(e=c.window)==null||e.addEventListener("pointermove",this)};Wo=new WeakSet;Gh=function(){var t;(t=c.window)==null||t.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")};Fo=new WeakSet;qh=function(){var t,e;this.removeEventListener("pointerleave",this),(t=c.window)==null||t.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),(e=z(this,Be).activeSegment)==null||e.style.removeProperty("transform")};Ko=new WeakSet;Zh=function(t){t.pointerType==="pen"&&t.buttons===0||(this.toggleAttribute("dragging",t.buttons===1||t.pointerType!=="mouse"),this.updatePointerBar(t),He(this,ed,Vh).call(this,t),this.dragging&&(t.pointerType!=="mouse"||!z(this,Ws))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(t),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))))};ma.shadowRootOptions={mode:"open"};ma.getTemplateHTML=v0;c.customElements.get("media-chrome-range")||c.customElements.define("media-chrome-range",ma);var Qh=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},$r=(t,e,i)=>(Qh(t,e,"read from private field"),i?i.call(t):e.get(t)),E0=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Hr=(t,e,i,a)=>(Qh(t,e,"write to private field"),e.set(t,i),i),Xe;function b0(t){return`
    <style>
      :host {
        
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --media-loading-indicator-icon-height: 44px;
      }

      ::slotted(media-time-range),
      ::slotted(media-volume-range) {
        min-height: 100%;
      }

      ::slotted(media-time-range),
      ::slotted(media-clip-selector) {
        flex-grow: 1;
      }

      ::slotted([role="menu"]) {
        position: absolute;
      }
    </style>

    <slot></slot>
  `}class id extends c.HTMLElement{constructor(){if(super(),E0(this,Xe,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=Se(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[$.MEDIA_CONTROLLER]}attributeChangedCallback(e,i,a){var r,n,s,d,o;e===$.MEDIA_CONTROLLER&&(i&&((n=(r=$r(this,Xe))==null?void 0:r.unassociateElement)==null||n.call(r,this),Hr(this,Xe,null)),a&&this.isConnected&&(Hr(this,Xe,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(o=(d=$r(this,Xe))==null?void 0:d.associateElement)==null||o.call(d,this)))}connectedCallback(){var e,i,a;const r=this.getAttribute($.MEDIA_CONTROLLER);r&&(Hr(this,Xe,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(a=(i=$r(this,Xe))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=$r(this,Xe))==null?void 0:e.unassociateElement)==null||i.call(e,this),Hr(this,Xe,null)}}Xe=new WeakMap;id.shadowRootOptions={mode:"open"};id.getTemplateHTML=b0;c.customElements.get("media-control-bar")||c.customElements.define("media-control-bar",id);var zh=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Br=(t,e,i)=>(zh(t,e,"read from private field"),i?i.call(t):e.get(t)),f0=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Wr=(t,e,i,a)=>(zh(t,e,"write to private field"),e.set(t,i),i),Je;function g0(t,e={}){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
        padding: var(--media-control-padding, 10px);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        text-align: center;
        pointer-events: auto;
      }

      
      :host(:focus-visible) {
        box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
        outline: 0;
      }

      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }
    </style>

    ${this.getSlotTemplateHTML(t,e)}
  `}function _0(t,e){return`
    <slot></slot>
  `}class Ft extends c.HTMLElement{constructor(){if(super(),f0(this,Je,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=Se(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[$.MEDIA_CONTROLLER]}attributeChangedCallback(e,i,a){var r,n,s,d,o;e===$.MEDIA_CONTROLLER&&(i&&((n=(r=Br(this,Je))==null?void 0:r.unassociateElement)==null||n.call(r,this),Wr(this,Je,null)),a&&this.isConnected&&(Wr(this,Je,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(o=(d=Br(this,Je))==null?void 0:d.associateElement)==null||o.call(d,this)))}connectedCallback(){var e,i,a;const{style:r}=oe(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);const n=this.getAttribute($.MEDIA_CONTROLLER);n&&(Wr(this,Je,(e=this.getRootNode())==null?void 0:e.getElementById(n)),(a=(i=Br(this,Je))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=Br(this,Je))==null?void 0:e.unassociateElement)==null||i.call(e,this),Wr(this,Je,null)}}Je=new WeakMap;Ft.shadowRootOptions={mode:"open"};Ft.getTemplateHTML=g0;Ft.getSlotTemplateHTML=_0;c.customElements.get("media-text-display")||c.customElements.define("media-text-display",Ft);var Xh=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Fu=(t,e,i)=>(Xh(t,e,"read from private field"),i?i.call(t):e.get(t)),T0=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},A0=(t,e,i,a)=>(Xh(t,e,"write to private field"),e.set(t,i),i),Xa;function y0(t,e){return`
    <slot>${Bt(e.mediaDuration)}</slot>
  `}class Jh extends Ft{constructor(){var e;super(),T0(this,Xa,void 0),A0(this,Xa,this.shadowRoot.querySelector("slot")),Fu(this,Xa).textContent=Bt((e=this.mediaDuration)!=null?e:0)}static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_DURATION]}attributeChangedCallback(e,i,a){e===l.MEDIA_DURATION&&(Fu(this,Xa).textContent=Bt(+a)),super.attributeChangedCallback(e,i,a)}get mediaDuration(){return G(this,l.MEDIA_DURATION)}set mediaDuration(e){j(this,l.MEDIA_DURATION,e)}}Xa=new WeakMap;Jh.getSlotTemplateHTML=y0;c.customElements.get("media-duration-display")||c.customElements.define("media-duration-display",Jh);const k0={2:I("Network Error"),3:I("Decode Error"),4:I("Source Not Supported"),5:I("Encryption Error")},S0={2:I("A network error caused the media download to fail."),3:I("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:I("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:I("The media is encrypted and there are no keys to decrypt it.")},jh=t=>{var e,i;return t.code===1?null:{title:(e=k0[t.code])!=null?e:`Error ${t.code}`,message:(i=S0[t.code])!=null?i:t.message}};var em=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},I0=(t,e,i)=>(em(t,e,"read from private field"),i?i.call(t):e.get(t)),R0=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},C0=(t,e,i,a)=>(em(t,e,"write to private field"),e.set(t,i),i),Tn;function M0(t){return`
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${t.mediaerrorcode}" id="content">
      ${tm({code:+t.mediaerrorcode,message:t.mediaerrormessage})}
    </slot>
  `}function L0(t){return t.code&&jh(t)!==null}function tm(t){var e;const{title:i,message:a}=(e=jh(t))!=null?e:{};let r="";return i&&(r+=`<slot name="error-${t.code}-title"><h3>${i}</h3></slot>`),a&&(r+=`<slot name="error-${t.code}-message"><p>${a}</p></slot>`),r}const Ku=[l.MEDIA_ERROR_CODE,l.MEDIA_ERROR_MESSAGE];class Fs extends ha{constructor(){super(...arguments),R0(this,Tn,null)}static get observedAttributes(){return[...super.observedAttributes,...Ku]}formatErrorMessage(e){return this.constructor.formatErrorMessage(e)}attributeChangedCallback(e,i,a){var r;if(super.attributeChangedCallback(e,i,a),!Ku.includes(e))return;const n=(r=this.mediaError)!=null?r:{code:this.mediaErrorCode,message:this.mediaErrorMessage};this.open=L0(n),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(n))}get mediaError(){return I0(this,Tn)}set mediaError(e){C0(this,Tn,e)}get mediaErrorCode(){return G(this,"mediaerrorcode")}set mediaErrorCode(e){j(this,"mediaerrorcode",e)}get mediaErrorMessage(){return q(this,"mediaerrormessage")}set mediaErrorMessage(e){Z(this,"mediaerrormessage",e)}}Tn=new WeakMap;Fs.getSlotTemplateHTML=M0;Fs.formatErrorMessage=tm;c.customElements.get("media-error-dialog")||c.customElements.define("media-error-dialog",Fs);var im=Fs,w0=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Ct=(t,e,i)=>(w0(t,e,"read from private field"),i?i.call(t):e.get(t)),Vu=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ci,Mi;function D0(t){return`
    <style>
      :host {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        background: rgb(20 20 30 / .8);
        backdrop-filter: blur(10px);
      }

      #content {
        display: block;
        width: clamp(400px, 40vw, 700px);
        max-width: 90vw;
        text-align: left;
      }

      h2 {
        margin: 0 0 1.5rem 0;
        font-size: 1.5rem;
        font-weight: 500;
        text-align: center;
      }

      .shortcuts-table {
        width: 100%;
        border-collapse: collapse;
      }

      .shortcuts-table tr {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      .shortcuts-table tr:last-child {
        border-bottom: none;
      }

      .shortcuts-table td {
        padding: 0.75rem 0.5rem;
      }

      .shortcuts-table td:first-child {
        text-align: right;
        padding-right: 1rem;
        width: 40%;
        min-width: 120px;
      }

      .shortcuts-table td:last-child {
        padding-left: 1rem;
      }

      .key {
        display: inline-block;
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        padding: 0.25rem 0.5rem;
        font-family: 'Courier New', monospace;
        font-size: 0.9rem;
        font-weight: 500;
        min-width: 1.5rem;
        text-align: center;
        margin: 0 0.2rem;
      }

      .description {
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.95rem;
      }

      .key-combo {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 0.3rem;
      }

      .key-separator {
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.9rem;
      }
    </style>
    <slot id="content">
      ${O0()}
    </slot>
  `}function O0(){return`
    <h2>Keyboard Shortcuts</h2>
    <table class="shortcuts-table">${[{keys:["Space","k"],description:"Toggle Playback"},{keys:["m"],description:"Toggle mute"},{keys:["f"],description:"Toggle fullscreen"},{keys:["c"],description:"Toggle captions or subtitles, if available"},{keys:["p"],description:"Toggle Picture in Picture"},{keys:["←","j"],description:"Seek back 10s"},{keys:["→","l"],description:"Seek forward 10s"},{keys:["↑"],description:"Turn volume up"},{keys:["↓"],description:"Turn volume down"},{keys:["< (SHIFT+,)"],description:"Decrease playback rate"},{keys:["> (SHIFT+.)"],description:"Increase playback rate"}].map(({keys:i,description:a})=>`
      <tr>
        <td>
          <div class="key-combo">${i.map((n,s)=>s>0?`<span class="key-separator">or</span><span class="key">${n}</span>`:`<span class="key">${n}</span>`).join("")}</div>
        </td>
        <td class="description">${a}</td>
      </tr>
    `).join("")}</table>
  `}class am extends ha{constructor(){super(...arguments),Vu(this,Ci,e=>{var i;if(!this.open)return;const a=(i=this.shadowRoot)==null?void 0:i.querySelector("#content");if(!a)return;const r=e.composedPath(),n=r[0]===this||r.includes(this),s=r.includes(a);n&&!s&&(this.open=!1)}),Vu(this,Mi,e=>{if(!this.open)return;const i=e.shiftKey&&(e.key==="/"||e.key==="?");(e.key==="Escape"||i)&&!e.ctrlKey&&!e.altKey&&!e.metaKey&&(this.open=!1,e.preventDefault(),e.stopPropagation())})}connectedCallback(){super.connectedCallback(),this.open&&(this.addEventListener("click",Ct(this,Ci)),document.addEventListener("keydown",Ct(this,Mi)))}disconnectedCallback(){this.removeEventListener("click",Ct(this,Ci)),document.removeEventListener("keydown",Ct(this,Mi))}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e==="open"&&(this.open?(this.addEventListener("click",Ct(this,Ci)),document.addEventListener("keydown",Ct(this,Mi))):(this.removeEventListener("click",Ct(this,Ci)),document.removeEventListener("keydown",Ct(this,Mi))))}}Ci=new WeakMap;Mi=new WeakMap;am.getSlotTemplateHTML=D0;c.customElements.get("media-keyboard-shortcuts-dialog")||c.customElements.define("media-keyboard-shortcuts-dialog",am);var rm=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},x0=(t,e,i)=>(rm(t,e,"read from private field"),e.get(t)),N0=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},P0=(t,e,i,a)=>(rm(t,e,"write to private field"),e.set(t,i),i),An;const U0=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,$0=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`;function H0(t){return`
    <style>
      :host([${l.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${l.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${l.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${l.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${U0}</slot>
      <slot name="exit">${$0}</slot>
    </slot>
  `}function B0(){return`
    <slot name="tooltip-enter">${I("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${I("Exit fullscreen mode")}</slot>
  `}const Yu=t=>{const e=t.mediaIsFullscreen?I("exit fullscreen mode"):I("enter fullscreen mode");t.setAttribute("aria-label",e)};class ad extends ce{constructor(){super(...arguments),N0(this,An,null)}static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_IS_FULLSCREEN,l.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Yu(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===l.MEDIA_IS_FULLSCREEN&&Yu(this)}get mediaFullscreenUnavailable(){return q(this,l.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){Z(this,l.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return x(this,l.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){N(this,l.MEDIA_IS_FULLSCREEN,e)}handleClick(e){P0(this,An,e);const i=x0(this,An)instanceof PointerEvent,a=this.mediaIsFullscreen?new c.CustomEvent(y.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0}):new c.CustomEvent(y.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0,detail:i});this.dispatchEvent(a)}}An=new WeakMap;ad.getSlotTemplateHTML=H0;ad.getTooltipContentHTML=B0;c.customElements.get("media-fullscreen-button")||c.customElements.define("media-fullscreen-button",ad);const{MEDIA_TIME_IS_LIVE:yn,MEDIA_PAUSED:ur}=l,{MEDIA_SEEK_TO_LIVE_REQUEST:W0,MEDIA_PLAY_REQUEST:F0}=y,K0='<svg viewBox="0 0 6 12"><circle cx="3" cy="6" r="2"></circle></svg>';function V0(t){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${yn}]:not([${ur}])) slot[name=indicator] > *,
      :host([${yn}]:not([${ur}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${yn}]:not([${ur}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator">${K0}</slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${I("live")}</slot>
  `}const Gu=t=>{var e;const i=t.mediaPaused||!t.mediaTimeIsLive,a=I(i?"seek to live":"playing live");t.setAttribute("aria-label",a);const r=(e=t.shadowRoot)==null?void 0:e.querySelector('slot[name="text"]');r&&(r.textContent=I("live")),i?t.removeAttribute("aria-disabled"):t.setAttribute("aria-disabled","true")};class nm extends ce{static get observedAttributes(){return[...super.observedAttributes,yn,ur]}connectedCallback(){super.connectedCallback(),Gu(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),Gu(this)}get mediaPaused(){return x(this,l.MEDIA_PAUSED)}set mediaPaused(e){N(this,l.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return x(this,l.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){N(this,l.MEDIA_TIME_IS_LIVE,e)}handleClick(){!this.mediaPaused&&this.mediaTimeIsLive||(this.dispatchEvent(new c.CustomEvent(W0,{composed:!0,bubbles:!0})),this.hasAttribute(ur)&&this.dispatchEvent(new c.CustomEvent(F0,{composed:!0,bubbles:!0})))}}nm.getSlotTemplateHTML=V0;c.customElements.get("media-live-button")||c.customElements.define("media-live-button",nm);var sm=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Da=(t,e,i)=>(sm(t,e,"read from private field"),i?i.call(t):e.get(t)),qu=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Oa=(t,e,i,a)=>(sm(t,e,"write to private field"),e.set(t,i),i),je,kn;const Fr={LOADING_DELAY:"loadingdelay",NO_AUTOHIDE:"noautohide"},om=500,Y0=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;function G0(t){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
        vertical-align: middle;
        box-sizing: border-box;
        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, ${om}ms);
      }

      #status {
        color: rgba(0,0,0,0);
        width: 0px;
        height: 0px;
      }

      :host slot[name=icon] > *,
      :host ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 0);
        transition: opacity 0.15s;
      }

      :host([${l.MEDIA_LOADING}]:not([${l.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${l.MEDIA_LOADING}]:not([${l.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${l.MEDIA_LOADING}]:not([${l.MEDIA_PAUSED}])) #status {
        visibility: var(--media-loading-indicator-opacity, visible);
        transition: visibility 0.15s var(--_loading-indicator-delay);
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-loading-indicator-icon-width);
        height: var(--media-loading-indicator-icon-height, 100px);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
      }
    </style>

    <slot name="icon">${Y0}</slot>
    <div id="status" role="status" aria-live="polite">${I("media loading")}</div>
  `}class rd extends c.HTMLElement{constructor(){if(super(),qu(this,je,void 0),qu(this,kn,om),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=Se(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[$.MEDIA_CONTROLLER,l.MEDIA_PAUSED,l.MEDIA_LOADING,Fr.LOADING_DELAY]}attributeChangedCallback(e,i,a){var r,n,s,d,o;e===Fr.LOADING_DELAY&&i!==a?this.loadingDelay=Number(a):e===$.MEDIA_CONTROLLER&&(i&&((n=(r=Da(this,je))==null?void 0:r.unassociateElement)==null||n.call(r,this),Oa(this,je,null)),a&&this.isConnected&&(Oa(this,je,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(o=(d=Da(this,je))==null?void 0:d.associateElement)==null||o.call(d,this)))}connectedCallback(){var e,i,a;const r=this.getAttribute($.MEDIA_CONTROLLER);r&&(Oa(this,je,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(a=(i=Da(this,je))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=Da(this,je))==null?void 0:e.unassociateElement)==null||i.call(e,this),Oa(this,je,null)}get loadingDelay(){return Da(this,kn)}set loadingDelay(e){Oa(this,kn,e);const{style:i}=oe(this.shadowRoot,":host");i.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return x(this,l.MEDIA_PAUSED)}set mediaPaused(e){N(this,l.MEDIA_PAUSED,e)}get mediaLoading(){return x(this,l.MEDIA_LOADING)}set mediaLoading(e){N(this,l.MEDIA_LOADING,e)}get mediaController(){return q(this,$.MEDIA_CONTROLLER)}set mediaController(e){Z(this,$.MEDIA_CONTROLLER,e)}get noAutohide(){return x(this,Fr.NO_AUTOHIDE)}set noAutohide(e){N(this,Fr.NO_AUTOHIDE,e)}}je=new WeakMap;kn=new WeakMap;rd.shadowRootOptions={mode:"open"};rd.getTemplateHTML=G0;c.customElements.get("media-loading-indicator")||c.customElements.define("media-loading-indicator",rd);const q0=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,Zu=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,Z0=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`;function Q0(t){return`
    <style>
      :host(:not([${l.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${l.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${l.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${l.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${l.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${l.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${l.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${q0}</slot>
      <slot name="low">${Zu}</slot>
      <slot name="medium">${Zu}</slot>
      <slot name="high">${Z0}</slot>
    </slot>
  `}function z0(){return`
    <slot name="tooltip-mute">${I("Mute")}</slot>
    <slot name="tooltip-unmute">${I("Unmute")}</slot>
  `}const Qu=t=>{const e=t.mediaVolumeLevel==="off",i=I(e?"unmute":"mute");t.setAttribute("aria-label",i)};class nd extends ce{static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),Qu(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===l.MEDIA_VOLUME_LEVEL&&Qu(this)}get mediaVolumeLevel(){return q(this,l.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){Z(this,l.MEDIA_VOLUME_LEVEL,e)}handleClick(){const e=this.mediaVolumeLevel==="off"?y.MEDIA_UNMUTE_REQUEST:y.MEDIA_MUTE_REQUEST;this.dispatchEvent(new c.CustomEvent(e,{composed:!0,bubbles:!0}))}}nd.getSlotTemplateHTML=Q0;nd.getTooltipContentHTML=z0;c.customElements.get("media-mute-button")||c.customElements.define("media-mute-button",nd);const zu=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`;function X0(t){return`
    <style>
      :host([${l.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${l.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${l.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${l.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${zu}</slot>
      <slot name="exit">${zu}</slot>
    </slot>
  `}function J0(){return`
    <slot name="tooltip-enter">${I("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${I("Exit picture in picture mode")}</slot>
  `}const Xu=t=>{const e=t.mediaIsPip?I("exit picture in picture mode"):I("enter picture in picture mode");t.setAttribute("aria-label",e)};class sd extends ce{static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_IS_PIP,l.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Xu(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===l.MEDIA_IS_PIP&&Xu(this)}get mediaPipUnavailable(){return q(this,l.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){Z(this,l.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return x(this,l.MEDIA_IS_PIP)}set mediaIsPip(e){N(this,l.MEDIA_IS_PIP,e)}handleClick(){const e=this.mediaIsPip?y.MEDIA_EXIT_PIP_REQUEST:y.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new c.CustomEvent(e,{composed:!0,bubbles:!0}))}}sd.getSlotTemplateHTML=X0;sd.getTooltipContentHTML=J0;c.customElements.get("media-pip-button")||c.customElements.define("media-pip-button",sd);var j0=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},fi=(t,e,i)=>(j0(t,e,"read from private field"),i?i.call(t):e.get(t)),eb=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Dt;const to={RATES:"rates"},lm=[1,1.2,1.5,1.7,2],qi=1;function tb(t){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${t.mediaplaybackrate||qi}x</slot>
  `}function ib(){return I("Playback rate")}class od extends ce{constructor(){var e;super(),eb(this,Dt,new Kl(this,to.RATES,{defaultValue:lm})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${(e=this.mediaPlaybackRate)!=null?e:qi}x`}static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_PLAYBACK_RATE,to.RATES]}attributeChangedCallback(e,i,a){if(super.attributeChangedCallback(e,i,a),e===to.RATES&&(fi(this,Dt).value=a),e===l.MEDIA_PLAYBACK_RATE){const r=a?+a:Number.NaN,n=Number.isNaN(r)?qi:r;this.container.innerHTML=`${n}x`,this.setAttribute("aria-label",I("Playback rate {playbackRate}",{playbackRate:n}))}}get rates(){return fi(this,Dt)}set rates(e){e?Array.isArray(e)?fi(this,Dt).value=e.join(" "):typeof e=="string"&&(fi(this,Dt).value=e):fi(this,Dt).value=""}get mediaPlaybackRate(){return G(this,l.MEDIA_PLAYBACK_RATE,qi)}set mediaPlaybackRate(e){j(this,l.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,i;const a=Array.from(fi(this,Dt).values(),s=>+s).sort((s,d)=>s-d),r=(i=(e=a.find(s=>s>this.mediaPlaybackRate))!=null?e:a[0])!=null?i:qi,n=new c.CustomEvent(y.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:r});this.dispatchEvent(n)}}Dt=new WeakMap;od.getSlotTemplateHTML=tb;od.getTooltipContentHTML=ib;c.customElements.get("media-playback-rate-button")||c.customElements.define("media-playback-rate-button",od);const ab=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,rb=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`;function nb(t){return`
    <style>
      :host([${l.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${l.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${l.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${l.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${ab}</slot>
      <slot name="pause">${rb}</slot>
    </slot>
  `}function sb(){return`
    <slot name="tooltip-play">${I("Play")}</slot>
    <slot name="tooltip-pause">${I("Pause")}</slot>
  `}const Ju=t=>{const e=t.mediaPaused?I("play"):I("pause");t.setAttribute("aria-label",e)};class ld extends ce{static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_PAUSED,l.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),Ju(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),(e===l.MEDIA_PAUSED||e===l.MEDIA_LANG)&&Ju(this)}get mediaPaused(){return x(this,l.MEDIA_PAUSED)}set mediaPaused(e){N(this,l.MEDIA_PAUSED,e)}handleClick(){const e=this.mediaPaused?y.MEDIA_PLAY_REQUEST:y.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new c.CustomEvent(e,{composed:!0,bubbles:!0}))}}ld.getSlotTemplateHTML=nb;ld.getTooltipContentHTML=sb;c.customElements.get("media-play-button")||c.customElements.define("media-play-button",ld);const Ve={PLACEHOLDER_SRC:"placeholdersrc",SRC:"src"};function ob(t){return`
    <style>
      :host {
        pointer-events: none;
        display: var(--media-poster-image-display, inline-block);
        box-sizing: border-box;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        background-repeat: no-repeat;
        background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
        background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, center);
      }
    </style>

    <img part="poster img" aria-hidden="true" id="image"/>
  `}const lb=t=>{t.style.removeProperty("background-image")},db=(t,e)=>{t.style["background-image"]=`url('${e}')`};class dd extends c.HTMLElement{static get observedAttributes(){return[Ve.PLACEHOLDER_SRC,Ve.SRC]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=Se(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,i,a){e===Ve.SRC&&(a==null?this.image.removeAttribute(Ve.SRC):this.image.setAttribute(Ve.SRC,a)),e===Ve.PLACEHOLDER_SRC&&(a==null?lb(this.image):db(this.image,a))}get placeholderSrc(){return q(this,Ve.PLACEHOLDER_SRC)}set placeholderSrc(e){Z(this,Ve.SRC,e)}get src(){return q(this,Ve.SRC)}set src(e){Z(this,Ve.SRC,e)}}dd.shadowRootOptions={mode:"open"};dd.getTemplateHTML=ob;c.customElements.get("media-poster-image")||c.customElements.define("media-poster-image",dd);var dm=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},ub=(t,e,i)=>(dm(t,e,"read from private field"),i?i.call(t):e.get(t)),cb=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},hb=(t,e,i,a)=>(dm(t,e,"write to private field"),e.set(t,i),i),Sn;class mb extends Ft{constructor(){super(),cb(this,Sn,void 0),hb(this,Sn,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_PREVIEW_CHAPTER,l.MEDIA_LANG]}attributeChangedCallback(e,i,a){if(super.attributeChangedCallback(e,i,a),(e===l.MEDIA_PREVIEW_CHAPTER||e===l.MEDIA_LANG)&&a!==i&&a!=null)if(ub(this,Sn).textContent=a,a!==""){const r=I("chapter: {chapterName}",{chapterName:a});this.setAttribute("aria-valuetext",r)}else this.removeAttribute("aria-valuetext")}get mediaPreviewChapter(){return q(this,l.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){Z(this,l.MEDIA_PREVIEW_CHAPTER,e)}}Sn=new WeakMap;c.customElements.get("media-preview-chapter-display")||c.customElements.define("media-preview-chapter-display",mb);var um=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Kr=(t,e,i)=>(um(t,e,"read from private field"),i?i.call(t):e.get(t)),pb=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Vr=(t,e,i,a)=>(um(t,e,"write to private field"),e.set(t,i),i),et;function vb(t){return`
    <style>
      :host {
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
        overflow: hidden;
      }

      img {
        display: none;
        position: relative;
      }
    </style>
    <img crossorigin loading="eager" decoding="async">
  `}class Ks extends c.HTMLElement{constructor(){if(super(),pb(this,et,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=Se(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[$.MEDIA_CONTROLLER,l.MEDIA_PREVIEW_IMAGE,l.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,i,a;const r=this.getAttribute($.MEDIA_CONTROLLER);r&&(Vr(this,et,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(a=(i=Kr(this,et))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=Kr(this,et))==null?void 0:e.unassociateElement)==null||i.call(e,this),Vr(this,et,null)}attributeChangedCallback(e,i,a){var r,n,s,d,o;[l.MEDIA_PREVIEW_IMAGE,l.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===$.MEDIA_CONTROLLER&&(i&&((n=(r=Kr(this,et))==null?void 0:r.unassociateElement)==null||n.call(r,this),Vr(this,et,null)),a&&this.isConnected&&(Vr(this,et,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(o=(d=Kr(this,et))==null?void 0:d.associateElement)==null||o.call(d,this)))}get mediaPreviewImage(){return q(this,l.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){Z(this,l.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){const e=this.getAttribute(l.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(i=>+i)}set mediaPreviewCoords(e){if(!e){this.removeAttribute(l.MEDIA_PREVIEW_COORDS);return}this.setAttribute(l.MEDIA_PREVIEW_COORDS,e.join(" "))}update(){const e=this.mediaPreviewCoords,i=this.mediaPreviewImage;if(!(e&&i))return;const[a,r,n,s]=e,d=i.split("#")[0],o=getComputedStyle(this),{maxWidth:u,maxHeight:h,minWidth:p,minHeight:v}=o,E=Math.min(parseInt(u)/n,parseInt(h)/s),g=Math.max(parseInt(p)/n,parseInt(v)/s),f=E<1,_=f?E:g>1?g:1,{style:A}=oe(this.shadowRoot,":host"),w=oe(this.shadowRoot,"img").style,S=this.shadowRoot.querySelector("img"),P=f?"min":"max";A.setProperty(`${P}-width`,"initial","important"),A.setProperty(`${P}-height`,"initial","important"),A.width=`${n*_}px`,A.height=`${s*_}px`;const xe=()=>{w.width=`${this.imgWidth*_}px`,w.height=`${this.imgHeight*_}px`,w.display="block"};S.src!==d&&(S.onload=()=>{this.imgWidth=S.naturalWidth,this.imgHeight=S.naturalHeight,xe()},S.src=d,xe()),xe(),w.transform=`translate(-${a*_}px, -${r*_}px)`}}et=new WeakMap;Ks.shadowRootOptions={mode:"open"};Ks.getTemplateHTML=vb;c.customElements.get("media-preview-thumbnail")||c.customElements.define("media-preview-thumbnail",Ks);var ju=Ks,cm=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},ec=(t,e,i)=>(cm(t,e,"read from private field"),i?i.call(t):e.get(t)),Eb=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},bb=(t,e,i,a)=>(cm(t,e,"write to private field"),e.set(t,i),i),Ja;class fb extends Ft{constructor(){super(),Eb(this,Ja,void 0),bb(this,Ja,this.shadowRoot.querySelector("slot")),ec(this,Ja).textContent=Bt(0)}static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===l.MEDIA_PREVIEW_TIME&&a!=null&&(ec(this,Ja).textContent=Bt(parseFloat(a)))}get mediaPreviewTime(){return G(this,l.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){j(this,l.MEDIA_PREVIEW_TIME,e)}}Ja=new WeakMap;c.customElements.get("media-preview-time-display")||c.customElements.define("media-preview-time-display",fb);const gi={SEEK_OFFSET:"seekoffset"},io=30,gb=t=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${t}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`;function _b(t,e){return`
    <slot name="icon">${gb(e.seekOffset)}</slot>
  `}function Tb(){return I("Seek backward")}const Ab=0;class ud extends ce{static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_CURRENT_TIME,gi.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=G(this,gi.SEEK_OFFSET,io)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===gi.SEEK_OFFSET&&(this.seekOffset=G(this,gi.SEEK_OFFSET,io))}get seekOffset(){return G(this,gi.SEEK_OFFSET,io)}set seekOffset(e){j(this,gi.SEEK_OFFSET,e),this.setAttribute("aria-label",I("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),bh(fh(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return G(this,l.MEDIA_CURRENT_TIME,Ab)}set mediaCurrentTime(e){j(this,l.MEDIA_CURRENT_TIME,e)}handleClick(){const e=Math.max(this.mediaCurrentTime-this.seekOffset,0),i=new c.CustomEvent(y.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)}}ud.getSlotTemplateHTML=_b;ud.getTooltipContentHTML=Tb;c.customElements.get("media-seek-backward-button")||c.customElements.define("media-seek-backward-button",ud);const _i={SEEK_OFFSET:"seekoffset"},ao=30,yb=t=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${t}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`;function kb(t,e){return`
    <slot name="icon">${yb(e.seekOffset)}</slot>
  `}function Sb(){return I("Seek forward")}const Ib=0;class cd extends ce{static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_CURRENT_TIME,_i.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=G(this,_i.SEEK_OFFSET,ao)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===_i.SEEK_OFFSET&&(this.seekOffset=G(this,_i.SEEK_OFFSET,ao))}get seekOffset(){return G(this,_i.SEEK_OFFSET,ao)}set seekOffset(e){j(this,_i.SEEK_OFFSET,e),this.setAttribute("aria-label",I("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),bh(fh(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return G(this,l.MEDIA_CURRENT_TIME,Ib)}set mediaCurrentTime(e){j(this,l.MEDIA_CURRENT_TIME,e)}handleClick(){const e=this.mediaCurrentTime+this.seekOffset,i=new c.CustomEvent(y.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)}}cd.getSlotTemplateHTML=kb;cd.getTooltipContentHTML=Sb;c.customElements.get("media-seek-forward-button")||c.customElements.define("media-seek-forward-button",cd);var hm=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},ro=(t,e,i)=>(hm(t,e,"read from private field"),i?i.call(t):e.get(t)),Rb=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Cb=(t,e,i,a)=>(hm(t,e,"write to private field"),e.set(t,i),i),Li;const Qt={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},tc=[...Object.values(Qt),l.MEDIA_CURRENT_TIME,l.MEDIA_DURATION,l.MEDIA_SEEKABLE],ic=["Enter"," "],Mb="&nbsp;/&nbsp;",Vo=(t,{timesSep:e=Mb}={})=>{var i,a;const r=(i=t.mediaCurrentTime)!=null?i:0,[,n]=(a=t.mediaSeekable)!=null?a:[];let s=0;Number.isFinite(t.mediaDuration)?s=t.mediaDuration:Number.isFinite(n)&&(s=n);const d=t.remaining?Bt(0-(s-r)):Bt(r);return t.showDuration?`${d}${e}${Bt(s)}`:d},Lb="video not loaded, unknown time.",wb=t=>{var e;const i=t.mediaCurrentTime,[,a]=(e=t.mediaSeekable)!=null?e:[];let r=null;if(Number.isFinite(t.mediaDuration)?r=t.mediaDuration:Number.isFinite(a)&&(r=a),i==null||r===null){t.setAttribute("aria-valuetext",Lb);return}const n=t.remaining?lr(0-(r-i)):lr(i);if(!t.showDuration){t.setAttribute("aria-valuetext",n);return}const s=lr(r),d=`${n} of ${s}`;t.setAttribute("aria-valuetext",d)};function Db(t,e){return`
    <slot>${Vo(e)}</slot>
  `}class mm extends Ft{constructor(){super(),Rb(this,Li,void 0),Cb(this,Li,this.shadowRoot.querySelector("slot")),ro(this,Li).innerHTML=`${Vo(this)}`}static get observedAttributes(){return[...super.observedAttributes,...tc,"disabled"]}connectedCallback(){const{style:e}=oe(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","var(--media-cursor, pointer)"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","progressbar"),this.setAttribute("aria-label",I("playback time"));const i=a=>{const{key:r}=a;if(!ic.includes(r)){this.removeEventListener("keyup",i);return}this.toggleTimeDisplay()};this.addEventListener("keydown",a=>{const{metaKey:r,altKey:n,key:s}=a;if(r||n||!ic.includes(s)){this.removeEventListener("keyup",i);return}this.addEventListener("keyup",i)}),this.addEventListener("click",this.toggleTimeDisplay),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),super.disconnectedCallback()}attributeChangedCallback(e,i,a){tc.includes(e)?this.update():e==="disabled"&&a!==i&&(a==null?this.enable():this.disable()),super.attributeChangedCallback(e,i,a)}enable(){this.tabIndex=0}disable(){this.tabIndex=-1}get remaining(){return x(this,Qt.REMAINING)}set remaining(e){N(this,Qt.REMAINING,e)}get showDuration(){return x(this,Qt.SHOW_DURATION)}set showDuration(e){N(this,Qt.SHOW_DURATION,e)}get noToggle(){return x(this,Qt.NO_TOGGLE)}set noToggle(e){N(this,Qt.NO_TOGGLE,e)}get mediaDuration(){return G(this,l.MEDIA_DURATION)}set mediaDuration(e){j(this,l.MEDIA_DURATION,e)}get mediaCurrentTime(){return G(this,l.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){j(this,l.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){const e=this.getAttribute(l.MEDIA_SEEKABLE);if(e)return e.split(":").map(i=>+i)}set mediaSeekable(e){if(e==null){this.removeAttribute(l.MEDIA_SEEKABLE);return}this.setAttribute(l.MEDIA_SEEKABLE,e.join(":"))}update(){const e=Vo(this);wb(this),e!==ro(this,Li).innerHTML&&(ro(this,Li).innerHTML=e)}}Li=new WeakMap;mm.getSlotTemplateHTML=Db;c.customElements.get("media-time-display")||c.customElements.define("media-time-display",mm);var pm=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},de=(t,e,i)=>(pm(t,e,"read from private field"),e.get(t)),Ye=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ae=(t,e,i,a)=>(pm(t,e,"write to private field"),e.set(t,i),i),Ob=(t,e,i,a)=>({set _(r){Ae(t,e,r)},get _(){return de(t,e)}}),wi,In,Di,ja,Rn,Cn,Mn,Oi,zt,Ln;class xb{constructor(e,i,a){Ye(this,wi,void 0),Ye(this,In,void 0),Ye(this,Di,void 0),Ye(this,ja,void 0),Ye(this,Rn,void 0),Ye(this,Cn,void 0),Ye(this,Mn,void 0),Ye(this,Oi,void 0),Ye(this,zt,0),Ye(this,Ln,(r=performance.now())=>{Ae(this,zt,requestAnimationFrame(de(this,Ln))),Ae(this,ja,performance.now()-de(this,Di));const n=1e3/this.fps;if(de(this,ja)>n){Ae(this,Di,r-de(this,ja)%n);const s=1e3/((r-de(this,In))/++Ob(this,Rn)._),d=(r-de(this,Cn))/1e3/this.duration;let o=de(this,Mn)+d*this.playbackRate;o-de(this,wi).valueAsNumber>0?Ae(this,Oi,this.playbackRate/this.duration/s):(Ae(this,Oi,.995*de(this,Oi)),o=de(this,wi).valueAsNumber+de(this,Oi)),this.callback(o)}}),Ae(this,wi,e),this.callback=i,this.fps=a}start(){de(this,zt)===0&&(Ae(this,Di,performance.now()),Ae(this,In,de(this,Di)),Ae(this,Rn,0),de(this,Ln).call(this))}stop(){de(this,zt)!==0&&(cancelAnimationFrame(de(this,zt)),Ae(this,zt,0))}update({start:e,duration:i,playbackRate:a}){const r=e-de(this,wi).valueAsNumber,n=Math.abs(i-this.duration);(r>0||r<-.03||n>=.5)&&this.callback(e),Ae(this,Mn,e),Ae(this,Cn,performance.now()),this.duration=i,this.playbackRate=a}}wi=new WeakMap;In=new WeakMap;Di=new WeakMap;ja=new WeakMap;Rn=new WeakMap;Cn=new WeakMap;Mn=new WeakMap;Oi=new WeakMap;zt=new WeakMap;Ln=new WeakMap;var hd=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},ee=(t,e,i)=>(hd(t,e,"read from private field"),i?i.call(t):e.get(t)),se=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Re=(t,e,i,a)=>(hd(t,e,"write to private field"),e.set(t,i),i),ve=(t,e,i)=>(hd(t,e,"access private method"),i),xi,ui,ms,cr,ps,wn,Tr,Ar,Ni,Pi,Ui,er,md,vm,Yo,vs,pd,Es,vd,bs,Ed,Go,Em,yr,fs,qo,bm;const Nb="video not loaded, unknown time.",Pb=t=>{const e=t.range,i=lr(+fm(t)),a=lr(+t.mediaSeekableEnd),r=i&&a?`${i} of ${a}`:Nb;e.setAttribute("aria-valuetext",r)};function Ub(t){return`
    ${ma.getTemplateHTML(t)}
    <style>
      :host {
        --media-box-border-radius: 4px;
        --media-box-padding-left: 10px;
        --media-box-padding-right: 10px;
        --media-preview-border-radius: var(--media-box-border-radius);
        --media-box-arrow-offset: var(--media-box-border-radius);
        --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        --_preview-background: var(--media-preview-background, var(--_control-background));

        
        contain: layout;
      }

      #buffered {
        background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #preview-rail,
      #current-rail {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 100%;
        pointer-events: none;
        will-change: transform;
      }

      [part~="box"] {
        width: min-content;
        
        position: absolute;
        bottom: 100%;
        flex-direction: column;
        align-items: center;
        transform: translateX(-50%);
      }

      [part~="current-box"] {
        display: var(--media-current-box-display, var(--media-box-display, flex));
        margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
        visibility: hidden;
      }

      [part~="preview-box"] {
        display: var(--media-preview-box-display, var(--media-box-display, flex));
        margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
        transition-property: var(--media-preview-transition-property, visibility, opacity);
        transition-duration: var(--media-preview-transition-duration-out, .25s);
        transition-delay: var(--media-preview-transition-delay-out, 0s);
        visibility: hidden;
        opacity: 0;
      }

      :host(:is([${l.MEDIA_PREVIEW_IMAGE}], [${l.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${l.MEDIA_PREVIEW_IMAGE}], [${l.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
          transition-duration: var(--media-preview-transition-duration-in, .5s);
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
          opacity: 1;
        }
      }

      media-preview-thumbnail,
      ::slotted(media-preview-thumbnail) {
        visibility: hidden;
        
        transition: visibility 0s .25s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-thumbnail-background, var(--_preview-background));
        box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
        max-width: var(--media-preview-thumbnail-max-width, 180px);
        max-height: var(--media-preview-thumbnail-max-height, 160px);
        min-width: var(--media-preview-thumbnail-min-width, 120px);
        min-height: var(--media-preview-thumbnail-min-height, 80px);
        border: var(--media-preview-thumbnail-border);
        border-radius: var(--media-preview-thumbnail-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
      }

      :host([${l.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${l.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${l.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${l.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${l.MEDIA_PREVIEW_TIME}]:hover) {
          --media-time-range-hover-display: block;
        }
      }

      media-preview-chapter-display,
      ::slotted(media-preview-chapter-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        visibility: hidden;
        
        transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-chapter-background, var(--_preview-background));
        border-radius: var(--media-preview-chapter-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-chapter-padding, 3.5px 9px);
        margin: var(--media-preview-chapter-margin, 0 0 5px);
        text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      }

      :host([${l.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${l.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${l.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${l.MEDIA_PREVIEW_CHAPTER}]) {
        visibility: visible;
      }

      media-preview-chapter-display:not([aria-valuetext]),
      ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
        display: none;
      }

      media-preview-time-display,
      ::slotted(media-preview-time-display),
      media-time-display,
      ::slotted(media-time-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        
        transition: min-width 0s, border-radius 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-time-background, var(--_preview-background));
        border-radius: var(--media-preview-time-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-time-padding, 3.5px 9px);
        margin: var(--media-preview-time-margin, 0);
        text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50%)
        ));
      }

      :host([${l.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${l.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${l.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }

      [part~="arrow"],
      ::slotted([part~="arrow"]) {
        display: var(--media-box-arrow-display, inline-block);
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
        ));
        
        border-color: transparent;
        border-top-color: var(--media-box-arrow-background, var(--_control-background));
        border-width: var(--media-box-arrow-border-width,
          var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
        border-style: solid;
        justify-content: center;
        height: 0;
      }
    </style>
    <div id="preview-rail">
      <slot name="preview" part="box preview-box">
        <media-preview-thumbnail>
          <template shadowrootmode="${ju.shadowRootOptions.mode}">
            ${ju.getTemplateHTML({})}
          </template>
        </media-preview-thumbnail>
        <media-preview-chapter-display></media-preview-chapter-display>
        <media-preview-time-display></media-preview-time-display>
        <slot name="preview-arrow"><div part="arrow"></div></slot>
      </slot>
    </div>
    <div id="current-rail">
      <slot name="current" part="box current-box">
        
      </slot>
    </div>
  `}const Yr=(t,e=t.mediaCurrentTime)=>{const i=Number.isFinite(t.mediaSeekableStart)?t.mediaSeekableStart:0,a=Number.isFinite(t.mediaDuration)?t.mediaDuration:t.mediaSeekableEnd;if(Number.isNaN(a))return 0;const r=(e-i)/(a-i);return Math.max(0,Math.min(r,1))},fm=(t,e=t.range.valueAsNumber)=>{const i=Number.isFinite(t.mediaSeekableStart)?t.mediaSeekableStart:0,a=Number.isFinite(t.mediaDuration)?t.mediaDuration:t.mediaSeekableEnd;return Number.isNaN(a)?0:e*(a-i)+i};class bd extends ma{constructor(){super(),se(this,Ui),se(this,md),se(this,vs),se(this,Es),se(this,bs),se(this,Go),se(this,yr),se(this,qo),se(this,xi,void 0),se(this,ui,void 0),se(this,ms,void 0),se(this,cr,void 0),se(this,ps,void 0),se(this,wn,void 0),se(this,Tr,void 0),se(this,Ar,void 0),se(this,Ni,void 0),se(this,Pi,void 0),se(this,Yo,a=>{this.dragging||(Ul(a)&&(this.range.valueAsNumber=a),ee(this,Pi)||this.updateBar())}),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),Re(this,ms,this.shadowRoot.querySelectorAll('[part~="box"]')),Re(this,ps,this.shadowRoot.querySelector('[part~="preview-box"]')),Re(this,wn,this.shadowRoot.querySelector('[part~="current-box"]'));const i=getComputedStyle(this);Re(this,Tr,parseInt(i.getPropertyValue("--media-box-padding-left"))),Re(this,Ar,parseInt(i.getPropertyValue("--media-box-padding-right"))),Re(this,ui,new xb(this.range,ee(this,Yo),60))}static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_PAUSED,l.MEDIA_DURATION,l.MEDIA_SEEKABLE,l.MEDIA_CURRENT_TIME,l.MEDIA_PREVIEW_IMAGE,l.MEDIA_PREVIEW_TIME,l.MEDIA_PREVIEW_CHAPTER,l.MEDIA_BUFFERED,l.MEDIA_PLAYBACK_RATE,l.MEDIA_LOADING,l.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",I("seek")),ve(this,Ui,er).call(this),Re(this,xi,this.getRootNode()),(e=ee(this,xi))==null||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),ve(this,Ui,er).call(this),(e=ee(this,xi))==null||e.removeEventListener("transitionstart",this),Re(this,xi,null)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),i!=a&&(e===l.MEDIA_CURRENT_TIME||e===l.MEDIA_PAUSED||e===l.MEDIA_ENDED||e===l.MEDIA_LOADING||e===l.MEDIA_DURATION||e===l.MEDIA_SEEKABLE?(ee(this,ui).update({start:Yr(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),ve(this,Ui,er).call(this),Pb(this)):e===l.MEDIA_BUFFERED&&this.updateBufferedBar(),(e===l.MEDIA_DURATION||e===l.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=ee(this,Ni),this.updateBar()))}get mediaChaptersCues(){return ee(this,Ni)}set mediaChaptersCues(e){var i;Re(this,Ni,e),this.updateSegments((i=ee(this,Ni))==null?void 0:i.map(a=>({start:Yr(this,a.startTime),end:Yr(this,a.endTime)})))}get mediaPaused(){return x(this,l.MEDIA_PAUSED)}set mediaPaused(e){N(this,l.MEDIA_PAUSED,e)}get mediaLoading(){return x(this,l.MEDIA_LOADING)}set mediaLoading(e){N(this,l.MEDIA_LOADING,e)}get mediaDuration(){return G(this,l.MEDIA_DURATION)}set mediaDuration(e){j(this,l.MEDIA_DURATION,e)}get mediaCurrentTime(){return G(this,l.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){j(this,l.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return G(this,l.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){j(this,l.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){const e=this.getAttribute(l.MEDIA_BUFFERED);return e?e.split(" ").map(i=>i.split(":").map(a=>+a)):[]}set mediaBuffered(e){if(!e){this.removeAttribute(l.MEDIA_BUFFERED);return}const i=e.map(a=>a.join(":")).join(" ");this.setAttribute(l.MEDIA_BUFFERED,i)}get mediaSeekable(){const e=this.getAttribute(l.MEDIA_SEEKABLE);if(e)return e.split(":").map(i=>+i)}set mediaSeekable(e){if(e==null){this.removeAttribute(l.MEDIA_SEEKABLE);return}this.setAttribute(l.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;const[,i=this.mediaDuration]=(e=this.mediaSeekable)!=null?e:[];return i}get mediaSeekableStart(){var e;const[i=0]=(e=this.mediaSeekable)!=null?e:[];return i}get mediaPreviewImage(){return q(this,l.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){Z(this,l.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return G(this,l.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){j(this,l.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return x(this,l.MEDIA_ENDED)}set mediaEnded(e){N(this,l.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;const i=this.mediaBuffered;if(!i.length)return;let a;if(this.mediaEnded)a=1;else{const n=this.mediaCurrentTime,[,s=this.mediaSeekableStart]=(e=i.find(([d,o])=>d<=n&&n<=o))!=null?e:[];a=Yr(this,s)}const{style:r}=oe(this.shadowRoot,"#buffered");r.setProperty("width",`${a*100}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;const i=oe(this.shadowRoot,"#current-rail"),a=oe(this.shadowRoot,'[part~="current-box"]'),r=ve(this,vs,pd).call(this,ee(this,wn)),n=ve(this,Es,vd).call(this,r,this.range.valueAsNumber),s=ve(this,bs,Ed).call(this,r,this.range.valueAsNumber);i.style.transform=`translateX(${n})`,i.style.setProperty("--_range-width",`${r.range.width}`),a.style.setProperty("--_box-shift",`${s}`),a.style.setProperty("--_box-width",`${r.box.width}px`),a.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":ve(this,qo,bm).call(this);break;case"pointermove":ve(this,Go,Em).call(this,e);break;case"pointerup":ee(this,Pi)&&Re(this,Pi,!1);break;case"pointerdown":Re(this,Pi,!0);break;case"pointerleave":ve(this,yr,fs).call(this,null);break;case"transitionstart":kt(e.target,this)&&setTimeout(()=>ve(this,Ui,er).call(this),0);break}}}xi=new WeakMap;ui=new WeakMap;ms=new WeakMap;cr=new WeakMap;ps=new WeakMap;wn=new WeakMap;Tr=new WeakMap;Ar=new WeakMap;Ni=new WeakMap;Pi=new WeakMap;Ui=new WeakSet;er=function(){ve(this,md,vm).call(this)?ee(this,ui).start():ee(this,ui).stop()};md=new WeakSet;vm=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&gh(this)};Yo=new WeakMap;vs=new WeakSet;pd=function(t){var e;const a=((e=this.getAttribute("bounds")?ca(this,`#${this.getAttribute("bounds")}`):this.parentElement)!=null?e:this).getBoundingClientRect(),r=this.range.getBoundingClientRect(),n=t.offsetWidth,s=-(r.left-a.left-n/2),d=a.right-r.left-n/2;return{box:{width:n,min:s,max:d},bounds:a,range:r}};Es=new WeakSet;vd=function(t,e){let i=`${e*100}%`;const{width:a,min:r,max:n}=t.box;if(!a)return i;if(Number.isNaN(r)||(i=`max(${`calc(1 / var(--_range-width) * 100 * ${r}% + var(--media-box-padding-left))`}, ${i})`),!Number.isNaN(n)){const d=`calc(1 / var(--_range-width) * 100 * ${n}% - var(--media-box-padding-right))`;i=`min(${i}, ${d})`}return i};bs=new WeakSet;Ed=function(t,e){const{width:i,min:a,max:r}=t.box,n=e*t.range.width;if(n<a+ee(this,Tr)){const s=t.range.left-t.bounds.left-ee(this,Tr);return`${n-i/2+s}px`}if(n>r-ee(this,Ar)){const s=t.bounds.right-t.range.right-ee(this,Ar);return`${n+i/2-s-t.range.width}px`}return 0};Go=new WeakSet;Em=function(t){const e=[...ee(this,ms)].some(h=>t.composedPath().includes(h));if(!this.dragging&&(e||!t.composedPath().includes(this))){ve(this,yr,fs).call(this,null);return}const i=this.mediaSeekableEnd;if(!i)return;const a=oe(this.shadowRoot,"#preview-rail"),r=oe(this.shadowRoot,'[part~="preview-box"]'),n=ve(this,vs,pd).call(this,ee(this,ps));let s=(t.clientX-n.range.left)/n.range.width;s=Math.max(0,Math.min(1,s));const d=ve(this,Es,vd).call(this,n,s),o=ve(this,bs,Ed).call(this,n,s);a.style.transform=`translateX(${d})`,a.style.setProperty("--_range-width",`${n.range.width}`),r.style.setProperty("--_box-shift",`${o}`),r.style.setProperty("--_box-width",`${n.box.width}px`);const u=Math.round(ee(this,cr))-Math.round(s*i);Math.abs(u)<1&&s>.01&&s<.99||(Re(this,cr,s*i),ve(this,yr,fs).call(this,ee(this,cr)))};yr=new WeakSet;fs=function(t){this.dispatchEvent(new c.CustomEvent(y.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:t}))};qo=new WeakSet;bm=function(){ee(this,ui).stop();const t=fm(this);this.dispatchEvent(new c.CustomEvent(y.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:t}))};bd.shadowRootOptions={mode:"open"};bd.getTemplateHTML=Ub;c.customElements.get("media-time-range")||c.customElements.define("media-time-range",bd);const $b=1,Hb=t=>t.mediaMuted?0:t.mediaVolume,Bb=t=>`${Math.round(t*100)}%`;class Wb extends ma{static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_VOLUME,l.MEDIA_MUTED,l.MEDIA_VOLUME_UNAVAILABLE]}constructor(){super(),this.range.addEventListener("input",()=>{const e=this.range.value,i=new c.CustomEvent(y.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)})}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",I("volume"))}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),(e===l.MEDIA_VOLUME||e===l.MEDIA_MUTED)&&(this.range.valueAsNumber=Hb(this),this.range.setAttribute("aria-valuetext",Bb(this.range.valueAsNumber)),this.updateBar())}get mediaVolume(){return G(this,l.MEDIA_VOLUME,$b)}set mediaVolume(e){j(this,l.MEDIA_VOLUME,e)}get mediaMuted(){return x(this,l.MEDIA_MUTED)}set mediaMuted(e){N(this,l.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return q(this,l.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){Z(this,l.MEDIA_VOLUME_UNAVAILABLE,e)}}c.customElements.get("media-volume-range")||c.customElements.define("media-volume-range",Wb);function Fb(t){return`
      <style>
        :host {
          min-width: 4ch;
          padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
          width: 100%;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 1rem;
          font-weight: var(--media-button-font-weight, normal);
        }

        #checked-indicator {
          display: none;
        }

        :host([${l.MEDIA_LOOP}]) #checked-indicator {
          display: block;
        }
      </style>
      
      <span id="icon">
     </span>

      <div id="checked-indicator">
        <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
          <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
        </svg>
      </div>
    `}function Kb(){return I("Loop")}class fd extends ce{constructor(){super(...arguments),this.container=null}static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_LOOP]}connectedCallback(){var e;super.connectedCallback(),this.container=((e=this.shadowRoot)==null?void 0:e.querySelector("#icon"))||null,this.container&&(this.container.textContent=I("Loop"))}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===l.MEDIA_LOOP&&this.container&&this.setAttribute("aria-checked",this.mediaLoop?"true":"false")}get mediaLoop(){return x(this,l.MEDIA_LOOP)}set mediaLoop(e){N(this,l.MEDIA_LOOP,e)}handleClick(){const e=!this.mediaLoop,i=new c.CustomEvent(y.MEDIA_LOOP_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)}}fd.getSlotTemplateHTML=Fb;fd.getTooltipContentHTML=Kb;c.customElements.get("media-loop-button")||c.customElements.define("media-loop-button",fd);var gm=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},D=(t,e,i)=>(gm(t,e,"read from private field"),i?i.call(t):e.get(t)),nt=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},_t=(t,e,i,a)=>(gm(t,e,"write to private field"),e.set(t,i),i),$i,Dn,Xt,tr,Ot,xt,Nt,Jt,Hi,On,$e;const ac=1,rc=0,Vb=1,Yb={processCallback(t,e,i){if(i){for(const[a,r]of e)if(a in i){const n=i[a];typeof n=="boolean"&&r instanceof Ke&&typeof r.element[r.attributeName]=="boolean"?r.booleanValue=n:typeof n=="function"&&r instanceof Ke?r.element[r.attributeName]=n:r.value=n}}}};class Vs extends c.DocumentFragment{constructor(e,i,a=Yb){var r;super(),nt(this,$i,void 0),nt(this,Dn,void 0),this.append(e.content.cloneNode(!0)),_t(this,$i,_m(this)),_t(this,Dn,a),(r=a.createCallback)==null||r.call(a,this,D(this,$i),i),a.processCallback(this,D(this,$i),i)}update(e){D(this,Dn).processCallback(this,D(this,$i),e)}}$i=new WeakMap;Dn=new WeakMap;const _m=(t,e=[])=>{let i,a;for(const r of t.attributes||[])if(r.value.includes("{{")){const n=new qb;for([i,a]of sc(r.value))if(!i)n.append(a);else{const s=new Ke(t,r.name,r.namespaceURI);n.append(s),e.push([a,s])}r.value=n.toString()}for(const r of t.childNodes)if(r.nodeType===ac&&!(r instanceof HTMLTemplateElement))_m(r,e);else{const n=r.data;if(r.nodeType===ac||n.includes("{{")){const s=[];if(n)for([i,a]of sc(n))if(!i)s.push(new Text(a));else{const d=new pa(t);s.push(d),e.push([a,d])}else if(r instanceof HTMLTemplateElement){const d=new ym(t,r);s.push(d),e.push([d.expression,d])}r.replaceWith(...s.flatMap(d=>d.replacementNodes||[d]))}}return e},nc={},sc=t=>{let e="",i=0,a=nc[t],r=0,n;if(a)return a;for(a=[];n=t[r];r++)n==="{"&&t[r+1]==="{"&&t[r-1]!=="\\"&&t[r+2]&&++i==1?(e&&a.push([rc,e]),e="",r++):n==="}"&&t[r+1]==="}"&&t[r-1]!=="\\"&&!--i?(a.push([Vb,e.trim()]),e="",r++):e+=n||"";return e&&a.push([rc,(i>0?"{{":"")+e]),nc[t]=a},Gb=11;class Tm{get value(){return""}set value(e){}toString(){return this.value}}const Am=new WeakMap;class qb{constructor(){nt(this,Xt,[])}[Symbol.iterator](){return D(this,Xt).values()}get length(){return D(this,Xt).length}item(e){return D(this,Xt)[e]}append(...e){for(const i of e)i instanceof Ke&&Am.set(i,this),D(this,Xt).push(i)}toString(){return D(this,Xt).join("")}}Xt=new WeakMap;class Ke extends Tm{constructor(e,i,a){super(),nt(this,Jt),nt(this,tr,""),nt(this,Ot,void 0),nt(this,xt,void 0),nt(this,Nt,void 0),_t(this,Ot,e),_t(this,xt,i),_t(this,Nt,a)}get attributeName(){return D(this,xt)}get attributeNamespace(){return D(this,Nt)}get element(){return D(this,Ot)}get value(){return D(this,tr)}set value(e){D(this,tr)!==e&&(_t(this,tr,e),!D(this,Jt,Hi)||D(this,Jt,Hi).length===1?e==null?D(this,Ot).removeAttributeNS(D(this,Nt),D(this,xt)):D(this,Ot).setAttributeNS(D(this,Nt),D(this,xt),e):D(this,Ot).setAttributeNS(D(this,Nt),D(this,xt),D(this,Jt,Hi).toString()))}get booleanValue(){return D(this,Ot).hasAttributeNS(D(this,Nt),D(this,xt))}set booleanValue(e){if(!D(this,Jt,Hi)||D(this,Jt,Hi).length===1)this.value=e?"":null;else throw new DOMException("Value is not fully templatized")}}tr=new WeakMap;Ot=new WeakMap;xt=new WeakMap;Nt=new WeakMap;Jt=new WeakSet;Hi=function(){return Am.get(this)};class pa extends Tm{constructor(e,i){super(),nt(this,On,void 0),nt(this,$e,void 0),_t(this,On,e),_t(this,$e,i?[...i]:[new Text])}get replacementNodes(){return D(this,$e)}get parentNode(){return D(this,On)}get nextSibling(){return D(this,$e)[D(this,$e).length-1].nextSibling}get previousSibling(){return D(this,$e)[0].previousSibling}get value(){return D(this,$e).map(e=>e.textContent).join("")}set value(e){this.replace(e)}replace(...e){const i=e.flat().flatMap(a=>a==null?[new Text]:a.forEach?[...a]:a.nodeType===Gb?[...a.childNodes]:a.nodeType?[a]:[new Text(a)]);i.length||i.push(new Text),_t(this,$e,Zb(D(this,$e)[0].parentNode,D(this,$e),i,this.nextSibling))}}On=new WeakMap;$e=new WeakMap;class ym extends pa{constructor(e,i){const a=i.getAttribute("directive")||i.getAttribute("type");let r=i.getAttribute("expression")||i.getAttribute(a)||"";r.startsWith("{{")&&(r=r.trim().slice(2,-2).trim()),super(e),this.expression=r,this.template=i,this.directive=a}}function Zb(t,e,i,a=null){let r=0,n,s,d,o=i.length,u=e.length;for(;r<o&&r<u&&e[r]==i[r];)r++;for(;r<o&&r<u&&i[o-1]==e[u-1];)a=i[--u,--o];if(r==u)for(;r<o;)t.insertBefore(i[r++],a);if(r==o)for(;r<u;)t.removeChild(e[r++]);else{for(n=e[r];r<o;)d=i[r++],s=n?n.nextSibling:a,n==d?n=s:r<o&&i[r]==s?(t.replaceChild(d,n),n=s):t.insertBefore(d,n);for(;n!=a;)s=n.nextSibling,t.removeChild(n),n=s}return i}const oc={string:t=>String(t)};class km{constructor(e){this.template=e,this.state=void 0}}const ni=new WeakMap,si=new WeakMap,Zo={partial:(t,e)=>{e[t.expression]=new km(t.template)},if:(t,e)=>{var i;if(Sm(t.expression,e))if(ni.get(t)!==t.template){ni.set(t,t.template);const a=new Vs(t.template,e,gd);t.replace(a),si.set(t,a)}else(i=si.get(t))==null||i.update(e);else t.replace(""),ni.delete(t),si.delete(t)}},Qb=Object.keys(Zo),gd={processCallback(t,e,i){var a,r;if(i)for(const[n,s]of e){if(s instanceof ym){if(!s.directive){const o=Qb.find(u=>s.template.hasAttribute(u));o&&(s.directive=o,s.expression=s.template.getAttribute(o))}(a=Zo[s.directive])==null||a.call(Zo,s,i);continue}let d=Sm(n,i);if(d instanceof km){ni.get(s)!==d.template?(ni.set(s,d.template),d=new Vs(d.template,d.state,gd),s.value=d,si.set(s,d)):(r=si.get(s))==null||r.update(d.state);continue}d?(s instanceof Ke&&s.attributeName.startsWith("aria-")&&(d=String(d)),s instanceof Ke?typeof d=="boolean"?s.booleanValue=d:typeof d=="function"?s.element[s.attributeName]=d:s.value=d:(s.value=d,ni.delete(s),si.delete(s))):s instanceof Ke?s.value=void 0:(s.value=void 0,ni.delete(s),si.delete(s))}}},lc={"!":t=>!t,"!!":t=>!!t,"==":(t,e)=>t==e,"!=":(t,e)=>t!=e,">":(t,e)=>t>e,">=":(t,e)=>t>=e,"<":(t,e)=>t<e,"<=":(t,e)=>t<=e,"??":(t,e)=>t??e,"|":(t,e)=>{var i;return(i=oc[e])==null?void 0:i.call(oc,t)}};function zb(t){return Xb(t,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:e})=>e!=="ws")}function Sm(t,e={}){var i,a,r,n,s,d,o;const u=zb(t);if(u.length===0||u.some(({type:h})=>!h))return xa(t);if(((i=u[0])==null?void 0:i.token)===">"){const h=e[(a=u[1])==null?void 0:a.token];if(!h)return xa(t);const p={...e};h.state=p;const v=u.slice(2);for(let E=0;E<v.length;E+=3){const g=(r=v[E])==null?void 0:r.token,f=(n=v[E+1])==null?void 0:n.token,_=(s=v[E+2])==null?void 0:s.token;g&&f==="="&&(p[g]=Na(_,e))}return h}if(u.length===1)return Gr(u[0])?Na(u[0].token,e):xa(t);if(u.length===2){const h=(d=u[0])==null?void 0:d.token,p=lc[h];if(!p||!Gr(u[1]))return xa(t);const v=Na(u[1].token,e);return p(v)}if(u.length===3){const h=(o=u[1])==null?void 0:o.token,p=lc[h];if(!p||!Gr(u[0])||!Gr(u[2]))return xa(t);const v=Na(u[0].token,e);if(h==="|")return p(v,u[2].token);const E=Na(u[2].token,e);return p(v,E)}}function xa(t){return console.warn(`Warning: invalid expression \`${t}\``),!1}function Gr({type:t}){return["number","boolean","string","param"].includes(t)}function Na(t,e){const i=t[0],a=t.slice(-1);return t==="true"||t==="false"?t==="true":i===a&&["'",'"'].includes(i)?t.slice(1,-1):dh(t)?parseFloat(t):e[t]}function Xb(t,e){let i,a,r;const n=[];for(;t;){r=null,i=t.length;for(const s in e)a=e[s].exec(t),a&&a.index<i&&(r={token:a[0],type:s,matches:a.slice(1)},i=a.index);i&&n.push({token:t.substr(0,i),type:void 0}),r&&n.push(r),t=t.substr(i+(r?r.token.length:0))}return n}var _d=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Qo=(t,e,i)=>(_d(t,e,"read from private field"),i?i.call(t):e.get(t)),Pa=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},oi=(t,e,i,a)=>(_d(t,e,"write to private field"),e.set(t,i),i),no=(t,e,i)=>(_d(t,e,"access private method"),i),ji,xn,ea,zo,Im,Nn,Xo;const so={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},Rm=ne.createElement("template");Rm.innerHTML=`
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-captions-button:not([mediasubtitleslist]),
    media-captions-menu:not([mediasubtitleslist]),
    media-captions-menu-button:not([mediasubtitleslist]),
    media-audio-track-menu[mediaaudiotrackunavailable],
    media-audio-track-menu-button[mediaaudiotrackunavailable],
    media-rendition-menu[mediarenditionunavailable],
    media-rendition-menu-button[mediarenditionunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;class Ys extends c.HTMLElement{constructor(){super(),Pa(this,zo),Pa(this,Nn),Pa(this,ji,void 0),Pa(this,xn,void 0),Pa(this,ea,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer());const e=new MutationObserver(i=>{var a;this.mediaController&&!((a=this.mediaController)!=null&&a.breakpointsComputed)||i.some(r=>{const n=r.target;return n===this?!0:n.localName!=="media-controller"?!1:!!(so[r.attributeName]||r.attributeName.startsWith("breakpoint"))})&&this.render()});e.observe(this,{attributes:!0}),e.observe(this.renderRoot,{attributes:!0,subtree:!0}),this.addEventListener(yt.BREAKPOINTS_COMPUTED,this.render),no(this,zo,Im).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var e;return(e=Qo(this,ji))!=null?e:this.constructor.template}set template(e){if(e===null){this.removeAttribute("template");return}typeof e=="string"?this.setAttribute("template",e):e instanceof HTMLTemplateElement&&(oi(this,ji,e),oi(this,ea,null),this.createRenderer())}get props(){var e,i,a;const r=[...Array.from((i=(e=this.mediaController)==null?void 0:e.attributes)!=null?i:[]).filter(({name:s})=>so[s]||s.startsWith("breakpoint")),...Array.from(this.attributes)],n={};for(const s of r){const d=(a=so[s.name])!=null?a:tE(s.name);let{value:o}=s;o!=null?(dh(o)&&(o=parseFloat(o)),n[d]=o===""?!0:o):n[d]=!1}return n}attributeChangedCallback(e,i,a){e==="template"&&i!=a&&no(this,Nn,Xo).call(this)}connectedCallback(){no(this,Nn,Xo).call(this)}createRenderer(){this.template instanceof HTMLTemplateElement&&this.template!==Qo(this,xn)&&(oi(this,xn,this.template),this.renderer=new Vs(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(Rm.content.cloneNode(!0),this.renderer))}render(){var e;(e=this.renderer)==null||e.update(this.props)}}ji=new WeakMap;xn=new WeakMap;ea=new WeakMap;zo=new WeakSet;Im=function(t){if(Object.prototype.hasOwnProperty.call(this,t)){const e=this[t];delete this[t],this[t]=e}};Nn=new WeakSet;Xo=function(){var t;const e=this.getAttribute("template");if(!e||e===Qo(this,ea))return;const i=this.getRootNode(),a=(t=i?.getElementById)==null?void 0:t.call(i,e);if(a){oi(this,ea,e),oi(this,ji,a),this.createRenderer();return}Jb(e)&&(oi(this,ea,e),jb(e).then(r=>{const n=ne.createElement("template");n.innerHTML=r,oi(this,ji,n),this.createRenderer()}).catch(console.error))};Ys.observedAttributes=["template"];Ys.processor=gd;function Jb(t){if(!/^(\/|\.\/|https?:\/\/)/.test(t))return!1;const e=/^https?:\/\//.test(t)?void 0:location.origin;try{new URL(t,e)}catch{return!1}return!0}async function jb(t){const e=await fetch(t);if(e.status!==200)throw new Error(`Failed to load resource: the server responded with a status of ${e.status}`);return e.text()}c.customElements.get("media-theme")||c.customElements.define("media-theme",Ys);function ef({anchor:t,floating:e,placement:i}){const a=tf({anchor:t,floating:e}),{x:r,y:n}=rf(a,i);return{x:r,y:n}}function tf({anchor:t,floating:e}){return{anchor:af(t,e.offsetParent),floating:{x:0,y:0,width:e.offsetWidth,height:e.offsetHeight}}}function af(t,e){var i;const a=t.getBoundingClientRect(),r=(i=e?.getBoundingClientRect())!=null?i:{x:0,y:0};return{x:a.x-r.x,y:a.y-r.y,width:a.width,height:a.height}}function rf({anchor:t,floating:e},i){const a=nf(i)==="x"?"y":"x",r=a==="y"?"height":"width",n=Cm(i),s=t.x+t.width/2-e.width/2,d=t.y+t.height/2-e.height/2,o=t[r]/2-e[r]/2;let u;switch(n){case"top":u={x:s,y:t.y-e.height};break;case"bottom":u={x:s,y:t.y+t.height};break;case"right":u={x:t.x+t.width,y:d};break;case"left":u={x:t.x-e.width,y:d};break;default:u={x:t.x,y:t.y}}switch(i.split("-")[1]){case"start":u[a]-=o;break;case"end":u[a]+=o;break}return u}function Cm(t){return t.split("-")[0]}function nf(t){return["top","bottom"].includes(Cm(t))?"y":"x"}class Td extends Event{constructor({action:e="auto",relatedTarget:i,...a}){super("invoke",a),this.action=e,this.relatedTarget=i}}class sf extends Event{constructor({newState:e,oldState:i,...a}){super("toggle",a),this.newState=e,this.oldState=i}}var Ad=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},U=(t,e,i)=>(Ad(t,e,"read from private field"),i?i.call(t):e.get(t)),K=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},tt=(t,e,i,a)=>(Ad(t,e,"write to private field"),e.set(t,i),i),V=(t,e,i)=>(Ad(t,e,"access private method"),i),it,ci,Wt,Pn,Un,hi,kr,Jo,Mm,gs,yd,_s,$n,jo,el,Lm,tl,wm,il,Dm,ta,ia,aa,Sr,Ts,kd,al,Om,Sd,xm,rl,Nm,Id,Pm,nl,Um,sl,$m,hr,As,ol,Hm,mr,ys,Hn,ll;function la({type:t,text:e,value:i,checked:a}){const r=ne.createElement("media-chrome-menu-item");r.type=t,r.part.add("menu-item"),r.part.add(t),r.value=i,r.checked=a;const n=ne.createElement("span");return n.textContent=e,r.append(n),r}function mi(t,e){let i=t.querySelector(`:scope > [slot="${e}"]`);if(i?.nodeName=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)return i=i.cloneNode(!0),i;const a=t.shadowRoot.querySelector(`[name="${e}"] > svg`);return a?a.cloneNode(!0):""}function of(t){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, var(--_menu-bg))));
        border-radius: var(--media-menu-border-radius);
        border: var(--media-menu-border, none);
        display: var(--media-menu-display, inline-flex) !important;
        
        transition: var(--media-menu-transition-in,
          visibility 0s,
          opacity .2s ease-out,
          transform .15s ease-out,
          left .2s ease-in-out,
          min-width .2s ease-in-out,
          min-height .2s ease-in-out
        ) !important;
        
        visibility: var(--media-menu-visibility, visible);
        opacity: var(--media-menu-opacity, 1);
        max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
        transform: var(--media-menu-transform-in, translateY(0) scale(1));
        flex-direction: column;
        
        min-height: 0;
        position: relative;
        bottom: var(--_menu-bottom);
        box-sizing: border-box;
      } 

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([hidden]) {
        transition: var(--media-menu-transition-out,
          visibility .15s ease-in,
          opacity .15s ease-in,
          transform .15s ease-in
        ) !important;
        visibility: var(--media-menu-hidden-visibility, hidden);
        opacity: var(--media-menu-hidden-opacity, 0);
        max-height: var(--media-menu-hidden-max-height,
          var(--media-menu-max-height, var(--_menu-max-height, 300px)));
        transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
        pointer-events: none;
      }

      :host([slot="submenu"]) {
        background: none;
        width: 100%;
        min-height: 100%;
        position: absolute;
        bottom: 0;
        right: -100%;
      }

      #container {
        display: flex;
        flex-direction: column;
        min-height: 0;
        transition: transform .2s ease-out;
        transform: translate(0, 0);
      }

      #container.has-expanded {
        transition: transform .2s ease-in;
        transform: translate(-100%, 0);
      }

      button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        outline: inherit;
        display: inline-flex;
        align-items: center;
      }

      slot[name="header"][hidden] {
        display: none;
      }

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .7em;
        border-bottom: 1px solid rgb(255 255 255 / .25);
        cursor: var(--media-cursor, default);
      }

      slot[name="header"] > button[part~="back"],
      slot[name="header"]::slotted(button[part~="back"]) {
        cursor: var(--media-cursor, pointer);
      }

      svg[part~="back"] {
        height: var(--media-menu-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
        margin-right: .5ch;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap);
        flex-direction: var(--media-menu-flex-direction, column);
        overflow: var(--media-menu-overflow, hidden auto);
        display: flex;
        min-height: 0;
      }

      :host([role="menu"]) slot:not([name]) {
        padding-block: .4em;
      }

      slot:not([name])::slotted([role="menu"]) {
        background: none;
      }

      media-chrome-menu-item > span {
        margin-right: .5ch;
        max-width: var(--media-menu-item-max-width);
        text-overflow: ellipsis;
        overflow: hidden;
      }
    </style>
    <style id="layout-row" media="width:0">

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .5em;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap, .25em);
        flex-direction: var(--media-menu-flex-direction, row);
        padding-inline: .5em;
      }

      media-chrome-menu-item {
        padding: .3em .5em;
      }

      media-chrome-menu-item[aria-checked="true"] {
        background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
      }

      
      media-chrome-menu-item::part(checked-indicator) {
        display: var(--media-menu-item-checked-indicator-display, none);
      }
    </style>
    <div id="container" part="container">
      <slot name="header" hidden>
        <button part="back button" aria-label="Back to previous menu">
          <slot name="back-icon">
            <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
              <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
            </svg>
          </slot>
          <slot name="title"></slot>
        </button>
      </slot>
      <slot></slot>
    </div>
    <slot name="checked-indicator" hidden></slot>
  `}const Yt={STYLE:"style",HIDDEN:"hidden",DISABLED:"disabled",ANCHOR:"anchor"};class Oe extends c.HTMLElement{constructor(){if(super(),K(this,Jo),K(this,gs),K(this,$n),K(this,el),K(this,tl),K(this,il),K(this,aa),K(this,Ts),K(this,al),K(this,Sd),K(this,rl),K(this,Id),K(this,nl),K(this,sl),K(this,hr),K(this,ol),K(this,mr),K(this,Hn),K(this,it,null),K(this,ci,null),K(this,Wt,null),K(this,Pn,new Set),K(this,Un,void 0),K(this,hi,!1),K(this,kr,null),K(this,_s,()=>{const e=U(this,Pn),i=new Set(this.items);for(const a of e)i.has(a)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:a}));for(const a of i)e.has(a)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:a}));tt(this,Pn,i)}),K(this,ta,()=>{V(this,aa,Sr).call(this),V(this,Ts,kd).call(this,!1)}),K(this,ia,()=>{V(this,aa,Sr).call(this)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=Se(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),this.shadowRoot.addEventListener("slotchange",this),tt(this,Un,new MutationObserver(U(this,_s))),U(this,Un).observe(this.defaultSlot,{childList:!0})}static get observedAttributes(){return[Yt.DISABLED,Yt.HIDDEN,Yt.STYLE,Yt.ANCHOR,$.MEDIA_CONTROLLER]}static formatMenuItemText(e,i){return e}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(e){switch(e.type){case"slotchange":V(this,Jo,Mm).call(this,e);break;case"invoke":V(this,el,Lm).call(this,e);break;case"click":V(this,al,Om).call(this,e);break;case"toggle":V(this,rl,Nm).call(this,e);break;case"focusout":V(this,nl,Um).call(this,e);break;case"keydown":V(this,sl,$m).call(this,e);break}}connectedCallback(){var e,i;tt(this,kr,Bl(this.shadowRoot,":host")),V(this,$n,jo).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),tt(this,it,Ao(this)),(i=(e=U(this,it))==null?void 0:e.associateElement)==null||i.call(e,this),this.hidden||(na(Ir(this),U(this,ta)),na(this,U(this,ia))),V(this,gs,yd).call(this)}disconnectedCallback(){var e,i;sa(Ir(this),U(this,ta)),sa(this,U(this,ia)),this.disable(),(i=(e=U(this,it))==null?void 0:e.unassociateElement)==null||i.call(e,this),tt(this,it,null)}attributeChangedCallback(e,i,a){var r,n,s,d;e===Yt.HIDDEN&&a!==i?(U(this,hi)||tt(this,hi,!0),this.hidden?V(this,il,Dm).call(this):V(this,tl,wm).call(this),this.dispatchEvent(new sf({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):e===$.MEDIA_CONTROLLER?(i&&((n=(r=U(this,it))==null?void 0:r.unassociateElement)==null||n.call(r,this),tt(this,it,null)),a&&this.isConnected&&(tt(this,it,Ao(this)),(d=(s=U(this,it))==null?void 0:s.associateElement)==null||d.call(s,this))):e===Yt.DISABLED&&a!==i?a==null?this.enable():this.disable():e===Yt.STYLE&&a!==i&&V(this,$n,jo).call(this)}formatMenuItemText(e,i){return this.constructor.formatMenuItemText(e,i)}get anchor(){return this.getAttribute("anchor")}set anchor(e){this.setAttribute("anchor",`${e}`)}get anchorElement(){var e;return this.anchor?(e=Os(this))==null?void 0:e.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(lf)}get radioGroupItems(){return this.items.filter(e=>e.role==="menuitemradio")}get checkedItems(){return this.items.filter(e=>e.checked)}get value(){var e,i;return(i=(e=this.checkedItems[0])==null?void 0:e.value)!=null?i:""}set value(e){const i=this.items.find(a=>a.value===e);i&&V(this,Hn,ll).call(this,i)}focus(){if(tt(this,ci,Hl()),this.items.length){V(this,mr,ys).call(this,this.items[0]),this.items[0].focus();return}const e=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');e?.focus()}handleSelect(e){var i;const a=V(this,hr,As).call(this,e);a&&(V(this,Hn,ll).call(this,a,a.type==="checkbox"),U(this,Wt)&&!this.hidden&&((i=U(this,ci))==null||i.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(e){var i,a;const{key:r}=e,n=this.items,s=(a=(i=V(this,hr,As).call(this,e))!=null?i:V(this,ol,Hm).call(this))!=null?a:n[0],d=n.indexOf(s);let o=Math.max(0,d);r==="ArrowDown"?o++:r==="ArrowUp"?o--:e.key==="Home"?o=0:e.key==="End"&&(o=n.length-1),o<0&&(o=n.length-1),o>n.length-1&&(o=0),V(this,mr,ys).call(this,n[o]),n[o].focus()}}it=new WeakMap;ci=new WeakMap;Wt=new WeakMap;Pn=new WeakMap;Un=new WeakMap;hi=new WeakMap;kr=new WeakMap;Jo=new WeakSet;Mm=function(t){const e=t.target;for(const i of e.assignedNodes({flatten:!0}))i.nodeType===3&&i.textContent.trim()===""&&i.remove();["header","title"].includes(e.name)&&V(this,gs,yd).call(this),e.name||U(this,_s).call(this)};gs=new WeakSet;yd=function(){const t=this.shadowRoot.querySelector('slot[name="header"]'),e=this.shadowRoot.querySelector('slot[name="title"]');t.hidden=e.assignedNodes().length===0&&t.assignedNodes().length===0};_s=new WeakMap;$n=new WeakSet;jo=function(){var t;const e=this.shadowRoot.querySelector("#layout-row"),i=(t=getComputedStyle(this).getPropertyValue("--media-menu-layout"))==null?void 0:t.trim();e.setAttribute("media",i==="row"?"":"width:0")};el=new WeakSet;Lm=function(t){tt(this,Wt,t.relatedTarget),kt(this,t.relatedTarget)||(this.hidden=!this.hidden)};tl=new WeakSet;wm=function(){var t;(t=U(this,Wt))==null||t.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),na(Ir(this),U(this,ta)),na(this,U(this,ia))};il=new WeakSet;Dm=function(){var t;(t=U(this,Wt))==null||t.setAttribute("aria-expanded","false"),sa(Ir(this),U(this,ta)),sa(this,U(this,ia))};ta=new WeakMap;ia=new WeakMap;aa=new WeakSet;Sr=function(t){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;const{x:e,y:i}=ef({anchor:this.anchorElement,floating:this,placement:"top-start"});t??(t=this.offsetWidth);const r=Ir(this).getBoundingClientRect(),n=r.width-e-t,s=r.height-i-this.offsetHeight,{style:d}=U(this,kr);d.setProperty("position","absolute"),d.setProperty("right",`${Math.max(0,n)}px`),d.setProperty("--_menu-bottom",`${s}px`);const o=getComputedStyle(this),h=d.getPropertyValue("--_menu-bottom")===o.bottom?s:parseFloat(o.bottom),p=r.height-h-parseFloat(o.marginBottom);this.style.setProperty("--_menu-max-height",`${p}px`)};Ts=new WeakSet;kd=function(t){const e=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),i=e?.querySelector('[role="menu"]'),{style:a}=U(this,kr);if(t||a.setProperty("--media-menu-transition-in","none"),i){const r=i.offsetHeight,n=Math.max(i.offsetWidth,e.offsetWidth);this.style.setProperty("min-width",`${n}px`),this.style.setProperty("min-height",`${r}px`),V(this,aa,Sr).call(this,n)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),V(this,aa,Sr).call(this);a.removeProperty("--media-menu-transition-in")};al=new WeakSet;Om=function(t){var e;if(t.stopPropagation(),t.composedPath().includes(U(this,Sd,xm))){(e=U(this,ci))==null||e.focus(),this.hidden=!0;return}const i=V(this,hr,As).call(this,t);!i||i.hasAttribute("disabled")||(V(this,mr,ys).call(this,i),this.handleSelect(t))};Sd=new WeakSet;xm=function(){var t;return(t=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))==null?void 0:t.find(i=>i.matches('button[part~="back"]'))};rl=new WeakSet;Nm=function(t){if(t.target===this)return;V(this,Id,Pm).call(this);const e=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(const i of e)i.invokeTargetElement!=t.target&&t.newState=="open"&&i.getAttribute("aria-expanded")=="true"&&!i.invokeTargetElement.hidden&&i.invokeTargetElement.dispatchEvent(new Td({relatedTarget:i}));for(const i of e)i.setAttribute("aria-expanded",`${!i.submenuElement.hidden}`);V(this,Ts,kd).call(this,!0)};Id=new WeakSet;Pm=function(){const e=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!e)};nl=new WeakSet;Um=function(t){var e;kt(this,t.relatedTarget)||(U(this,hi)&&((e=U(this,ci))==null||e.focus()),U(this,Wt)&&U(this,Wt)!==t.relatedTarget&&!this.hidden&&(this.hidden=!0))};sl=new WeakSet;$m=function(t){var e,i,a,r,n;const{key:s,ctrlKey:d,altKey:o,metaKey:u}=t;if(!(d||o||u)&&this.keysUsed.includes(s))if(t.preventDefault(),t.stopPropagation(),s==="Tab"){if(U(this,hi)){this.hidden=!0;return}t.shiftKey?(i=(e=this.previousElementSibling)==null?void 0:e.focus)==null||i.call(e):(r=(a=this.nextElementSibling)==null?void 0:a.focus)==null||r.call(a),this.blur()}else s==="Escape"?((n=U(this,ci))==null||n.focus(),U(this,hi)&&(this.hidden=!0)):s==="Enter"||s===" "?this.handleSelect(t):this.handleMove(t)};hr=new WeakSet;As=function(t){return t.composedPath().find(e=>["menuitemradio","menuitemcheckbox"].includes(e.role))};ol=new WeakSet;Hm=function(){return this.items.find(t=>t.tabIndex===0)};mr=new WeakSet;ys=function(t){for(const e of this.items)e.tabIndex=e===t?0:-1};Hn=new WeakSet;ll=function(t,e){const i=[...this.checkedItems];t.type==="radio"&&this.radioGroupItems.forEach(a=>a.checked=!1),e?t.checked=!t.checked:t.checked=!0,this.checkedItems.some((a,r)=>a!=i[r])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))};Oe.shadowRootOptions={mode:"open"};Oe.getTemplateHTML=of;function lf(t){return["menuitem","menuitemradio","menuitemcheckbox"].includes(t?.role)}function Ir(t){var e;return(e=t.getAttribute("bounds")?ca(t,`#${t.getAttribute("bounds")}`):fe(t)||t.parentElement)!=null?e:t}c.customElements.get("media-chrome-menu")||c.customElements.define("media-chrome-menu",Oe);var Rd=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},lt=(t,e,i)=>(Rd(t,e,"read from private field"),i?i.call(t):e.get(t)),pt=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},oo=(t,e,i,a)=>(Rd(t,e,"write to private field"),e.set(t,i),i),Fe=(t,e,i)=>(Rd(t,e,"access private method"),i),Bn,pr,dl,Bm,ks,Cd,Md,Wm,dt,da,Rr,ul,Fm,Wn,cl;function df(t){return`
    <style>
      :host {
        transition: var(--media-menu-item-transition,
          background .15s linear,
          opacity .2s ease-in-out
        );
        outline: var(--media-menu-item-outline, 0);
        outline-offset: var(--media-menu-item-outline-offset, -1px);
        cursor: var(--media-cursor, pointer);
        display: flex;
        align-items: center;
        align-self: stretch;
        justify-self: stretch;
        white-space: nowrap;
        white-space-collapse: collapse;
        text-wrap: nowrap;
        padding: .4em .8em .4em 1em;
      }

      :host(:focus-visible) {
        box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: var(--media-menu-item-hover-outline, 0);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host(:hover) {
        cursor: var(--media-cursor, pointer);
        background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
        outline: var(--media-menu-item-hover-outline);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host([aria-checked="true"]) {
        background: var(--media-menu-item-checked-background);
      }

      :host([hidden]) {
        display: none;
      }

      :host([disabled]) {
        pointer-events: none;
        color: rgba(255, 255, 255, .3);
      }

      slot:not([name]) {
        width: 100%;
      }

      slot:not([name="submenu"]) {
        display: inline-flex;
        align-items: center;
        transition: inherit;
        opacity: var(--media-menu-item-opacity, 1);
      }

      slot[name="description"] {
        justify-content: end;
      }

      slot[name="description"] > span {
        display: inline-block;
        margin-inline: 1em .2em;
        max-width: var(--media-menu-item-description-max-width, 100px);
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: .8em;
        font-weight: 400;
        text-align: right;
        position: relative;
        top: .04em;
      }

      slot[name="checked-indicator"] {
        display: none;
      }

      :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
        display: var(--media-menu-item-checked-indicator-display, inline-block);
      }

      
      svg, img, ::slotted(svg), ::slotted(img) {
        height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
      }

      
      [part~="indicator"],
      ::slotted([part~="indicator"]) {
        fill: var(--media-menu-item-indicator-fill,
          var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
        height: var(--media-menu-item-indicator-height, 1.25em);
        margin-right: .5ch;
      }

      [part~="checked-indicator"] {
        visibility: hidden;
      }

      :host([aria-checked="true"]) [part~="checked-indicator"] {
        visibility: visible;
      }
    </style>
    <slot name="checked-indicator">
      <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
        <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
      </svg>
    </slot>
    <slot name="prefix"></slot>
    <slot></slot>
    <slot name="description"></slot>
    <slot name="suffix">
      ${this.getSuffixSlotInnerHTML(t)}
    </slot>
    <slot name="submenu"></slot>
  `}function uf(t){return""}const Ie={TYPE:"type",VALUE:"value",CHECKED:"checked",DISABLED:"disabled"};class Kt extends c.HTMLElement{constructor(){if(super(),pt(this,dl),pt(this,ks),pt(this,Md),pt(this,da),pt(this,ul),pt(this,Wn),pt(this,Bn,!1),pt(this,pr,void 0),pt(this,dt,()=>{var e,i;this.submenuElement.items&&this.setAttribute("submenusize",`${this.submenuElement.items.length}`);const a=this.shadowRoot.querySelector('slot[name="description"]'),r=(e=this.submenuElement.checkedItems)==null?void 0:e[0],n=(i=r?.dataset.description)!=null?i:r?.text,s=ne.createElement("span");s.textContent=n??"",a.replaceChildren(s)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=Se(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.shadowRoot.addEventListener("slotchange",this)}static get observedAttributes(){return[Ie.TYPE,Ie.DISABLED,Ie.CHECKED,Ie.VALUE]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),Ua(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(e){switch(e.type){case"slotchange":Fe(this,dl,Bm).call(this,e);break;case"click":this.handleClick(e);break;case"keydown":Fe(this,ul,Fm).call(this,e);break;case"keyup":Fe(this,da,Rr).call(this,e);break}}attributeChangedCallback(e,i,a){e===Ie.CHECKED&&Ua(this)&&!lt(this,Bn)?this.setAttribute("aria-checked",a!=null?"true":"false"):e===Ie.TYPE&&a!==i?this.role="menuitem"+a:e===Ie.DISABLED&&a!==i&&(a==null?this.enable():this.disable())}connectedCallback(){this.hasAttribute(Ie.DISABLED)||this.enable(),this.role="menuitem"+this.type,oo(this,pr,hl(this,this.parentNode)),Fe(this,Wn,cl).call(this),this.submenuElement&&Fe(this,ks,Cd).call(this)}disconnectedCallback(){this.disable(),Fe(this,Wn,cl).call(this),oo(this,pr,null)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?(e=Os(this))==null?void 0:e.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var e;return(e=this.getAttribute(Ie.TYPE))!=null?e:""}set type(e){this.setAttribute(Ie.TYPE,`${e}`)}get value(){var e;return(e=this.getAttribute(Ie.VALUE))!=null?e:this.text}set value(e){this.setAttribute(Ie.VALUE,e)}get text(){var e;return((e=this.textContent)!=null?e:"").trim()}get checked(){if(Ua(this))return this.getAttribute("aria-checked")==="true"}set checked(e){Ua(this)&&(oo(this,Bn,!0),this.setAttribute("aria-checked",e?"true":"false"),e?this.part.add("checked"):this.part.remove("checked"))}handleClick(e){Ua(this)||this.invokeTargetElement&&kt(this,e.target)&&this.invokeTargetElement.dispatchEvent(new Td({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}}Bn=new WeakMap;pr=new WeakMap;dl=new WeakSet;Bm=function(t){const e=t.target;if(!e?.name)for(const a of e.assignedNodes({flatten:!0}))a instanceof Text&&a.textContent.trim()===""&&a.remove();e.name==="submenu"&&(this.submenuElement?Fe(this,ks,Cd).call(this):Fe(this,Md,Wm).call(this))};ks=new WeakSet;Cd=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",lt(this,dt)),this.submenuElement.addEventListener("addmenuitem",lt(this,dt)),this.submenuElement.addEventListener("removemenuitem",lt(this,dt)),lt(this,dt).call(this)};Md=new WeakSet;Wm=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",lt(this,dt)),this.submenuElement.removeEventListener("addmenuitem",lt(this,dt)),this.submenuElement.removeEventListener("removemenuitem",lt(this,dt)),lt(this,dt).call(this)};dt=new WeakMap;da=new WeakSet;Rr=function(t){const{key:e}=t;if(!this.keysUsed.includes(e)){this.removeEventListener("keyup",Fe(this,da,Rr));return}this.handleClick(t)};ul=new WeakSet;Fm=function(t){const{metaKey:e,altKey:i,key:a}=t;if(e||i||!this.keysUsed.includes(a)){this.removeEventListener("keyup",Fe(this,da,Rr));return}this.addEventListener("keyup",Fe(this,da,Rr),{once:!0})};Wn=new WeakSet;cl=function(){var t;const e=(t=lt(this,pr))==null?void 0:t.radioGroupItems;if(!e)return;let i=e.filter(a=>a.getAttribute("aria-checked")==="true").pop();i||(i=e[0]);for(const a of e)a.setAttribute("aria-checked","false");i?.setAttribute("aria-checked","true")};Kt.shadowRootOptions={mode:"open"};Kt.getTemplateHTML=df;Kt.getSuffixSlotInnerHTML=uf;function Ua(t){return t.type==="radio"||t.type==="checkbox"}function hl(t,e){if(!t)return null;const{host:i}=t.getRootNode();return!e&&i?hl(t,i):e?.items?e:hl(e,e?.parentNode)}c.customElements.get("media-chrome-menu-item")||c.customElements.define("media-chrome-menu-item",Kt);function cf(t){return`
    ${Oe.getTemplateHTML(t)}
    <style>
      :host {
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
        min-width: var(--media-settings-menu-min-width, 170px);
        border-radius: 2px 2px 0 0;
        overflow: hidden;
      }

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([role="menu"]) {
        
        justify-content: end;
      }

      slot:not([name]) {
        justify-content: var(--media-settings-menu-justify-content);
        flex-direction: var(--media-settings-menu-flex-direction, column);
        overflow: visible;
      }

      #container.has-expanded {
        --media-settings-menu-item-opacity: 0;
      }
    </style>
  `}class Km extends Oe{get anchorElement(){return this.anchor!=="auto"?super.anchorElement:fe(this).querySelector("media-settings-menu-button")}}Km.getTemplateHTML=cf;c.customElements.get("media-settings-menu")||c.customElements.define("media-settings-menu",Km);function hf(t){return`
    ${Kt.getTemplateHTML.call(this,t)}
    <style>
      slot:not([name="submenu"]) {
        opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
      }

      :host([aria-expanded="true"]:hover) {
        background: transparent;
      }
    </style>
  `}function mf(t){return`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `}class Gs extends Kt{}Gs.shadowRootOptions={mode:"open"};Gs.getTemplateHTML=hf;Gs.getSuffixSlotInnerHTML=mf;c.customElements.get("media-settings-menu-item")||c.customElements.define("media-settings-menu-item",Gs);class va extends ce{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?(e=Os(this))==null?void 0:e.querySelector(`#${this.invokeTarget}`):null}handleClick(){var e;(e=this.invokeTargetElement)==null||e.dispatchEvent(new Td({relatedTarget:this}))}}c.customElements.get("media-chrome-menu-button")||c.customElements.define("media-chrome-menu-button",va);function pf(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
      </svg>
    </slot>
  `}function vf(){return I("Settings")}class Ld extends va{static get observedAttributes(){return[...super.observedAttributes,"target"]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",I("settings"))}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:fe(this).querySelector("media-settings-menu")}}Ld.getSlotTemplateHTML=pf;Ld.getTooltipContentHTML=vf;c.customElements.get("media-settings-menu-button")||c.customElements.define("media-settings-menu-button",Ld);var wd=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Vm=(t,e,i)=>(wd(t,e,"read from private field"),i?i.call(t):e.get(t)),qr=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ml=(t,e,i,a)=>(wd(t,e,"write to private field"),e.set(t,i),i),Zr=(t,e,i)=>(wd(t,e,"access private method"),i),ir,Ss,Fn,pl,Kn,vl;class Ef extends Oe{constructor(){super(...arguments),qr(this,Fn),qr(this,Kn),qr(this,ir,[]),qr(this,Ss,void 0)}static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_AUDIO_TRACK_LIST,l.MEDIA_AUDIO_TRACK_ENABLED,l.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===l.MEDIA_AUDIO_TRACK_ENABLED&&i!==a?this.value=a:e===l.MEDIA_AUDIO_TRACK_LIST&&i!==a&&(ml(this,ir,Jv(a??"")),Zr(this,Fn,pl).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",Zr(this,Kn,vl))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",Zr(this,Kn,vl))}get anchorElement(){var e;return this.anchor!=="auto"?super.anchorElement:(e=fe(this))==null?void 0:e.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return Vm(this,ir)}set mediaAudioTrackList(e){ml(this,ir,e),Zr(this,Fn,pl).call(this)}get mediaAudioTrackEnabled(){var e;return(e=q(this,l.MEDIA_AUDIO_TRACK_ENABLED))!=null?e:""}set mediaAudioTrackEnabled(e){Z(this,l.MEDIA_AUDIO_TRACK_ENABLED,e)}}ir=new WeakMap;Ss=new WeakMap;Fn=new WeakSet;pl=function(){if(Vm(this,Ss)===JSON.stringify(this.mediaAudioTrackList))return;ml(this,Ss,JSON.stringify(this.mediaAudioTrackList));const t=this.mediaAudioTrackList;this.defaultSlot.textContent="",t.sort((e,i)=>e.id.localeCompare(i.id,void 0,{numeric:!0}));for(const e of t){const i=this.formatMenuItemText(e.label,e),a=la({type:"radio",text:i,value:`${e.id}`,checked:e.enabled});a.prepend(mi(this,"checked-indicator")),this.defaultSlot.append(a)}};Kn=new WeakSet;vl=function(){if(this.value==null)return;const t=new c.CustomEvent(y.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(t)};c.customElements.get("media-audio-track-menu")||c.customElements.define("media-audio-track-menu",Ef);const bf=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`;function ff(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${bf}</slot>
  `}function gf(){return I("Audio")}const dc=t=>{const e=I("Audio");t.setAttribute("aria-label",e)};class Dd extends va{static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_AUDIO_TRACK_ENABLED,l.MEDIA_AUDIO_TRACK_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),dc(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===l.MEDIA_LANG&&dc(this)}get invokeTargetElement(){var e;return this.invokeTarget!=null?super.invokeTargetElement:(e=fe(this))==null?void 0:e.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var e;return(e=q(this,l.MEDIA_AUDIO_TRACK_ENABLED))!=null?e:""}set mediaAudioTrackEnabled(e){Z(this,l.MEDIA_AUDIO_TRACK_ENABLED,e)}}Dd.getSlotTemplateHTML=ff;Dd.getTooltipContentHTML=gf;c.customElements.get("media-audio-track-menu-button")||c.customElements.define("media-audio-track-menu-button",Dd);var Od=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},_f=(t,e,i)=>(Od(t,e,"read from private field"),e.get(t)),lo=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Tf=(t,e,i,a)=>(Od(t,e,"write to private field"),e.set(t,i),i),Qr=(t,e,i)=>(Od(t,e,"access private method"),i),Is,Vn,El,Yn,bl;const Af=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`;function yf(t){return`
    ${Oe.getTemplateHTML(t)}
    <slot name="captions-indicator" hidden>${Af}</slot>
  `}class Ym extends Oe{constructor(){super(...arguments),lo(this,Vn),lo(this,Yn),lo(this,Is,void 0)}static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_SUBTITLES_LIST,l.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===l.MEDIA_SUBTITLES_LIST&&i!==a?Qr(this,Vn,El).call(this):e===l.MEDIA_SUBTITLES_SHOWING&&i!==a&&(this.value=a||"",Qr(this,Vn,El).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",Qr(this,Yn,bl))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",Qr(this,Yn,bl))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:fe(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return uc(this,l.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){cc(this,l.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return uc(this,l.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){cc(this,l.MEDIA_SUBTITLES_SHOWING,e)}}Is=new WeakMap;Vn=new WeakSet;El=function(){var t;const e=_f(this,Is)!==JSON.stringify(this.mediaSubtitlesList),i=this.value!==this.getAttribute(l.MEDIA_SUBTITLES_SHOWING);if(!e&&!i)return;Tf(this,Is,JSON.stringify(this.mediaSubtitlesList)),this.defaultSlot.textContent="";const a=!this.value,r=la({type:"radio",text:this.formatMenuItemText(I("Off")),value:"off",checked:a});r.prepend(mi(this,"checked-indicator")),this.defaultSlot.append(r);const n=this.mediaSubtitlesList;for(const s of n){const d=la({type:"radio",text:this.formatMenuItemText(s.label,s),value:Io(s),checked:this.value==Io(s)});d.prepend(mi(this,"checked-indicator")),((t=s.kind)!=null?t:"subs")==="captions"&&d.append(mi(this,"captions-indicator")),this.defaultSlot.append(d)}};Yn=new WeakSet;bl=function(){const t=this.mediaSubtitlesShowing,e=this.getAttribute(l.MEDIA_SUBTITLES_SHOWING),i=this.value!==e;if(t?.length&&i&&this.dispatchEvent(new c.CustomEvent(y.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:t})),!this.value||!i)return;const a=new c.CustomEvent(y.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)};Ym.getTemplateHTML=yf;const uc=(t,e)=>{const i=t.getAttribute(e);return i?$s(i):[]},cc=(t,e,i)=>{if(!i?.length){t.removeAttribute(e);return}const a=gr(i);t.getAttribute(e)!==a&&t.setAttribute(e,a)};c.customElements.get("media-captions-menu")||c.customElements.define("media-captions-menu",Ym);const kf=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,Sf=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`;function If(){return`
    <style>
      :host([data-captions-enabled="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([data-captions-enabled="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${kf}</slot>
      <slot name="off">${Sf}</slot>
    </slot>
  `}function Rf(){return I("Captions")}const hc=t=>{t.setAttribute("data-captions-enabled",Mh(t).toString())},mc=t=>{t.setAttribute("aria-label",I("closed captions"))};class xd extends va{static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_SUBTITLES_LIST,l.MEDIA_SUBTITLES_SHOWING,l.MEDIA_LANG]}connectedCallback(){super.connectedCallback(),mc(this),hc(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===l.MEDIA_SUBTITLES_SHOWING?hc(this):e===l.MEDIA_LANG&&mc(this)}get invokeTargetElement(){var e;return this.invokeTarget!=null?super.invokeTargetElement:(e=fe(this))==null?void 0:e.querySelector("media-captions-menu")}get mediaSubtitlesList(){return pc(this,l.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){vc(this,l.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return pc(this,l.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){vc(this,l.MEDIA_SUBTITLES_SHOWING,e)}}xd.getSlotTemplateHTML=If;xd.getTooltipContentHTML=Rf;const pc=(t,e)=>{const i=t.getAttribute(e);return i?$s(i):[]},vc=(t,e,i)=>{if(!i?.length){t.removeAttribute(e);return}const a=gr(i);t.getAttribute(e)!==a&&t.setAttribute(e,a)};c.customElements.get("media-captions-menu-button")||c.customElements.define("media-captions-menu-button",xd);var Gm=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Bi=(t,e,i)=>(Gm(t,e,"read from private field"),i?i.call(t):e.get(t)),uo=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ti=(t,e,i)=>(Gm(t,e,"access private method"),i),Ut,Wi,ar,Gn,fl;const co={RATES:"rates"};class Cf extends Oe{constructor(){super(),uo(this,Wi),uo(this,Gn),uo(this,Ut,new Kl(this,co.RATES,{defaultValue:lm})),Ti(this,Wi,ar).call(this)}static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_PLAYBACK_RATE,co.RATES]}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===l.MEDIA_PLAYBACK_RATE&&i!=a?(this.value=a,Ti(this,Wi,ar).call(this)):e===co.RATES&&i!=a&&(Bi(this,Ut).value=a,Ti(this,Wi,ar).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",Ti(this,Gn,fl))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",Ti(this,Gn,fl))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:fe(this).querySelector("media-playback-rate-menu-button")}get rates(){return Bi(this,Ut)}set rates(e){e?Array.isArray(e)?Bi(this,Ut).value=e.join(" "):typeof e=="string"&&(Bi(this,Ut).value=e):Bi(this,Ut).value="",Ti(this,Wi,ar).call(this)}get mediaPlaybackRate(){return G(this,l.MEDIA_PLAYBACK_RATE,qi)}set mediaPlaybackRate(e){j(this,l.MEDIA_PLAYBACK_RATE,e)}}Ut=new WeakMap;Wi=new WeakSet;ar=function(){this.defaultSlot.textContent="";const t=this.mediaPlaybackRate,e=new Set(Array.from(Bi(this,Ut)).map(a=>Number(a)));t>0&&!e.has(t)&&e.add(t);const i=Array.from(e).sort((a,r)=>a-r);for(const a of i){const r=la({type:"radio",text:this.formatMenuItemText(`${a}x`,a),value:a.toString(),checked:t===a});r.prepend(mi(this,"checked-indicator")),this.defaultSlot.append(r)}};Gn=new WeakSet;fl=function(){if(!this.value)return;const t=new c.CustomEvent(y.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(t)};c.customElements.get("media-playback-rate-menu")||c.customElements.define("media-playback-rate-menu",Cf);const qn=1;function Mf(t){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
      
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${t.mediaplaybackrate||qn}x</slot>
  `}function Lf(){return I("Playback rate")}class Nd extends va{static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_PLAYBACK_RATE]}constructor(){var e;super(),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${(e=this.mediaPlaybackRate)!=null?e:qn}x`}attributeChangedCallback(e,i,a){if(super.attributeChangedCallback(e,i,a),e===l.MEDIA_PLAYBACK_RATE){const r=a?+a:Number.NaN,n=Number.isNaN(r)?qn:r;this.container.innerHTML=`${n}x`,this.setAttribute("aria-label",I("Playback rate {playbackRate}",{playbackRate:n}))}}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:fe(this).querySelector("media-playback-rate-menu")}get mediaPlaybackRate(){return G(this,l.MEDIA_PLAYBACK_RATE,qn)}set mediaPlaybackRate(e){j(this,l.MEDIA_PLAYBACK_RATE,e)}}Nd.getSlotTemplateHTML=Mf;Nd.getTooltipContentHTML=Lf;c.customElements.get("media-playback-rate-menu-button")||c.customElements.define("media-playback-rate-menu-button",Nd);var Pd=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},rr=(t,e,i)=>(Pd(t,e,"read from private field"),i?i.call(t):e.get(t)),zr=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ec=(t,e,i,a)=>(Pd(t,e,"write to private field"),e.set(t,i),i),Ai=(t,e,i)=>(Pd(t,e,"access private method"),i),nr,Zi,Fi,sr,Zn,gl;class wf extends Oe{constructor(){super(...arguments),zr(this,Fi),zr(this,Zn),zr(this,nr,[]),zr(this,Zi,{})}static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_RENDITION_LIST,l.MEDIA_RENDITION_SELECTED,l.MEDIA_RENDITION_UNAVAILABLE,l.MEDIA_HEIGHT]}static formatMenuItemText(e,i){return super.formatMenuItemText(e,i)}static formatRendition(e,{showBitrate:i=!1}={}){const a=`${Math.min(e.width,e.height)}p`;if(i&&e.bitrate){const r=e.bitrate/1e6,n=`${r.toFixed(r<1?1:0)} Mbps`;return`${a} (${n})`}return this.formatMenuItemText(a,e)}static compareRendition(e,i){var a,r;return i.height===e.height?((a=i.bitrate)!=null?a:0)-((r=e.bitrate)!=null?r:0):i.height-e.height}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===l.MEDIA_RENDITION_SELECTED&&i!==a?(this.value=a??"auto",Ai(this,Fi,sr).call(this)):e===l.MEDIA_RENDITION_LIST&&i!==a?(Ec(this,nr,Zv(a)),Ai(this,Fi,sr).call(this)):e===l.MEDIA_HEIGHT&&i!==a&&Ai(this,Fi,sr).call(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",Ai(this,Zn,gl))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",Ai(this,Zn,gl))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:fe(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return rr(this,nr)}set mediaRenditionList(e){Ec(this,nr,e),Ai(this,Fi,sr).call(this)}get mediaRenditionSelected(){return q(this,l.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){Z(this,l.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return G(this,l.MEDIA_HEIGHT)}set mediaHeight(e){j(this,l.MEDIA_HEIGHT,e)}compareRendition(e,i){return this.constructor.compareRendition(e,i)}formatMenuItemText(e,i){return this.constructor.formatMenuItemText(e,i)}formatRendition(e,i){return this.constructor.formatRendition(e,i)}showRenditionBitrate(e){return this.mediaRenditionList.some(i=>i!==e&&i.height===e.height&&i.bitrate!==e.bitrate)}}nr=new WeakMap;Zi=new WeakMap;Fi=new WeakSet;sr=function(){if(rr(this,Zi).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&rr(this,Zi).mediaHeight===this.mediaHeight)return;rr(this,Zi).mediaRenditionList=JSON.stringify(this.mediaRenditionList),rr(this,Zi).mediaHeight=this.mediaHeight;const t=this.mediaRenditionList.sort(this.compareRendition.bind(this)),e=t.find(s=>s.id===this.mediaRenditionSelected);for(const s of t)s.selected=s===e;this.defaultSlot.textContent="";const i=!this.mediaRenditionSelected;for(const s of t){const d=this.formatRendition(s,{showBitrate:this.showRenditionBitrate(s)}),o=la({type:"radio",text:d,value:`${s.id}`,checked:s.selected&&!i});o.prepend(mi(this,"checked-indicator")),this.defaultSlot.append(o)}const a=e&&this.showRenditionBitrate(e),r=i?e?this.formatMenuItemText(`${I("Auto")} • ${this.formatRendition(e,{showBitrate:a})}`,e):this.formatMenuItemText(`${I("Auto")} (${this.mediaHeight}p)`):this.formatMenuItemText(I("Auto")),n=la({type:"radio",text:r,value:"auto",checked:i});n.dataset.description=r,n.prepend(mi(this,"checked-indicator")),this.defaultSlot.append(n)};Zn=new WeakSet;gl=function(){if(this.value==null)return;const t=new c.CustomEvent(y.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(t)};c.customElements.get("media-rendition-menu")||c.customElements.define("media-rendition-menu",wf);const Df=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`;function Of(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${Df}</slot>
  `}function xf(){return I("Quality")}class Ud extends va{static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_RENDITION_SELECTED,l.MEDIA_RENDITION_UNAVAILABLE,l.MEDIA_HEIGHT]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",I("quality"))}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:fe(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return q(this,l.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){Z(this,l.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return G(this,l.MEDIA_HEIGHT)}set mediaHeight(e){j(this,l.MEDIA_HEIGHT,e)}}Ud.getSlotTemplateHTML=Of;Ud.getTooltipContentHTML=xf;c.customElements.get("media-rendition-menu-button")||c.customElements.define("media-rendition-menu-button",Ud);var $d=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},at=(t,e,i)=>($d(t,e,"read from private field"),i?i.call(t):e.get(t)),Ge=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},qm=(t,e,i,a)=>($d(t,e,"write to private field"),e.set(t,i),i),Me=(t,e,i)=>($d(t,e,"access private method"),i),ua,Cr,qs,ii,Qi,Hd,Zm,Qn,_l,zn,Tl,Qm,Rs,Cs,Xn;function Nf(t){return`
      ${Oe.getTemplateHTML(t)}
      <style>
        :host {
          --_menu-bg: rgb(20 20 30 / .8);
          background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
          min-width: var(--media-settings-menu-min-width, 170px);
          border-radius: 2px;
          overflow: hidden;
        }
      </style>
    `}class zm extends Oe{constructor(){super(),Ge(this,Cr),Ge(this,ii),Ge(this,Hd),Ge(this,Qn),Ge(this,Tl),Ge(this,ua,!1),Ge(this,zn,e=>{const i=e.target,a=i?.nodeName==="VIDEO",r=Me(this,Qn,_l).call(this,i);(a||r)&&(at(this,ua)?Me(this,ii,Qi).call(this):Me(this,Tl,Qm).call(this,e))}),Ge(this,Rs,e=>{const i=e.target,a=this.contains(i),r=e.button===2,n=i?.nodeName==="VIDEO",s=Me(this,Qn,_l).call(this,i);a||r&&(n||s)||Me(this,ii,Qi).call(this)}),Ge(this,Cs,e=>{e.key==="Escape"&&Me(this,ii,Qi).call(this)}),Ge(this,Xn,e=>{var i,a;const r=e.target;if((i=r.matches)!=null&&i.call(r,'button[invoke="copy"]')){const n=(a=r.closest("media-context-menu-item"))==null?void 0:a.querySelector('input[slot="copy"]');n&&navigator.clipboard.writeText(n.value)}Me(this,ii,Qi).call(this)}),this.setAttribute("noautohide",""),Me(this,Cr,qs).call(this)}connectedCallback(){super.connectedCallback(),fe(this).addEventListener("contextmenu",at(this,zn)),this.addEventListener("click",at(this,Xn))}disconnectedCallback(){super.disconnectedCallback(),fe(this).removeEventListener("contextmenu",at(this,zn)),this.removeEventListener("click",at(this,Xn)),document.removeEventListener("mousedown",at(this,Rs)),document.removeEventListener("keydown",at(this,Cs))}}ua=new WeakMap;Cr=new WeakSet;qs=function(){this.hidden=!at(this,ua)};ii=new WeakSet;Qi=function(){qm(this,ua,!1),Me(this,Cr,qs).call(this)};Hd=new WeakSet;Zm=function(){document.querySelectorAll("media-context-menu").forEach(e=>{var i;e!==this&&Me(i=e,ii,Qi).call(i)})};Qn=new WeakSet;_l=function(t){return t?t.hasAttribute("slot")&&t.getAttribute("slot")==="media"?!0:t.nodeName.includes("-")&&t.tagName.includes("-")?t.hasAttribute("src")||t.hasAttribute("poster")||t.hasAttribute("preload")||t.hasAttribute("playsinline"):!1:!1};zn=new WeakMap;Tl=new WeakSet;Qm=function(t){t.preventDefault(),Me(this,Hd,Zm).call(this),qm(this,ua,!0),this.style.position="fixed",this.style.left=`${t.clientX}px`,this.style.top=`${t.clientY}px`,Me(this,Cr,qs).call(this),document.addEventListener("mousedown",at(this,Rs),{once:!0}),document.addEventListener("keydown",at(this,Cs),{once:!0})};Rs=new WeakMap;Cs=new WeakMap;Xn=new WeakMap;zm.getTemplateHTML=Nf;c.customElements.get("media-context-menu")||c.customElements.define("media-context-menu",zm);function Pf(t){return`
    ${Kt.getTemplateHTML.call(this,t)}
    <style>
        ::slotted(*) {
            color: var(--media-text-color, white);
            text-decoration: none;
            border: none;
            background: none;
            cursor: pointer;
            padding: 0;
            min-height: var(--media-control-height, 24px);
        }
    </style>
  `}class Bd extends Kt{}Bd.shadowRootOptions={mode:"open"};Bd.getTemplateHTML=Pf;c.customElements.get("media-context-menu-item")||c.customElements.define("media-context-menu-item",Bd);var Xm=t=>{throw TypeError(t)},Wd=(t,e,i)=>e.has(t)||Xm("Cannot "+i),W=(t,e,i)=>(Wd(t,e,"read from private field"),i?i.call(t):e.get(t)),We=(t,e,i)=>e.has(t)?Xm("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),ct=(t,e,i,a)=>(Wd(t,e,"write to private field"),e.set(t,i),i),re=(t,e,i)=>(Wd(t,e,"access private method"),i),Zs=class{addEventListener(){}removeEventListener(){}dispatchEvent(t){return!0}};if(typeof DocumentFragment>"u"){class t extends Zs{}globalThis.DocumentFragment=t}var Fd=class extends Zs{},Uf=class extends Zs{},$f={get(t){},define(t,e,i){},getName(t){return null},upgrade(t){},whenDefined(t){return Promise.resolve(Fd)}},Jn,Hf=class{constructor(t,e={}){We(this,Jn),ct(this,Jn,e?.detail)}get detail(){return W(this,Jn)}initCustomEvent(){}};Jn=new WeakMap;function Bf(t,e){return new Fd}var Jm={document:{createElement:Bf},DocumentFragment,customElements:$f,CustomEvent:Hf,EventTarget:Zs,HTMLElement:Fd,HTMLVideoElement:Uf},jm=typeof window>"u"||typeof globalThis.customElements>"u",st=jm?Jm:globalThis,Ms=jm?Jm.document:globalThis.document;function Wf(t){let e="";return Object.entries(t).forEach(([i,a])=>{a!=null&&(e+=`${Al(i)}: ${a}; `)}),e?e.trim():void 0}function Al(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function ep(t){return t.replace(/[-_]([a-z])/g,(e,i)=>i.toUpperCase())}function ye(t){if(t==null)return;let e=+t;return Number.isNaN(e)?void 0:e}function tp(t){let e=Ff(t).toString();return e?"?"+e:""}function Ff(t){let e={};for(let i in t)t[i]!=null&&(e[i]=t[i]);return new URLSearchParams(e)}var ip=(t,e)=>!t||!e?!1:t.contains(e)?!0:ip(t,e.getRootNode().host),ap="mux.com",Kf=()=>{try{return"3.9.1"}catch{}return"UNKNOWN"},Vf=Kf(),rp=()=>Vf,Yf=(t,{token:e,customDomain:i=ap,thumbnailTime:a,programTime:r}={})=>{var n;let s=e==null?a:void 0,{aud:d}=(n=zi(e))!=null?n:{};if(!(e&&d!=="t"))return`https://image.${i}/${t}/thumbnail.webp${tp({token:e,time:s,program_time:r})}`},Gf=(t,{token:e,customDomain:i=ap,programStartTime:a,programEndTime:r}={})=>{var n;let{aud:s}=(n=zi(e))!=null?n:{};if(!(e&&s!=="s"))return`https://image.${i}/${t}/storyboard.vtt${tp({token:e,format:"webp",program_start_time:a,program_end_time:r})}`},Kd=t=>{if(t){if([B.LIVE,B.ON_DEMAND].includes(t))return t;if(t!=null&&t.includes("live"))return B.LIVE}},qf={crossorigin:"crossOrigin",playsinline:"playsInline"};function Zf(t){var e;return(e=qf[t])!=null?e:ep(t)}var Ki,Vi,be,Qf=class{constructor(t,e){We(this,Ki),We(this,Vi),We(this,be,[]),ct(this,Ki,t),ct(this,Vi,e)}[Symbol.iterator](){return W(this,be).values()}get length(){return W(this,be).length}get value(){var t;return(t=W(this,be).join(" "))!=null?t:""}set value(t){var e;t!==this.value&&(ct(this,be,[]),this.add(...(e=t?.split(" "))!=null?e:[]))}toString(){return this.value}item(t){return W(this,be)[t]}values(){return W(this,be).values()}keys(){return W(this,be).keys()}forEach(t){W(this,be).forEach(t)}add(...t){var e,i;t.forEach(a=>{this.contains(a)||W(this,be).push(a)}),!(this.value===""&&!((e=W(this,Ki))!=null&&e.hasAttribute(`${W(this,Vi)}`)))&&((i=W(this,Ki))==null||i.setAttribute(`${W(this,Vi)}`,`${this.value}`))}remove(...t){var e;t.forEach(i=>{W(this,be).splice(W(this,be).indexOf(i),1)}),(e=W(this,Ki))==null||e.setAttribute(`${W(this,Vi)}`,`${this.value}`)}contains(t){return W(this,be).includes(t)}toggle(t,e){return typeof e<"u"?e?(this.add(t),!0):(this.remove(t),!1):this.contains(t)?(this.remove(t),!1):(this.add(t),!0)}replace(t,e){this.remove(t),this.add(e)}};Ki=new WeakMap,Vi=new WeakMap,be=new WeakMap;var np=`[mux-player ${rp()}]`;function gt(...t){console.warn(np,...t)}function Le(...t){console.error(np,...t)}function sp(t){var e;let i=(e=t.message)!=null?e:"";t.context&&(i+=` ${t.context}`),t.file&&(i+=` ${R("Read more: ")}
https://github.com/muxinc/elements/blob/main/errors/${t.file}`),gt(i)}var pe={AUTOPLAY:"autoplay",CROSSORIGIN:"crossorigin",LOOP:"loop",MUTED:"muted",PLAYSINLINE:"playsinline",PRELOAD:"preload"},jt={VOLUME:"volume",PLAYBACKRATE:"playbackrate",MUTED:"muted"},bc=Object.freeze({length:0,start(t){let e=t>>>0;if(e>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${e}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(t){let e=t>>>0;if(e>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${e}) is greater than or equal to the maximum bound (${this.length}).`);return 0}}),zf=Object.values(pe).filter(t=>pe.PLAYSINLINE!==t),Xf=Object.values(jt),Jf=[...zf,...Xf],jf=class extends st.HTMLElement{static get observedAttributes(){return Jf}constructor(){super()}attributeChangedCallback(t,e,i){var a,r;switch(t){case jt.MUTED:{this.media&&(this.media.muted=i!=null,this.media.defaultMuted=i!=null);return}case jt.VOLUME:{let n=(a=ye(i))!=null?a:1;this.media&&(this.media.volume=n);return}case jt.PLAYBACKRATE:{let n=(r=ye(i))!=null?r:1;this.media&&(this.media.playbackRate=n,this.media.defaultPlaybackRate=n);return}}}play(){var t,e;return(e=(t=this.media)==null?void 0:t.play())!=null?e:Promise.reject()}pause(){var t;(t=this.media)==null||t.pause()}load(){var t;(t=this.media)==null||t.load()}get media(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("mux-video")}get audioTracks(){return this.media.audioTracks}get videoTracks(){return this.media.videoTracks}get audioRenditions(){return this.media.audioRenditions}get videoRenditions(){return this.media.videoRenditions}get paused(){var t,e;return(e=(t=this.media)==null?void 0:t.paused)!=null?e:!0}get duration(){var t,e;return(e=(t=this.media)==null?void 0:t.duration)!=null?e:NaN}get ended(){var t,e;return(e=(t=this.media)==null?void 0:t.ended)!=null?e:!1}get buffered(){var t,e;return(e=(t=this.media)==null?void 0:t.buffered)!=null?e:bc}get seekable(){var t,e;return(e=(t=this.media)==null?void 0:t.seekable)!=null?e:bc}get readyState(){var t,e;return(e=(t=this.media)==null?void 0:t.readyState)!=null?e:0}get videoWidth(){var t,e;return(e=(t=this.media)==null?void 0:t.videoWidth)!=null?e:0}get videoHeight(){var t,e;return(e=(t=this.media)==null?void 0:t.videoHeight)!=null?e:0}get currentSrc(){var t,e;return(e=(t=this.media)==null?void 0:t.currentSrc)!=null?e:""}get currentTime(){var t,e;return(e=(t=this.media)==null?void 0:t.currentTime)!=null?e:0}set currentTime(t){this.media&&(this.media.currentTime=Number(t))}get volume(){var t,e;return(e=(t=this.media)==null?void 0:t.volume)!=null?e:1}set volume(t){this.media&&(this.media.volume=Number(t))}get playbackRate(){var t,e;return(e=(t=this.media)==null?void 0:t.playbackRate)!=null?e:1}set playbackRate(t){this.media&&(this.media.playbackRate=Number(t))}get defaultPlaybackRate(){var t;return(t=ye(this.getAttribute(jt.PLAYBACKRATE)))!=null?t:1}set defaultPlaybackRate(t){t!=null?this.setAttribute(jt.PLAYBACKRATE,`${t}`):this.removeAttribute(jt.PLAYBACKRATE)}get crossOrigin(){return $a(this,pe.CROSSORIGIN)}set crossOrigin(t){this.setAttribute(pe.CROSSORIGIN,`${t}`)}get autoplay(){return $a(this,pe.AUTOPLAY)!=null}set autoplay(t){t?this.setAttribute(pe.AUTOPLAY,typeof t=="string"?t:""):this.removeAttribute(pe.AUTOPLAY)}get loop(){return $a(this,pe.LOOP)!=null}set loop(t){t?this.setAttribute(pe.LOOP,""):this.removeAttribute(pe.LOOP)}get muted(){var t,e;return(e=(t=this.media)==null?void 0:t.muted)!=null?e:!1}set muted(t){this.media&&(this.media.muted=!!t)}get defaultMuted(){return $a(this,pe.MUTED)!=null}set defaultMuted(t){t?this.setAttribute(pe.MUTED,""):this.removeAttribute(pe.MUTED)}get playsInline(){return $a(this,pe.PLAYSINLINE)!=null}set playsInline(t){Le("playsInline is set to true by default and is not currently supported as a setter.")}get preload(){return this.media?this.media.preload:this.getAttribute("preload")}set preload(t){["","none","metadata","auto"].includes(t)?this.setAttribute(pe.PRELOAD,t):this.removeAttribute(pe.PRELOAD)}};function $a(t,e){return t.media?t.media.getAttribute(e):t.getAttribute(e)}var fc=jf,e1=`:host {
  --media-control-display: var(--controls);
  --media-loading-indicator-display: var(--loading-indicator);
  --media-dialog-display: var(--dialog);
  --media-play-button-display: var(--play-button);
  --media-live-button-display: var(--live-button);
  --media-seek-backward-button-display: var(--seek-backward-button);
  --media-seek-forward-button-display: var(--seek-forward-button);
  --media-mute-button-display: var(--mute-button);
  --media-captions-button-display: var(--captions-button);
  --media-captions-menu-button-display: var(--captions-menu-button, var(--media-captions-button-display));
  --media-rendition-menu-button-display: var(--rendition-menu-button);
  --media-audio-track-menu-button-display: var(--audio-track-menu-button);
  --media-airplay-button-display: var(--airplay-button);
  --media-pip-button-display: var(--pip-button);
  --media-fullscreen-button-display: var(--fullscreen-button);
  --media-cast-button-display: var(--cast-button, var(--_cast-button-drm-display));
  --media-playback-rate-button-display: var(--playback-rate-button);
  --media-playback-rate-menu-button-display: var(--playback-rate-menu-button);
  --media-volume-range-display: var(--volume-range);
  --media-time-range-display: var(--time-range);
  --media-time-display-display: var(--time-display);
  --media-duration-display-display: var(--duration-display);
  --media-title-display-display: var(--title-display);

  display: inline-block;
  line-height: 0;
  width: 100%;
}

a {
  color: #fff;
  font-size: 0.9em;
  text-decoration: underline;
}

media-theme {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
  direction: ltr;
}

media-poster-image {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
}

media-poster-image:not([src]):not([placeholdersrc]) {
  display: none;
}

::part(top),
[part~='top'] {
  --media-control-display: var(--controls, var(--top-controls));
  --media-play-button-display: var(--play-button, var(--top-play-button));
  --media-live-button-display: var(--live-button, var(--top-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--top-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--top-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--top-mute-button));
  --media-captions-button-display: var(--captions-button, var(--top-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--top-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--top-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--top-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--top-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--top-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--top-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--top-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--top-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --captions-menu-button,
    var(--media-playback-rate-button-display, var(--top-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--top-volume-range));
  --media-time-range-display: var(--time-range, var(--top-time-range));
  --media-time-display-display: var(--time-display, var(--top-time-display));
  --media-duration-display-display: var(--duration-display, var(--top-duration-display));
  --media-title-display-display: var(--title-display, var(--top-title-display));
}

::part(center),
[part~='center'] {
  --media-control-display: var(--controls, var(--center-controls));
  --media-play-button-display: var(--play-button, var(--center-play-button));
  --media-live-button-display: var(--live-button, var(--center-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--center-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--center-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--center-mute-button));
  --media-captions-button-display: var(--captions-button, var(--center-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--center-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--center-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--center-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--center-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--center-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--center-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--center-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--center-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--center-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--center-volume-range));
  --media-time-range-display: var(--time-range, var(--center-time-range));
  --media-time-display-display: var(--time-display, var(--center-time-display));
  --media-duration-display-display: var(--duration-display, var(--center-duration-display));
}

::part(bottom),
[part~='bottom'] {
  --media-control-display: var(--controls, var(--bottom-controls));
  --media-play-button-display: var(--play-button, var(--bottom-play-button));
  --media-live-button-display: var(--live-button, var(--bottom-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--bottom-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--bottom-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--bottom-mute-button));
  --media-captions-button-display: var(--captions-button, var(--bottom-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--bottom-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--bottom-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--bottom-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--bottom-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--bottom-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--bottom-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--bottom-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--bottom-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--bottom-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--bottom-volume-range));
  --media-time-range-display: var(--time-range, var(--bottom-time-range));
  --media-time-display-display: var(--time-display, var(--bottom-time-display));
  --media-duration-display-display: var(--duration-display, var(--bottom-duration-display));
  --media-title-display-display: var(--title-display, var(--bottom-title-display));
}

:host([no-tooltips]) {
  --media-tooltip-display: none;
}
`,Ha=new WeakMap,t1=class op{constructor(e,i){this.element=e,this.type=i,this.element.addEventListener(this.type,this);let a=Ha.get(this.element);a&&a.set(this.type,this)}set(e){if(typeof e=="function")this.handleEvent=e.bind(this.element);else if(typeof e=="object"&&typeof e.handleEvent=="function")this.handleEvent=e.handleEvent.bind(e);else{this.element.removeEventListener(this.type,this);let i=Ha.get(this.element);i&&i.delete(this.type)}}static for(e){Ha.has(e.element)||Ha.set(e.element,new Map);let i=e.attributeName.slice(2),a=Ha.get(e.element);return a&&a.has(i)?a.get(i):new op(e.element,i)}};function i1(t,e){return t instanceof Ke&&t.attributeName.startsWith("on")?(t1.for(t).set(e),t.element.removeAttributeNS(t.attributeNamespace,t.attributeName),!0):!1}function a1(t,e){return e instanceof lp&&t instanceof pa?(e.renderInto(t),!0):!1}function r1(t,e){return e instanceof DocumentFragment&&t instanceof pa?(e.childNodes.length&&t.replace(...e.childNodes),!0):!1}function n1(t,e){if(t instanceof Ke){let i=t.attributeNamespace,a=t.element.getAttributeNS(i,t.attributeName);return String(e)!==a&&(t.value=String(e)),!0}return t.value=String(e),!0}function s1(t,e){if(t instanceof Ke&&e instanceof Element){let i=t.element;return i[t.attributeName]!==e&&(t.element.removeAttributeNS(t.attributeNamespace,t.attributeName),i[t.attributeName]=e),!0}return!1}function o1(t,e){if(typeof e=="boolean"&&t instanceof Ke){let i=t.attributeNamespace,a=t.element.hasAttributeNS(i,t.attributeName);return e!==a&&(t.booleanValue=e),!0}return!1}function l1(t,e){return e===!1&&t instanceof pa?(t.replace(""),!0):!1}function d1(t,e){s1(t,e)||o1(t,e)||i1(t,e)||l1(t,e)||a1(t,e)||r1(t,e)||n1(t,e)}var ho=new Map,gc=new WeakMap,_c=new WeakMap,lp=class{constructor(t,e,i){this.strings=t,this.values=e,this.processor=i,this.stringsKey=this.strings.join("")}get template(){if(ho.has(this.stringsKey))return ho.get(this.stringsKey);{let t=Ms.createElement("template"),e=this.strings.length-1;return t.innerHTML=this.strings.reduce((i,a,r)=>i+a+(r<e?`{{ ${r} }}`:""),""),ho.set(this.stringsKey,t),t}}renderInto(t){var e;let i=this.template;if(gc.get(t)!==i){gc.set(t,i);let r=new Vs(i,this.values,this.processor);_c.set(t,r),t instanceof pa?t.replace(...r.children):t.appendChild(r);return}let a=_c.get(t);(e=a?.update)==null||e.call(a,this.values)}},u1={processCallback(t,e,i){var a;if(i){for(let[r,n]of e)if(r in i){let s=(a=i[r])!=null?a:"";d1(n,s)}}}};function jn(t,...e){return new lp(t,e,u1)}function c1(t,e){t.renderInto(e)}var h1=t=>{let{tokens:e}=t;return e.drm?":host(:not([cast-receiver])) { --_cast-button-drm-display: none; }":""},m1=t=>jn`
  <style>
    ${h1(t)}
    ${e1}
  </style>
  ${b1(t)}
`,p1=t=>{let e=t.hotKeys?`${t.hotKeys}`:"";return Kd(t.streamType)==="live"&&(e+=" noarrowleft noarrowright"),e},v1={TOP:"top",CENTER:"center",BOTTOM:"bottom",LAYER:"layer",MEDIA_LAYER:"media-layer",POSTER_LAYER:"poster-layer",VERTICAL_LAYER:"vertical-layer",CENTERED_LAYER:"centered-layer",GESTURE_LAYER:"gesture-layer",CONTROLLER_LAYER:"controller",BUTTON:"button",RANGE:"range",THUMB:"thumb",DISPLAY:"display",CONTROL_BAR:"control-bar",MENU_BUTTON:"menu-button",MENU:"menu",MENU_ITEM:"menu-item",OPTION:"option",POSTER:"poster",LIVE:"live",PLAY:"play",PRE_PLAY:"pre-play",SEEK_BACKWARD:"seek-backward",SEEK_FORWARD:"seek-forward",MUTE:"mute",CAPTIONS:"captions",AIRPLAY:"airplay",PIP:"pip",FULLSCREEN:"fullscreen",CAST:"cast",PLAYBACK_RATE:"playback-rate",VOLUME:"volume",TIME:"time",TITLE:"title",AUDIO_TRACK:"audio-track",RENDITION:"rendition"},E1=Object.values(v1).join(", "),b1=t=>{var e,i,a,r,n,s,d,o,u,h,p,v,E,g,f,_,A,w,S,P,xe,St,Ea,ba,fa,ga,_a,Ta,Aa,ya,ka,Sa,Lr,ht,Ia,Ra,Ca;return jn`
  <media-theme
    template="${t.themeTemplate||!1}"
    defaultstreamtype="${(e=t.defaultStreamType)!=null?e:!1}"
    hotkeys="${p1(t)||!1}"
    nohotkeys="${t.noHotKeys||!t.hasSrc||!1}"
    noautoseektolive="${!!((i=t.streamType)!=null&&i.includes(B.LIVE))&&t.targetLiveWindow!==0}"
    novolumepref="${t.novolumepref||!1}"
    nomutedpref="${t.nomutedpref||!1}"
    disabled="${!t.hasSrc||t.isDialogOpen}"
    audio="${(a=t.audio)!=null?a:!1}"
    style="${(r=Wf({"--media-primary-color":t.primaryColor,"--media-secondary-color":t.secondaryColor,"--media-accent-color":t.accentColor}))!=null?r:!1}"
    defaultsubtitles="${!t.defaultHiddenCaptions}"
    forwardseekoffset="${(n=t.forwardSeekOffset)!=null?n:!1}"
    backwardseekoffset="${(s=t.backwardSeekOffset)!=null?s:!1}"
    playbackrates="${(d=t.playbackRates)!=null?d:!1}"
    defaultshowremainingtime="${(o=t.defaultShowRemainingTime)!=null?o:!1}"
    defaultduration="${(u=t.defaultDuration)!=null?u:!1}"
    hideduration="${(h=t.hideDuration)!=null?h:!1}"
    title="${(p=t.title)!=null?p:!1}"
    videotitle="${(v=t.videoTitle)!=null?v:!1}"
    proudlydisplaymuxbadge="${(E=t.proudlyDisplayMuxBadge)!=null?E:!1}"
    exportparts="${E1}"
    onclose="${t.onCloseErrorDialog}"
    onfocusin="${t.onFocusInErrorDialog}"
  >
    <mux-video
      slot="media"
      inert="${(g=t.noHotKeys)!=null?g:!1}"
      target-live-window="${(f=t.targetLiveWindow)!=null?f:!1}"
      stream-type="${(_=Kd(t.streamType))!=null?_:!1}"
      crossorigin="${(A=t.crossOrigin)!=null?A:""}"
      playsinline
      autoplay="${(w=t.autoplay)!=null?w:!1}"
      muted="${(S=t.muted)!=null?S:!1}"
      loop="${(P=t.loop)!=null?P:!1}"
      preload="${(xe=t.preload)!=null?xe:!1}"
      debug="${(St=t.debug)!=null?St:!1}"
      prefer-cmcd="${(Ea=t.preferCmcd)!=null?Ea:!1}"
      disable-tracking="${(ba=t.disableTracking)!=null?ba:!1}"
      disable-cookies="${(fa=t.disableCookies)!=null?fa:!1}"
      prefer-playback="${(ga=t.preferPlayback)!=null?ga:!1}"
      start-time="${t.startTime!=null?t.startTime:!1}"
      beacon-collection-domain="${(_a=t.beaconCollectionDomain)!=null?_a:!1}"
      player-init-time="${(Ta=t.playerInitTime)!=null?Ta:!1}"
      player-software-name="${(Aa=t.playerSoftwareName)!=null?Aa:!1}"
      player-software-version="${(ya=t.playerSoftwareVersion)!=null?ya:!1}"
      env-key="${(ka=t.envKey)!=null?ka:!1}"
      custom-domain="${(Sa=t.customDomain)!=null?Sa:!1}"
      src="${t.src?t.src:t.playbackId?fo(t):!1}"
      cast-src="${t.src?t.src:t.playbackId?fo(t):!1}"
      cast-receiver="${(Lr=t.castReceiver)!=null?Lr:!1}"
      drm-token="${(Ia=(ht=t.tokens)==null?void 0:ht.drm)!=null?Ia:!1}"
      exportparts="video"
      disable-pseudo-ended="${(Ra=t.disablePseudoEnded)!=null?Ra:!1}"
    >
      ${t.storyboard?jn`<track label="thumbnails" default kind="metadata" src="${t.storyboard}" />`:jn``}
      <slot></slot>
    </mux-video>
    <slot name="poster" slot="poster">
      <media-poster-image
        part="poster"
        exportparts="poster, img"
        src="${t.poster?t.poster:!1}"
        placeholdersrc="${(Ca=t.placeholder)!=null?Ca:!1}"
      ></media-poster-image>
    </slot>
  </media-theme>
`},dp=t=>t.charAt(0).toUpperCase()+t.slice(1),f1=(t,e=!1)=>{var i,a;if(t.muxCode){let r=dp((i=t.errorCategory)!=null?i:"video"),n=Ls((a=t.errorCategory)!=null?a:Y.VIDEO);if(t.muxCode===M.NETWORK_OFFLINE)return R("Your device appears to be offline",e);if(t.muxCode===M.NETWORK_TOKEN_EXPIRED)return R("{category} URL has expired",e).format({category:r});if([M.NETWORK_TOKEN_SUB_MISMATCH,M.NETWORK_TOKEN_AUD_MISMATCH,M.NETWORK_TOKEN_AUD_MISSING,M.NETWORK_TOKEN_MALFORMED].includes(t.muxCode))return R("{category} URL is formatted incorrectly",e).format({category:r});if(t.muxCode===M.NETWORK_TOKEN_MISSING)return R("Invalid {categoryName} URL",e).format({categoryName:n});if(t.muxCode===M.NETWORK_NOT_FOUND)return R("{category} does not exist",e).format({category:r});if(t.muxCode===M.NETWORK_NOT_READY){let s=t.streamType==="live"?"Live stream":"Video";return R("{mediaType} is not currently available",e).format({mediaType:s})}}if(t.code){if(t.code===k.MEDIA_ERR_NETWORK)return R("Network Error",e);if(t.code===k.MEDIA_ERR_DECODE)return R("Media Error",e);if(t.code===k.MEDIA_ERR_SRC_NOT_SUPPORTED)return R("Source Not Supported",e)}return R("Error",e)},g1=(t,e=!1)=>{var i,a;if(t.muxCode){let r=dp((i=t.errorCategory)!=null?i:"video"),n=Ls((a=t.errorCategory)!=null?a:Y.VIDEO);return t.muxCode===M.NETWORK_OFFLINE?R("Check your internet connection and try reloading this video.",e):t.muxCode===M.NETWORK_TOKEN_EXPIRED?R("The video’s secured {tokenNamePrefix}-token has expired.",e).format({tokenNamePrefix:n}):t.muxCode===M.NETWORK_TOKEN_SUB_MISMATCH?R("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",e).format({tokenNamePrefix:n}):t.muxCode===M.NETWORK_TOKEN_MALFORMED?R("{category} URL is formatted incorrectly",e).format({category:r}):[M.NETWORK_TOKEN_AUD_MISMATCH,M.NETWORK_TOKEN_AUD_MISSING].includes(t.muxCode)?R("The {tokenNamePrefix}-token is formatted with incorrect information.",e).format({tokenNamePrefix:n}):[M.NETWORK_TOKEN_MISSING,M.NETWORK_INVALID_URL].includes(t.muxCode)?R("The video URL or {tokenNamePrefix}-token are formatted with incorrect or incomplete information.",e).format({tokenNamePrefix:n}):t.muxCode===M.NETWORK_NOT_FOUND?"":t.message}return t.code&&(t.code===k.MEDIA_ERR_NETWORK||t.code===k.MEDIA_ERR_DECODE||(t.code,k.MEDIA_ERR_SRC_NOT_SUPPORTED)),t.message},_1=(t,e=!1)=>{let i=f1(t,e).toString(),a=g1(t,e).toString();return{title:i,message:a}},T1=t=>{if(t.muxCode){if(t.muxCode===M.NETWORK_TOKEN_EXPIRED)return"403-expired-token.md";if(t.muxCode===M.NETWORK_TOKEN_MALFORMED)return"403-malformatted-token.md";if([M.NETWORK_TOKEN_AUD_MISMATCH,M.NETWORK_TOKEN_AUD_MISSING].includes(t.muxCode))return"403-incorrect-aud-value.md";if(t.muxCode===M.NETWORK_TOKEN_SUB_MISMATCH)return"403-playback-id-mismatch.md";if(t.muxCode===M.NETWORK_TOKEN_MISSING)return"missing-signed-tokens.md";if(t.muxCode===M.NETWORK_NOT_FOUND)return"404-not-found.md";if(t.muxCode===M.NETWORK_NOT_READY)return"412-not-playable.md"}if(t.code){if(t.code===k.MEDIA_ERR_NETWORK)return"";if(t.code===k.MEDIA_ERR_DECODE)return"media-decode-error.md";if(t.code===k.MEDIA_ERR_SRC_NOT_SUPPORTED)return"media-src-not-supported.md"}return""},Tc=(t,e)=>{let i=T1(t);return{message:t.message,context:t.context,file:i}},A1=`<template id="media-theme-gerwig">
  <style>
    @keyframes pre-play-hide {
      0% {
        transform: scale(1);
        opacity: 1;
      }

      30% {
        transform: scale(0.7);
      }

      100% {
        transform: scale(1.5);
        opacity: 0;
      }
    }

    :host {
      --_primary-color: var(--media-primary-color, #fff);
      --_secondary-color: var(--media-secondary-color, transparent);
      --_accent-color: var(--media-accent-color, #fa50b5);
      --_text-color: var(--media-text-color, #000);

      --media-icon-color: var(--_primary-color);
      --media-control-background: var(--_secondary-color);
      --media-control-hover-background: var(--_accent-color);
      --media-time-buffered-color: rgba(255, 255, 255, 0.4);
      --media-preview-time-text-shadow: none;
      --media-control-height: 14px;
      --media-control-padding: 6px;
      --media-tooltip-container-margin: 6px;
      --media-tooltip-distance: 18px;

      color: var(--_primary-color);
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    :host([audio]) {
      --_secondary-color: var(--media-secondary-color, black);
      --media-preview-time-text-shadow: none;
    }

    :host([audio]) ::slotted([slot='media']) {
      height: 0px;
    }

    :host([audio]) media-loading-indicator {
      display: none;
    }

    :host([audio]) media-controller {
      background: transparent;
    }

    :host([audio]) media-controller::part(vertical-layer) {
      background: transparent;
    }

    :host([audio]) media-control-bar {
      width: 100%;
      background-color: var(--media-control-background);
    }

    /*
     * 0.433s is the transition duration for VTT Regions.
     * Borrowed here, so the captions don't move too fast.
     */
    media-controller {
      --media-webkit-text-track-transform: translateY(0) scale(0.98);
      --media-webkit-text-track-transition: transform 0.433s ease-out 0.3s;
    }
    media-controller:is([mediapaused], :not([userinactive])) {
      --media-webkit-text-track-transform: translateY(-50px) scale(0.98);
      --media-webkit-text-track-transition: transform 0.15s ease;
    }

    /*
     * CSS specific to iOS devices.
     * See: https://stackoverflow.com/questions/30102792/css-media-query-to-target-only-ios-devices/60220757#60220757
     */
    @supports (-webkit-touch-callout: none) {
      /* Disable subtitle adjusting for iOS Safari */
      media-controller[mediaisfullscreen] {
        --media-webkit-text-track-transform: unset;
        --media-webkit-text-track-transition: unset;
      }
    }

    media-time-range {
      --media-box-padding-left: 6px;
      --media-box-padding-right: 6px;
      --media-range-bar-color: var(--_accent-color);
      --media-time-range-buffered-color: var(--_primary-color);
      --media-range-track-color: transparent;
      --media-range-track-background: rgba(255, 255, 255, 0.4);
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_accent-color) 25%,
        var(--_accent-color)
      );
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-transform: scale(0);
      --media-range-thumb-transition: transform 0.3s;
      --media-range-thumb-opacity: 1;
      --media-preview-background: var(--_primary-color);
      --media-box-arrow-background: var(--_primary-color);
      --media-preview-thumbnail-border: 5px solid var(--_primary-color);
      --media-preview-border-radius: 5px;
      --media-text-color: var(--_text-color);
      --media-control-hover-background: transparent;
      --media-preview-chapter-text-shadow: none;
      color: var(--_accent-color);
      padding: 0 6px;
    }

    :host([audio]) media-time-range {
      --media-preview-time-padding: 1.5px 6px;
      --media-preview-box-margin: 0 0 -5px;
    }

    media-time-range:hover {
      --media-range-thumb-transform: scale(1);
    }

    media-preview-thumbnail {
      border-bottom-width: 0;
    }

    [part~='menu'] {
      border-radius: 2px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      bottom: 50px;
      padding: 2.5px 10px;
    }

    [part~='menu']::part(indicator) {
      fill: var(--_accent-color);
    }

    [part~='menu']::part(menu-item) {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding: 6px 10px;
      min-height: 34px;
    }

    [part~='menu']::part(checked) {
      font-weight: 700;
    }

    media-captions-menu,
    media-rendition-menu,
    media-audio-track-menu,
    media-playback-rate-menu {
      position: absolute; /* ensure they don't take up space in DOM on load */
      --media-menu-background: var(--_primary-color);
      --media-menu-item-checked-background: transparent;
      --media-text-color: var(--_text-color);
      --media-menu-item-hover-background: transparent;
      --media-menu-item-hover-outline: var(--_accent-color) solid 1px;
    }

    media-rendition-menu {
      min-width: 140px;
    }

    /* The icon is a circle so make it 16px high instead of 14px for more balance. */
    media-audio-track-menu-button {
      --media-control-padding: 5px;
      --media-control-height: 16px;
    }

    media-playback-rate-menu-button {
      --media-control-padding: 6px 3px;
      min-width: 4.4ch;
    }

    media-playback-rate-menu {
      --media-menu-flex-direction: row;
      --media-menu-item-checked-background: var(--_accent-color);
      --media-menu-item-checked-indicator-display: none;
      margin-right: 6px;
      padding: 0;
      --media-menu-gap: 0.25em;
    }

    media-playback-rate-menu[part~='menu']::part(menu-item) {
      padding: 6px 6px 6px 8px;
    }

    media-playback-rate-menu[part~='menu']::part(checked) {
      color: #fff;
    }

    :host(:not([audio])) media-time-range {
      /* Adding px is required here for calc() */
      --media-range-padding: 0px;
      background: transparent;
      z-index: 10;
      height: 10px;
      bottom: -3px;
      width: 100%;
    }

    media-control-bar :is([role='button'], [role='switch'], button) {
      line-height: 0;
    }

    media-control-bar :is([part*='button'], [part*='range'], [part*='display']) {
      border-radius: 3px;
    }

    .spacer {
      flex-grow: 1;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    media-control-bar[slot~='top-chrome'] {
      min-height: 42px;
      pointer-events: none;
    }

    media-control-bar {
      --gradient-steps:
        hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%, hsl(0 0% 0% / 0.104) 22.5%,
        hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%, hsl(0 0% 0% / 0.45) 47.1%,
        hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%, hsl(0 0% 0% / 0.825) 71%,
        hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%, hsl(0 0% 0%) 100%;
    }

    :host([title]) media-control-bar[slot='top-chrome']::before,
    :host([videotitle]) media-control-bar[slot='top-chrome']::before {
      content: '';
      position: absolute;
      width: 100%;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to top, var(--gradient-steps));
      opacity: 0.8;
      pointer-events: none;
    }

    :host(:not([audio])) media-control-bar[part~='bottom']::before {
      content: '';
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to bottom, var(--gradient-steps));
      opacity: 0.8;
      z-index: 1;
      pointer-events: none;
    }

    media-control-bar[part~='bottom'] > * {
      z-index: 20;
    }

    media-control-bar[part~='bottom'] {
      padding: 6px 6px;
    }

    media-control-bar[slot~='top-chrome'] > * {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      position: relative;
    }

    media-controller::part(vertical-layer) {
      transition: background-color 1s;
    }

    media-controller:is([mediapaused], :not([userinactive]))::part(vertical-layer) {
      background-color: var(--controls-backdrop-color, var(--controls, transparent));
      transition: background-color 0.25s;
    }

    .center-controls {
      --media-button-icon-width: 100%;
      --media-button-icon-height: auto;
      --media-tooltip-display: none;
      pointer-events: none;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      paint-order: stroke;
      stroke: rgba(102, 102, 102, 1);
      stroke-width: 0.3px;
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    .center-controls media-play-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      --media-control-padding: 0;
      width: 40px;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    [breakpointsm] .center-controls media-play-button {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      transition: background 0.4s;
      padding: 24px;
      --media-control-background: #000;
      --media-control-hover-background: var(--_accent-color);
    }

    .center-controls media-seek-backward-button,
    .center-controls media-seek-forward-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      margin: 0 20px;
      width: max(33px, min(8%, 40px));
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback {
      display: grid;
      align-items: initial;
      justify-content: initial;
      height: 100%;
      overflow: hidden;
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback media-play-button {
      place-self: var(--_pre-playback-place, center);
      grid-area: 1 / 1;
      margin: 16px;
    }

    /* Show and hide controls or pre-playback state */

    [breakpointsm]:is([mediahasplayed], :not([mediapaused])):not([audio])
      .center-controls.pre-playback
      media-play-button {
      /* Using \`forwards\` would lead to a laggy UI after the animation got in the end state */
      animation: 0.3s linear pre-play-hide;
      opacity: 0;
      pointer-events: none;
    }

    .autoplay-unmute {
      --media-control-hover-background: transparent;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .autoplay-unmute-btn {
      --media-control-height: 16px;
      border-radius: 8px;
      background: #000;
      color: var(--_primary-color);
      display: flex;
      align-items: center;
      padding: 8px 16px;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
    }

    .autoplay-unmute-btn:hover {
      background: var(--_accent-color);
    }

    [breakpointsm] .autoplay-unmute-btn {
      --media-control-height: 30px;
      padding: 14px 24px;
      font-size: 26px;
    }

    .autoplay-unmute-btn svg {
      margin: 0 6px 0 0;
    }

    [breakpointsm] .autoplay-unmute-btn svg {
      margin: 0 10px 0 0;
    }

    media-controller:not([audio]):not([mediahasplayed]) *:is(media-control-bar, media-time-range) {
      display: none;
    }

    media-error-dialog:not([mediaerrorcode]) {
      opacity: 0;
    }

    media-loading-indicator {
      --media-loading-icon-width: 100%;
      --media-button-icon-height: auto;
      display: var(--media-control-display, var(--media-loading-indicator-display, flex));
      pointer-events: none;
      position: absolute;
      width: min(15%, 150px);
      flex-flow: row;
      align-items: center;
      justify-content: center;
    }

    /* Intentionally don't target the div for transition but the children
     of the div. Prevents messing with media-chrome's autohide feature. */
    media-loading-indicator + div * {
      transition: opacity 0.15s;
      opacity: 1;
    }

    media-loading-indicator[medialoading]:not([mediapaused]) ~ div > * {
      opacity: 0;
      transition-delay: 400ms;
    }

    media-volume-range {
      width: min(100%, 100px);
      --media-range-padding-left: 10px;
      --media-range-padding-right: 10px;
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_primary-color) 25%,
        var(--_primary-color)
      );
      --media-control-hover-background: none;
    }

    media-time-display {
      white-space: nowrap;
    }

    /* Generic style for explicitly disabled controls */
    media-control-bar[part~='bottom'] [disabled],
    media-control-bar[part~='bottom'] [aria-disabled='true'] {
      opacity: 60%;
      cursor: not-allowed;
    }

    media-text-display {
      --media-font-size: 16px;
      --media-control-padding: 14px;
      font-weight: 500;
    }

    media-play-button.animated *:is(g, path) {
      transition: all 0.3s;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt1 {
      opacity: 0;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt2 {
      transform-origin: center center;
      transform: scaleY(0);
    }

    media-play-button.animated[mediapaused] .play-icon {
      clip-path: inset(0 0 0 0);
    }

    media-play-button.animated:not([mediapaused]) .play-icon {
      clip-path: inset(0 0 0 100%);
    }

    media-seek-forward-button,
    media-seek-backward-button {
      --media-font-weight: 400;
    }

    .mute-icon {
      display: inline-block;
    }

    .mute-icon :is(path, g) {
      transition: opacity 0.5s;
    }

    .muted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='low'] :is(.volume-medium, .volume-high),
    media-mute-button[mediavolumelevel='medium'] :is(.volume-high) {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .unmuted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .muted {
      opacity: 1;
    }

    /**
     * Our defaults for these buttons are to hide them at small sizes
     * users can override this with CSS
     */
    media-controller:not([breakpointsm]):not([audio]) {
      --bottom-play-button: none;
      --bottom-seek-backward-button: none;
      --bottom-seek-forward-button: none;
      --bottom-time-display: none;
      --bottom-playback-rate-menu-button: none;
      --bottom-pip-button: none;
    }

    [part='mux-badge'] {
      position: absolute;
      bottom: 10px;
      right: 10px;
      z-index: 2;
      opacity: 0.6;
      transition:
        opacity 0.2s ease-in-out,
        bottom 0.2s ease-in-out;
    }

    [part='mux-badge']:hover {
      opacity: 1;
    }

    [part='mux-badge'] a {
      font-size: 14px;
      font-family: var(--_font-family);
      color: var(--_primary-color);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    [part='mux-badge'] .mux-badge-text {
      transition: opacity 0.5s ease-in-out;
      opacity: 0;
    }

    [part='mux-badge'] .mux-badge-logo {
      width: 40px;
      height: auto;
      display: inline-block;
    }

    [part='mux-badge'] .mux-badge-logo svg {
      width: 100%;
      height: 100%;
      fill: white;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'],
    media-controller:not([userinactive]) [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      transition: bottom 0.1s ease-in-out;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      transition: bottom 0.2s ease-in-out 0.62s;
    }

    media-controller:not([userinactive]) [part='mux-badge'] .mux-badge-text,
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] .mux-badge-text {
      opacity: 1;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] .mux-badge-text {
      opacity: 0;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive])[mediahasplayed] [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      bottom: calc(28px + var(--media-control-height, 0px) + var(--media-control-padding, 0px) * 2);
    }
  </style>

  <template partial="TitleDisplay">
    <template if="videotitle">
      <template if="videotitle != true">
        <media-text-display part="top title display" class="title-display">{{videotitle}}</media-text-display>
      </template>
    </template>
    <template if="!videotitle">
      <template if="title">
        <media-text-display part="top title display" class="title-display">{{title}}</media-text-display>
      </template>
    </template>
  </template>

  <template partial="PlayButton">
    <media-play-button
      part="{{section ?? 'bottom'}} play button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      class="animated"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon">
        <g class="play-icon">
          <path
            d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
          />
        </g>
        <g class="pause-icon">
          <path
            class="pause-icon-pt1"
            d="M5.90709 0H2.96889C2.46857 0 2.06299 0.405585 2.06299 0.9059V13.0941C2.06299 13.5944 2.46857 14 2.96889 14H5.90709C6.4074 14 6.81299 13.5944 6.81299 13.0941V0.9059C6.81299 0.405585 6.4074 0 5.90709 0Z"
          />
          <path
            class="pause-icon-pt2"
            d="M15.1571 0H12.2189C11.7186 0 11.313 0.405585 11.313 0.9059V13.0941C11.313 13.5944 11.7186 14 12.2189 14H15.1571C15.6574 14 16.063 13.5944 16.063 13.0941V0.9059C16.063 0.405585 15.6574 0 15.1571 0Z"
          />
        </g>
      </svg>
    </media-play-button>
  </template>

  <template partial="PrePlayButton">
    <media-play-button
      part="{{section ?? 'center'}} play button pre-play"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon" style="transform: translate(3px, 0)">
        <path
          d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
        />
      </svg>
    </media-play-button>
  </template>

  <template partial="SeekBackwardButton">
    <media-seek-backward-button
      seekoffset="{{backwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-backward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <path
          d="M3.65 2.07888L0.0864 6.7279C-0.0288 6.87812 -0.0288 7.12188 0.0864 7.2721L3.65 11.9211C3.7792 12.0896 4 11.9703 4 11.7321V2.26787C4 2.02968 3.7792 1.9104 3.65 2.07888Z"
        />
        <text transform="translate(6 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
          {{backwardseekoffset}}
        </text>
      </svg>
    </media-seek-backward-button>
  </template>

  <template partial="SeekForwardButton">
    <media-seek-forward-button
      seekoffset="{{forwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-forward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <g>
          <text transform="translate(-1 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
            {{forwardseekoffset}}
          </text>
          <path
            d="M18.35 11.9211L21.9136 7.2721C22.0288 7.12188 22.0288 6.87812 21.9136 6.7279L18.35 2.07888C18.2208 1.91041 18 2.02968 18 2.26787V11.7321C18 11.9703 18.2208 12.0896 18.35 11.9211Z"
          />
        </g>
      </svg>
    </media-seek-forward-button>
  </template>

  <template partial="MuteButton">
    <media-mute-button part="bottom mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" slot="icon" class="mute-icon" aria-hidden="true">
        <g class="unmuted">
          <path
            d="M6.76786 1.21233L3.98606 3.98924H1.19937C0.593146 3.98924 0.101743 4.51375 0.101743 5.1607V6.96412L0 6.99998L0.101743 7.03583V8.83926C0.101743 9.48633 0.593146 10.0108 1.19937 10.0108H3.98606L6.76773 12.7877C7.23561 13.2547 8 12.9007 8 12.2171V1.78301C8 1.09925 7.23574 0.745258 6.76786 1.21233Z"
          />
          <path
            class="volume-low"
            d="M10 3.54781C10.7452 4.55141 11.1393 5.74511 11.1393 6.99991C11.1393 8.25471 10.7453 9.44791 10 10.4515L10.7988 11.0496C11.6734 9.87201 12.1356 8.47161 12.1356 6.99991C12.1356 5.52821 11.6735 4.12731 10.7988 2.94971L10 3.54781Z"
          />
          <path
            class="volume-medium"
            d="M12.3778 2.40086C13.2709 3.76756 13.7428 5.35806 13.7428 7.00026C13.7428 8.64246 13.2709 10.233 12.3778 11.5992L13.2106 12.1484C14.2107 10.6185 14.739 8.83796 14.739 7.00016C14.739 5.16236 14.2107 3.38236 13.2106 1.85156L12.3778 2.40086Z"
          />
          <path
            class="volume-high"
            d="M15.5981 0.75L14.7478 1.2719C15.7937 2.9919 16.3468 4.9723 16.3468 7C16.3468 9.0277 15.7937 11.0082 14.7478 12.7281L15.5981 13.25C16.7398 11.3722 17.343 9.211 17.343 7C17.343 4.789 16.7398 2.6268 15.5981 0.75Z"
          />
        </g>
        <g class="muted">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.39976 4.98924H1.19937C1.19429 4.98924 1.17777 4.98961 1.15296 5.01609C1.1271 5.04369 1.10174 5.09245 1.10174 5.1607V8.83926C1.10174 8.90761 1.12714 8.95641 1.15299 8.984C1.17779 9.01047 1.1943 9.01084 1.19937 9.01084H4.39977L7 11.6066V2.39357L4.39976 4.98924ZM7.47434 1.92006C7.4743 1.9201 7.47439 1.92002 7.47434 1.92006V1.92006ZM6.76773 12.7877L3.98606 10.0108H1.19937C0.593146 10.0108 0.101743 9.48633 0.101743 8.83926V7.03583L0 6.99998L0.101743 6.96412V5.1607C0.101743 4.51375 0.593146 3.98924 1.19937 3.98924H3.98606L6.76786 1.21233C7.23574 0.745258 8 1.09925 8 1.78301V12.2171C8 12.9007 7.23561 13.2547 6.76773 12.7877Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.2677 9.30323C15.463 9.49849 15.7796 9.49849 15.9749 9.30323C16.1701 9.10796 16.1701 8.79138 15.9749 8.59612L14.2071 6.82841L15.9749 5.06066C16.1702 4.8654 16.1702 4.54882 15.9749 4.35355C15.7796 4.15829 15.4631 4.15829 15.2678 4.35355L13.5 6.1213L11.7322 4.35348C11.537 4.15822 11.2204 4.15822 11.0251 4.35348C10.8298 4.54874 10.8298 4.86532 11.0251 5.06058L12.7929 6.82841L11.0251 8.59619C10.8299 8.79146 10.8299 9.10804 11.0251 9.3033C11.2204 9.49856 11.537 9.49856 11.7323 9.3033L13.5 7.53552L15.2677 9.30323Z"
          />
        </g>
      </svg>
    </media-mute-button>
  </template>

  <template partial="PipButton">
    <media-pip-button part="bottom pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M15.9891 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.989C0 13.0996 0.9004 14 2.011 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0ZM17 11.9891C17 12.5465 16.5465 13 15.9891 13H2.011C1.4536 13 1.0001 12.5465 1.0001 11.9891V2.0109C1.0001 1.4535 1.4536 0.9999 2.011 0.9999H15.9891C16.5465 0.9999 17 1.4535 17 2.0109V11.9891Z"
        />
        <path
          d="M15.356 5.67822H8.19523C8.03253 5.67822 7.90063 5.81012 7.90063 5.97282V11.3836C7.90063 11.5463 8.03253 11.6782 8.19523 11.6782H15.356C15.5187 11.6782 15.6506 11.5463 15.6506 11.3836V5.97282C15.6506 5.81012 15.5187 5.67822 15.356 5.67822Z"
        />
      </svg>
    </media-pip-button>
  </template>

  <template partial="CaptionsMenu">
    <media-captions-menu-button part="bottom captions button">
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="on">
        <path
          d="M15.989 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9004 14 2.011 14H15.989C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.989 0ZM4.2292 8.7639C4.5954 9.1902 5.0935 9.4031 5.7233 9.4031C6.1852 9.4031 6.5544 9.301 6.8302 9.0969C7.1061 8.8933 7.2863 8.614 7.3702 8.26H8.4322C8.3062 8.884 8.0093 9.3733 7.5411 9.7273C7.0733 10.0813 6.4703 10.2581 5.732 10.2581C5.108 10.2581 4.5699 10.1219 4.1168 9.8489C3.6637 9.5759 3.3141 9.1946 3.0685 8.7058C2.8224 8.2165 2.6994 7.6511 2.6994 7.009C2.6994 6.3611 2.8224 5.7927 3.0685 5.3034C3.3141 4.8146 3.6637 4.4323 4.1168 4.1559C4.5699 3.88 5.108 3.7418 5.732 3.7418C6.4703 3.7418 7.0733 3.922 7.5411 4.2818C8.0094 4.6422 8.3062 5.1461 8.4322 5.794H7.3702C7.2862 5.4283 7.106 5.1368 6.8302 4.921C6.5544 4.7052 6.1852 4.5968 5.7233 4.5968C5.0934 4.5968 4.5954 4.8116 4.2292 5.2404C3.8635 5.6696 3.6804 6.259 3.6804 7.009C3.6804 7.7531 3.8635 8.3381 4.2292 8.7639ZM11.0974 8.7639C11.4636 9.1902 11.9617 9.4031 12.5915 9.4031C13.0534 9.4031 13.4226 9.301 13.6984 9.0969C13.9743 8.8933 14.1545 8.614 14.2384 8.26H15.3004C15.1744 8.884 14.8775 9.3733 14.4093 9.7273C13.9415 10.0813 13.3385 10.2581 12.6002 10.2581C11.9762 10.2581 11.4381 10.1219 10.985 9.8489C10.5319 9.5759 10.1823 9.1946 9.9367 8.7058C9.6906 8.2165 9.5676 7.6511 9.5676 7.009C9.5676 6.3611 9.6906 5.7927 9.9367 5.3034C10.1823 4.8146 10.5319 4.4323 10.985 4.1559C11.4381 3.88 11.9762 3.7418 12.6002 3.7418C13.3385 3.7418 13.9415 3.922 14.4093 4.2818C14.8776 4.6422 15.1744 5.1461 15.3004 5.794H14.2384C14.1544 5.4283 13.9742 5.1368 13.6984 4.921C13.4226 4.7052 13.0534 4.5968 12.5915 4.5968C11.9616 4.5968 11.4636 4.8116 11.0974 5.2404C10.7317 5.6696 10.5486 6.259 10.5486 7.009C10.5486 7.7531 10.7317 8.3381 11.0974 8.7639Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="off">
        <path
          d="M5.73219 10.258C5.10819 10.258 4.57009 10.1218 4.11699 9.8488C3.66389 9.5758 3.31429 9.1945 3.06869 8.7057C2.82259 8.2164 2.69958 7.651 2.69958 7.0089C2.69958 6.361 2.82259 5.7926 3.06869 5.3033C3.31429 4.8145 3.66389 4.4322 4.11699 4.1558C4.57009 3.8799 5.10819 3.7417 5.73219 3.7417C6.47049 3.7417 7.07348 3.9219 7.54128 4.2817C8.00958 4.6421 8.30638 5.146 8.43238 5.7939H7.37039C7.28639 5.4282 7.10618 5.1367 6.83039 4.9209C6.55459 4.7051 6.18538 4.5967 5.72348 4.5967C5.09358 4.5967 4.59559 4.8115 4.22939 5.2403C3.86369 5.6695 3.68058 6.2589 3.68058 7.0089C3.68058 7.753 3.86369 8.338 4.22939 8.7638C4.59559 9.1901 5.09368 9.403 5.72348 9.403C6.18538 9.403 6.55459 9.3009 6.83039 9.0968C7.10629 8.8932 7.28649 8.6139 7.37039 8.2599H8.43238C8.30638 8.8839 8.00948 9.3732 7.54128 9.7272C7.07348 10.0812 6.47049 10.258 5.73219 10.258Z"
        />
        <path
          d="M12.6003 10.258C11.9763 10.258 11.4382 10.1218 10.9851 9.8488C10.532 9.5758 10.1824 9.1945 9.93685 8.7057C9.69075 8.2164 9.56775 7.651 9.56775 7.0089C9.56775 6.361 9.69075 5.7926 9.93685 5.3033C10.1824 4.8145 10.532 4.4322 10.9851 4.1558C11.4382 3.8799 11.9763 3.7417 12.6003 3.7417C13.3386 3.7417 13.9416 3.9219 14.4094 4.2817C14.8777 4.6421 15.1745 5.146 15.3005 5.7939H14.2385C14.1545 5.4282 13.9743 5.1367 13.6985 4.9209C13.4227 4.7051 13.0535 4.5967 12.5916 4.5967C11.9617 4.5967 11.4637 4.8115 11.0975 5.2403C10.7318 5.6695 10.5487 6.2589 10.5487 7.0089C10.5487 7.753 10.7318 8.338 11.0975 8.7638C11.4637 9.1901 11.9618 9.403 12.5916 9.403C13.0535 9.403 13.4227 9.3009 13.6985 9.0968C13.9744 8.8932 14.1546 8.6139 14.2385 8.2599H15.3005C15.1745 8.8839 14.8776 9.3732 14.4094 9.7272C13.9416 10.0812 13.3386 10.258 12.6003 10.258Z"
        />
        <path
          d="M15.9891 1C16.5465 1 17 1.4535 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H2.0109C1.4535 13 1 12.5465 1 11.9891V2.0109C1 1.4535 1.4535 0.9999 2.0109 0.9999L15.9891 1ZM15.9891 0H2.0109C0.9003 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9003 14 2.0109 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0Z"
        />
      </svg>
    </media-captions-menu-button>
    <media-captions-menu
      hidden
      anchor="auto"
      part="bottom captions menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg></div
    ></media-captions-menu>
  </template>

  <template partial="AirplayButton">
    <media-airplay-button part="bottom airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M16.1383 0H1.8618C0.8335 0 0 0.8335 0 1.8617V10.1382C0 11.1664 0.8335 12 1.8618 12H3.076C3.1204 11.9433 3.1503 11.8785 3.2012 11.826L4.004 11H1.8618C1.3866 11 1 10.6134 1 10.1382V1.8617C1 1.3865 1.3866 0.9999 1.8618 0.9999H16.1383C16.6135 0.9999 17.0001 1.3865 17.0001 1.8617V10.1382C17.0001 10.6134 16.6135 11 16.1383 11H13.9961L14.7989 11.826C14.8499 11.8785 14.8798 11.9432 14.9241 12H16.1383C17.1665 12 18.0001 11.1664 18.0001 10.1382V1.8617C18 0.8335 17.1665 0 16.1383 0Z"
        />
        <path
          d="M9.55061 8.21903C9.39981 8.06383 9.20001 7.98633 9.00011 7.98633C8.80021 7.98633 8.60031 8.06383 8.44951 8.21903L4.09771 12.697C3.62471 13.1838 3.96961 13.9998 4.64831 13.9998H13.3518C14.0304 13.9998 14.3754 13.1838 13.9023 12.697L9.55061 8.21903Z"
        />
      </svg>
    </media-airplay-button>
  </template>

  <template partial="FullscreenButton">
    <media-fullscreen-button part="bottom fullscreen button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M1.00745 4.39539L1.01445 1.98789C1.01605 1.43049 1.47085 0.978289 2.02835 0.979989L6.39375 0.992589L6.39665 -0.007411L2.03125 -0.020011C0.920646 -0.023211 0.0176463 0.874489 0.0144463 1.98509L0.00744629 4.39539H1.00745Z"
        />
        <path
          d="M17.0144 2.03431L17.0076 4.39541H18.0076L18.0144 2.03721C18.0176 0.926712 17.1199 0.0237125 16.0093 0.0205125L11.6439 0.0078125L11.641 1.00781L16.0064 1.02041C16.5638 1.02201 17.016 1.47681 17.0144 2.03431Z"
        />
        <path
          d="M16.9925 9.60498L16.9855 12.0124C16.9839 12.5698 16.5291 13.022 15.9717 13.0204L11.6063 13.0078L11.6034 14.0078L15.9688 14.0204C17.0794 14.0236 17.9823 13.1259 17.9855 12.0153L17.9925 9.60498H16.9925Z"
        />
        <path
          d="M0.985626 11.9661L0.992426 9.60498H-0.0074737L-0.0142737 11.9632C-0.0174737 13.0738 0.880226 13.9767 1.99083 13.98L6.35623 13.9926L6.35913 12.9926L1.99373 12.98C1.43633 12.9784 0.983926 12.5236 0.985626 11.9661Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M5.39655 -0.0200195L5.38955 2.38748C5.38795 2.94488 4.93315 3.39708 4.37565 3.39538L0.0103463 3.38278L0.00744629 4.38278L4.37285 4.39538C5.48345 4.39858 6.38635 3.50088 6.38965 2.39028L6.39665 -0.0200195H5.39655Z"
        />
        <path
          d="M12.6411 2.36891L12.6479 0.0078125H11.6479L11.6411 2.36601C11.6379 3.47651 12.5356 4.37951 13.6462 4.38271L18.0116 4.39531L18.0145 3.39531L13.6491 3.38271C13.0917 3.38111 12.6395 2.92641 12.6411 2.36891Z"
        />
        <path
          d="M12.6034 14.0204L12.6104 11.613C12.612 11.0556 13.0668 10.6034 13.6242 10.605L17.9896 10.6176L17.9925 9.61759L13.6271 9.60499C12.5165 9.60179 11.6136 10.4995 11.6104 11.6101L11.6034 14.0204H12.6034Z"
        />
        <path
          d="M5.359 11.6315L5.3522 13.9926H6.3522L6.359 11.6344C6.3622 10.5238 5.4645 9.62088 4.3539 9.61758L-0.0115043 9.60498L-0.0144043 10.605L4.351 10.6176C4.9084 10.6192 5.3607 11.074 5.359 11.6315Z"
        />
      </svg>
    </media-fullscreen-button>
  </template>

  <template partial="CastButton">
    <media-cast-button part="bottom cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M16.0072 0H2.0291C0.9185 0 0.0181 0.9003 0.0181 2.011V5.5009C0.357 5.5016 0.6895 5.5275 1.0181 5.5669V2.011C1.0181 1.4536 1.4716 1 2.029 1H16.0072C16.5646 1 17.0181 1.4536 17.0181 2.011V11.9891C17.0181 12.5465 16.5646 13 16.0072 13H8.4358C8.4746 13.3286 8.4999 13.6611 8.4999 13.9999H16.0071C17.1177 13.9999 18.018 13.0996 18.018 11.989V2.011C18.0181 0.9003 17.1178 0 16.0072 0ZM0 6.4999V7.4999C3.584 7.4999 6.5 10.4159 6.5 13.9999H7.5C7.5 9.8642 4.1357 6.4999 0 6.4999ZM0 8.7499V9.7499C2.3433 9.7499 4.25 11.6566 4.25 13.9999H5.25C5.25 11.1049 2.895 8.7499 0 8.7499ZM0.0181 11V14H3.0181C3.0181 12.3431 1.675 11 0.0181 11Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M15.9891 0H2.01103C0.900434 0 3.35947e-05 0.9003 3.35947e-05 2.011V5.5009C0.338934 5.5016 0.671434 5.5275 1.00003 5.5669V2.011C1.00003 1.4536 1.45353 1 2.01093 1H15.9891C16.5465 1 17 1.4536 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H8.41773C8.45653 13.3286 8.48183 13.6611 8.48183 13.9999H15.989C17.0996 13.9999 17.9999 13.0996 17.9999 11.989V2.011C18 0.9003 17.0997 0 15.9891 0ZM-0.0180664 6.4999V7.4999C3.56593 7.4999 6.48193 10.4159 6.48193 13.9999H7.48193C7.48193 9.8642 4.11763 6.4999 -0.0180664 6.4999ZM-0.0180664 8.7499V9.7499C2.32523 9.7499 4.23193 11.6566 4.23193 13.9999H5.23193C5.23193 11.1049 2.87693 8.7499 -0.0180664 8.7499ZM3.35947e-05 11V14H3.00003C3.00003 12.3431 1.65693 11 3.35947e-05 11Z"
        />
        <path d="M2.15002 5.634C5.18352 6.4207 7.57252 8.8151 8.35282 11.8499H15.8501V2.1499H2.15002V5.634Z" />
      </svg>
    </media-cast-button>
  </template>

  <template partial="LiveButton">
    <media-live-button part="{{section ?? 'top'}} live button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <span slot="text">Live</span>
    </media-live-button>
  </template>

  <template partial="PlaybackRateMenu">
    <media-playback-rate-menu-button part="bottom playback-rate button"></media-playback-rate-menu-button>
    <media-playback-rate-menu
      hidden
      anchor="auto"
      rates="{{playbackrates}}"
      exportparts="menu-item"
      part="bottom playback-rate menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-playback-rate-menu>
  </template>

  <template partial="VolumeRange">
    <media-volume-range
      part="bottom volume range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-volume-range>
  </template>

  <template partial="TimeDisplay">
    <media-time-display
      remaining="{{defaultshowremainingtime}}"
      showduration="{{!hideduration}}"
      part="bottom time display"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-display>
  </template>

  <template partial="TimeRange">
    <media-time-range part="bottom time range" disabled="{{disabled}}" aria-disabled="{{disabled}}" exportparts="thumb">
      <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
      <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
      <media-preview-time-display slot="preview"></media-preview-time-display>
      <div slot="preview" part="arrow"></div>
    </media-time-range>
  </template>

  <template partial="AudioTrackMenu">
    <media-audio-track-menu-button part="bottom audio-track button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 16">
        <path d="M9 15A7 7 0 1 1 9 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 9 0a8 8 0 0 0 0 16Z" />
        <path
          d="M5.2 6.3a.5.5 0 0 1 .5.5v2.4a.5.5 0 1 1-1 0V6.8a.5.5 0 0 1 .5-.5Zm2.4-2.4a.5.5 0 0 1 .5.5v7.2a.5.5 0 0 1-1 0V4.4a.5.5 0 0 1 .5-.5ZM10 5.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.4-.8a.5.5 0 0 1 .5.5v5.6a.5.5 0 0 1-1 0V5.2a.5.5 0 0 1 .5-.5Z"
        />
      </svg>
    </media-audio-track-menu-button>
    <media-audio-track-menu
      hidden
      anchor="auto"
      part="bottom audio-track menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-audio-track-menu>
  </template>

  <template partial="RenditionMenu">
    <media-rendition-menu-button part="bottom rendition button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 14">
        <path
          d="M2.25 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
      </svg>
    </media-rendition-menu-button>
    <media-rendition-menu
      hidden
      anchor="auto"
      part="bottom rendition menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            opacity: 0;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-rendition-menu>
  </template>

  <template partial="MuxBadge">
    <div part="mux-badge">
      <a href="https://www.mux.com/player" target="_blank">
        <span class="mux-badge-text">Powered by</span>
        <div class="mux-badge-logo">
          <svg
            viewBox="0 0 1600 500"
            style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2"
          >
            <g>
              <path
                d="M994.287,93.486c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m0,-93.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,68.943 -56.09,125.033 -125.032,125.033c-68.942,-0 -125.03,-56.09 -125.03,-125.033l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,137.853 112.149,250.003 249.999,250.003c137.851,-0 250.001,-112.15 250.001,-250.003l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M1537.51,468.511c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m-275.883,-218.509l-143.33,143.329c-24.402,24.402 -24.402,63.966 0,88.368c24.402,24.402 63.967,24.402 88.369,-0l143.33,-143.329l143.328,143.329c24.402,24.4 63.967,24.402 88.369,-0c24.403,-24.402 24.403,-63.966 0.001,-88.368l-143.33,-143.329l0.001,-0.004l143.329,-143.329c24.402,-24.402 24.402,-63.965 0,-88.367c-24.402,-24.402 -63.967,-24.402 -88.369,-0l-143.329,143.328l-143.329,-143.328c-24.402,-24.401 -63.967,-24.402 -88.369,-0c-24.402,24.402 -24.402,63.965 0,88.367l143.329,143.329l0,0.004Z"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M437.511,468.521c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m23.915,-463.762c-23.348,-9.672 -50.226,-4.327 -68.096,13.544l-143.331,143.329l-143.33,-143.329c-17.871,-17.871 -44.747,-23.216 -68.096,-13.544c-23.349,9.671 -38.574,32.455 -38.574,57.729l0,375.026c0,34.51 27.977,62.486 62.487,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-224.173l80.843,80.844c24.404,24.402 63.965,24.402 88.369,-0l80.843,-80.844l0,224.173c0,34.51 27.976,62.486 62.486,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-375.026c0,-25.274 -15.224,-48.058 -38.573,-57.729"
                style="fill-rule: nonzero"
              ></path>
            </g>
          </svg>
        </div>
      </a>
    </div>
  </template>

  <media-controller
    part="controller"
    defaultstreamtype="{{defaultstreamtype ?? 'on-demand'}}"
    breakpoints="sm:470"
    gesturesdisabled="{{disabled}}"
    hotkeys="{{hotkeys}}"
    nohotkeys="{{nohotkeys}}"
    novolumepref="{{novolumepref}}"
    audio="{{audio}}"
    noautoseektolive="{{noautoseektolive}}"
    defaultsubtitles="{{defaultsubtitles}}"
    defaultduration="{{defaultduration ?? false}}"
    keyboardforwardseekoffset="{{forwardseekoffset}}"
    keyboardbackwardseekoffset="{{backwardseekoffset}}"
    exportparts="layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer"
    style="--_pre-playback-place:{{preplaybackplace ?? 'center'}}"
  >
    <slot name="media" slot="media"></slot>
    <slot name="poster" slot="poster"></slot>

    <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>

    <template if="!audio">
      <media-error-dialog slot="dialog" noautohide></media-error-dialog>
      <!-- Pre-playback UI -->
      <!-- same for both on-demand and live -->
      <div slot="centered-chrome" class="center-controls pre-playback">
        <template if="!breakpointsm">{{>PlayButton section="center"}}</template>
        <template if="breakpointsm">{{>PrePlayButton section="center"}}</template>
      </div>

      <!-- Mux Badge -->
      <template if="proudlydisplaymuxbadge"> {{>MuxBadge}} </template>

      <!-- Autoplay centered unmute button -->
      <!--
        todo: figure out how show this with available state variables
        needs to show when:
        - autoplay is enabled
        - playback has been successful
        - audio is muted
        - in place / instead of the pre-plaback play button
        - not to show again after user has interacted with this button
          - OR user has interacted with the mute button in the control bar
      -->
      <!--
        There should be a >MuteButton to the left of the "Unmute" text, but a templating bug
        makes it appear even if commented out in the markup, add it back when code is un-commented
      -->
      <!-- <div slot="centered-chrome" class="autoplay-unmute">
        <div role="button" class="autoplay-unmute-btn">Unmute</div>
      </div> -->

      <template if="streamtype == 'on-demand'">
        <template if="breakpointsm">
          <media-control-bar part="control-bar top" slot="top-chrome">{{>TitleDisplay}} </media-control-bar>
        </template>
        {{>TimeRange}}
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>SeekBackwardButton}} {{>SeekForwardButton}} {{>TimeDisplay}} {{>MuteButton}}
          {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>PlaybackRateMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}}
          {{>CastButton}} {{>PipButton}} {{>FullscreenButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <media-control-bar part="control-bar top" slot="top-chrome">
          {{>LiveButton}}
          <template if="breakpointsm"> {{>TitleDisplay}} </template>
        </media-control-bar>
        <template if="targetlivewindow > 0">{{>TimeRange}}</template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="targetlivewindow > 0">{{>SeekBackwardButton}} {{>SeekForwardButton}}</template>
          {{>MuteButton}} {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}} {{>CastButton}} {{>PipButton}}
          {{>FullscreenButton}}
        </media-control-bar>
      </template>
    </template>

    <template if="audio">
      <template if="streamtype == 'on-demand'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="breakpointsm"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          {{>MuteButton}}
          <template if="breakpointsm">{{>VolumeRange}}</template>
          {{>TimeDisplay}} {{>TimeRange}}
          <template if="breakpointsm">{{>PlaybackRateMenu}}</template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>LiveButton section="bottom"}} {{>MuteButton}}
          <template if="breakpointsm">
            {{>VolumeRange}}
            <template if="targetlivewindow > 0"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          </template>
          <template if="targetlivewindow > 0"> {{>TimeDisplay}} {{>TimeRange}} </template>
          <template if="!targetlivewindow"><div class="spacer"></div></template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>
    </template>

    <slot></slot>
  </media-controller>
</template>
`,yl=Ms.createElement("template");"innerHTML"in yl&&(yl.innerHTML=A1);var Ac,yc,up=class extends Ys{};up.template=(yc=(Ac=yl.content)==null?void 0:Ac.children)==null?void 0:yc[0];st.customElements.get("media-theme-gerwig")||st.customElements.define("media-theme-gerwig",up);var y1="gerwig",bt={SRC:"src",POSTER:"poster"},b={STYLE:"style",DEFAULT_HIDDEN_CAPTIONS:"default-hidden-captions",PRIMARY_COLOR:"primary-color",SECONDARY_COLOR:"secondary-color",ACCENT_COLOR:"accent-color",FORWARD_SEEK_OFFSET:"forward-seek-offset",BACKWARD_SEEK_OFFSET:"backward-seek-offset",PLAYBACK_TOKEN:"playback-token",THUMBNAIL_TOKEN:"thumbnail-token",STORYBOARD_TOKEN:"storyboard-token",FULLSCREEN_ELEMENT:"fullscreen-element",DRM_TOKEN:"drm-token",STORYBOARD_SRC:"storyboard-src",THUMBNAIL_TIME:"thumbnail-time",AUDIO:"audio",NOHOTKEYS:"nohotkeys",HOTKEYS:"hotkeys",PLAYBACK_RATES:"playbackrates",DEFAULT_SHOW_REMAINING_TIME:"default-show-remaining-time",DEFAULT_DURATION:"default-duration",TITLE:"title",VIDEO_TITLE:"video-title",PLACEHOLDER:"placeholder",THEME:"theme",DEFAULT_STREAM_TYPE:"default-stream-type",TARGET_LIVE_WINDOW:"target-live-window",EXTRA_SOURCE_PARAMS:"extra-source-params",NO_VOLUME_PREF:"no-volume-pref",NO_MUTED_PREF:"no-muted-pref",CAST_RECEIVER:"cast-receiver",NO_TOOLTIPS:"no-tooltips",PROUDLY_DISPLAY_MUX_BADGE:"proudly-display-mux-badge",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended"},kl=["audio","backwardseekoffset","defaultduration","defaultshowremainingtime","defaultsubtitles","noautoseektolive","disabled","exportparts","forwardseekoffset","hideduration","hotkeys","nohotkeys","playbackrates","defaultstreamtype","streamtype","style","targetlivewindow","template","title","videotitle","novolumepref","nomutedpref","proudlydisplaymuxbadge"];function k1(t,e){var i,a;return{src:!t.playbackId&&t.src,playbackId:t.playbackId,hasSrc:!!t.playbackId||!!t.src||!!t.currentSrc,poster:t.poster,storyboard:t.storyboard,storyboardSrc:t.getAttribute(b.STORYBOARD_SRC),fullscreenElement:t.getAttribute(b.FULLSCREEN_ELEMENT),placeholder:t.getAttribute("placeholder"),themeTemplate:I1(t),thumbnailTime:!t.tokens.thumbnail&&t.thumbnailTime,autoplay:t.autoplay,crossOrigin:t.crossOrigin,loop:t.loop,noHotKeys:t.hasAttribute(b.NOHOTKEYS),hotKeys:t.getAttribute(b.HOTKEYS),muted:t.muted,paused:t.paused,preload:t.preload,envKey:t.envKey,preferCmcd:t.preferCmcd,debug:t.debug,disableTracking:t.disableTracking,disableCookies:t.disableCookies,tokens:t.tokens,beaconCollectionDomain:t.beaconCollectionDomain,maxResolution:t.maxResolution,minResolution:t.minResolution,programStartTime:t.programStartTime,programEndTime:t.programEndTime,assetStartTime:t.assetStartTime,assetEndTime:t.assetEndTime,renditionOrder:t.renditionOrder,metadata:t.metadata,playerInitTime:t.playerInitTime,playerSoftwareName:t.playerSoftwareName,playerSoftwareVersion:t.playerSoftwareVersion,startTime:t.startTime,preferPlayback:t.preferPlayback,audio:t.audio,defaultStreamType:t.defaultStreamType,targetLiveWindow:t.getAttribute(m.TARGET_LIVE_WINDOW),streamType:Kd(t.getAttribute(m.STREAM_TYPE)),primaryColor:t.getAttribute(b.PRIMARY_COLOR),secondaryColor:t.getAttribute(b.SECONDARY_COLOR),accentColor:t.getAttribute(b.ACCENT_COLOR),forwardSeekOffset:t.forwardSeekOffset,backwardSeekOffset:t.backwardSeekOffset,defaultHiddenCaptions:t.defaultHiddenCaptions,defaultDuration:t.defaultDuration,defaultShowRemainingTime:t.defaultShowRemainingTime,hideDuration:R1(t),playbackRates:t.getAttribute(b.PLAYBACK_RATES),customDomain:(i=t.getAttribute(m.CUSTOM_DOMAIN))!=null?i:void 0,title:t.getAttribute(b.TITLE),videoTitle:(a=t.getAttribute(b.VIDEO_TITLE))!=null?a:t.getAttribute(b.TITLE),novolumepref:t.hasAttribute(b.NO_VOLUME_PREF),nomutedpref:t.hasAttribute(b.NO_MUTED_PREF),proudlyDisplayMuxBadge:t.hasAttribute(b.PROUDLY_DISPLAY_MUX_BADGE),castReceiver:t.castReceiver,disablePseudoEnded:t.hasAttribute(b.DISABLE_PSEUDO_ENDED),...e,extraSourceParams:t.extraSourceParams}}var S1=im.formatErrorMessage;im.formatErrorMessage=t=>{var e,i;if(t instanceof k){let a=_1(t,!1);return`
      ${a!=null&&a.title?`<h3>${a.title}</h3>`:""}
      ${a!=null&&a.message||a!=null&&a.linkUrl?`<p>
        ${a?.message}
        ${a!=null&&a.linkUrl?`<a
              href="${a.linkUrl}"
              target="_blank"
              rel="external noopener"
              aria-label="${(e=a.linkText)!=null?e:""} ${R("(opens in a new window)")}"
              >${(i=a.linkText)!=null?i:a.linkUrl}</a
            >`:""}
      </p>`:""}
    `}return S1(t)};function I1(t){var e,i;let a=t.theme;if(a){let r=(i=(e=t.getRootNode())==null?void 0:e.getElementById)==null?void 0:i.call(e,a);if(r&&r instanceof HTMLTemplateElement)return r;a.startsWith("media-theme-")||(a=`media-theme-${a}`);let n=st.customElements.get(a);if(n!=null&&n.template)return n.template}}function R1(t){var e;let i=(e=t.mediaController)==null?void 0:e.querySelector("media-time-display");return i&&getComputedStyle(i).getPropertyValue("--media-duration-display-display").trim()==="none"}function kc(t){let e=t.videoTitle?{video_title:t.videoTitle}:{};return t.getAttributeNames().filter(i=>i.startsWith("metadata-")).reduce((i,a)=>{let r=t.getAttribute(a);return r!==null&&(i[a.replace(/^metadata-/,"").replace(/-/g,"_")]=r),i},e)}var C1=Object.values(m),M1=Object.values(bt),L1=Object.values(b),Sc=rp(),Ic="mux-player",Rc={isDialogOpen:!1},w1={redundant_streams:!0},es,ts,is,ei,as,ra,X,Pt,cp,Sl,ti,Cc,Mc,Lc,wc,D1=class extends fc{constructor(){super(),We(this,X),We(this,es),We(this,ts,!1),We(this,is,{}),We(this,ei,!0),We(this,as,new Qf(this,"hotkeys")),We(this,ra,{...Rc,onCloseErrorDialog:t=>{var e;((e=t.composedPath()[0])==null?void 0:e.localName)==="media-error-dialog"&&re(this,X,Sl).call(this,{isDialogOpen:!1})},onFocusInErrorDialog:t=>{var e;((e=t.composedPath()[0])==null?void 0:e.localName)==="media-error-dialog"&&(ip(this,Ms.activeElement)||t.preventDefault())}}),ct(this,es,Gc()),this.attachShadow({mode:"open"}),re(this,X,cp).call(this),this.isConnected&&re(this,X,Pt).call(this)}static get NAME(){return Ic}static get VERSION(){return Sc}static get observedAttributes(){var t;return[...(t=fc.observedAttributes)!=null?t:[],...M1,...C1,...L1]}get mediaTheme(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("media-theme")}get mediaController(){var t,e;return(e=(t=this.mediaTheme)==null?void 0:t.shadowRoot)==null?void 0:e.querySelector("media-controller")}connectedCallback(){let t=this.media;t&&(t.metadata=kc(this))}attributeChangedCallback(t,e,i){switch(re(this,X,Pt).call(this),super.attributeChangedCallback(t,e,i),t){case b.HOTKEYS:W(this,as).value=i;break;case b.THUMBNAIL_TIME:{i!=null&&this.tokens.thumbnail&&gt(R("Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time.").toString());break}case b.THUMBNAIL_TOKEN:{if(i){let a=zi(i);if(a){let{aud:r}=a,n=or.THUMBNAIL;r!==n&&gt(R("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:r,expectedAud:n,tokenNamePrefix:"thumbnail"}))}}break}case b.STORYBOARD_TOKEN:{if(i){let a=zi(i);if(a){let{aud:r}=a,n=or.STORYBOARD;r!==n&&gt(R("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:r,expectedAud:n,tokenNamePrefix:"storyboard"}))}}break}case b.DRM_TOKEN:{if(i){let a=zi(i);if(a){let{aud:r}=a,n=or.DRM;r!==n&&gt(R("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:r,expectedAud:n,tokenNamePrefix:"drm"}))}}break}case m.PLAYBACK_ID:{i!=null&&i.includes("?token")&&Le(R("The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute.").format({playbackId:i}));break}case m.STREAM_TYPE:{i&&![B.LIVE,B.ON_DEMAND,B.UNKNOWN].includes(i)?["ll-live","live:dvr","ll-live:dvr"].includes(this.streamType)?this.targetLiveWindow=i.includes("dvr")?Number.POSITIVE_INFINITY:0:sp({file:"invalid-stream-type.md",message:R("Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand` or `live`").format({streamType:this.streamType})}):i===B.LIVE?this.getAttribute(b.TARGET_LIVE_WINDOW)==null&&(this.targetLiveWindow=0):this.targetLiveWindow=Number.NaN;break}case b.FULLSCREEN_ELEMENT:{if(i!=null||i!==e){let a=Ms.getElementById(i),r=a?.querySelector("mux-player");this.mediaController&&a&&r&&(this.mediaController.fullscreenElement=a)}break}}[m.PLAYBACK_ID,bt.SRC,b.PLAYBACK_TOKEN].includes(t)&&e!==i&&ct(this,ra,{...W(this,ra),...Rc}),re(this,X,ti).call(this,{[Zf(t)]:i})}async requestFullscreen(t){var e;if(!(!this.mediaController||this.mediaController.hasAttribute(l.MEDIA_IS_FULLSCREEN)))return(e=this.mediaController)==null||e.dispatchEvent(new st.CustomEvent(y.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((i,a)=>{var r;(r=this.mediaController)==null||r.addEventListener(yt.MEDIA_IS_FULLSCREEN,()=>i(),{once:!0})})}async exitFullscreen(){var t;if(!(!this.mediaController||!this.mediaController.hasAttribute(l.MEDIA_IS_FULLSCREEN)))return(t=this.mediaController)==null||t.dispatchEvent(new st.CustomEvent(y.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((e,i)=>{var a;(a=this.mediaController)==null||a.addEventListener(yt.MEDIA_IS_FULLSCREEN,()=>e(),{once:!0})})}get preferCmcd(){var t;return(t=this.getAttribute(m.PREFER_CMCD))!=null?t:void 0}set preferCmcd(t){t!==this.preferCmcd&&(t?rs.includes(t)?this.setAttribute(m.PREFER_CMCD,t):gt(`Invalid value for preferCmcd. Must be one of ${rs.join()}`):this.removeAttribute(m.PREFER_CMCD))}get hasPlayed(){var t,e;return(e=(t=this.mediaController)==null?void 0:t.hasAttribute(l.MEDIA_HAS_PLAYED))!=null?e:!1}get inLiveWindow(){var t;return(t=this.mediaController)==null?void 0:t.hasAttribute(l.MEDIA_TIME_IS_LIVE)}get _hls(){var t;return(t=this.media)==null?void 0:t._hls}get mux(){var t;return(t=this.media)==null?void 0:t.mux}get theme(){var t;return(t=this.getAttribute(b.THEME))!=null?t:y1}set theme(t){this.setAttribute(b.THEME,`${t}`)}get themeProps(){let t=this.mediaTheme;if(!t)return;let e={};for(let i of t.getAttributeNames()){if(kl.includes(i))continue;let a=t.getAttribute(i);e[ep(i)]=a===""?!0:a}return e}set themeProps(t){var e,i;re(this,X,Pt).call(this);let a={...this.themeProps,...t};for(let r in a){if(kl.includes(r))continue;let n=t?.[r];typeof n=="boolean"||n==null?(e=this.mediaTheme)==null||e.toggleAttribute(Al(r),!!n):(i=this.mediaTheme)==null||i.setAttribute(Al(r),n)}}get playbackId(){var t;return(t=this.getAttribute(m.PLAYBACK_ID))!=null?t:void 0}set playbackId(t){t?this.setAttribute(m.PLAYBACK_ID,t):this.removeAttribute(m.PLAYBACK_ID)}get src(){var t,e;return this.playbackId?(t=Gt(this,bt.SRC))!=null?t:void 0:(e=this.getAttribute(bt.SRC))!=null?e:void 0}set src(t){t?this.setAttribute(bt.SRC,t):this.removeAttribute(bt.SRC)}get poster(){var t;let e=this.getAttribute(bt.POSTER);if(e!=null)return e;let{tokens:i}=this;if(i.playback&&!i.thumbnail){gt("Missing expected thumbnail token. No poster image will be shown");return}if(this.playbackId&&!this.audio)return Yf(this.playbackId,{customDomain:this.customDomain,thumbnailTime:(t=this.thumbnailTime)!=null?t:this.startTime,programTime:this.programStartTime,token:i.thumbnail})}set poster(t){t||t===""?this.setAttribute(bt.POSTER,t):this.removeAttribute(bt.POSTER)}get storyboardSrc(){var t;return(t=this.getAttribute(b.STORYBOARD_SRC))!=null?t:void 0}set storyboardSrc(t){t?this.setAttribute(b.STORYBOARD_SRC,t):this.removeAttribute(b.STORYBOARD_SRC)}get storyboard(){let{tokens:t}=this;if(this.storyboardSrc&&!t.storyboard)return this.storyboardSrc;if(!(this.audio||!this.playbackId||!this.streamType||[B.LIVE,B.UNKNOWN].includes(this.streamType)||t.playback&&!t.storyboard))return Gf(this.playbackId,{customDomain:this.customDomain,token:t.storyboard,programStartTime:this.programStartTime,programEndTime:this.programEndTime})}get audio(){return this.hasAttribute(b.AUDIO)}set audio(t){if(!t){this.removeAttribute(b.AUDIO);return}this.setAttribute(b.AUDIO,"")}get hotkeys(){return W(this,as)}get nohotkeys(){return this.hasAttribute(b.NOHOTKEYS)}set nohotkeys(t){if(!t){this.removeAttribute(b.NOHOTKEYS);return}this.setAttribute(b.NOHOTKEYS,"")}get thumbnailTime(){return ye(this.getAttribute(b.THUMBNAIL_TIME))}set thumbnailTime(t){this.setAttribute(b.THUMBNAIL_TIME,`${t}`)}get videoTitle(){var t,e;return(e=(t=this.getAttribute(b.VIDEO_TITLE))!=null?t:this.getAttribute(b.TITLE))!=null?e:""}set videoTitle(t){t!==this.videoTitle&&(t?this.setAttribute(b.VIDEO_TITLE,t):this.removeAttribute(b.VIDEO_TITLE))}get placeholder(){var t;return(t=Gt(this,b.PLACEHOLDER))!=null?t:""}set placeholder(t){this.setAttribute(b.PLACEHOLDER,`${t}`)}get primaryColor(){var t,e;let i=this.getAttribute(b.PRIMARY_COLOR);if(i!=null||this.mediaTheme&&(i=(e=(t=st.getComputedStyle(this.mediaTheme))==null?void 0:t.getPropertyValue("--_primary-color"))==null?void 0:e.trim(),i))return i}set primaryColor(t){this.setAttribute(b.PRIMARY_COLOR,`${t}`)}get secondaryColor(){var t,e;let i=this.getAttribute(b.SECONDARY_COLOR);if(i!=null||this.mediaTheme&&(i=(e=(t=st.getComputedStyle(this.mediaTheme))==null?void 0:t.getPropertyValue("--_secondary-color"))==null?void 0:e.trim(),i))return i}set secondaryColor(t){this.setAttribute(b.SECONDARY_COLOR,`${t}`)}get accentColor(){var t,e;let i=this.getAttribute(b.ACCENT_COLOR);if(i!=null||this.mediaTheme&&(i=(e=(t=st.getComputedStyle(this.mediaTheme))==null?void 0:t.getPropertyValue("--_accent-color"))==null?void 0:e.trim(),i))return i}set accentColor(t){this.setAttribute(b.ACCENT_COLOR,`${t}`)}get defaultShowRemainingTime(){return this.hasAttribute(b.DEFAULT_SHOW_REMAINING_TIME)}set defaultShowRemainingTime(t){t?this.setAttribute(b.DEFAULT_SHOW_REMAINING_TIME,""):this.removeAttribute(b.DEFAULT_SHOW_REMAINING_TIME)}get playbackRates(){if(this.hasAttribute(b.PLAYBACK_RATES))return this.getAttribute(b.PLAYBACK_RATES).trim().split(/\s*,?\s+/).map(t=>Number(t)).filter(t=>!Number.isNaN(t)).sort((t,e)=>t-e)}set playbackRates(t){if(!t){this.removeAttribute(b.PLAYBACK_RATES);return}this.setAttribute(b.PLAYBACK_RATES,t.join(" "))}get forwardSeekOffset(){var t;return(t=ye(this.getAttribute(b.FORWARD_SEEK_OFFSET)))!=null?t:10}set forwardSeekOffset(t){this.setAttribute(b.FORWARD_SEEK_OFFSET,`${t}`)}get backwardSeekOffset(){var t;return(t=ye(this.getAttribute(b.BACKWARD_SEEK_OFFSET)))!=null?t:10}set backwardSeekOffset(t){this.setAttribute(b.BACKWARD_SEEK_OFFSET,`${t}`)}get defaultHiddenCaptions(){return this.hasAttribute(b.DEFAULT_HIDDEN_CAPTIONS)}set defaultHiddenCaptions(t){t?this.setAttribute(b.DEFAULT_HIDDEN_CAPTIONS,""):this.removeAttribute(b.DEFAULT_HIDDEN_CAPTIONS)}get defaultDuration(){return ye(this.getAttribute(b.DEFAULT_DURATION))}set defaultDuration(t){t==null?this.removeAttribute(b.DEFAULT_DURATION):this.setAttribute(b.DEFAULT_DURATION,`${t}`)}get playerInitTime(){return this.hasAttribute(m.PLAYER_INIT_TIME)?ye(this.getAttribute(m.PLAYER_INIT_TIME)):W(this,es)}set playerInitTime(t){t!=this.playerInitTime&&(t==null?this.removeAttribute(m.PLAYER_INIT_TIME):this.setAttribute(m.PLAYER_INIT_TIME,`${+t}`))}get playerSoftwareName(){var t;return(t=this.getAttribute(m.PLAYER_SOFTWARE_NAME))!=null?t:Ic}get playerSoftwareVersion(){var t;return(t=this.getAttribute(m.PLAYER_SOFTWARE_VERSION))!=null?t:Sc}get beaconCollectionDomain(){var t;return(t=this.getAttribute(m.BEACON_COLLECTION_DOMAIN))!=null?t:void 0}set beaconCollectionDomain(t){t!==this.beaconCollectionDomain&&(t?this.setAttribute(m.BEACON_COLLECTION_DOMAIN,t):this.removeAttribute(m.BEACON_COLLECTION_DOMAIN))}get maxResolution(){var t;return(t=this.getAttribute(m.MAX_RESOLUTION))!=null?t:void 0}set maxResolution(t){t!==this.maxResolution&&(t?this.setAttribute(m.MAX_RESOLUTION,t):this.removeAttribute(m.MAX_RESOLUTION))}get minResolution(){var t;return(t=this.getAttribute(m.MIN_RESOLUTION))!=null?t:void 0}set minResolution(t){t!==this.minResolution&&(t?this.setAttribute(m.MIN_RESOLUTION,t):this.removeAttribute(m.MIN_RESOLUTION))}get renditionOrder(){var t;return(t=this.getAttribute(m.RENDITION_ORDER))!=null?t:void 0}set renditionOrder(t){t!==this.renditionOrder&&(t?this.setAttribute(m.RENDITION_ORDER,t):this.removeAttribute(m.RENDITION_ORDER))}get programStartTime(){return ye(this.getAttribute(m.PROGRAM_START_TIME))}set programStartTime(t){t==null?this.removeAttribute(m.PROGRAM_START_TIME):this.setAttribute(m.PROGRAM_START_TIME,`${t}`)}get programEndTime(){return ye(this.getAttribute(m.PROGRAM_END_TIME))}set programEndTime(t){t==null?this.removeAttribute(m.PROGRAM_END_TIME):this.setAttribute(m.PROGRAM_END_TIME,`${t}`)}get assetStartTime(){return ye(this.getAttribute(m.ASSET_START_TIME))}set assetStartTime(t){t==null?this.removeAttribute(m.ASSET_START_TIME):this.setAttribute(m.ASSET_START_TIME,`${t}`)}get assetEndTime(){return ye(this.getAttribute(m.ASSET_END_TIME))}set assetEndTime(t){t==null?this.removeAttribute(m.ASSET_END_TIME):this.setAttribute(m.ASSET_END_TIME,`${t}`)}get extraSourceParams(){return this.hasAttribute(b.EXTRA_SOURCE_PARAMS)?[...new URLSearchParams(this.getAttribute(b.EXTRA_SOURCE_PARAMS)).entries()].reduce((t,[e,i])=>(t[e]=i,t),{}):w1}set extraSourceParams(t){t==null?this.removeAttribute(b.EXTRA_SOURCE_PARAMS):this.setAttribute(b.EXTRA_SOURCE_PARAMS,new URLSearchParams(t).toString())}get customDomain(){var t;return(t=this.getAttribute(m.CUSTOM_DOMAIN))!=null?t:void 0}set customDomain(t){t!==this.customDomain&&(t?this.setAttribute(m.CUSTOM_DOMAIN,t):this.removeAttribute(m.CUSTOM_DOMAIN))}get envKey(){var t;return(t=Gt(this,m.ENV_KEY))!=null?t:void 0}set envKey(t){this.setAttribute(m.ENV_KEY,`${t}`)}get noVolumePref(){return this.hasAttribute(b.NO_VOLUME_PREF)}set noVolumePref(t){t?this.setAttribute(b.NO_VOLUME_PREF,""):this.removeAttribute(b.NO_VOLUME_PREF)}get noMutedPref(){return this.hasAttribute(b.NO_MUTED_PREF)}set noMutedPref(t){t?this.setAttribute(b.NO_MUTED_PREF,""):this.removeAttribute(b.NO_MUTED_PREF)}get debug(){return Gt(this,m.DEBUG)!=null}set debug(t){t?this.setAttribute(m.DEBUG,""):this.removeAttribute(m.DEBUG)}get disableTracking(){return Gt(this,m.DISABLE_TRACKING)!=null}set disableTracking(t){this.toggleAttribute(m.DISABLE_TRACKING,!!t)}get disableCookies(){return Gt(this,m.DISABLE_COOKIES)!=null}set disableCookies(t){t?this.setAttribute(m.DISABLE_COOKIES,""):this.removeAttribute(m.DISABLE_COOKIES)}get streamType(){var t,e,i;return(i=(e=this.getAttribute(m.STREAM_TYPE))!=null?e:(t=this.media)==null?void 0:t.streamType)!=null?i:B.UNKNOWN}set streamType(t){this.setAttribute(m.STREAM_TYPE,`${t}`)}get defaultStreamType(){var t,e,i;return(i=(e=this.getAttribute(b.DEFAULT_STREAM_TYPE))!=null?e:(t=this.mediaController)==null?void 0:t.getAttribute(b.DEFAULT_STREAM_TYPE))!=null?i:B.ON_DEMAND}set defaultStreamType(t){t?this.setAttribute(b.DEFAULT_STREAM_TYPE,t):this.removeAttribute(b.DEFAULT_STREAM_TYPE)}get targetLiveWindow(){var t,e;return this.hasAttribute(b.TARGET_LIVE_WINDOW)?+this.getAttribute(b.TARGET_LIVE_WINDOW):(e=(t=this.media)==null?void 0:t.targetLiveWindow)!=null?e:Number.NaN}set targetLiveWindow(t){t==this.targetLiveWindow||Number.isNaN(t)&&Number.isNaN(this.targetLiveWindow)||(t==null?this.removeAttribute(b.TARGET_LIVE_WINDOW):this.setAttribute(b.TARGET_LIVE_WINDOW,`${+t}`))}get liveEdgeStart(){var t;return(t=this.media)==null?void 0:t.liveEdgeStart}get startTime(){return ye(Gt(this,m.START_TIME))}set startTime(t){this.setAttribute(m.START_TIME,`${t}`)}get preferPlayback(){let t=this.getAttribute(m.PREFER_PLAYBACK);if(t===ot.MSE||t===ot.NATIVE)return t}set preferPlayback(t){t!==this.preferPlayback&&(t===ot.MSE||t===ot.NATIVE?this.setAttribute(m.PREFER_PLAYBACK,t):this.removeAttribute(m.PREFER_PLAYBACK))}get metadata(){var t;return(t=this.media)==null?void 0:t.metadata}set metadata(t){if(re(this,X,Pt).call(this),!this.media){Le("underlying media element missing when trying to set metadata. metadata will not be set.");return}this.media.metadata={...kc(this),...t}}get _hlsConfig(){var t;return(t=this.media)==null?void 0:t._hlsConfig}set _hlsConfig(t){if(re(this,X,Pt).call(this),!this.media){Le("underlying media element missing when trying to set _hlsConfig. _hlsConfig will not be set.");return}this.media._hlsConfig=t}async addCuePoints(t){var e;if(re(this,X,Pt).call(this),!this.media){Le("underlying media element missing when trying to addCuePoints. cuePoints will not be added.");return}return(e=this.media)==null?void 0:e.addCuePoints(t)}get activeCuePoint(){var t;return(t=this.media)==null?void 0:t.activeCuePoint}get cuePoints(){var t,e;return(e=(t=this.media)==null?void 0:t.cuePoints)!=null?e:[]}addChapters(t){var e;if(re(this,X,Pt).call(this),!this.media){Le("underlying media element missing when trying to addChapters. chapters will not be added.");return}return(e=this.media)==null?void 0:e.addChapters(t)}get activeChapter(){var t;return(t=this.media)==null?void 0:t.activeChapter}get chapters(){var t,e;return(e=(t=this.media)==null?void 0:t.chapters)!=null?e:[]}getStartDate(){var t;return(t=this.media)==null?void 0:t.getStartDate()}get currentPdt(){var t;return(t=this.media)==null?void 0:t.currentPdt}get tokens(){let t=this.getAttribute(b.PLAYBACK_TOKEN),e=this.getAttribute(b.DRM_TOKEN),i=this.getAttribute(b.THUMBNAIL_TOKEN),a=this.getAttribute(b.STORYBOARD_TOKEN);return{...W(this,is),...t!=null?{playback:t}:{},...e!=null?{drm:e}:{},...i!=null?{thumbnail:i}:{},...a!=null?{storyboard:a}:{}}}set tokens(t){ct(this,is,t??{})}get playbackToken(){var t;return(t=this.getAttribute(b.PLAYBACK_TOKEN))!=null?t:void 0}set playbackToken(t){this.setAttribute(b.PLAYBACK_TOKEN,`${t}`)}get drmToken(){var t;return(t=this.getAttribute(b.DRM_TOKEN))!=null?t:void 0}set drmToken(t){this.setAttribute(b.DRM_TOKEN,`${t}`)}get thumbnailToken(){var t;return(t=this.getAttribute(b.THUMBNAIL_TOKEN))!=null?t:void 0}set thumbnailToken(t){this.setAttribute(b.THUMBNAIL_TOKEN,`${t}`)}get storyboardToken(){var t;return(t=this.getAttribute(b.STORYBOARD_TOKEN))!=null?t:void 0}set storyboardToken(t){this.setAttribute(b.STORYBOARD_TOKEN,`${t}`)}addTextTrack(t,e,i,a){var r;let n=(r=this.media)==null?void 0:r.nativeEl;if(n)return Ml(n,t,e,i,a)}removeTextTrack(t){var e;let i=(e=this.media)==null?void 0:e.nativeEl;if(i)return Wp(i,t)}get textTracks(){var t;return(t=this.media)==null?void 0:t.textTracks}get castReceiver(){var t;return(t=this.getAttribute(b.CAST_RECEIVER))!=null?t:void 0}set castReceiver(t){t!==this.castReceiver&&(t?this.setAttribute(b.CAST_RECEIVER,t):this.removeAttribute(b.CAST_RECEIVER))}get castCustomData(){var t;return(t=this.media)==null?void 0:t.castCustomData}set castCustomData(t){if(!this.media){Le("underlying media element missing when trying to set castCustomData. castCustomData will not be set.");return}this.media.castCustomData=t}get noTooltips(){return this.hasAttribute(b.NO_TOOLTIPS)}set noTooltips(t){if(!t){this.removeAttribute(b.NO_TOOLTIPS);return}this.setAttribute(b.NO_TOOLTIPS,"")}get proudlyDisplayMuxBadge(){return this.hasAttribute(b.PROUDLY_DISPLAY_MUX_BADGE)}set proudlyDisplayMuxBadge(t){t?this.setAttribute(b.PROUDLY_DISPLAY_MUX_BADGE,""):this.removeAttribute(b.PROUDLY_DISPLAY_MUX_BADGE)}};es=new WeakMap,ts=new WeakMap,is=new WeakMap,ei=new WeakMap,as=new WeakMap,ra=new WeakMap,X=new WeakSet,Pt=function(){var t,e,i,a;if(!W(this,ts)){ct(this,ts,!0),re(this,X,ti).call(this);try{if(customElements.upgrade(this.mediaTheme),!(this.mediaTheme instanceof st.HTMLElement))throw""}catch{Le("<media-theme> failed to upgrade!")}try{customElements.upgrade(this.media)}catch{Le("underlying media element failed to upgrade!")}try{if(customElements.upgrade(this.mediaController),!(this.mediaController instanceof XE))throw""}catch{Le("<media-controller> failed to upgrade!")}re(this,X,Cc).call(this),re(this,X,Mc).call(this),re(this,X,Lc).call(this),ct(this,ei,(e=(t=this.mediaController)==null?void 0:t.hasAttribute(C.USER_INACTIVE))!=null?e:!0),re(this,X,wc).call(this),(i=this.media)==null||i.addEventListener("streamtypechange",()=>re(this,X,ti).call(this)),(a=this.media)==null||a.addEventListener("loadstart",()=>re(this,X,ti).call(this))}},cp=function(){var t,e;try{(t=window?.CSS)==null||t.registerProperty({name:"--media-primary-color",syntax:"<color>",inherits:!0}),(e=window?.CSS)==null||e.registerProperty({name:"--media-secondary-color",syntax:"<color>",inherits:!0})}catch{}},Sl=function(t){Object.assign(W(this,ra),t),re(this,X,ti).call(this)},ti=function(t={}){c1(m1(k1(this,{...W(this,ra),...t})),this.shadowRoot)},Cc=function(){let t=e=>{var i,a;if(!(e!=null&&e.startsWith("theme-")))return;let r=e.replace(/^theme-/,"");if(kl.includes(r))return;let n=this.getAttribute(e);n!=null?(i=this.mediaTheme)==null||i.setAttribute(r,n):(a=this.mediaTheme)==null||a.removeAttribute(r)};new MutationObserver(e=>{for(let{attributeName:i}of e)t(i)}).observe(this,{attributes:!0}),this.getAttributeNames().forEach(t)},Mc=function(){let t=e=>{var i;let a=(i=this.media)==null?void 0:i.error;if(!(a instanceof k)){let{message:n,code:s}=a??{};a=new k(n,s)}if(!(a!=null&&a.fatal)){gt(a),a.data&&gt(`${a.name} data:`,a.data);return}let r=Tc(a);r.message&&sp(r),Le(a),a.data&&Le(`${a.name} data:`,a.data),re(this,X,Sl).call(this,{isDialogOpen:!0})};this.addEventListener("error",t),this.media&&(this.media.errorTranslator=(e={})=>{var i,a,r;if(!(((i=this.media)==null?void 0:i.error)instanceof k))return e;let n=Tc((a=this.media)==null?void 0:a.error);return{player_error_code:(r=this.media)==null?void 0:r.error.code,player_error_message:n.message?String(n.message):e.player_error_message,player_error_context:n.context?String(n.context):e.player_error_context}})},Lc=function(){var t,e,i,a;let r=()=>re(this,X,ti).call(this);(e=(t=this.media)==null?void 0:t.textTracks)==null||e.addEventListener("addtrack",r),(a=(i=this.media)==null?void 0:i.textTracks)==null||a.addEventListener("removetrack",r)},wc=function(){var t,e;if(!/Firefox/i.test(navigator.userAgent))return;let i,a=new WeakMap,r=()=>this.streamType===B.LIVE&&!this.secondaryColor&&this.offsetWidth>=800,n=(o,u,h=!1)=>{r()||Array.from(o&&o.activeCues||[]).forEach(p=>{if(!(!p.snapToLines||p.line<-5||p.line>=0&&p.line<10))if(!u||this.paused){let v=p.text.split(`
`).length,E=-3;this.streamType===B.LIVE&&(E=-2);let g=E-v;if(p.line===g&&!h)return;a.has(p)||a.set(p,p.line),p.line=g}else setTimeout(()=>{p.line=a.get(p)||"auto"},500)})},s=()=>{var o,u;n(i,(u=(o=this.mediaController)==null?void 0:o.hasAttribute(C.USER_INACTIVE))!=null?u:!1)},d=()=>{var o,u;let h=Array.from(((u=(o=this.mediaController)==null?void 0:o.media)==null?void 0:u.textTracks)||[]).filter(p=>["subtitles","captions"].includes(p.kind)&&p.mode==="showing")[0];h!==i&&i?.removeEventListener("cuechange",s),i=h,i?.addEventListener("cuechange",s),n(i,W(this,ei))};d(),(t=this.textTracks)==null||t.addEventListener("change",d),(e=this.textTracks)==null||e.addEventListener("addtrack",d),this.addEventListener("userinactivechange",()=>{var o,u;let h=(u=(o=this.mediaController)==null?void 0:o.hasAttribute(C.USER_INACTIVE))!=null?u:!0;W(this,ei)!==h&&(ct(this,ei,h),n(i,W(this,ei)))})};function Gt(t,e){return t.media?t.media.getAttribute(e):t.getAttribute(e)}var Dc=D1,hp=class{addEventListener(){}removeEventListener(){}dispatchEvent(t){return!0}};if(typeof DocumentFragment>"u"){class t extends hp{}globalThis.DocumentFragment=t}var O1=class extends hp{},x1={get(t){},define(t,e,i){},getName(t){return null},upgrade(t){},whenDefined(t){return Promise.resolve(O1)}},N1={customElements:x1},P1=typeof window>"u"||typeof globalThis.customElements>"u",mo=P1?N1:globalThis;mo.customElements.get("mux-player")||(mo.customElements.define("mux-player",Dc),mo.MuxPlayerElement=Dc);class U1 extends kp{$slot=null;$template=null;playerAttributes=[];connectedCallback(){super.connectedCallback(),this.$slot=this.querySelector("[data-modal-slot]"),this.$template=this.querySelector("template"),this.playerAttributes=["playback-id","video-id","video-title","metadata-viewer-user-id"],this.onOpen=this.handleOpen.bind(this),this.onClose=this.handleClose.bind(this)}disconnectedCallback(){super.disconnectedCallback()}handleOpen(e){if(!e?.event||!this.$template||!this.$slot)return;const i=e.event.target,a=this.$template.content.cloneNode(!0),r=a.querySelector("[data-video-player]");r&&(this.playerAttributes.forEach(n=>{const s=i.getAttribute(`data-${n}`);s&&r.setAttribute(n,s)}),this.$slot.firstElementChild?.remove(),this.$slot.appendChild(a),requestAnimationFrame(()=>{r?.play()}))}handleClose(){if(!this.$slot)return;this.$slot.querySelector("mux-player")?.pause(),this.$slot.firstElementChild?.remove()}}customElements.define("c-video-modal",yp(U1,"VideoModal"));
