var Z=Object.defineProperty;var $=t=>{throw TypeError(t)};var K=(t,e,n)=>e in t?Z(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var k=(t,e,n)=>K(t,typeof e!="symbol"?e+"":e,n),j=(t,e,n)=>e.has(t)||$("Cannot "+n);var o=(t,e,n)=>(j(t,e,"read from private field"),n?n.call(t):e.get(t)),r=(t,e,n)=>e.has(t)?$("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),U=(t,e,n,i)=>(j(t,e,"write to private field"),i?i.call(t,n):e.set(t,n),n);import{A as tt,_ as et}from"./vendor-oMt0CAvQ.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();var u;class T{constructor(e){r(this,u);U(this,u,e)}json(){return JSON.parse(o(this,u).data)}info(){return{status:JSON.parse(o(this,u).status),message:JSON.parse(o(this,u).data).message,data:JSON.parse(o(this,u).data)}}}u=new WeakMap;class nt{constructor(e){k(this,"axiosInstance");const n={accept:"application/json","content-type":"application/json"};this.axiosInstance=new tt({baseURL:e,headers:{...n}})}async get(e,n){const i=await this.axiosInstance.get(e,n);return new T(i)}async patch(e,n){const i=await this.axiosInstance.patch(e,n);return new T(i)}async post(e,n){const i=await this.axiosInstance.post(e,n);return new T(i)}}var v,l;class it{constructor(){r(this,v,"https://energyflow.b.goit.study/api/");r(this,l,new nt(o(this,v)))}async get(e,n=""){return n?await o(this,l).get(e,n):await o(this,l).get(e)}async patch(e,n=""){return n?await o(this,l).patch(e,n):await o(this,l).patch(e)}async post(e,n=""){return n?await o(this,l).post(e,n):await o(this,l).post(e)}setPathParameters(e,n){let i=e;for(const a in n)i=i.replace(`{${a}}`,n[a]);return i}}v=new WeakMap,l=new WeakMap;var h,y,E,S,b,w;const P=class P extends it{constructor(){super(...arguments);r(this,h,"filters");r(this,y,"exercises");r(this,E,"exercises/{exerciseID}");r(this,S,"exercises/{exerciseID}/rating");r(this,b,"quote/");r(this,w,"subscription")}async init(){return new P}async getListExercises(n){return await this.get(o(this,h),{params:n})}async getListExercisesBySubspecies(n){return await this.get(o(this,y),{params:n})}async getQuote(){return await this.get(o(this,b))}async getExerciseById(n){return await this.get(this.setPathParameters(o(this,E),{exerciseID:n}))}async addRating(n,i){return await this.patch(this.setPathParameters(o(this,S),{exerciseID:n}),JSON.stringify(i))}async createSubscription(n){return await this.post(o(this,w),JSON.stringify(n))}};h=new WeakMap,y=new WeakMap,E=new WeakMap,S=new WeakMap,b=new WeakMap,w=new WeakMap;let f=P;function qt(t){return t.split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()).join(" ")}function at(t){return t===new Date().setHours(0,0,0,0)}function J(t){return new Date(t).setHours(0,0,0,0)}function Rt(t,e){return et.chunk(t,e)}const st=new f,Q=st.init(),d={FAVORITE_EXERCISE:"favorite-exercise",QUOTE:"quote"};function ot(t,e=d.FAVORITE_EXERCISE){if(!localStorage.getItem(e))localStorage.setItem(e,JSON.stringify([t]));else{const n=JSON.parse(localStorage.getItem(e));n.push(t),localStorage.setItem(e,JSON.stringify(n))}}function rt(t,e=d.FAVORITE_EXERCISE){if(!localStorage.getItem(e))return;let n=R(e);if(n.length>0){let i=n.filter(a=>a._id!==t);localStorage.setItem(e,JSON.stringify(i)),i.length===0&&localStorage.removeItem(e)}}function Mt(t=d.FAVORITE_EXERCISE){return R(t)}function D(t,e=d.FAVORITE_EXERCISE){if(!localStorage.getItem(e))return!1;let n=R(e);return n.length>0?n.filter(a=>a._id===t).length>0:!1}async function ct(){const t=(await(await Q).getQuote()).json();t.timeStamp=J(new Date),localStorage.setItem(d.QUOTE,JSON.stringify(t))}async function F(){if(!localStorage.getItem(d.QUOTE))await ct();else{const t=JSON.parse(localStorage.getItem(d.QUOTE)).timeStamp;if(!at(t)){const i=(await(await Q).getQuote()).json();i.timeStamp=J(new Date),localStorage.setItem(d.QUOTE,JSON.stringify(i))}const{author:e,quote:n}=JSON.parse(localStorage.getItem(d.QUOTE));return{author:e,quote:n}}}function R(t){try{return JSON.parse(localStorage.getItem(t))}catch{console.error("Parsing Error")}}function lt(t){pt(),dt(t)}function dt(t){gt.dataset.exerciseId=t}const L=document.querySelector(".js-modal"),ut=document.querySelector(".js-close"),mt=document.querySelector(".mrating"),M=document.querySelector(".rating-form"),gt=document.querySelector(".js-sbutton"),O=document.querySelector(".message");ut.addEventListener("click",H);window.addEventListener("click",function(t){t.target===L&&H()});function pt(){L.classList.add("is-open")}function H(){L.classList.remove("is-open"),M.reset(),g.innerHTML=0,m(0),O.textContent="",Et()}let V,g;ft(mt);function ft(t){A(t),m(),t.classList.contains("rating-set")&&vt(t)}function A(t){V=t.querySelector(".mrating-active"),g=t.querySelector(".mrating-value")}function m(t=g.innerHTML){const e=t/.05;V.style.width=`${e}%`}function vt(t){const e=t.querySelectorAll(".mrating-item");for(let n=0;n<e.length;n+=1){const i=e[n];i.addEventListener("mouseenter",function(a){A(t),m(i.value)}),i.addEventListener("mouseleave",function(a){m()}),i.addEventListener("click",function(a){A(t);const s=(n+1).toFixed(1);g.innerHTML=s,m()})}}let ht=new f;M.addEventListener("click",yt);async function yt(t){if(t.preventDefault(),!t.target.tagName!=="BUTTON"&&t.target.tagName==="BUTTON"){if(+t.currentTarget.children[0].innerText.trim()<=0)return;const e=t.currentTarget.elements.ratbtn.dataset.exerciseId,n={};n.rate=+t.currentTarget.children[0].innerText.trim(),n.email=t.currentTarget.elements.email.value,n.review=t.currentTarget.elements.comment.value;try{const i=await ht.addRating(e,n),a=i.info();a.status===200?(L.classList.remove("is-open"),M.reset(),m(0),g.innerHTML=0,O.textContent="",St(i.json())):O.textContent=a.message}catch(i){console.error(i)}}}const _=document.body,x=document.querySelector(".backdrop"),C=document.querySelector(".js-modal-container");document.querySelector(".close-btn");let p;function Et(){x.classList.add("is-open"),_.classList.add("modal-open")}function St(t){p=t,t._id,x.classList.add("is-open"),window.addEventListener("keydown",X),window.addEventListener("click",W);let e;D(t._id)?e=`
      <button class="ex-modal-btn add-favorite js-add-remove-btn" type="button">
                Remove from favorites
                <p class="btn-icon-add-remove-favorite">
                  <svg
                    class="modal-icon-favorite"
                    width="18"
                    height="18"
                    aria-label="modal favorite icon"
                  >
                    <use
                      href='./sprite.svg#icon-remove-favorites'
                    ></use>
                  </svg>
                </p>
              </button>
      `:e=`
      <button class="ex-modal-btn add-favorite js-add-remove-btn" type="button">
                Add to favorites
                <p class="btn-icon-add-remove-favorite">
                  <svg
                    class="modal-icon-favorite"
                    width="18"
                    height="18"
                    aria-label="modal favorite icon"
                  >
                    <use
                      href='./sprite.svg#icon-add-favorites'
                    ></use>
                  </svg>
                </p>
              </button>
      `,C.innerHTML=`
    <div class="modal-ex-img-container"
        style="
          background: linear-gradient(
              0deg,
              rgba(27, 27, 27, 0.2) 0%,
              rgba(27, 27, 27, 0.2) 100%
            ),
            url(${t.gifUrl}),
            lightgray -7.072px -25.893px / 107.482% 121.729% no-repeat;
          background-size: cover;
        "
      ></div>

      <div class="modal-ex-text-info">
        <div class="modal-ex-name-rating-container">
          <h2 class="title-modal-exercise">${t.name}</h2>
          

        <div class="modal-ex-rating-container rating">
          <div class="rating-value">${t.rating}</div>
          <div class="rating-body">
            <div id="rating-active" class="rating-active"></div>
              <div class="rating-items">
                 <input type="radio" class="rating-item" value="1" name="rating">
                 <input type="radio" class="rating-item" value="2" name="rating">
                 <input type="radio" class="rating-item" value="3" name="rating">
                 <input type="radio" class="rating-item" value="4" name="rating">
                 <input type="radio" class="rating-item" value="5" name="rating">
              </div>
          </div>
        </div>
          
          
         

        <div class="modal-ex-about-exercise-container">
          <ul class="about-exercise-list">
        <li>
          <h3 class="title-description">Target</h3>
          <p class="value-description">${t.target}</p>
        </li>
        <li>
          <h3 class="title-description">Body Part</h3>
          <p class="value-description">${t.bodyPart}</p>
        </li>
        <li>
          <h3 class="title-description">Equipment</h3>
          <p class="value-description">${t.equipment}</p>
        </li>
        <li>
          <h3 class="title-description">Popular</h3>
          <p class="value-description">${t.popularity}</p>
        </li>
        <li>
          <h3 class="title-description">Burned Calories</h3>
          <p class="value-description">${t.burnedCalories}/${t.time} min</p>
        </li>
          </ul>
        </div>

        <div class="modal-ex-description-text-container">
          <p class="description-text">
            ${t.description}
          </p>
        </div>

        <div class="ex-modal-btn-container">
          <ul class="button ex-modal-btn-list">
            <li class="ex-modal-btn-list-item">
              ${e}
            </li>
            <li class="ex-modal-btn-list-item">
              <button data-rating="${t._id}" class="ex-modal-btn rating-btn" type="button">
                Give a rating
              </button>
            </li>
          </ul>
        </div>
      </div>`;let n,i;document.querySelector(".rating")&&s();function s(){c(),I()}function c(){n=document.querySelector("#rating-active"),i=document.querySelector(".rating-value")}function I(){const Y=i.innerHTML/.05;n.style.width=`${Y}%`}}function X(t){t.key==="Escape"&&N()}const bt=document.querySelector(".modal-close-icon use");bt.addEventListener("click",function(){N()});function W(t){t.preventDefault(),(t.target.classList.value==="close-btn"||t.target.classList.value==="modal-close-icon"||t.target.classList.value==="backdrop is-open")&&N(),t.target.classList.value.includes("rating-btn")&&(x.classList.remove("is-open"),_.classList.remove("modal-open"),lt(t.target.dataset.rating))}function N(){x.classList.remove("is-open"),_.classList.remove("modal-open"),window.removeEventListener("keydown",X),window.removeEventListener("click",W)}C.addEventListener("click",function(t){if(t.target.classList.contains("add-favorite")){const e=D(p._id);e?rt(p._id):ot(p),wt(!e)}});function wt(t){const e=t?"./sprite.svg#icon-remove-favorites":"./sprite.svg#icon-add-favorites",n=t?"Remove from favorites":"Add to favorites",i=C.querySelector(".js-add-remove-btn");i.innerHTML=`<button class="ex-modal-btn add-favorite" type="button">${n}<p class="btn-icon-add-remove-favorite js-add-remove-btn"><svg class="modal-icon-favorite" width="18" height="18" aria-label="modal favorite icon"><use href='${e}'></use></svg></p></button>`}const G=document.querySelector(".js-menu"),Lt=document.querySelector(".js-open-menu"),xt=document.querySelector(".js-close-menu"),z=()=>{const t=G.classList.toggle("is-open");document.body.style.overflow=t?"hidden":""};Lt.addEventListener("click",z);xt.addEventListener("click",z);window.matchMedia("(min-width: 768px)").addEventListener("change",t=>{t.matches&&(G.classList.remove("is-open"),document.body.style.overflow="")});function _t(t,e){return Array.from({length:t}).reduce((n,i,a)=>{const s=a+1;return n+`<li class="pagination-element ${s===e?"active_pag_item":""}" value="${s}">${s}</li>`},"")}const q=document.querySelector(".quote-info-content");async function It(){const{author:t,quote:e}=await F();await B(e,"favorites-text"),await B(t,"favorites-author")}function B(t,e){return new Promise(n=>{let i=0;const a=document.createElement(e==="favorites-text"?"p":"h3");a.id=e,e==="favorites-text"?a.classList.add("quote-text"):a.classList.add("quote-author"),q.appendChild(a);function s(){i<t.length?(a.textContent+=t.charAt(i),i++,setTimeout(s,40)):n()}s()})}const Tt=new IntersectionObserver((t,e)=>{t.forEach(n=>{n.isIntersecting&&(It(),e.unobserve(n.target))})},{threshold:.5});document.addEventListener("DOMContentLoaded",async()=>{await F(),q&&Tt.observe(q)});document.addEventListener("DOMContentLoaded",()=>{const t=window.location.pathname,e=t==="/"||t==="/enerGym/"?"index.html":t.split("/").pop(),n=i=>{document.querySelectorAll(i).forEach(s=>{const c=s.getAttribute("href");if(c.includes(e)){const I=c.includes("index.html")?"active-home":"active-favorites";s.classList.add(I)}})};["header-menu-link","mobile-menu-link"].forEach(i=>n(`.${i}`))});document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".hero-text");t&&(t.style.display="none",setTimeout(function(){t.style.display="block"},500))});export{f as E,rt as a,St as c,qt as f,Mt as g,D as i,_t as r,Rt as s};
//# sourceMappingURL=navigation-FcoFiihw.js.map
