import { Component } from "../common/Component.js";
import { TodoItem } from "./TodoItem.js";

export class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = [];
    }

    updateState(newTodos) {
        this.state = newTodos;
        this.render();
    }

    render() {
        const todoListElement = document.createElement("ul");
        todoListElement.className = "todo-list";

        this.state.forEach((todo) => {
            const todoItem = new TodoItem({ ...todo, context: this.props.context }).render();
            todoListElement.appendChild(todoItem);
        });

        if (this.element) {
            this.element.replaceWith(todoListElement);
        }
        this.element = todoListElement;

        return this.element;
    }
}
