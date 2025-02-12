//document.addEventListener("DOMContentLoaded", () => {
  //Deliverables:
//User should be able to type a task into the input field.
//User should be able to click some form of a submit button.
//User should be able to see the task string that is provided in the DOM after the submit button has been activated.

console.log("hello");
document.querySelector('#create-task-form').addEventListener('submit', (e) => {
    console.log(e.target['new-task-description'].value); //gets the value of the input
    e.preventDefault();
    const li = document.createElement('li');
    document.querySelector('#tasks').appendChild(li);
    li.textContent = e.target['new-task-description'].value
})
});
