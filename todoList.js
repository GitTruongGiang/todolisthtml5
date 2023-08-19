
const taskLists = document.querySelector(".task-list")
const filterOption = document.querySelector("#filter")
const form = document.querySelector(".form")
const newItem = document.querySelector("#newitem")

function markDone (taskList) {
    taskList.classList.toggle("done")
}

function markRemove (taskList) {
    taskList.classList.add("fall")
    taskList.addEventListener("transitionend", () => taskList.remove())
}

function filter (hidenCompleteTasks) {
    taskLists.querySelectorAll("li").forEach((taskList) => {
        if (taskList.classList.contains("done")) {
            taskList.style.display = hidenCompleteTasks ? "none" : "flex" ;
        }
    })
}
 
taskLists.addEventListener("click", (e) => {
    const element = e.target ;
    if (element.classList[1] === "btn-action-done") {
        markDone(element.parentNode.parentNode)
    } else if (element.classList[1] === "btn-action-delete") {
        markRemove(element.parentNode)
    }
})

filterOption.addEventListener("click", (e) => {
    const element = e.target.checked
    filter(element)
})

function addItem (newitem) {
    const taskLi = document.createElement("li")

    const taskDiv = document.createElement("div")
    taskDiv.className = "action"

    const taskInput = document.createElement("input")
    taskInput.className = "btn btn-action-done"
    taskInput.type = "checkbox"

    const taskSpan = document.createElement("span")
    taskSpan.className = "label"
    taskSpan.textContent = newitem

    const taskButton = document.createElement("button")
    taskButton.className = "btn btn-action-delete"
    taskButton.textContent = "Delete"

    taskLists.appendChild(taskLi)
    taskLi.appendChild(taskDiv)
    taskDiv.appendChild(taskInput)
    taskDiv.appendChild(taskSpan)
    taskLi.appendChild(taskButton)
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const tasklabel = newItem.value.trim()
    if (tasklabel) {
        addItem(tasklabel)
        newItem.value = "";
    }
})

