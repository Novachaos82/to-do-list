(()=>{"use strict";var e={d:(t,d)=>{for(var a in d)e.o(d,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:d[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{m:()=>j});const t=(e,t)=>{let d=[];return{projectData:e,projectName:t,taskArray:d,taskNum:d.length}},d=()=>{localStorage.setItem("projects",JSON.stringify(j))},a=(e,t)=>{const d=document.querySelector(".projects-div"),a=document.createElement("div");a.id="projectTile",a.innerHTML=`<i class="fa-solid fa-list-check"></i>${t}`,a.dataset.project=e,a.classList.add("project");const c=document.createElement("button");c.id="deleteButton",c.classList.add("projectDelBtn"),c.classList.add("fa-solid"),c.classList.add("fa-xmark"),c.dataset.id=e,a.appendChild(c),d.appendChild(a)},c=()=>document.querySelectorAll("[data-project]").length,o=e=>{let t=e.target.id;"projectTile"===t&&(s(e.target),p(e.target.textContent),u(e.target.getAttribute("data-project"))),"allTask"===t&&(s(e.target),n(),p(e.target.textContent),k().hideAddTaskButton()),"deleteButton"===t&&h(e.target.getAttribute("data-id"))},s=e=>{null!=document.querySelector(".selected")&&document.querySelector(".selected").classList.remove("selected"),e.classList.add("selected"),k().showAddTaskBtn()},l=()=>{document.querySelector(".tasks").innerHTML=""},n=()=>{l(),j.forEach((e=>{e.taskArray.forEach((e=>{y(e.checkbox,e.title,e.details,e.date,e.id,e.priority)}))})),r()},r=()=>{document.querySelectorAll("#delete").forEach((e=>{e.style.display="none"}))},i=()=>({showTaskForm:()=>{const e=document.getElementById("taskForm");e.classList.remove("hide"),e.reset()},hideTaskForm:()=>{document.getElementById("taskForm").classList.add("hide")},showFormProject:()=>{const e=document.getElementById("projectForm");e.classList.remove("hide"),document.getElementById("projectInput").focus(),e.reset()},hideFormProject:()=>{document.getElementById("projectForm").classList.add("hide")}}),m=e=>{document.querySelector(".projects-div").replaceChildren(),console.log(" displayProject is called"),e.forEach((e=>{null!=e&&a(e.projectData,e.projectName)}))},u=e=>{console.log(" displayTask is called"),l(),j[e].taskArray.forEach((e=>{y(e.checkbox,e.title,e.details,e.date,e.id,e.priority)}))},p=e=>{document.querySelector(".title").textContent=e},h=e=>{console.log(`removing  ${e}...`),j.splice(e,1),j.forEach((t=>{t.projectData>e&&(t.projectData-=1)})),k().hideAddTaskButton(),d(),m(j)},k=()=>{const e=document.getElementById("addTask");return{hideAddTaskButton:()=>{e.style.display="none"},showAddTaskBtn:()=>{e.style.display="block"}}},y=(e,t,d,a,c,o)=>{const s=document.querySelector(".tasks"),l=document.createElement("li");l.classList.add("task");const n=document.createElement("div");n.classList.add("checkbox");const r=document.createElement("input");r.id="checkboxID",r.type="checkbox",r.checked=e,n.appendChild(r);const i=document.createElement("div");i.classList.add("list-details");const m=document.createElement("div");m.classList.add("task-title"),m.textContent=""+t,i.appendChild(m);const u=document.createElement("div");u.classList.add("task-details"),u.textContent=d,i.appendChild(u);const p=document.createElement("div");p.classList.add("list-buttons");const h=document.createElement("input");h.type="date",h.value=a,h.readOnly=!0,p.appendChild(h);const k=document.createElement("button");k.id="delete",k.classList.add("fa-solid"),k.classList.add("fa-trash-can"),p.appendChild(k),"low"===o&&l.classList.add("low"),"med"===o&&l.classList.add("med"),"high"===o&&l.classList.add("high"),l.dataset.task=c,l.appendChild(n),l.appendChild(i),l.appendChild(p),s.appendChild(l)},g=()=>j[E()].taskArray.length,E=()=>{const e=document.querySelector(".selected");return console.log(e.dataset.project),e.dataset.project};console.log("test main.js");let j=[];if(localStorage.getItem("projects")){let e=JSON.parse(localStorage.getItem("projects"));console.log(e),j=e,console.log("exist"),m(j),n()}else{console.log("doesn't exist");let e=t("0","default1");j.push(e),a(0,"default1"),m(j)}document.getElementById("addProjectBtn").addEventListener("click",i().showFormProject),document.getElementById("projectCancelBtn").addEventListener("click",i().hideFormProject),document.getElementById("projectSubmitBtn").addEventListener("click",(e=>{e.preventDefault(),console.log(j),(()=>{let e=document.getElementById("projectInput").value,o=c();const s=t(o,e);j.push(s),d(),a(o,e),i().hideFormProject()})()})),document.querySelector(".projects-div").addEventListener("click",(e=>{o(e)})),document.querySelector(".default-projects").addEventListener("click",(e=>{o(e)})),document.getElementById("addTask").addEventListener("click",i().showTaskForm),document.getElementById("taskCancelBtn").addEventListener("click",i().hideTaskForm),document.getElementById("taskSubmitBtn").addEventListener("click",(e=>{(()=>{const e=document.getElementById("taskTitle").value,t=document.getElementById("taskDetails").value,a=document.getElementById("Date").value,c=E(),o=g(),s=document.getElementById("priority").value,l=((e,t,d,a,c,o,s)=>({checkbox:!1,title:e,details:t,date:d,id:a,priority:c,projectID:o,changeCheckStatus:()=>{(void 0).checkbox,(void 0).checkbox}}))(e,t,a,o,s,c);j[c].taskArray.push(l),d(),y(!1,e,t,a,o,s),i().hideTaskForm()})(),console.log(j[E()].taskArray)})),document.querySelector(".tasks").addEventListener("click",(e=>{(e=>{var t,a;"delete"===e.target.id&&(t=E(),a=e.target.parentNode.parentNode.getAttribute("data-task"),j[t].taskArray.splice(a,1),j[t].taskArray.forEach((e=>{e.id>a&&(e.id-=1)})),d(),u(t)),"checkboxID"===e.target.id&&((e,t)=>{j[e].taskArray.forEach((e=>{e.id==t&&(!1===e.checkbox?e.checkbox=!0:e.checkbox=!1)})),u(e)})(E(),e.target.parentNode.parentNode.getAttribute("data-task"))})(e)}))})();