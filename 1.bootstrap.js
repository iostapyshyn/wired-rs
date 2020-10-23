(window.webpackJsonp=window.webpackJsonp||[]).push([[1],[,function(e,t,n){"use strict";n.r(t);var r=n(2);const i=document.getElementById("canvas").getContext("2d"),a=document.createElement("canvas").getContext("2d"),o=document.getElementById("delay-range"),s=document.getElementById("delay-value"),c=document.getElementById("pause-button");let u=null,d=1,l={hover:!1,pos:{x:0,y:0},drag:null},h={on:!1,size:1};function p(e){this.circuit=r.b.new(e),this.width=this.circuit.width(),this.height=this.circuit.height(),this.pixels=new ImageData(this.circuit.pixels_view(),this.width,this.height),this.pause=!1,this.delay=0;let t=null,n=()=>{this.pause||this.circuit.tick(),t=setTimeout(n,this.delay)};n(),this.exportDataURL=e=>{const t=document.createElement("canvas").getContext("2d");t.canvas.width=this.width,t.canvas.height=this.height;let n=new ImageData(this.circuit.export(),this.width,this.height);return t.putImageData(n,0,0),t.canvas.toDataURL(e)},this.destroy=()=>{clearTimeout(t),this.circuit.free()}}function f(e){d=e=e>0?e:1,function(){switch(a.canvas.width=u.width,a.canvas.height=u.height,i.canvas.width=u.width*d,i.canvas.height=u.height*d,i.imageSmoothingEnabled=!1,i.fillStyle="white",i.strokeStyle="white",d){case 1:h.size=12;break;case 2:h.size=6;break;case 3:h.size=3;break;case 4:h.size=2;break;default:h.size=1}}()}function y(e){u.delay=e>=0?e:0,o.value=u.delay,s.innerHTML=u.delay+" ms."}function g(e){u.pause=e,u.pause?c.value="play_arrow":c.value="pause"}function m(){if(a.putImageData(u.pixels,0,0),i.clearRect(0,0,u.width*d,u.height*d),i.drawImage(a.canvas,0,0,u.width*d,u.height*d),i.beginPath(),null!==l.drag){const e={x:l.pos.x-l.drag.x,y:l.pos.y-l.drag.y},t={x:l.drag.x,y:l.drag.y},n={x:Math.abs(e.x)>Math.abs(e.y)?l.pos.x:l.drag.x,y:Math.abs(e.x)>Math.abs(e.y)?l.drag.y:l.pos.y};i.rect(t.x*d,t.y*d,d,d),i.rect(t.x*d,t.y*d,(n.x-t.x+1)*d,(n.y-t.y+1)*d),i.rect(n.x*d,n.y*d,d,d)}else l.hover&&(h.on?(i.strokeRect((l.pos.x-h.size/2+.5)*d,(l.pos.y-h.size/2+.5)*d,h.size*d,h.size*d),u.circuit.fill_rect(l.pos.x-Math.floor(h.size/2),l.pos.y-Math.floor(h.size/2),h.size,h.size,r.a.Void)):i.rect(l.pos.x*d,l.pos.y*d,d,d));u.circuit.at((l.drag||l.pos).x,(l.drag||l.pos).y)==r.a.Wire?i.stroke():i.fill(),requestAnimationFrame(m)}function w(){function e(e,t){var n=document.createElement("a");n.href=e,n.download=t,n.click()}o.addEventListener("input",()=>{y(o.value)},!1),document.getElementById("zoom-plus").addEventListener("click",()=>{f(d+1)},!1),document.getElementById("zoom-minus").addEventListener("click",()=>{f(d-1)},!1),c.addEventListener("click",()=>{g(!u.pause)},!1),document.getElementById("new-cancel").addEventListener("click",()=>{document.getElementById("popup-container").style.display="none"},!1),document.getElementById("new-proceed").addEventListener("click",()=>{document.getElementById("popup-container").style.display="none";const e=document.getElementById("new-width").value,t=document.getElementById("new-height").value;isNaN(e)||0==e||isNaN(t)||0==t?alert("Wrong dimensions. Please try again."):(a.canvas.width=e,a.canvas.height=t,a.fillStyle="#000000",a.fillRect(0,0,e,t),a.canvas.toBlob(e=>{new Response(e).arrayBuffer().then(e=>{v(new Uint8Array(e))})}))},!1),document.getElementById("file-new").addEventListener("click",()=>{document.getElementById("popup-container").style.display="block"},!1),document.getElementById("file-open").addEventListener("click",()=>{!function(e){const t=document.createElement("input");t.type="file",t.addEventListener("change",t=>{const n=t.target.files[0];let r=new FileReader;r.onload=t=>{const n=new Uint8Array(t.target.result);e(n)},r.readAsArrayBuffer(n)},!1),t.click()}(v)},!1),document.getElementById("file-save").addEventListener("click",()=>{e(u.exportDataURL(),"wired-export.png")},!1),document.getElementById("file-export").addEventListener("click",()=>{if(confirm("This operation can take some time on large simulations.\nAre you sure you want to proceed?")){const r=u.circuit.render_gif(parseInt(u.delay));e((t=r,n="image/gif",URL.createObjectURL(new Blob([t.buffer],{type:n}))),"wired-export.gif")}var t,n},!1),document.addEventListener("keydown",e=>{switch(e.key){case" ":g(!u.pause);break;case"+":f(d+1);break;case"-":f(d-1);break;case"x":h.on=!0,l.drag=null;break;case"z":l.hover&&u.circuit.fill_rect(l.pos.x,l.pos.y,2,2,r.a.Wire)}}),document.addEventListener("keyup",e=>{switch(e.key){case"x":h.on=!1}},!1),i.canvas.addEventListener("mouseover",()=>{l.hover=!0},!1),i.canvas.addEventListener("mouseout",()=>{l.hover=!1},!1),document.addEventListener("mousemove",e=>{function t(e,t,n){return Math.min(Math.max(e,t),n)}var n=i.canvas.getBoundingClientRect();l.pos={x:t(Math.floor((e.clientX-n.left)/d),0,u.width-1),y:t(Math.floor((e.clientY-n.top)/d),0,u.height-1)}},!1),document.addEventListener("mousedown",()=>{l.hover&&!h.on&&(l.drag=l.pos)},!1),document.addEventListener("mouseup",()=>{if(null!==l.drag){if(l.hover&&l.drag===l.pos)u.circuit.toggle_pixel(l.pos.x,l.pos.y);else{const e={x:l.pos.x-l.drag.x,y:l.pos.y-l.drag.y},t={x:Math.abs(e.x)>Math.abs(e.y)?l.pos.x:l.drag.x,y:Math.abs(e.x)>Math.abs(e.y)?l.drag.y:l.pos.y};let n=r.a.Wire;u.circuit.at(l.drag.x,l.drag.y)==r.a.Wire&&(n=r.a.Void),u.circuit.draw_line(l.drag.x,l.drag.y,t.x,t.y,n)}l.drag=null}},!1)}function v(e){u&&u.destroy(),u=new p(e),g(!1),y(50),f(1)}!function(){let e=new URL(window.location.href).searchParams.get("url");var t,n,r;null==e&&(e="examples/7seg.png"),t=e,n=e=>{v(e),w(),requestAnimationFrame(m)},(r=new XMLHttpRequest).open("GET",t,!0),r.responseType="arraybuffer",r.onreadystatechange=()=>{if(r.response){const e=new Uint8Array(r.response);n(e)}},r.send(null)}()},function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f})),n.d(t,"d",(function(){return y})),n.d(t,"i",(function(){return g})),n.d(t,"h",(function(){return m})),n.d(t,"c",(function(){return w})),n.d(t,"g",(function(){return v})),n.d(t,"e",(function(){return x})),n.d(t,"f",(function(){return b})),n.d(t,"j",(function(){return E}));var r=n(4);const i=new Array(32).fill(void 0);function a(e){return i[e]}i.push(void 0,null,!0,!1);let o=i.length;function s(e){const t=a(e);return function(e){e<36||(i[e]=o,o=e)}(e),t}function c(e){o===i.length&&i.push(i.length+1);const t=o;return o=i[t],i[t]=e,t}let u=new("undefined"==typeof TextDecoder?(0,e.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});u.decode();let d=null;function l(){return null!==d&&d.buffer===r.p.buffer||(d=new Uint8Array(r.p.buffer)),d}let h=0;const p=Object.freeze({Void:0,0:"Void",Wire:1,1:"Wire"});class f{static __wrap(e){const t=Object.create(f.prototype);return t.ptr=e,t}free(){const e=this.ptr;this.ptr=0,r.a(e)}static new(e){var t=function(e,t){const n=t(1*e.length);return l().set(e,n/1),h=e.length,n}(e,r.b),n=h,i=r.i(t,n);return f.__wrap(i)}tick(){r.m(this.ptr)}at(e,t){return r.c(this.ptr,e,t)>>>0}pixels_view(){return s(r.j(this.ptr))}draw_pixel(e,t,n){r.e(this.ptr,e,t,n)}draw_line(e,t,n,i,a){r.d(this.ptr,e,t,n,i,a)}fill_rect(e,t,n,i,a){r.g(this.ptr,e,t,n,i,a)}toggle_pixel(e,t){r.n(this.ptr,e,t)}export(){return s(r.f(this.ptr))}reset(){r.l(this.ptr)}render_gif(e){return s(r.k(this.ptr,e))}width(){return r.o(this.ptr)>>>0}height(){return r.h(this.ptr)>>>0}}const y=function(e){return c(new Uint8ClampedArray(a(e)))},g=function(e){s(e)},m=function(){return c(r.p)},w=function(e){return c(a(e).buffer)},v=function(e,t,n){return c(new Uint8Array(a(e),t>>>0,n>>>0))},x=function(e){return c(new Uint8Array(a(e)))},b=function(e,t,n){return c(new Uint8ClampedArray(a(e),t>>>0,n>>>0))},E=function(e,t){throw new Error((n=e,r=t,u.decode(l().subarray(n,n+r))));var n,r}}).call(this,n(3)(e))},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,n){"use strict";var r=n.w[e.i];e.exports=r;n(2);r.q()}]]);