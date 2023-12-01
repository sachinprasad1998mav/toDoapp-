document
  .getElementById("todoForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the task input value
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value;

    if (taskText.trim() !== "") {
      // Create a new list item
      const listItem = document.createElement("li");
      listItem.className =
        "list-group-item d-flex justify-content-between align-items-center";
      listItem.innerHTML = `
            ${taskText}
            <span class="badge badge-danger badge-pill delete">Delete</span>
        `;

      // Add the list item to the task list
      document.getElementById("taskList").appendChild(listItem);

      // Clear the input field
      taskInput.value = "";
    }
  });

// Event delegation for task deletion
document.getElementById("taskList").addEventListener("click", function (event) {
  if (event.target.classList.contains("delete")) {
    // Remove the task item
    event.target.parentElement.remove();
  }
});
