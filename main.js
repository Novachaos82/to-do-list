(()=>{"use strict";var e={d:(t,c)=>{for(var d in c)e.o(c,d)&&!e.o(t,d)&&Object.defineProperty(t,d,{enumerable:!0,get:c[d]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{m:()=>E});let t=0,c=0;const d=(e,t,c,d,n)=>{const o=document.querySelector(".tasks"),l=document.createElement("li"),s=document.createElement("div");s.classList.add("checkbox");const a=document.createElement("input");a.type="checkbox",a.value=e,s.appendChild(a);const r=document.createElement("div");r.classList.add("list-details");const i=document.createElement("div");i.classList.add("task-title"),i.textContent=""+t,r.appendChild(i);const m=document.createElement("div");m.classList.add("task-details"),m.textContent=c,r.appendChild(m),l.dataset.task=n,l.appendChild(s),l.appendChild(r),o.appendChild(l)},n=(e,t,c,d,n)=>({checkbox:e,title:t,details:c,date:d,id:n}),o=()=>{document.getElementById("taskForm").classList.remove("hide")},l=()=>{document.getElementById("taskForm").classList.add("hide")},s=()=>{const e=document.querySelector(".selected");return console.log(e.dataset.project),e.dataset.project},a=(e,t)=>{const c=document.querySelector(".projects-div"),d=document.createElement("div");d.id="projectTile",d.innerHTML=`<i class="fa-solid fa-list-check"></i>${t}`,d.dataset.project=e,d.classList.add("project"),c.appendChild(d)},r=(e,t)=>{let c=[];return{projectData:e,projectName:t,taskList:c,taskNum:c.length}},i=()=>{document.getElementById("projectForm").classList.remove("hide")},m=()=>{document.getElementById("projectForm").classList.add("hide")},u=()=>document.querySelectorAll("[data-project]").length,p=()=>{document.querySelectorAll(".project").forEach((e=>{e.addEventListener("click",(()=>{document.querySelector(".selected").classList.remove("selected"),e.classList.add("selected"),console.log(document.querySelector(".selected").dataset.project)}))}))};console.log("test main.js");let E=[];document.getElementById("addProjectBtn").addEventListener("click",i),document.getElementById("projectCancelBtn").addEventListener("click",m),document.getElementById("projectSubmitBtn").addEventListener("click",(e=>{e.preventDefault(),(()=>{let e=document.getElementById("projectInput").value,t=u();const c=r(t,e);console.log(t+"each time"),E.push(c),a(t,e)})(),document.getElementById("projectInput").value="",console.log(E)})),document.querySelector(".projects-div").addEventListener("mouseover",p),document.getElementById("addTask").addEventListener("click",o),document.getElementById("taskCancelBtn").addEventListener("click",l),document.getElementById("taskSubmitBtn").addEventListener("click",(e=>{console.log("submitted"),e.preventDefault(),(()=>{const e=document.getElementById("taskTitle").value,o=document.getElementById("checkboxID").value,l=document.getElementById("taskDetails").value,a=document.getElementById("Date").value,r=(s(),t),i=n(o,e,l,a,r);E[0].taskList.push(i),d(o,e,l,a,r),t++,console.log(c+"times"),c++})(),console.log(E[0].taskList)}))})();