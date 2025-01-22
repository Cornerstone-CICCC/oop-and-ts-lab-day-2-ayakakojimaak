import { Component } from "../common/Component.js";
import { AddTodo } from "./AddTodo.js";
import { TodoList } from "./TodoList.js";
import { TodoContext } from "../contexts/TodoContext.js";

export class App extends Component {
    render() {
        const container = document.createElement("div");
        container.className = "container";
        container.innerHTML = `
      <h1>My To Dos</h1>
      <div id="wrapper-add"></div>
      <div id="wrapper-todos"></div>
    `;

        const todoContext = new TodoContext();

        const addTodo = new AddTodo({ context: todoContext });
        const todoList = new TodoList({ context: todoContext });

        todoContext.subscribe((todos) => {
            todoList.updateState(todos);
        });

        container.querySelector("#wrapper-add").appendChild(addTodo.render());
        container.querySelector("#wrapper-todos").appendChild(todoList.render());

        return container;
    }
}
