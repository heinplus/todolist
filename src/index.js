document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");

  // Function to add a new task
  function addTask(taskText) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        <div class="flex justify-between">
        <span>${taskText}</span>
        <div>
        <button class="deleteTaskBtn">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
        </svg>
        </button>
        <button class="completeTaskBtn">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
        </button>
        </div>
        </div>
    `;
    taskList.appendChild(listItem);

    // Add event listeners for the delete and complete buttons
    const deleteTaskBtn = listItem.querySelector(".deleteTaskBtn");
    deleteTaskBtn.addEventListener("click", function () {
      listItem.remove();
    });

    const completeTaskBtn = listItem.querySelector(".completeTaskBtn");
    completeTaskBtn.addEventListener("click", function () {
      // Toggle the "completed" class on the <span> element
      listItem.querySelector("span").classList.toggle("completed-text");
    });

    taskInput.value = "";
  }

  // Event listener for adding a task
  addTaskBtn.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (taskText) {
      addTask(taskText);
    }
  });

  // You can also add the ability to press Enter to add a task
  taskInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      const taskText = taskInput.value.trim();
      if (taskText) {
        addTask(taskText);
      }
    }
  });
});
