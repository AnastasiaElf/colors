(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function a(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(n){if(n.ep)return;n.ep=!0;const l=a(n);fetch(n.href,l)}})();const k={1:[[0,15],[346,360]],2:[[16,45]],3:[[46,75]],4:[[76,105]],5:[[106,135]],6:[[136,165]],7:[[166,195]],8:[[196,225]],9:[[226,255]],10:[[256,285]],11:[[286,315]],12:[[316,345]]},V={10:[[0,10]],20:[[11,20]],30:[[21,30]],40:[[31,40]],50:[[41,50]],60:[[51,60]],70:[[61,70]],80:[[71,80]],90:[[81,90]],100:[[91,100]]},I={10:[[0,10]],20:[[11,20]],30:[[21,30]],40:[[31,40]],50:[[41,50]],60:[[51,60]],70:[[61,70]],80:[[71,80]],90:[[81,90]],100:[[91,100]]};function E(e,t){return Math.floor(Math.random()*(t-e+1))+e}function A(e=[[0,360]]){let t=null;if(e.length>1){const n=Math.floor(Math.random()*e.length);t=e[n]}else if(e.length===1)t=e[0];else return console.error("No valid ranges provided."),-1;const[a,s]=t;return a<0||s>360||a>s?(console.error("Invalid range for hue. Range must be between 0 and 360."),null):E(a,s)}function N(e=[[0,100]]){let t=null;if(e.length>1){const n=Math.floor(Math.random()*e.length);t=e[n]}else if(e.length===1)t=e[0];else return console.error("No valid ranges provided."),-1;const[a,s]=t;return(a<0||s>100||a>s)&&console.error("Invalid range for saturation. Range must be between 0 and 100."),E(a,s)}function R(e=[[0,100]]){let t=null;if(e.length>1){const n=Math.floor(Math.random()*e.length);t=e[n]}else if(e.length===1)t=e[0];else return console.error("No valid ranges provided."),-1;const[a,s]=t;return(a<0||s>100||a>s)&&console.error("Invalid range for lightness. Range must be between 0 and 100."),E(a,s)}function L(e){let[t,a,s]=e;s/=100;const n=a*Math.min(s,1-s)/100,l=c=>{const i=(c+t/30)%12,d=s-n*Math.max(Math.min(i-3,9-i,1),-1);return Math.round(255*d).toString(16).padStart(2,"0")};return`#${l(0)}${l(8)}${l(4)}`}function w(e){const t=parseInt(e.slice(1,3),16),a=parseInt(e.slice(3,5),16),s=parseInt(e.slice(5,7),16);return[t,a,s]}function q(e,t,a){return(e*299+t*587+a*114)/1e3}function O(e,t,a){return[A(e),N(t),R(a)]}function M(e,t,a,s){let n=[];const l=new Set,c=1e3,i=t?t.flatMap(r=>k[parseInt(r)]):void 0,d=a?a.flatMap(r=>V[parseInt(r)]):void 0,f=s?s.flatMap(r=>I[parseInt(r)]):void 0;let h=0;for(;n.length<e&&h<c;){const r=O(i,d,f),u=L(r);l.has(u)||(l.add(u),n.push({hsl:r,hex:u})),h++}return h>=c?(console.error("Maximum number of iterations reached. Could not generate unique colors."),[]):n.sort((r,u)=>{const p=r.hsl[2],g=u.hsl[2];return p-g}).map(r=>r.hex)}function v(e){return q(...w(e))>128?"#000":"#fff"}const o={palette:[],defaultPaletteSize:"6",paletteSize:"6",hueValues:null,saturationValues:null,lightnessValues:null,hueOptionNumber:12,saturationOptionNumber:10,lightnessOptionNumber:10};function C(){const e=document.getElementById("palette");e.innerHTML="";for(let t=0;t<o.palette.length;t++){const a=o.palette[t],s=document.createElement("div"),n=document.createElement("span");s.classList.add("color"),s.style.backgroundColor=a,n.innerText=a.toUpperCase(),n.classList.add("color-name"),n.style.color=v(a),s.appendChild(n),e.appendChild(s)}}function y(){o.palette=M(o.paletteSize,o.hueValues,o.saturationValues,o.lightnessValues),C()}function B(){document.getElementById("settings").style.display="flex"}function z(){document.getElementById("settings").style.display="none"}function P(){document.querySelector(`input[name="size"][value="${o.defaultPaletteSize}"]`).checked=!0,document.querySelectorAll('input[type="checkbox"]').forEach(e=>{e.checked=!0}),S()}function T(){const e=new URLSearchParams(window.location.search);e.set("n",o.paletteSize),e.delete("h"),e.delete("s"),e.delete("l"),o.hueValues&&o.hueValues.length<o.hueOptionNumber&&o.hueValues.forEach(t=>{e.append("h",t)}),o.saturationValues&&o.saturationValues.length<o.saturationOptionNumber&&o.saturationValues.forEach(t=>{e.append("s",t)}),o.lightnessValues&&o.lightnessValues.length<o.lightnessOptionNumber&&o.lightnessValues.forEach(t=>{e.append("l",t)}),window.history.replaceState({},"",`${window.location.pathname}?${e}`),b()}function S(){const e=document.querySelector('input[name="size"]:checked'),t=document.querySelectorAll('input[name="hue"]:checked'),a=document.querySelectorAll('input[name="saturation"]:checked'),s=document.querySelectorAll('input[name="lightness"]:checked'),n=Array.from(t).map(i=>i.value),l=Array.from(a).map(i=>i.value),c=Array.from(s).map(i=>i.value);o.paletteSize=e.value,o.hueValues=n.length!==o.hueOptionNumber?n:null,o.saturationValues=l.length!==o.saturationOptionNumber?l:null,o.lightnessValues=c.length!==o.lightnessOptionNumber?c:null,T()}function U(){const e=new URLSearchParams(window.location.search),t=e.get("n")||o.defaultPaletteSize,a=e.getAll("h"),s=e.getAll("s"),n=e.getAll("l");document.querySelector(`input[name="size"][value="${t}"]`).checked=!0,o.paletteSize=t,a.length>0?(document.querySelectorAll('input[name="hue"]').forEach(l=>{l.checked=!1}),a.forEach(l=>{document.querySelector(`input[name="hue"][value="${l}"]`).checked=!0}),o.hueValues=a):document.querySelectorAll('input[name="hue"]').forEach(l=>{l.checked=!0}),s.length>0?(document.querySelectorAll('input[name="saturation"]').forEach(l=>{l.checked=!1}),s.forEach(l=>{document.querySelector(`input[name="saturation"][value="${l}"]`).checked=!0}),o.saturationValues=s):document.querySelectorAll('input[name="saturation"]').forEach(l=>{l.checked=!0}),n.length>0?(document.querySelectorAll('input[name="lightness"]').forEach(l=>{l.checked=!1}),n.forEach(l=>{document.querySelector(`input[name="lightness"][value="${l}"]`).checked=!0}),o.lightnessValues=n):document.querySelectorAll('input[name="lightness"]').forEach(l=>{l.checked=!0}),b()}function b(){const e=document.getElementById("settings-indicator");o.hueValues&&o.hueValues.length<o.hueOptionNumber||o.saturationValues&&o.saturationValues.length<o.saturationOptionNumber||o.lightnessValues&&o.lightnessValues.length<o.lightnessOptionNumber?e.classList.add("visible"):e.classList.remove("visible")}function $(){const e=document.createElement("canvas"),t=e.getContext("2d"),a=300,s=o.palette.length,n=a*s,l=1200,c=60,i=1200+c;e.width=n,e.height=i,o.palette.forEach((r,u)=>{t.fillStyle=r,t.fillRect(u/s*n,0,n/s,l);const p=r.toUpperCase(),g=(u+.5)/s*n,x=l/2;t.fillStyle=v(r),t.font="bold 36px Quicksand",t.textAlign="center",t.textBaseline="middle",t.fillText(p,g,x)}),t.fillStyle="#333333",t.fillRect(0,l,n,c);const d="Generated by colors.anastasiaelf.com",f=20,h=i-28;t.fillStyle="#eeeeee",t.font="26px Quicksand",t.textAlign="start",t.textBaseline="middle",t.fillText(d,f,h);const m=document.createElement("a");m.href=e.toDataURL("image/png"),m.download="color_palette.png",m.click()}window.onload=()=>{U(),y(),document.querySelectorAll('input[type="radio"]').forEach(e=>e.addEventListener("change",S)),document.querySelectorAll('input[type="checkbox"]').forEach(e=>e.addEventListener("change",S)),document.getElementById("download").addEventListener("click",$),document.getElementById("close-settings").addEventListener("click",z),document.getElementById("reset-settings").addEventListener("click",P),document.getElementById("open-settings").addEventListener("click",B),document.getElementById("generate-button").addEventListener("click",y),document.getElementById("generate-icon").addEventListener("click",y)};
