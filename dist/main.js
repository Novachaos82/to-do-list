(()=>{"use strict";var e={d:(t,c)=>{for(var d in c)e.o(c,d)&&!e.o(t,d)&&Object.defineProperty(t,d,{enumerable:!0,get:c[d]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{m:()=>i});const t=()=>document.querySelectorAll("[data-project]").length,c=()=>{const e=document.getElementById("projectForm");e.classList.remove("hide"),e.reset()},d=()=>{document.getElementById("projectForm").classList.add("hide")},n=()=>{const e=document.getElementById("taskForm");e.classList.remove("hide"),e.reset()},o=()=>{document.getElementById("taskForm").classList.add("hide")},l=e=>{console.log(" displayTask is called"),document.querySelector(".tasks").innerHTML="",i[e].taskArray.forEach((e=>{console.log("loop called"),s(e.checkbox,e.title,e.details,e.date,e.taskID)}))};let a=0;const s=(e,t,c,d,n)=>{const o=document.querySelector(".tasks"),l=document.createElement("li"),a=document.createElement("div");a.classList.add("checkbox");const s=document.createElement("input");s.id="checkboxID",s.type="checkbox",s.checked=e,a.appendChild(s);const r=document.createElement("div");r.classList.add("list-details");const i=document.createElement("div");i.classList.add("task-title"),i.textContent=""+t,r.appendChild(i);const m=document.createElement("div");m.classList.add("task-details"),m.textContent=c,r.appendChild(m);const u=document.createElement("div");u.classList.add("list-buttons");const p=document.createElement("input");p.type="date",p.value=d,u.appendChild(p);const y=document.createElement("button");y.id="delete",y.innerHTML='<i class="fa-solid fa-trash-can"></i>',u.appendChild(y),l.dataset.task=n,l.appendChild(a),l.appendChild(r),l.appendChild(u),o.appendChild(l)},r=()=>{const e=document.querySelector(".selected");return console.log(e.dataset.project),e.dataset.project};console.log("test main.js");let i=[];r(),document.getElementById("addProjectBtn").addEventListener("click",c),document.getElementById("projectCancelBtn").addEventListener("click",d),document.getElementById("projectSubmitBtn").addEventListener("click",(e=>{var c;e.preventDefault(),(()=>{let e=document.getElementById("projectInput").value,c=t();const n=((e,t)=>{let c=[];return{projectData:e,projectName:t,taskArray:c,taskNum:c.length}})(c,e);console.log(c+"each time"),i.push(n),d()})(),console.log(i),c=i,document.querySelector(".projects-div").replaceChildren(),console.log(" displayProject is called"),c.forEach((e=>{((e,t)=>{const c=document.querySelector(".projects-div"),d=document.createElement("div");d.id="projectTile",d.innerHTML=`<i class="fa-solid fa-list-check"></i>${t}`,d.dataset.project=e,d.classList.add("project");const n=document.createElement("button");n.id="deleteButton",n.classList.add("projectDelBtn"),n.innerHTML='<i class="fa-solid fa-xmark">',d.appendChild(n),c.appendChild(d)})(e.projectData,e.projectName)}))})),document.querySelector(".projects-div").addEventListener("mouseover",(()=>{(()=>{const e=document.querySelectorAll(".project"),t=document.querySelectorAll("projects-div");e.forEach((e=>{e.addEventListener("click",(c=>{document.querySelector(".selected"),t.replaceChildren(),e.classList.add("selected"),console.log(document.querySelector(".selected").dataset.project),c.stopImmediatePropagation(),l(r())}))}))})()})),document.getElementById("addTask").addEventListener("click",n),document.getElementById("taskCancelBtn").addEventListener("click",o),document.getElementById("taskSubmitBtn").addEventListener("click",(e=>{e.preventDefault(),(()=>{const e=document.getElementById("taskTitle").value,t=document.getElementById("taskDetails").value,c=document.getElementById("Date").value,d=r(),n=((e,t,c,d,n)=>({checkbox:!1,title:e,details:t,date:c,id:d,projectID:n}))(e,t,c,a,d);i[d].taskArray.push(n),a++,o()})(),console.log(i[r()].taskArray)}))})();