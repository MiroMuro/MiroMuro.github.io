(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();async function l(){try{const t=await(await fetch("/proxy.js")).json();d(t)}catch(o){console.error(o)}}function d(o){let t=o.data.viewer.pinnedItems.nodes,n=a();if(n.length===0){console.error("No project divs found");return}t.forEach((c,e)=>{let r=n[e];r.innerHTML=`   
                    <div class="project-name-and-desc-container">
                      <header class="project-name" >${c.name}</header>
                      <p class="project-description" >${c.description}</p>
                      <a href=${c.url} class="project-github-button-container">
                    <button class="github-button" >
                      <img src="img/github.png" />
                    </button>
                    </div>
                  </a>         
    `})}function a(){let o=u();if(!o)return[];let t=[];for(const n of o.children)t.push(n);return t}function u(){const o=document.getElementById("projects-grid");return o||(console.error("No projects-grid element found"),null)}l();async function p(){try{const t=await(await fetch("/proxy.js")).json();f(t)}catch(o){console.error(o)}}function f(o){let t=o.data.viewer.pinnedItems.nodes,n=h();if(!n){console.error("No project accordion list found");return}t.forEach((c,e)=>{let r=n[e];r.innerHTML=`
                    <div class="accordion-text-wrapper">
                    <header class="accordion-project-header">${c.name}</header>
                    <p class="accordion-project-description">${c.description}</p>
                    <a href=${c.url} class="project-github-button-accordion">
                    <button style="cursor: pointer;" >
                      <img src="img/github.png" />
                    </button>
                  </a>
                  </div>
                  
                  <button class="expand-button ${r.classList[1]}"></button>
                    `}),m()}function h(){return document.querySelectorAll(".accordion-project")}let i=document.querySelectorAll(".accordion-project");const m=()=>{console.log("OPen close"),console.log("Accordion project divs: ",i);for(let o of i)for(let t of o.children)t.tagName==="BUTTON"&&t.addEventListener("click",()=>{let n="."+o.classList[1];document.querySelectorAll(".accordion-project").forEach(e=>{e.classList[1]!==o.classList[1]&&e.classList.remove("open")});var c=document.querySelector(n);c==null||c.classList.toggle("open")})};p();
