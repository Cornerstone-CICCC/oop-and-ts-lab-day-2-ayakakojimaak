import { Component } from "../common/Component.js";

export class TodoItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { id, task, completed, context } = this.props;

        const todoElement = document.createElement("li");
        todoElement.className = "todo-item";
        todoElement.innerHTML = `
      <span class="${completed ? "completed" : ""}">${task}</span>
      <div>
      <button class="complete-btn">${completed ? "Mark Incomplete" : "Mark complete"}</button>
      <button class="delete-btn">Delete</button>
      </div>
    `;

        todoElement.querySelector(".complete-btn").addEventListener("click", () => {
            context.toggleTodo(id);
        });

        todoElement.querySelector(".delete-btn").addEventListener("click", () => {
            context.deleteTodo(id);
        });

        return todoElement;
    }
}
