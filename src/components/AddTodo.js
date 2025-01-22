import { Component } from "../common/Component.js";

export class AddTodo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const addElement = document.createElement("div");
        addElement.className = "add-todo";
        addElement.innerHTML = `
      <input type="text" id="todo-input" placeholder="Enter task details...">
      <button id="todo-add-btn">Add To Do</button>
    `;

        addElement.querySelector("#todo-add-btn").addEventListener("click", () => {
            const input = addElement.querySelector("#todo-input");
            if (input.value.trim()) {
                this.props.context.addTodo(input.value.trim());
                input.value = "";
            }
        });

        return addElement;
    }
}
