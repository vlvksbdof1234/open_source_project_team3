import React, {Component} from 'react';
import Code_highlighter from './component/code_highlighter';
export default function mainPage()
{
    
    const sample_code = `<!DOCTYPE html>
    <html lang="en">
        <head>
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/default.min.css">
    <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/highlight.min.js"></script>
    <script>hljs.initHighlightingOnLoad();</script>
    
            <style>
                .container {
                width: 640px;
                }
                .priority-high {
                    background-color: #FBB4AE;
                }
                .priority-medium {
                    background-color: #FFFFCC;
                }
                .priority-low {
                    background-color: #CCEBC5;
                }
            </style>
            <meta charset="utf-8">
            <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
            >
            <title>Bootstrap demo</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
        </head>
        <body>
            <nav class="navbar bg-body-tertiary">
                <div class="container">
                  <span class="navbar-brand mb-0 h1">
                    <i class="bi bi-card-checklist"></i>
                    KW-Task-Manager</span>
                </div>
            </nav>
            <div class="container">
                <div class="d-flex align-items-center mb-2 mt-2">
                    <input type="text" class="form-control" id="task-input" placeholder="Enter a task here">
                    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" value="High" checked>
                        <label class="btn btn-outline-danger" for="btnradio1">High</label>
                      
                        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" value="Medium">
                        <label class="btn btn-outline-warning" for="btnradio2">Medium</label>
                      
                        <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" value="Low">
                        <label class="btn btn-outline-success" for="btnradio3">Low</label>
                      </div>
                    <button type="button" id="add-btn" class="btn btn-primary ms-1 text-nowrap">
                    <i class="bi bi-plus"></i>
                    Add
                    </button>
                </div>
                <div class="d-flex">
                    <div class="flex-grow-1 bg-light rounded-2 p-2 me-1 w-50">
                        <h3>Tasks</h3>
                        <div id="task-list">
                        </div>
                    </div>
                    <div class="flex-grow-1 bg-light rounded-2 p-2 w-50">
                        <h3>Done</h3>
                        <div id="done-list">
                        </div>
                    </div>
                </div>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"crossorigin="anonymous"></script>
            <script>
                
                let priority = "High";
    
                window.addEventListener("load", () => {
                    loadTasks();
                });
                let rd1 = document.querySelector("#btnradio1");
                let rd2 = document.querySelector("#btnradio2");
                let rd3 = document.querySelector("#btnradio3");
                
                rd1.addEventListener("click", () => {
                    priority = rd1.value;
                });
    
                rd2.addEventListener("click", () => {
                    priority = rd2.value;
                });
    
                rd3.addEventListener("click", () => {
                    priority = rd3.value;
                });
    
                let addBtn = document.querySelector("#add-btn");
                
                let tasks = [];
    
                const Type = {
                    Todo: 1,
                    Done: 2,
                }
    
                function loadTasks() {
                    let lastTasks = localStorage.getItem("tasks");
                    if (!lastTasks) return;
                    tasks = JSON.parse(lastTasks);
                    tasks.forEach(addToList);
                }
    
                function addToList(task) {
                    let div = document.createElement("div");
                    let classNameByPrio = "task my-1 p-1 rounded-2 ps-2 d-flex align-itemscenter";
                    if(task.priority == "High") classNameByPrio += " priority-high ";
                    else if(task.priority == "Medium") classNameByPrio += " priority-medium ";
                    else if(task.priority == "Low") classNameByPrio += " priority-low ";
                    div.className = classNameByPrio;
                    
                    let span = document.createElement("span");
                    span.classList.add("me-auto");
                    span.textContent = task.text;
                    div.appendChild(span);
    
                    if (task.type === Type.Todo) {
                        let buttonDone = document.createElement("button");
                        buttonDone.classList.add("btn", "btn-sm", "btn-success", "me-1");
                        buttonDone.innerHTML = '<i class="bi bi-check"></i>';
                        div.appendChild(buttonDone);
                        buttonDone.addEventListener("click", () => {
                            div.remove();
    
                            tasks = tasks.map(t => {
                                return t.text === task.text ? {...t, type:Type.Done}:t
                            });
                            div.childNodes[1].remove();
                            document.querySelector("#done-list").appendChild(div);
                            saveTasks();
                        });
    
                    }
    
                    let buttonRemove = document.createElement("button");
                    buttonRemove.classList.add("btn", "btn-sm", "btn-danger");
                    let iElem = document.createElement("i");
                    iElem.classList.add("bi", "bi-x");
                    buttonRemove.appendChild(iElem);
                    div.appendChild(buttonRemove);
                    
                    buttonRemove.addEventListener("click", () => {
                        div.remove();
                        tasks = tasks.filter(t => t !== task);
                        saveTasks();
                    });
    
                    let list = document.querySelector(task.type === Type.Todo ? "#task-list" :
                    "#done-list");
                    list.appendChild(div);
                }
                
                function saveTasks()
                {
                    localStorage.setItem("tasks",JSON.stringify(tasks));
                }
                addBtn.addEventListener("click", ()=>{
                    let input = document.querySelector("#task-input");
                    let text = input.value;
    
                    if(!text.length) return;
    
                    let task = {
                        text: text,
                        type: Type.Todo,
                        priority : priority,
                    }
    
                    tasks.push(task);
                    saveTasks();
                    addToList(task);
                    
                    input.value = "";
                });
    
            </script>
        </body>
    </html>`;
    const lang = "html";
    return (
        <Code_highlighter lang={lang} code={sample_code}></Code_highlighter>
    );

};