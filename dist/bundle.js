(()=>{"use strict";const e=()=>{const e=document.querySelector(".game__clock");let t=0,i=0;!function(){const n=setInterval((()=>{t++,t>=60&&(t=0,i++,i>=60)&&(i=0),e.textContent=(i>9?i:"0"+i)+":"+(t>9?t:"0"+t),console.log(1)}),1e3);window.application.timers.push(n)}()},t=e=>{const t=window.application.answer;t.push(e),console.log(t);const i=t.length;if(e!==t[i-2]&&i%2==0){const e=document.querySelector(".game__clock").textContent;return window.application.gameTime=e,window.application.answer=[],window.application.stopInterval(),void window.application.renderScreen("loose")}if(i===6*window.application.level){const e=document.querySelector(".game__clock").textContent;return window.application.gameTime=e,window.application.answer=[],window.application.stopInterval(),void window.application.renderScreen("win")}};function i(e){e.preventDefault();const t=document.querySelector(".content"),i=t.querySelector(".difficulty__levels").querySelector("input:checked");i?(window.application.level=Number(i.value),t.textContent="",window.application.renderScreen("game")):console.log("Выберите уровень!")}function n(e){const i=e.target;i.classList.contains("card")&&(t(i.id),i.classList.remove("back"))}class a{constructor(e){this.gameStatus=e}buildModal(e){this.wrapper=this.createDomNode("div","modal__wrapper"),this.modal=this.createDomNode("div","modal__content"),this.modalTitle=this.createDomNode("h2","modal__title"),this.modalTitle.textContent=e,this.modalText=this.createDomNode("p","modal__text"),this.modalText.textContent="Затраченное время:",this.time=this.createDomNode("h1","modal__time"),this.time.textContent=window.application.gameTime,this.classes=["btn","modal__btn"],this.modalBtn=this.createDomNode("button",this.classes),this.modalBtn.textContent="Играть снова",this.buildImg(this.gameStatus),this.bindEvents(),this.appendsModalElements()}buildImg(e){return this.modalImg=this.createDomNode("img","modal__img"),"win"===e?(this.modalImg.setAttribute("src","../static/images/win.png"),void this.modalImg.setAttribute("alt","WIN")):"loose"===e?(this.modalImg.setAttribute("src","../static/images/loose.png"),void this.modalImg.setAttribute("alt","LOOSE")):void 0}createDomNode(e,t){const i=document.createElement(e);if(t){if(Array.isArray(t))return i.classList.add(...t),i;i.classList.add(t)}return i}appendsModalElements(){this.wrapper&&this.modal&&this.modal&&this.modal&&this.modal&&this.modal&&(this.wrapper.appendChild(this.modal),this.modal.appendChild(this.modalImg),this.modal.appendChild(this.modalTitle),this.modal.appendChild(this.modalText),this.modal.appendChild(this.time),this.modal.appendChild(this.modalBtn))}bindEvents(){this.modalBtn&&this.modalBtn.addEventListener("click",(e=>{e.preventDefault(),window.application.renderScreen("difficulty")}))}openModal(){var e;this.wrapper&&(null===(e=document.querySelector(".content"))||void 0===e||e.append(this.wrapper))}closeModal(){this.wrapper&&this.wrapper.remove()}}const s=[{id:0,name:"back",img:"../static/back.png"},{id:1,name:"ace-of-clubs",img:"../static/images/ace-of-clubs.png"},{id:2,name:"king-of-clubs",img:"../static/images/king-of-clubs.png"},{id:3,name:"queen-of-clubs",img:"../static/images/queen-of-clubs.png"},{id:4,name:"jack-of-clubs",img:"../static/images/jack-of-clubs.png"},{id:5,name:"ten-of-clubs",img:"../static/images/ten-of-clubs.png"},{id:6,name:"nine-of-clubs",img:"../static/images/nine-of-clubs.png"},{id:7,name:"eight-of-clubs",img:"../static/images/eight-of-clubs.png"},{id:8,name:"seven-of-clubs",img:"../static/images/seven-of-clubs.png"},{id:9,name:"six-of-clubs",img:"../static/images/six-of-clubs.png"},{id:10,name:"ace-of-diamonds",img:"../static/images/ace-of-diamonds.png"},{id:11,name:"king-of-diamonds",img:"../static/images/king-of-diamonds.png"},{id:12,name:"queen-of-diamonds",img:"../static/images/queen-of-diamonds.png"},{id:13,name:"jack-of-diamonds",img:"../static/images/jack-of-diamonds.png"},{id:14,name:"ten-of-diamonds",img:"../static/images/ten-of-diamonds.png"},{id:15,name:"nine-of-diamonds",img:"../static/images/nine-of-diamonds.png"},{id:16,name:"eight-of-diamonds",img:"../static/images/eight-of-diamonds.png"},{id:17,name:"seven-of-diamonds",img:"../static/images/seven-of-diamonds.png"},{id:18,name:"six-of-diamonds",img:"../static/images/six-of-diamonds.png"},{id:19,name:"ace-of-hearts",img:"../static/images/ace-of-hearts.png"},{id:20,name:"king-of-hearts",img:"../static/images/king-of-hearts.png"},{id:21,name:"queen-of-hearts",img:"../static/images/queen-of-hearts.png"},{id:22,name:"jack-of-hearts",img:"../static/images/jack-of-hearts.png"},{id:23,name:"ten-of-hearts",img:"../static/images/ten-of-hearts.png"},{id:24,name:"nine-of-hearts",img:"../static/images/nine-of-hearts.png"},{id:25,name:"eight-of-hearts",img:"../static/images/eight-of-hearts.png"},{id:26,name:"seven-of-hearts",img:"../static/images/seven-of-hearts.png"},{id:27,name:"six-of-hearts",img:"../static/images/six-of-hearts.png"},{id:28,name:"ace-of-spades",img:"../static/images/ace-of-spades.png"},{id:29,name:"king-of-spades",img:"../static/images/king-of-spades.png"},{id:30,name:"queen-of-spades",img:"../static/images/queen-of-spades.png"},{id:31,name:"jack-of-spades",img:"../static/images/jack-of-spades.png"},{id:32,name:"ten-of-spades",img:"../static/images/ten-of-spades.png"},{id:33,name:"nine-of-spades",img:"../static/images/nine-of-spades.png"},{id:34,name:"eight-of-spades",img:"../static/images/eight-of-spades.png"},{id:35,name:"seven-of-spades",img:"../static/images/seven-of-spades.png"},{id:36,name:"six-of-spades",img:"../static/images/six-of-spades.png"}],o=e=>{const t=(e=>{const t=[],i=[];for(let n=0;n<e;n++){const e=Math.floor(36*Math.random()+1);if(i.includes(e))console.log("the same number"),n-=1;else{i.push(e);const n=s[e];t.push(n),t.push(n)}}return t})(e);return t.map((e=>({value:e,sort:Math.random()}))).sort(((e,t)=>e.sort-t.sort)).map((({value:e})=>e))};window.application={answer:[],level:0,gameTime:"",gameStatus:{},timers:[],blocks:{"difficulty-heading":function(e){const t=document.createElement("h2");t.classList.add("difficulty__heading"),t.textContent="Выбери сложность",e.appendChild(t)},"difficulty-levels-radio":function(e){for(let t=1;t<=3;t++){const i=document.createElement("input");i.setAttribute("id",`level${t}`),i.setAttribute("value",`${t}`),i.setAttribute("name","levels"),i.setAttribute("type","radio"),i.classList.add("difficulty__levels-radio"),e.appendChild(i);const n=document.createElement("label");n.setAttribute("for",`level${t}`),n.textContent=`${t}`,e.appendChild(n)}},"difficulty-btn":function(e){const t=document.createElement("button");t.classList.add("difficulty__btn","btn"),t.textContent="Играть",e.appendChild(t)},"game-clock":function(e){const t=document.createElement("div");t.classList.add("game__clock-container");const i=document.createElement("div");i.classList.add("game__clock-text");const n=document.createElement("span");n.textContent="min";const a=document.createElement("span");a.textContent="sek";const s=document.createElement("h1");s.textContent="00.00",s.classList.add("game__clock"),i.appendChild(n),i.appendChild(a),t.appendChild(i),t.appendChild(s),e.appendChild(t)},"game-btn":function(e){const t=document.createElement("button");t.classList.add("game__btn","btn"),t.textContent="Начать заново",e.appendChild(t),t.addEventListener("click",(e=>{e.preventDefault(),window.application.renderScreen("difficulty")}))},cards:function(e){const t=1===(i=window.application.level)?o(3):2===i?o(6):3===i?o(9):void 0;var i;for(let i=0;i<t.length;i++){const n=t[i],a=document.createElement("img");a.setAttribute("src",`${n.img}`),a.setAttribute("alt",`${n.name}`),a.setAttribute("id",`${n.name}`),a.classList.add("card"),e.appendChild(a)}}},screens:{difficulty:()=>{const e=document.querySelector(".content");e.textContent="",e.classList.contains("game__screen")&&e.classList.remove("game__screen");const t=document.createElement("form");t.classList.add("block__difficulty"),null==e||e.appendChild(t),t.addEventListener("submit",i),window.application.renderBlock("difficulty-heading",t);const n=document.createElement("div");n.classList.add("difficulty__levels"),t.appendChild(n),window.application.renderBlock("difficulty-levels-radio",n),window.application.renderBlock("difficulty-btn",t)},game:()=>{const t=document.querySelector(".content");null==t||t.classList.add("game__screen");const i=document.createElement("header");i.classList.add("game__header"),null==t||t.appendChild(i),window.application.renderBlock("game-clock",i),window.application.renderBlock("game-btn",i);const a=document.createElement("main");window.application.renderBlock("cards",a),null==t||t.appendChild(a);const s=setInterval((()=>{const t=Array.from(a.children);for(const e of t)e.classList.add("back");console.log("5sec"),clearInterval(s),a.addEventListener("click",n),e()}),5e3);window.application.timers.push(s)},win:()=>{const e=new a("win");e.buildModal("Вы выиграли!"),e.openModal()},loose:()=>{const e=new a("loose");e.buildModal("Вы проиграли!"),e.openModal()}},renderBlock:function(e,t){this.blocks[e]?this.blocks[e](t):console.log(`Такого поля '${e}' нет!`)},renderScreen:function(e){this.timers.forEach((e=>{clearInterval(e)})),this.timers=[],this.screens[e]?this.screens[e]():console.log(`Такого поля '${e}' нет!`)},stopInterval:function(){this.timers.forEach((e=>{clearInterval(e)}))}},window.application.renderScreen("difficulty")})();
