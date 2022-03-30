import{j as o,r as m,R as h,a as u}from"./vendor.ca3876f8.js";const p=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function d(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=d(t);fetch(t.href,r)}};p();var g="/assets/logo.3ef12d0b.png";const e=o.exports.jsx,a=o.exports.jsxs,n=o.exports.Fragment;function i(){return e("div",{className:"line"})}function f(){return a(n,{children:[a("div",{className:"base",children:[e("img",{src:g,className:"App-logo",alt:"logo"}),e("h1",{children:"Luca Hohmann"}),a("h2",{className:"Info-Me",children:["Studying M.Sc. Information Security, Privacy, ",e("br",{className:"breakh"}),"Web Technology, Gamification @ TUM"]}),e("p",{className:"Pre-Quote",children:"Why I want to work in my specialization areas:"}),a("p",{className:"Quote",children:['"All practically relevant problems are theoretically solved. [...]',e("br",{}),'Nonetheless the practical state of IT-Security is disastrous"',e("br",{}),e("span",{className:"Quote-Author",children:" - Linus Neumann, CCC"})]})]}),e(i,{})]})}var v="/assets/profile.b5532add.png",N="/assets/cv.f6511a6e.pdf";function b(){return a(n,{children:[e("div",{className:"flex-base",children:a("div",{className:"two-column-container",children:[e("div",{className:"left-container",children:e("img",{className:"profile-image",src:v})}),a("div",{className:"right-container",children:[a("ul",{className:"about-list",children:[e("li",{className:"about-list-element",children:"2nd year M.Sc. Informatics: Games Engineering @ TUM"}),e("li",{className:"about-list-element",children:"Currently on exchange @ Aalto University"}),e("li",{className:"about-list-element",children:"Find me at tech & business events"}),e("li",{className:"about-list-element",children:"FOSS privacy webtech developer"}),e("li",{className:"about-list-element",children:"Outdoor activity entusiast"})]}),e("a",{className:"cv-download",target:"_blank",href:N,children:"Get my CV !"})]})]})}),e(i,{})]})}var w="/assets/mail.ed17cd1d.png",y="/assets/linkedin.3d920609.png",k="/assets/Twitter_Logo_Blue.1be5d05c.png",P="/assets/github.aa4c5e97.png";function x(){return a(n,{children:[a("div",{className:"base",children:[e("p",{className:"contact-text",children:"Get in contact with me"}),a("div",{className:"two-column-container-contact",children:[e("div",{className:"left-container-contact",children:a("div",{className:"two-row-wrapper",children:[e("img",{className:"email-logo",src:w}),e("a",{href:"mailto:business@lucahohmann.com",children:"business@lucahohmann.com"})]})}),e("div",{className:"right-container-contact",children:a("div",{className:"two-row-wrapper",children:[e("img",{className:"linked-logo",src:y}),e("a",{target:"_blank",href:"https://de.linkedin.com/in/luca-hohmann",children:"luca-hohmann"})]})})]}),a("div",{className:"two-column-container-contact",children:[e("div",{className:"left-container-contact",children:a("div",{className:"two-row-wrapper",children:[e("img",{className:"github-logo",src:P}),e("a",{target:"_blank",href:"https://github.com/gilgusmaximus",children:"GilgusMaximus"})]})}),e("div",{className:"right-container-contact",children:a("div",{className:"two-row-wrapper",children:[e("img",{className:"twitter-logo",src:k}),e("a",{target:"_blank",href:"https://twitter.com/lucahohmann",children:"lucahohmann"})]})})]})]}),e(i,{})]})}var S="/assets/freetube.00d2002d.png",L="/assets/stackoverflow.f4773207.png",_="/assets/Seminar_Paper_DataAnalytics_Polarity_Mining_Of_StackOverflow_v2.2.c06917c6.pdf";function A(){return a(n,{children:[a("div",{className:"base",children:[e("p",{className:"contact-text",children:"My past and current projects"}),a("div",{className:"two-column-container-contact",children:[e("div",{className:"left-container-contact",children:a("div",{className:"two-row-wrapper-project",children:[e("img",{className:"email-logo",src:S}),e("a",{target:"_blank",href:"https://github.com/FreeTubeApp/FreeTube",children:"Freetube on Github"}),e("p",{children:"Open source, desktop YouTube client perserving the users privacy while aiming for minimal compromise in usability (2020-now)"})]})}),e("div",{className:"right-container-contact",children:a("div",{className:"two-row-wrapper-project",children:[e("img",{className:"linked-logo",src:L}),e("a",{target:"_blank",href:"https://github.com/GilgusMaximus/PolarityMining-StackOverflow",children:"StackOverflow Polarity"}),a("p",{children:["Seminar project analysing Stackoverflow Python & C community on their stereotype of evolving into hostile environments. (2019) ",e("a",{target:"_blank",href:_,className:"paper-download",id:"paper",children:"Download PDF"})]})]})})]})]}),e(i,{})]})}function M(){return m.exports.useRef(null),e("div",{className:"App",children:a("header",{className:"App-header",children:[e(f,{}),e(b,{}),e(x,{}),e(A,{})]})})}h.render(e(u.StrictMode,{children:e(M,{})}),document.getElementById("root"));
